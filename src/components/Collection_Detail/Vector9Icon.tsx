import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H23.3865' stroke='#F9F9F9' />
  </svg>
);

const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
