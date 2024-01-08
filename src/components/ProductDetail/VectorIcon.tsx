import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.39559 3.80029L4.2503 3.79082L5.56642 0.281366' stroke='black' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
