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
  FrontendSerieFindAllResDto,
  FrontendSerieFindOneResDto,
  FrontendSerieMovieIdBodyDto,
  FrontendSerieMovieIdResDto,
} from './dto/serie.dto';
import { FrontendSerieService } from './serie.service';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';

@ApiBearerAuth()
@ApiTags('Frontend Serie')
@Controller({ path: '/frontend/serie', version: '2' })
export class FrontendSerieController {
  constructor(private readonly serieService: FrontendSerieService) {}

  @ApiResponse({ status: 201, type: FrontendSerieFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findAll')
  findAll(@Body() payload: PaginateParamsDto, @Headers() headers) {
    return this.serieService.findAll(payload, headers);
  }

  @ApiResponse({ status: 200, type: FrontendSerieFindOneResDto })
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

  @ApiResponse({ status: 200, type: FrontendSerieMovieIdResDto })
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
  movieId(@Body() payload: FrontendSerieMovieIdBodyDto, @Headers() headers) {
    return this.serieService.movieId(payload, headers);
  }
}
