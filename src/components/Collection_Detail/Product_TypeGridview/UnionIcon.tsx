import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.8481 1.51477C0.272853 3.09002 0.272855 5.64401 1.84811 7.21926L7.958 13.3292L8 13.2872L8.04204 13.3292L14.1519 7.21931C15.7272 5.64406 15.7272 3.09007 14.1519 1.51482C12.5767 -0.060428 10.0227 -0.0604268 8.44745 1.51482L8.3536 1.60867C8.15834 1.80393 7.84175 1.80393 7.64649 1.60867L7.55259 1.51477C5.97734 -0.0604795 3.42335 -0.0604789 1.8481 1.51477Z'
      stroke='#DD8560'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
