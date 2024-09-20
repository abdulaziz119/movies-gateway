import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import {
  SenseFindOneResDto,
  SerieCreateResDto,
  SerieFindAllResDto,
} from './dto/serie.dto';

@Injectable()
export class SerieService {
  private base_url = MOVIES_URL + '/api/dashboard/series';

  constructor(private axiosService: AxiosService) {}

  create(payload) {
    const url = `${this.base_url}/create`;
    return this.axiosService.sendRequest<SerieCreateResDto>(url, payload);
  }

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<SenseFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<SerieFindAllResDto>( 
      url,
      payload,
      headers,
    );
  }

  delete(payload) {
    const url = `${this.base_url}/delete/${payload.id}`;
    return this.axiosService.sendDeleteRequest<ParamIdNumberDto>(url);
  }

  update(payload) {
    const url = `${this.base_url}/update/${payload.id}`;
    return this.axiosService.sendPutRequest<SerieFindAllResDto>(url, payload);
  }
}
