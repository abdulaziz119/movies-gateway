import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Headers,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { User } from '../../auth/decorators/user.decorator';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import { SerieService } from './serie.service';
import {
  SenseFindOneResDto,
  SerieCreateBodyDto,
  SerieCreateResDto,
  SerieFindAllResDto, SerieUpdateBodyDto,
} from './dto/serie.dto';

@ApiBearerAuth()
@ApiTags('Serie')
@Controller({ path: '/serie', version: '2' })
export class SerieController {
  constructor(private readonly roleService: SerieService) {}

  @ApiResponse({ status: 201, type: SerieCreateResDto })
  @HttpCode(201)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/create')
  create(@User() user, @Body() payload: SerieCreateBodyDto) {
    console.log(user.series);
    if (user.series.create === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.create(payload);
  }

  @ApiResponse({ status: 200, type: SenseFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'Language application',
    example: 'uz',
  })
  @Post('/findOne')
  findOne(@Headers() headers, @User() user, @Body() payload: ParamIdNumberDto) {
    if (user.series.getOne === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: SerieFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @ApiHeader({
    name: 'Accept-Language',
    description: 'Language application',
    example: 'uz',
  })
  @Post('/findAll')
  findAll(
    @Headers() headers,
    @User() user,
    @Body() payload: PaginateParamsDto,
  ) {
    if (user.series.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.findAll(payload, headers);
  }

  @ApiResponse({ status: 204, description: 'no content response' })
  @HttpCode(204)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/remove')
  delete(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.series.delete === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.delete(payload);
  }

  @ApiResponse({ status: 200, type: SenseFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/update')
  update(@User() user, @Body() payload: SerieUpdateBodyDto) {;
    if (user.series.update === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.update(payload);
  }
}
