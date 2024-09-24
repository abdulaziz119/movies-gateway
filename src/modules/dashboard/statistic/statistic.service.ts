import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import {
  StatisticFindAllResDto,
  StatisticFindOneResDto,
} from './dto/statistic.dto';

@Injectable()
export class StatisticService {
  private base_url = MOVIES_URL + '/api/dashboard/statistic';

  constructor(private axiosService: AxiosService) {}

  findOne(payload, headers) {
    const url = `${this.base_url}/findOne/${payload.id}`;
    return this.axiosService.sendGetAuthRequest<StatisticFindOneResDto>(
      url,
      payload,
      headers,
    );
  }

  findAll(payload, headers) {
    const url = `${this.base_url}/findAll`;
    return this.axiosService.sendGetAuthRequest<StatisticFindAllResDto>(
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
