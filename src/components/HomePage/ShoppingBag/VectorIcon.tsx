import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.1604 9.14907L0.1604 4.55139C0.1604 3.40438 0.616051 2.30434 1.42711 1.49328C2.23818 0.682213 3.33821 0.226563 4.48523 0.226562C5.63225 0.226562 6.73228 0.682213 7.54335 1.49328C8.35441 2.30434 8.81006 3.40438 8.81006 4.55139V9.14907'
      stroke='#14142B'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
