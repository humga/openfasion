import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 8.51628L8.51613 0.000147031' stroke='#555555' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
