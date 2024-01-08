import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.125 0.0644536L0.0644536 1.125L0.597657 1.65234L7.93945 9L0.0644536 16.875L1.125 17.9355L9 10.0605L16.3418 17.4082L16.875 17.9355L17.9355 16.875L17.4082 16.3418L10.0605 9L17.9355 1.125L16.875 0.0644536L9 7.93945L1.65234 0.597657L1.125 0.0644536Z'
      fill='#555555'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
