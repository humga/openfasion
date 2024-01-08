import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7.33333 4L3.66667 0.666667L1.19209e-07 4' stroke='#333333' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
