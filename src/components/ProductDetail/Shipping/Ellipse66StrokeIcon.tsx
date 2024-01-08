import { memo, SVGProps } from 'react';

const Ellipse66StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.05223 4.9061C4.11362 4.9061 4.97404 4.04568 4.97404 2.9843C4.97404 1.92292 4.11362 1.0625 3.05223 1.0625C1.99085 1.0625 1.13043 1.92292 1.13043 2.9843C1.13043 4.04568 1.99085 4.9061 3.05223 4.9061ZM3.05223 5.9061C4.6659 5.9061 5.97404 4.59797 5.97404 2.9843C5.97404 1.37064 4.6659 0.0625 3.05223 0.0625C1.43857 0.0625 0.130432 1.37064 0.130432 2.9843C0.130432 4.59797 1.43857 5.9061 3.05223 5.9061Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Ellipse66StrokeIcon);
export { Memo as Ellipse66StrokeIcon };
