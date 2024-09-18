import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const jwtService = new JwtService();
  const token = request.headers.authorization?.split(' ')[1];
  if (token) {
    const decodedToken = jwtService.decode(token);
    if (decodedToken) {
      request.user = decodedToken;
    }
  }
  return request.user;
});

export const GameUserId = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const jwtService = new JwtService();
    const token = request.headers.authorization?.split(' ')[1];
    if (token) {
      const decodedToken = jwtService.decode(token);
      if (decodedToken) {
        request.user = parseInt(decodedToken['id']);
      }
    }
    return request.user;
  },
);

export const Guest = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const jwtService = new JwtService();
    const token = request.headers.authorization?.split(' ')[1];
    if (token) {
      const decodedToken = jwtService.decode(token);
      if (decodedToken) {
        request.guest = decodedToken['type'] === 'guest' ? 'guest' : 'user';
      }
    }
    return request.guest;
  },
);

export const Merchant = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const jwtService = new JwtService();
    const token = request.headers.authorization?.split(' ')[1];
    if (token) {
      const decodedToken = jwtService.decode(token);
      if (decodedToken) {
        request.merchant_id = decodedToken['merchant_id'];
      }
    }
    return request.merchant_id;
  },
);

export const UnknownUser = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const jwtService = new JwtService();
    const token = request.headers.authorization?.split(' ')[1];
    let user_id = null;
    if (token) {
      const decodedToken = jwtService.decode(token);
      if (decodedToken) {
        user_id = parseInt(decodedToken.sub);
      }
    }
    return user_id;
  },
);
