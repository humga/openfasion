import { memo, SVGProps } from 'react';

const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8 12.7936L16 18.3491V0H0V18.3491L8 12.7936Z' stroke='#14142B' />
  </svg>
);

const Memo = memo(BookmarkIcon);
export { Memo as BookmarkIcon };
