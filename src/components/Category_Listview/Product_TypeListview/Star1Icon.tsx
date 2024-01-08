import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.75661 0.243386L8.51596 4.57847L13.1825 4.91209L9.6033 7.92494L10.7281 12.4662L6.75661 9.99318L2.78518 12.4662L3.90993 7.92494L0.330692 4.91209L4.99727 4.57847L6.75661 0.243386Z'
      fill='#DD8560'
    />
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
