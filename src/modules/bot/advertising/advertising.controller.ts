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
  BotAdvertisingFindAllResDto,
  BotAdvertisingFindOneResDto,
} from './dto/advertising.dto';
import { BotAdvertisingService } from './advertising.service';

@ApiBearerAuth()
@ApiTags('Bot Advertising')
@Controller({ path: '/bot/advertising', version: '2' })
export class BotAdvertisingController {
  constructor(private readonly advertisingService: BotAdvertisingService) {}

  @ApiResponse({ status: 200, type: BotAdvertisingFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,

    type: ErrorResourceDto,
  })
  @Post('/findOne')
  findOne(@Headers() headers, @Body() payload: ParamIdNumberDto) {
    return this.advertisingService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: BotAdvertisingFindAllResDto })
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
