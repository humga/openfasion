import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M11 5L5.5 -1.19209e-07L2.38419e-07 5' stroke='#14142B' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
