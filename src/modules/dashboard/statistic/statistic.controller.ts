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
import { StatisticService } from './statistic.service';
import {
  StatisticFindAllResDto,
  StatisticFindOneResDto,
} from './dto/statistic.dto';

@ApiBearerAuth()
@ApiTags('Statistic')
@Controller({ path: '/dashboard/statistics', version: '2' })
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @ApiResponse({ status: 200, type: StatisticFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,

    type: ErrorResourceDto,
  })
  @Post('/findOne')
  findOne(@Headers() headers, @User() user, @Body() payload: ParamIdNumberDto) {
    if (user.statistics.getOne === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.statisticService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: StatisticFindAllResDto })
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
    if (user.statistics.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.statisticService.findAll(payload, headers);
  }

  @ApiResponse({ status: 204, description: 'no content response' })
  @HttpCode(204)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/remove')
  delete(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.statistics.delete === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.statisticService.delete(payload);
  }
}
