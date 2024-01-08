import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.902262 0.166667L6.49982 6L0.902262 11.8333' stroke='#F9F9F9' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
