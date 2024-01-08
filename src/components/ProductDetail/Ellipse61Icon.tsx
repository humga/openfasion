import { memo, SVGProps } from 'react';

const Ellipse61Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.7376 6.14983C16.1357 4.49614 15.0257 3.07544 13.5668 2.09135C12.1078 1.10727 10.3747 0.610326 8.61599 0.671743C6.85724 0.73316 5.16307 1.34979 3.77631 2.43324C2.38955 3.5167 1.38138 5.01137 0.896306 6.70302'
      stroke='black'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Ellipse61Icon);
export { Memo as Ellipse61Icon };
