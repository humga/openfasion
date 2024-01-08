import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.074707 4.36035L4.70036 4.34898L6.2797 0.137639' stroke='#14142B' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
