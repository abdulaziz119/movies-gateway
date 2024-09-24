import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import * as FormData from 'form-data';
import { FileInterceptor } from '@nestjs/platform-express';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { UploadsDashboardService } from './upload.service';
import {
  UploadDashboardCreateResDto,
  UploadDashboardFindAllResDto,
  UploadDashboardFindOneResDto,
} from './dto/upload.dto';
import { User } from '../../auth/decorators/user.decorator';

@ApiBearerAuth()
@ApiTags('Dashboard uploads')
@Controller('/dashboard/uploads')
export class UploadsDashboardController {
  constructor(
    private readonly uploadsDashboardService: UploadsDashboardService,
  ) {}

  @ApiOkResponse({ type: UploadDashboardCreateResDto })
  @ApiBadRequestResponse({ type: ErrorResourceDto })
  @HttpCode(201)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    required: true,
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('/create')
  @UseInterceptors(FileInterceptor('file'))
  create(
    @User() user,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|svg|webp)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const formData = new FormData();

    formData.append('file', file.buffer, { filename: file.originalname });
    const headers = {
      ...formData.getHeaders(),
      'Content-Length': formData.getLengthSync(),
    };
    if (user.statistics.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.uploadsDashboardService.uploadFile(formData, headers);
  }

  @ApiOperation({
    description: 'endpointUrl: POST /dashboard/uploads/findAll',
  })
  @ApiOkResponse({ type: UploadDashboardFindAllResDto })
  @ApiBadRequestResponse({ type: ErrorResourceDto })
  @Post('/findAll')
  @HttpCode(200)
  findAll(@Body() payload: PaginateParamsDto, @User() user) {
    if (user.statistics.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.uploadsDashboardService.findAll(payload);
  }

  @ApiOperation({
    description: 'endpointUrl: POST /dashboard/uploads/findOne',
  })
  @ApiOkResponse({ type: UploadDashboardFindOneResDto })
  @ApiBadRequestResponse({ type: ErrorResourceDto })
  @Post('/findOne')
  @HttpCode(200)
  findOne(@Body() payload: ParamIdNumberDto, @User() user) {
    if (user.statistics.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.uploadsDashboardService.findOne(payload);
  }

  @ApiOperation({
    summary: 'Get greeting image from external API',
    description: 'Retrieves a greeting image based on the specified type',
  })
  @ApiOkResponse({
    description: 'Image retrieved successfully',
    content: {
      'image/*': {
        schema: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({
    name: 'type',
    required: true,
    description: 'Type of greeting image',
  })
  @Get('/getGreeting/:type')
  @HttpCode(200)
  async getGreeting(
    @Param('type') type: string,
    @Headers() headers: Record<string, string>,
    @Res() res: Response,
  ) {
    try {
      const result = await this.uploadsDashboardService.getGreeting(
        { type },
        headers,
      );
      return res.send(result.data);
    } catch (error) {
      if (error.response) {
        throw new HttpException(error.response.data, error.response.status);
      }
      throw new HttpException(
        'An error occurred while fetching the image',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @ApiOperation({
  //   description: 'endpointUrl: POST /dashboard/uploads/getGreeting',
  // })
  // @ApiOkResponse({ type: UploadDashboardFindOneResDto })
  // @ApiBadRequestResponse({ type: ErrorResourceDto })
  // @ApiParam({ name: 'type', required: true })
  // @Get('/getGreeting/:type')
  // @HttpCode(200)
  // getGreeting(
  //   @Param() payload: UploadsDashboardGetGreetingResultDto,
  //   @User() user: any,
  // ) {
  //   if (user.statistics.getAll === false) {
  //     throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  //   }
  //   return this.uploadsDashboardService.getGreeting(payload);
  // }
}
