import { Body, Controller, Headers, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import {
  BotSerieFindAllResDto,
  BotSerieFindOneResDto,
  BotSerieMovieIdBodyDto,
  BotSerieMovieIdResDto,
} from './dto/serie.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import { BotSerieService } from './serie.service';

@ApiBearerAuth()
@ApiTags('Bot Serie')
@Controller({ path: '/bot/serie', version: '2' })
export class BotSerieController {
  constructor(private readonly serieService: BotSerieService) {}

  @ApiResponse({ status: 201, type: BotSerieFindAllResDto })
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
  findAll(@Body() payload: PaginateParamsDto, @Headers() headers) {
    return this.serieService.findAll(payload, headers);
  }

  @ApiResponse({ status: 200, type: BotSerieFindOneResDto })
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
  findOne(@Headers() headers, @Body() payload: ParamIdNumberDto) {
    return this.serieService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: BotSerieMovieIdResDto })
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
  @Post('/movieId')
  movieId(@Body() payload: BotSerieMovieIdBodyDto, @Headers() headers) {
    return this.serieService.movieId(payload, headers);
  }
}
