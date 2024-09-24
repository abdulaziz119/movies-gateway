import { Body, Controller, Headers, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import {
  FrontendAdvertisingFindAllResDto,
  FrontendAdvertisingFindOneResDto,
} from './dto/advertising.dto';
import { FrontendAdvertisingService } from './advertising.service';

@ApiBearerAuth()
@ApiTags('Frontend Advertising')
@Controller({ path: '/frontend/advertising', version: '2' })
export class FrontendAdvertisingController {
  constructor(
    private readonly advertisingService: FrontendAdvertisingService,
  ) {}

  @ApiResponse({ status: 200, type: FrontendAdvertisingFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,

    type: ErrorResourceDto,
  })
  @Post('/findOne')
  findOne(@Headers() headers, @Body() payload: ParamIdNumberDto) {
    return this.advertisingService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: FrontendAdvertisingFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findAll')
  findAll(@Headers() headers, @Body() payload: PaginateParamsDto) {
    return this.advertisingService.findAll(payload, headers);
  }
}
