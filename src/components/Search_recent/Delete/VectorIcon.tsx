import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.5 0.085938L0.085938 1.5L0.796876 2.20313L10.5859 12L0.085938 22.5L1.5 23.9141L12 13.4141L21.7891 23.2109L22.5 23.9141L23.9141 22.5L23.2109 21.7891L13.4141 12L23.9141 1.5L22.5 0.085938L12 10.5859L2.20313 0.796876L1.5 0.085938Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
