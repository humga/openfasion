import { memo, SVGProps } from 'react';

const ArrowIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10.9117 11.355L3.63725 11.355L3.63725 4.06414' stroke='#14142B' />
    <line
      y1={-0.5}
      x2={10.1647}
      y2={-0.5}
      transform='matrix(0.70631 -0.707903 0.70631 0.707903 4.22784 11.4272)'
      stroke='#14142B'
    />
  </svg>
);

const Memo = memo(ArrowIcon2);
export { Memo as ArrowIcon2 };
