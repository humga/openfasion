import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.03501 7.16845L0.555747 2.46831L7.51427 2.46831L4.03501 7.16845Z' fill='#333333' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
