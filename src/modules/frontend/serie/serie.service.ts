import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  FrontendSerieFindAllResDto,
  FrontendSerieFindOneResDto,
  FrontendSerieMovieIdResDto,
} from './dto/serie.dto';

@Injectable()
export class FrontendSerieService {
  private base_url = MOVIES_URL + '/api/frontend/series';

  constructor(private axiosService: AxiosService) {}

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<FrontendSerieFindAllResDto>(
      url,
      payload,
      headers,
    );
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<FrontendSerieFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  movieId(payload, headers) {
    const url = `${this.base_url}/movies`;
    return this.axiosService.sendWithAuthRequest<FrontendSerieMovieIdResDto>(
      url,
      payload,
      headers,
    );
  }
}
