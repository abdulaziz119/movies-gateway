import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  FrontendAdvertisingFindAllResDto,
  FrontendAdvertisingFindOneResDto,
} from './dto/advertising.dto';

@Injectable()
export class FrontendAdvertisingService {
  private base_url = MOVIES_URL + '/api/dashboard/advertising';

  constructor(private axiosService: AxiosService) {}

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<FrontendAdvertisingFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<FrontendAdvertisingFindAllResDto>(
      url,
      payload,
      headers,
    );
  }
}
