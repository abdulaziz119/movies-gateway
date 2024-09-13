import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    let user_id = null;

    res.on('finish', async () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      const jwtService = new JwtService();
      const token = req.headers.authorization?.split(' ')[1];
      if (token) {
        const decodedToken = jwtService.decode(token);
        if (decodedToken) {
          user_id = parseInt(decodedToken.sub);
        }
      }

      this.logger.log(
        `USER_ID => ${user_id}; ${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent}`,
      );
    });

    next();
  }
}
