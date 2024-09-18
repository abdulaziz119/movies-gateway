import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthCheckMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const jwtService = new JwtService();
    const token = req.headers.authorization?.split(' ')[1];
  }
}
