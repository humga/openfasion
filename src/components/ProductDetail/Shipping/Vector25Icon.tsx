import { memo, SVGProps } from 'react';

const Vector25Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H2.50439' stroke='black' />
  </svg>
);

const Memo = memo(Vector25Icon);
export { Memo as Vector25Icon };
