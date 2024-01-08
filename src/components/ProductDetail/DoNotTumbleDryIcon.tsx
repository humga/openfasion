import { memo, SVGProps } from 'react';

const DoNotTumbleDryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.5}>
      <rect x={3.88626} y={3.98957} width={16} height={16} stroke='black' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.3549 16.3966L2.24756 7.38008L2.6933 6.48492L20.8006 15.5015L20.3549 16.3966Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.845 14.7508C14.1197 15.4898 13.1095 15.9481 11.9922 15.9481C9.78469 15.9481 7.99512 14.1586 7.99512 11.951C7.99512 11.7507 8.00985 11.5538 8.0383 11.3614L7.1064 10.8974C7.0335 11.2371 6.99512 11.5896 6.99512 11.951C6.99512 14.7109 9.2324 16.9481 11.9922 16.9481C13.5047 16.9481 14.8601 16.2763 15.7765 15.2147L14.845 14.7508ZM8.31483 10.382C8.92473 8.95439 10.3416 7.95392 11.9922 7.95392C14.1998 7.95392 15.9893 9.74349 15.9893 11.951C15.9893 12.6751 15.7968 13.3543 15.4601 13.94L16.3567 14.3865C16.7597 13.6659 16.9893 12.8353 16.9893 11.951C16.9893 9.1912 14.7521 6.95392 11.9922 6.95392C9.94954 6.95392 8.19312 8.17955 7.41823 9.93554L8.31483 10.382Z'
        fill='black'
      />
    </g>
  </svg>
);

const Memo = memo(DoNotTumbleDryIcon);
export { Memo as DoNotTumbleDryIcon };
