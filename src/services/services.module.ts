import {Module} from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import {AxiosService} from './axios.service';

const services = [AxiosService];

@Module({
  imports: [HttpModule],
  exports: services,
  providers: services,
})
export class ServicesModule {
}
