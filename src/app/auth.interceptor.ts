import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interception!')
  const authReq = req.clone({
    headers: req.headers.set("Authorization", "mon super token")
  })
  return next(authReq);
};
