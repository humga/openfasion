import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 2.0504e-05L8.51613 8.51615' stroke='#555555' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
