import { memo, SVGProps } from 'react';

const Vector10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H6.47642' stroke='#14142B' />
  </svg>
);

const Memo = memo(Vector10Icon);
export { Memo as Vector10Icon };
