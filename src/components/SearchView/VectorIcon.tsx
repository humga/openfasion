import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.75 0.0429692L0.0429692 0.75L0.398438 1.10156L5.29297 6L0.0429692 11.25L0.75 11.957L6 6.70703L10.8945 11.6055L11.25 11.957L11.957 11.25L11.6055 10.8945L6.70703 6L11.957 0.75L11.25 0.0429692L6 5.29297L1.10156 0.398438L0.75 0.0429692Z'
      fill='#555555'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
