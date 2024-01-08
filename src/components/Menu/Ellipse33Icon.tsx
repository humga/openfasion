import { memo, SVGProps } from 'react';

const Ellipse33Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 10C20 15.5228 10 23 10 23C10 23 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z'
      stroke='#555555'
    />
  </svg>
);

const Memo = memo(Ellipse33Icon);
export { Memo as Ellipse33Icon };
