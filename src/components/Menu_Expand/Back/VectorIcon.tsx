import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6.96317 0L-5.96046e-08 6.96317L6.96317 13.9263' stroke='#14142B' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
