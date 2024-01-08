import { memo, SVGProps } from 'react';

const _10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 125 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M62.5775 9.78359L67.1271 5.23399H124.979V5.02719H67.1271L62.5775 0.529297L58.0796 5.02719H0.0205994V5.23399H58.0796L62.5775 9.78359ZM62.5775 0.839497L66.9203 5.13059L62.5775 9.47339L58.2348 5.13059L62.5775 0.839497Z'
      fill='#555555'
    />
  </svg>
);

const Memo = memo(_10Icon);
export { Memo as _10Icon };
