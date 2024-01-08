import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M2 8L14 8' stroke='#555555' />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
