import { memo, SVGProps } from 'react';

const Vector7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H15.6756' stroke='#F9F9F9' />
  </svg>
);

const Memo = memo(Vector7Icon);
export { Memo as Vector7Icon };
