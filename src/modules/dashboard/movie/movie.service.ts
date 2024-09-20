import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import {
  MovieCreateBodyDto,
  MovieFindAllResDto,
  MovieFindOneResDto,
  MovieGenreGetAllResDto,
} from './dto/movie.dto';

@Injectable()
export class MovieService {
  private base_url = MOVIES_URL + '/api/dashboard/movies';

  constructor(private axiosService: AxiosService) {}

  create(payload) {
    const url = `${this.base_url}`;
    return this.axiosService.sendRequest<MovieCreateBodyDto>(url, payload);
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<MovieFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<MovieFindAllResDto>(
      url,
      payload,
      headers,
    );
  }

  findQuery(payload) {
    const url = `${this.base_url}/query`;
    return this.axiosService.sendGetRequest<MovieFindAllResDto>(url, payload);
  }

  delete(payload) {
    const url = `${this.base_url}/delete/${payload.id}`;
    return this.axiosService.sendDeleteRequest<ParamIdNumberDto>(url);
  }

  genreGetAll() {
    const url = `${this.base_url}/genre-get-all`;
    return this.axiosService.sendGetRequest<MovieGenreGetAllResDto>(url);
  }
}
