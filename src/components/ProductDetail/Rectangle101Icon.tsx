import { memo, SVGProps } from 'react';

const Rectangle101Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V6.66667H11.3333V0' stroke='#333333' />
  </svg>
);

const Memo = memo(Rectangle101Icon);
export { Memo as Rectangle101Icon };
