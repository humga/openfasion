import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 3.05176e-05L12.7742 12.7742' stroke='#14142B' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
