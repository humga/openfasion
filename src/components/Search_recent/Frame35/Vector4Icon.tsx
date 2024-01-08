import { memo, SVGProps } from 'react';

const Vector4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.0175037 0.0175037L8.5709 8.5709' stroke='#14142B' strokeWidth={0.669584} strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector4Icon);
export { Memo as Vector4Icon };
