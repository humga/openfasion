import { memo, SVGProps } from 'react';

const Vector24Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.498169 15.4932L0.498184 0.500977L12.501 0.523471V14.9844H7.4523' stroke='black' />
  </svg>
);

const Memo = memo(Vector24Icon);
export { Memo as Vector24Icon };
