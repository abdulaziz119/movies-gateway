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
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import {
  FrontendMovieFindAllResDto,
  FrontendMovieFindOneResDto,
  FrontendMovieGenreGetAllResDto,
  FrontendMovieGetFilterBodyDto,
} from './dto/movie.dto';
import { FrontendMovieService } from './movie.service';

@ApiBearerAuth()
@ApiTags('Frontend Movie')
@Controller({ path: '/frontend/movie', version: '2' })
export class FrontendMovieController {
  constructor(private readonly movieService: FrontendMovieService) {}

  @ApiResponse({ status: 200, type: FrontendMovieFindAllResDto })
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
  findAll(@Headers() headers, @Body() payload: PaginateParamsDto) {
    return this.movieService.findAll(payload, headers);
  }

  @ApiResponse({ status: 200, type: FrontendMovieFindOneResDto })
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
    return this.movieService.findOne(payload, headers);
  }

  @ApiResponse({ status: 200, type: FrontendMovieFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/getFilter')
  getFilter(@Body() payload: FrontendMovieGetFilterBodyDto) {
    return this.movieService.getFilter(payload);
  }

  @ApiResponse({ status: 200, type: FrontendMovieGenreGetAllResDto })
  @HttpCode(200)
  @Post('/genreGetAll')
  genreGetAll() {
    return this.movieService.genreGetAll();
  }
}
