import { memo, SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.08741 3.64563L11.3618 3.64563L11.3618 10.9365' stroke='#FCFCFC' />
    <line
      y1={-0.5}
      x2={10.1647}
      y2={-0.5}
      transform='matrix(-0.70631 0.707903 -0.70631 -0.707903 10.8219 3.43253)'
      stroke='#FCFCFC'
    />
  </svg>
);

const Memo = memo(ArrowIcon);
export { Memo as ArrowIcon };
