import { memo, SVGProps } from 'react';

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8.60118 4.02425L4.14704 4.3158L2.49297 8.55275' stroke='#14142B' />
  </svg>
);

const Memo = memo(BackIcon);
export { Memo as BackIcon };
