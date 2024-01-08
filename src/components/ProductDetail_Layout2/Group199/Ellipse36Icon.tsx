import { memo, SVGProps } from 'react';

const Ellipse36Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12} cy={12} r={12} stroke='#F9F9F9' />
  </svg>
);

const Memo = memo(Ellipse36Icon);
export { Memo as Ellipse36Icon };
