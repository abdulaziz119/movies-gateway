import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  BotAdvertisingFindAllResDto,
  BotAdvertisingFindOneResDto,
} from './dto/advertising.dto';

@Injectable()
export class BotAdvertisingService {
  private base_url = MOVIES_URL + '/api/bot/advertising';

  constructor(private axiosService: AxiosService) {}

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<BotAdvertisingFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<BotAdvertisingFindAllResDto>(
      url,
      payload,
      headers,
    );
  }
}
