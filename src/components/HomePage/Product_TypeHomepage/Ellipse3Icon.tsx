import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={13.7532} cy={13.7532} r={13.7532} fill='#DD8560' />
  </svg>
);

const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
