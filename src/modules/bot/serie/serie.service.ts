import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  BotSerieFindAllResDto,
  BotSerieFindOneResDto,
  BotSerieMovieIdResDto,
} from './dto/serie.dto';

@Injectable()
export class BotSerieService {
  private base_url = MOVIES_URL + '/api/frontend/series';

  constructor(private axiosService: AxiosService) {}

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<BotSerieFindAllResDto>(
      url,
      payload,
      headers,
    );
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<BotSerieFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  movieId(payload, headers) {
    const url = `${this.base_url}/movies`;
    return this.axiosService.sendWithAuthRequest<BotSerieMovieIdResDto>(
      url,
      payload,
      headers,
    );
  }
}
