import { Injectable } from '@nestjs/common';
import { AxiosService } from '../../../services/axios.service';
import { MOVIES_URL } from '@env';
import { AdminRegisterResDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  private base_url = MOVIES_URL + '/api/dashboard/admin';

  constructor(private axiosService: AxiosService) {}

  register(payload) {
    const url = `${this.base_url}/register`;
    return this.axiosService.sendRequest<AdminRegisterResDto>(url, payload);
  }

  // winnings(payload, headers) {
  //   const url = `${this.base_url}/winnings`;
  //   return this.axiosService.sendGetAuthRequest<LevelWinningsResDto>(
  //     url,
  //     payload,
  //     headers
  //   );
  // }
  //
  // getPrize(type, payload, headers) {
  //   const url = `${this.base_url}/level/get-prize`;
  //   const {user_id, level_id} = payload
  //   const newData = {
  //     user_id: user_id,
  //     level_id: level_id,
  //     service: type,
  //   };
  //   return this.axiosService.sendWithAuthRequest<LevelPrizeListResDto>(
  //     url,
  //     newData,
  //     headers
  //   );
  // }
  //
  // getAllPrize(payload, headers) {
  //   const url = `${this.base_url}/prize`;
  //   return this.axiosService.sendGetAuthRequest<LevelPrizeListResDto>(
  //     url,
  //     payload,
  //     headers
  //   );
  // }
}
