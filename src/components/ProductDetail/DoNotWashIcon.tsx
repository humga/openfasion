import { memo, SVGProps } from 'react';

const DoNotWashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.5}>
      <path d='M2.69633 5.23634L4.81608 19.2713H19.108L21.3883 4.78668' stroke='black' />
      <path
        d='M8.25891 6.65002C8.29182 7.72473 9.06168 9.87414 11.8779 9.87414C14.694 9.87414 15.6613 7.68085 15.7929 6.58421C16.0012 7.69181 17.4049 9.88728 20.4317 9.80832M3.37662 10.0942C4.01515 10.1514 5.46949 9.89978 6.17856 8.43591'
        stroke='black'
      />
      <path d='M3.19223 2.74637L20.4393 20.3468' stroke='black' />
    </g>
  </svg>
);

const Memo = memo(DoNotWashIcon);
export { Memo as DoNotWashIcon };
