import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  BotMovieFindAllResDto,
  BotMovieFindOneResDto,
  BotMovieGenreGetAllResDto,
} from './dto/movie.dto';

@Injectable()
export class BotMovieService {
  private base_url = MOVIES_URL + '/api/bot/movies';

  constructor(private axiosService: AxiosService) {}

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<BotMovieFindAllResDto>(
      url,
      payload,
      headers,
    );
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<BotMovieFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  getFilter(payload) {
    const url = `${this.base_url}/get-filter`;
    return this.axiosService.sendGetRequest<BotMovieFindAllResDto>(
      url,
      payload,
    );
  }

  genreGetAll() {
    const url = `${this.base_url}/genre-get-all`;
    return this.axiosService.sendGetRequest<BotMovieGenreGetAllResDto>(url);
  }
}
