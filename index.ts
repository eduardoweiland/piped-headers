import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const PipedHeaders = createParamDecorator(
  (headerName: string|undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return headerName ? request.headers[headerName] : request.headers;
  },
);
