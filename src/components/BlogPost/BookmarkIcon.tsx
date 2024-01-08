import { memo, SVGProps } from 'react';

const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 9.84518L12 14.0118V0.25H0V14.0118L6 9.84518Z' stroke='#FCFCFC' />
  </svg>
);

const Memo = memo(BookmarkIcon);
export { Memo as BookmarkIcon };
