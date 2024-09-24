import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  FrontendMovieFindAllResDto,
  FrontendMovieFindOneResDto,
  FrontendMovieGenreGetAllResDto,
} from './dto/movie.dto';

@Injectable()
export class FrontendMovieService {
  private base_url = MOVIES_URL + '/api/frontend/movies';

  constructor(private axiosService: AxiosService) {}

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<FrontendMovieFindAllResDto>(
      url,
      payload,
      headers,
    );
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<FrontendMovieFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  getFilter(payload) {
    const url = `${this.base_url}/get-filter`;
    return this.axiosService.sendGetRequest<FrontendMovieFindAllResDto>(
      url,
      payload,
    );
  }

  genreGetAll() {
    const url = `${this.base_url}/genre-get-all`;
    return this.axiosService.sendGetRequest<FrontendMovieGenreGetAllResDto>(
      url,
    );
  }
}
