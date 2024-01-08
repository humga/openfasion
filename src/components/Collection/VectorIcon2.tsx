import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4 3.99988L0.782349 0.782227' stroke='#F9F9F9' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
