import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { MOVIES_JWT_SECRET } from '../env';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthCheckMiddleware implements NestMiddleware {
  private auth_url = MOVIES_JWT_SECRET;

  async use(req: Request, res: Response, next: NextFunction) {
    const jwtService = new JwtService();
    const token = req.headers.authorization?.split(' ')[1];
    let isGuest = null;
    if (token) {
      const decodedToken = jwtService.decode(token);
      if (decodedToken) {
        isGuest = decodedToken['type'] === 'guest';
      }
    }

    if (!isGuest) {
      try {
        const headers = {
          Authorization: req.headers.authorization,
        };
        const response: AxiosResponse = await axios.post(
          this.auth_url + '/v1/oauth/check-token',
          {},
          { headers },
        );
        next();
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new UnauthorizedException('Unauthorized');
        } else {
          next();
        }
      }
    } else {
      next();
    }
  }
}
