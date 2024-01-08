import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H7.77171' stroke='#14142B' />
  </svg>
);

const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };
