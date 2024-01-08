import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 9.67969L0.803849 2.66019L11.1962 2.66019L6 9.67969Z' fill='#333333' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
