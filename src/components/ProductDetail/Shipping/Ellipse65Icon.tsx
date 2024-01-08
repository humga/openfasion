import { memo, SVGProps } from 'react';

const Ellipse65Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2.94817} cy={2.9843} r={2.9218} stroke='black' />
  </svg>
);

const Memo = memo(Ellipse65Icon);
export { Memo as Ellipse65Icon };
