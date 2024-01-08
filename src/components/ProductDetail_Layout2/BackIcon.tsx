import { memo, SVGProps } from 'react';

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7.33432 3.52021L3.62253 3.76316L2.24414 7.29396' stroke='black' />
  </svg>
);

const Memo = memo(BackIcon);
export { Memo as BackIcon };
