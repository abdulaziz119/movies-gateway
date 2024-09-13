// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import retry from 'retry';
//
// @Injectable()
// export class RetryMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(retry, 'retry');
//     const operation = retry.operation({
//       retries: 3,
//       factor: 2,
//       minTimeout: 1000,
//       maxTimeout: 5000,
//     });
//
//     operation.attempt((currentAttempt) => {
//       next((error?: any) => {
//         if (error && operation.retry(error)) {
//           return;
//         }
//
//         if (error) {
//           res.status(500).json({
//             message: 'Retry failed',
//             error: error.toString(),
//             attempt: currentAttempt,
//           });
//           return;
//         }
//
//         res.status(200).json({
//           message: 'Success',
//         });
//       });
//     });
//   }
// }

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RetryMiddleware implements NestMiddleware {
  maxRetries = 3; // Qayta zaproslar soni
  retryDelay = 500; // Millisekundlar bilan qayta zaproslar orasidagi kuzatish davri

  async use(req: Request, res: Response, next: NextFunction) {
    let retries = 0;
    while (retries < this.maxRetries) {
      try {
        await next();
        return;
      } catch (error) {
        console.log(error, 'errorLog');
        // Xatolik yuz berdi
        retries++;
        await new Promise((resolve) => setTimeout(resolve, this.retryDelay));
      }
    }
    throw new Error(
      `Max retries exceeded for request: ${req.method} ${req.originalUrl}`,
    );
  }
}
