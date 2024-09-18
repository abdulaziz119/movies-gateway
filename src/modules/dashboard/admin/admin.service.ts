import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import {
  AdminFindAllResDto,
  AdminFindOneResDto,
  AdminLoginResDto,
  AdminRegisterResDto,
} from './dto/admin.dto';

@Injectable()
export class AdminService {
  private base_url = MOVIES_URL + '/api/dashboard/admin';

  constructor(private axiosService: AxiosService) {}

  register(payload) {
    const url = `${this.base_url}/register`;
    return this.axiosService.sendRequest<AdminRegisterResDto>(url, payload);
  }

  login(payload) {
    const url = `${this.base_url}/login`;
    return this.axiosService.sendRequest<AdminLoginResDto>(url, payload);
  }

  findOne(payload) {
    const url = `${this.base_url}/${payload.id}`;
    return this.axiosService.sendGetRequest<AdminFindOneResDto>(url, payload);
  }

  findAll(payload) {
    const url = `${this.base_url}`;
    return this.axiosService.sendGetRequest<AdminFindAllResDto>(url, payload);
  }

  delete(payload) {
    const url = `${this.base_url}/${payload.id}`;
    return this.axiosService.sendDeleteRequest<AdminFindAllResDto>(url);
  }
}
