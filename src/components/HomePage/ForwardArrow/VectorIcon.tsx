import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.282715 0L6.99979 7L0.282715 14' stroke='#14142B' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
