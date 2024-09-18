import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ForwardedHeadersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const clientIp =
      req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.headers['x-forwarded-for'] = clientIp;
    console.log(clientIp, 'clientIp');
    next();
  }
}
