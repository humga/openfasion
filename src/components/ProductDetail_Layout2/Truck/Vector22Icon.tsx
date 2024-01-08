import { memo, SVGProps } from 'react';

const Vector22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.56543 0.871216H5.05249L9.4874 5.25391V11.9845H7.4914' stroke='black' />
  </svg>
);

const Memo = memo(Vector22Icon);
export { Memo as Vector22Icon };
