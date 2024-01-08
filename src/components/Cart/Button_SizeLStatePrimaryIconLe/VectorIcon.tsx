import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.800334 7.45756L0.800334 3.62616C0.800334 2.67031 1.18004 1.75362 1.85593 1.07773C2.53181 0.401844 3.44851 0.0221354 4.40436 0.0221354C5.36021 0.0221354 6.2769 0.401844 6.95279 1.07773C7.62868 1.75362 8.00838 2.67031 8.00838 3.62616V7.45756'
      stroke='#FCFCFC'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
