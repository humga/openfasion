import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V18' stroke='black' />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
