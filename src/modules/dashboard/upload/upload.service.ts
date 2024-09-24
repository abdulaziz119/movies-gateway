import { Injectable } from '@nestjs/common';
import { MOVIES_URL } from '@env';
import { AxiosService } from '../../../services/axios.service';
import {
  UploadDashboardFindOneResDto,
  UploadsDashboardFindAllResultDto,
} from './dto/upload.dto';

@Injectable()
export class UploadsDashboardService {
  private url = MOVIES_URL + '/api/dashboard/upload';
  private getUrl = MOVIES_URL;

  constructor(private axiosService: AxiosService) {}

  uploadFile(data, headers) {
    const url = `${this.url}/image`;
    return this.axiosService.uploadFileRequest(url, data, headers);
  }

  findAll(payload) {
    const url = `${this.url}/findAll`;
    return this.axiosService.sendRequest<UploadsDashboardFindAllResultDto>(
      url,
      payload,
    );
  }

  findOne(payload) {
    const url = `${this.url}/findOne`;
    return this.axiosService.sendRequest<UploadDashboardFindOneResDto>(
      url,
      payload,
    );
  }

  async getGreeting(
    payload: { type: string },
    headers: Record<string, string>,
  ) {
    const url = `${this.getUrl}/image/${payload.type}`;
    return this.axiosService.sendGetTokenRequest<any>(url, headers, {
      responseType: 'arraybuffer',
    });
  }
}
