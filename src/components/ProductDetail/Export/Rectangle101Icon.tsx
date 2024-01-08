import { memo, SVGProps } from 'react';

const Rectangle101Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V10H17V0' stroke='#14142B' />
  </svg>
);

const Memo = memo(Rectangle101Icon);
export { Memo as Rectangle101Icon };
