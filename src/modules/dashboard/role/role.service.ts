import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  RoleCreateResDto,
  RoleFindAllResDto,
  RoleFindOneResDto,
} from './dto/role.dto';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';

@Injectable()
export class RoleService {
  private base_url = MOVIES_URL + '/api/dashboard/role';

  constructor(private axiosService: AxiosService) {}

  create(payload) {
    const url = `${this.base_url}`;
    return this.axiosService.sendRequest<RoleCreateResDto>(url, payload);
  }

  findOne(payload) {
    const url = `${this.base_url}/${payload.id}`;
    return this.axiosService.sendGetRequest<RoleFindOneResDto>(url, payload);
  }

  findAll(payload) {
    const url = `${this.base_url}`;
    return this.axiosService.sendGetRequest<RoleFindAllResDto>(url, payload);
  }

  delete(payload) {
    const url = `${this.base_url}/${payload.id}`;
    return this.axiosService.sendDeleteRequest<ParamIdNumberDto>(url);
  }
}
