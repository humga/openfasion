import { memo, SVGProps } from 'react';

const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.5 0.166667L6.30264 5.96931L0.5 11.772' stroke='#333333' />
  </svg>
);

const Memo = memo(ForwardIcon);
export { Memo as ForwardIcon };
