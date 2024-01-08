import { memo, SVGProps } from 'react';

const DoNotBleachIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.5}>
      <path d='M7.65095 11.4464L3.84064 18.5405H19.9805L11.988 3.54682L8.73521 9.33982' stroke='black' />
      <path d='M3.77869 6.95448L21.8082 16.0003' stroke='black' />
    </g>
  </svg>
);

const Memo = memo(DoNotBleachIcon);
export { Memo as DoNotBleachIcon };
