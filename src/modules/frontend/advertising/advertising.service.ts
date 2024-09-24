import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import {
  AdvertisingCreateResDto,
  AdvertisingFindOneResDto,
} from './dto/advertising.dto';

@Injectable()
export class AdvertisingService {
  private base_url = MOVIES_URL + '/api/dashboard/advertising';

  constructor(private axiosService: AxiosService) {}

  create(payload) {
    const url = `${this.base_url}/create`;
    return this.axiosService.sendRequest<AdvertisingCreateResDto>(url, payload);
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<AdvertisingFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<AdvertisingFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  delete(payload) {
    const url = `${this.base_url}/delete/${payload.id}`;
    return this.axiosService.sendDeleteRequest<ParamIdNumberDto>(url);
  }
}
