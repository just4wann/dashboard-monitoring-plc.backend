import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import timeGenerator from './timegenerator';

@Injectable()
export class TimeInterceptors implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    let data = context.switchToRpc().getData();
    if (typeof data !== 'object' || data === null) {
      data = {
        value: data
      }
    }
    data.timestamp = timeGenerator();
    return next.handle().pipe(
      map((response) => {
        return {
          response,
        };
      }),
    );
  }
}
