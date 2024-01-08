import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.0175037 8.57105L8.5709 0.0176507' stroke='#14142B' strokeWidth={0.669584} strokeLinejoin='round' />
  </svg>
);

const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
