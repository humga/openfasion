import { memo, SVGProps } from 'react';

const Vector23Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H6.73059' stroke='black' />
  </svg>
);

const Memo = memo(Vector23Icon);
export { Memo as Vector23Icon };
