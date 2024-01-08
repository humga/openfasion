import { memo, SVGProps } from 'react';

const CallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.9719 2.82843L23.3359 3.53553C23.3359 3.53553 24.043 9.89949 16.9719 16.9706C9.90087 24.0416 3.53553 23.3359 3.53553 23.3359L2.82843 16.9719L7.77955 14.1435L10.2537 16.6177C10.2537 16.6177 12.0215 16.2641 14.1428 14.1428C16.2641 12.0215 16.6177 10.2537 16.6177 10.2537L14.1435 7.77955L16.9719 2.82843Z'
      stroke='#555555'
    />
  </svg>
);

const Memo = memo(CallIcon);
export { Memo as CallIcon };
