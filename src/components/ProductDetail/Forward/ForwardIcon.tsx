import { memo, SVGProps } from 'react';

const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L6.96317 6.96317L0 13.9263' stroke='#14142B' />
  </svg>
);

const Memo = memo(ForwardIcon);
export { Memo as ForwardIcon };
