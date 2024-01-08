import { memo, SVGProps } from 'react';

const Ellipse35Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1.14062} cy={1.55664} r={1} stroke='#14142B' />
  </svg>
);

const Memo = memo(Ellipse35Icon);
export { Memo as Ellipse35Icon };
