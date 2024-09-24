import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { User } from '../../auth/decorators/user.decorator';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import { AdvertisingService } from './advertising.service';
import {
  AdvertisingCreateBodyDto,
  AdvertisingCreateResDto,
  AdvertisingFindOneResDto,
} from './dto/advertising.dto';

@ApiBearerAuth()
@ApiTags('Advertising')
@Controller({ path: '/dashboard/advertising', version: '2' })
export class AdvertisingController {
  constructor(private readonly advertisingService: AdvertisingService) {}

  @ApiResponse({ status: 201, type: AdvertisingCreateResDto })
  @HttpCode(201)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/create')
  create(@User() user, @Body() payload: AdvertisingCreateBodyDto) {
    if (user.advertising.create === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.advertisingService.create(payload);
  }

  @ApiResponse({ status: 200, type: AdvertisingFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,

    type: ErrorResourceDto,
  })
  @Post('/findOne')
  findOne(@Headers() headers, @User() user, @Body() payload: ParamIdNumberDto) {
    if (user.advertising.getOne === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.advertisingService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: AdvertisingFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findAll')
  findAll(
    @Headers() headers,
    @User() user,
    @Body() payload: PaginateParamsDto,
  ) {
    if (user.advertising.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.advertisingService.findAll(payload, headers);
  }

  @ApiResponse({ status: 204, description: 'no content response' })
  @HttpCode(204)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/remove')
  delete(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.advertising.delete === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.advertisingService.delete(payload);
  }
}
