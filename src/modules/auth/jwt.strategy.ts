import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { MOVIES_JWT_SECRET } from '@env';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: MOVIES_JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<any> {
    return parseInt(payload.sub);
  }
}
