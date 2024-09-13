import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class AxiosService {
  constructor(private readonly httpService: HttpService) {}

  public async sendRequest<Response>(url, params): Promise<Response> {
    const config = {
      headers: {
        // Authorization: headers['authorization'],
        // 'Accept-Language': headers['accept-language'],
        Accept: 'application/json',
      },
    };

    const { data } = await firstValueFrom(
      this.httpService.post<Response>(url, params, config).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendBonusRequest<Response>(
    url,
    params,
    token,
  ): Promise<Response> {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Accept-Language': headers['accept-language'],
        Accept: 'application/json',
      },
    };

    const { data } = await firstValueFrom(
      this.httpService.post<Response>(url, params, config).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendPutRequest<Response>(url, params): Promise<Response> {
    const { data } = await firstValueFrom(
      this.httpService.put<Response>(url, params).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendDeleteRequest<Response>(url): Promise<Response> {
    const { data } = await firstValueFrom(
      this.httpService.delete<Response>(url).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendGetRequest<Response>(url, params = null): Promise<Response> {
    if (params) {
      params = { params: params };
    } else {
      params = {};
    }
    const { data } = await firstValueFrom(
      this.httpService.get<Response>(url, params).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendGetAuthRequest<Response>(
    url,
    params,
    headers,
  ): Promise<Response> {
    const config = {
      headers: {
        'User-Type': headers['guest'],
        'Accept-Language': headers['accept-language'],
        'Mobile-Type': headers['mobile-type'],
      },
      params,
    };

    const { data } = await firstValueFrom(
      this.httpService.get<Response>(url, config).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendWithAuthRequest<Response>(
    url,
    params,
    headers,
  ): Promise<Response> {
    const config = {
      headers: {
        'User-Type': headers['guest'],
        // Authorization: headers['authorization'],
        'Accept-Language': headers['accept-language'],
      },
    };

    const { data } = await firstValueFrom(
      this.httpService.post<Response>(url, params, config).pipe(
        catchError((error: AxiosError) => {
          console.log(error.response);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendGetTokenRequest<Response>(
    url,
    params,
    headers,
  ): Promise<Response> {
    const config = {
      headers: {
        'User-Type': headers['guest'],
        'Accept-Language': headers['accept-language'],
        Authorization: headers['authorization'],
      },
      params,
    };

    const { data } = await firstValueFrom(
      this.httpService.get<Response>(url, config).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async sendPostTokenRequest<Response>(
    url,
    params,
    headers,
  ): Promise<Response> {
    const config = {
      headers: {
        'User-Type': headers['guest'],
        Authorization: headers['authorization'],
        'Accept-Language': headers['accept-language'],
      },
    };

    const { data } = await firstValueFrom(
      this.httpService.post<Response>(url, params, config).pipe(
        catchError((error: AxiosError) => {
          console.log(error.response);
          throw new HttpException(error.response.data, error.response.status);
        }),
      ),
    );

    return data;
  }

  public async uploadFileRequest<Response>(
    url,
    params,
    headers,
  ): Promise<Response> {
    const { data } = await firstValueFrom(
      this.httpService
        .post<Response>(url, params, {
          headers,
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );

    return data;
  }
}
