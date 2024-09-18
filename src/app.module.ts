import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { LoggerMiddleware } from './middlware/logger.middleware';
import { ThrottlerModule } from '@nestjs/throttler';
import { RATE_LIMIT, RATE_TTL } from '@env';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: RATE_TTL,
      limit: RATE_LIMIT
    }),
    ModulesModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(AuthCheckMiddleware).forRoutes('*');
    consumer.apply(LoggerMiddleware).forRoutes('*');
    // consumer.apply(RetryMiddleware).forRoutes('*');
    // consumer.apply(ForwardedHeadersMiddleware).forRoutes('*');
    // consumer.apply(ThrottleMiddleware).forRoutes('*');
  }
}
