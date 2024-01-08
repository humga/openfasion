import { memo, SVGProps } from 'react';

const IronLowTemperatureIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.5}>
      <path
        d='M7.66516 6.05865H14.9542C16.4447 6.05865 19.5971 6.94068 20.2831 10.4688M20.2831 10.4688C20.9692 13.997 20.9773 17.0433 20.8957 18.1254H3.00992C3.13243 15.614 4.68827 10.5913 9.93149 10.5913C15.1747 10.5913 19.0173 10.5097 20.2831 10.4688Z'
        stroke='black'
      />
      <circle cx={12.7491} cy={14.2665} r={0.735026} fill='black' />
    </g>
  </svg>
);

const Memo = memo(IronLowTemperatureIcon);
export { Memo as IronLowTemperatureIcon };
