import { memo, SVGProps } from 'react';

const ComponentsIconFilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.5 6.25V7.08333H17.5V6.25H2.5ZM8.33333 13.75H11.6667V12.9167H8.33333V13.75ZM15 10.4167H5V9.58333H15V10.4167Z'
      fill='#DD8560'
    />
  </svg>
);

const Memo = memo(ComponentsIconFilterIcon);
export { Memo as ComponentsIconFilterIcon };
