import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { RATE_LIMIT, RATE_TTL } from '@env';

const IP_THROTTLE_LIMIT = RATE_LIMIT; // IP manzili uchun chegaralash limiti
const IP_THROTTLE_INTERVAL = RATE_TTL * 1000; // Chegaralashning davomiyligi (60 sekund)

const ipThrottleMap = new Map<string, number>(); // IP manzillar va so'rovlar sonini saqlash uchun Map obyekti

@Injectable()
export class ThrottleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const clientIp = (
      req.headers['x-forwarded-for'] ||
      req.headers['x-real-ip'] ||
      req.connection.remoteAddress
    ).toString();

    // IP manzilini olganingizdan keyin, IP manziliga mos keladigan qatorlarni hisoblash
    const ipRequestCount = ipThrottleMap.get(clientIp) || 0;

    if (ipRequestCount >= IP_THROTTLE_LIMIT) {
      return res.status(429).json({
        message: 'Too many requests. Please try again later.',
      });
    }

    // IP manziliga mos keladigan so'rovlar sonini oshirish
    ipThrottleMap.set(clientIp, ipRequestCount + 1);

    // Chegaralash davomiyligi o'tgandan so'ng IP manzilini o'chirish
    setTimeout(() => {
      ipThrottleMap.delete(clientIp);
    }, IP_THROTTLE_INTERVAL);

    next();
  }
}
