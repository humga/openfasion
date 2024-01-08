import { memo, SVGProps } from 'react';

const Vector24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.498171 15.4934L0.498186 0.5011L12.501 0.523595V14.9845H7.45231' stroke='black' />
  </svg>
);

const Memo = memo(Vector24Icon);
export { Memo as Vector24Icon };
