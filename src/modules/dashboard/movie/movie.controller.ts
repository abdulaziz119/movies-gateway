import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Headers
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth, ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { User } from '../../auth/decorators/user.decorator';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import { MovieService } from './movie.service';
import {
  MovieCreateBodyDto,
  MovieCreateResDto,
  MovieFindAllResDto,
  MovieFindOneResDto,
  MovieFindQueryBodyDto, MovieGenreGetAllResDto,
} from './dto/movie.dto';

@ApiBearerAuth()
@ApiTags('Movie')
@Controller({ path: '/movie', version: '2' })
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiResponse({ status: 201, type: MovieCreateResDto })
  @HttpCode(201)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/create')
  create(@User() user, @Body() payload: MovieCreateBodyDto) {
    if (user.movies.create === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.movieService.create(payload);
  }

  @ApiResponse({ status: 200, type: MovieFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @ApiHeader({
    name: "Accept-Language",
    description: "Language application",
    example: "uz",
  })
  @Post('/findOne')
  findOne(@Headers() headers,@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.movies.getOne === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.movieService.findOne(payload,headers);
  }

  @ApiResponse({ status: 200, type: MovieFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @ApiHeader({
    name: "Accept-Language",
    description: "Language application",
    example: "uz",
  })
  @Post('/findAll')
  findAll(@Headers() headers,@User() user, @Body() payload: PaginateParamsDto) {
    if (user.movies.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.movieService.findAll(payload,headers);
  }

  @ApiResponse({ status: 204, description: 'no content response' })
  @HttpCode(204)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/remove')
  delete(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.moviess.delete === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.movieService.delete(payload);
  }

  @ApiResponse({ status: 200, type: MovieFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findQuery')
  findQuery(@User() user, @Body() payload: MovieFindQueryBodyDto) {
    if (user.movies.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.movieService.findQuery(payload);
  }

  @ApiResponse({ status: 200, type: MovieGenreGetAllResDto })
  @HttpCode(200)
  @Post('/genreGetAll')
  genreGetAll(@User() user) {
    if (user.movies.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.movieService.genreGetAll();
  }

}
