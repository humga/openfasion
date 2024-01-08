import { memo, SVGProps } from 'react';

const Ellipse40Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8.53198} cy={8.12} r={8} fill='#E1E0DB' />
  </svg>
);

const Memo = memo(Ellipse40Icon);
export { Memo as Ellipse40Icon };
