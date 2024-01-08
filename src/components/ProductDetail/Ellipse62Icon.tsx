import { memo, SVGProps } from 'react';

const Ellipse62Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.35425 12.5218C2.03575 13.9833 3.12664 15.2157 4.49463 16.0694C5.86261 16.9232 7.44893 17.3618 9.06122 17.3319C10.6735 17.302 12.2425 16.805 13.5779 15.9011C14.9133 14.9972 15.9578 13.7253 16.5847 12.2396'
      stroke='black'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Ellipse62Icon);
export { Memo as Ellipse62Icon };
