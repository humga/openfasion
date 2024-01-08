import { memo, SVGProps } from 'react';

const Ellipse22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3} cy={3} r={3} stroke='#555555' />
  </svg>
);

const Memo = memo(Ellipse22Icon);
export { Memo as Ellipse22Icon };
