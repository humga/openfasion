import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 12.7744L12.7742 0.000219743' stroke='#14142B' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
