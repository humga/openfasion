import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.712036 0.75L5.74984 6L0.712036 11.25' stroke='#14142B' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
