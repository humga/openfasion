import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 4.1008e-05L17.0323 17.0323' stroke='#FCFCFC' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
