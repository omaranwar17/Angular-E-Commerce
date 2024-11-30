import { HttpInterceptorFn } from '@angular/common/http';

export const hwadersInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
