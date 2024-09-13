import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const token = request.headers.authorization?.split(' ')[1];
  console.log(token, 'token');
  return request;
});

export const Guest = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const jwtService = new JwtService();
    const token = request.headers.authorization?.split(' ')[1];
    if (token) {
      const decodedToken = jwtService.decode(token);
      // if (decodedToken) {
      //   request.guest = decodedToken["type"] === "guest" ? "guest" : "user";
      // }
    }
    return request;
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
