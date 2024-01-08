import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 125 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M62.5775 9.75649L67.1271 5.20689H124.979V5.00009H67.1271L62.5775 0.502197L58.0796 5.00009H0.0205917V5.20689H58.0796L62.5775 9.75649ZM62.5775 0.812397L66.9203 5.10349L62.5775 9.44629L58.2347 5.10349L62.5775 0.812397Z'
      fill='#555555'
    />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
