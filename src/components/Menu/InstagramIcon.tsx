import { memo, SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.99844 2.39999C4.91124 2.39999 2.4 4.91356 2.4 8.00156V16.0016C2.4 19.0888 4.91356 21.6 8.00156 21.6H16.0016C19.0888 21.6 21.6 19.0864 21.6 15.9984V7.99843C21.6 4.91123 19.0864 2.39999 15.9984 2.39999H7.99844ZM17.6 5.59999C18.0416 5.59999 18.4 5.95839 18.4 6.39999C18.4 6.84159 18.0416 7.19999 17.6 7.19999C17.1584 7.19999 16.8 6.84159 16.8 6.39999C16.8 5.95839 17.1584 5.59999 17.6 5.59999ZM12 7.19999C14.6472 7.19999 16.8 9.35279 16.8 12C16.8 14.6472 14.6472 16.8 12 16.8C9.3528 16.8 7.2 14.6472 7.2 12C7.2 9.35279 9.3528 7.19999 12 7.19999ZM12 8.79999C11.1513 8.79999 10.3374 9.13713 9.73726 9.73725C9.13714 10.3374 8.8 11.1513 8.8 12C8.8 12.8487 9.13714 13.6626 9.73726 14.2627C10.3374 14.8629 11.1513 15.2 12 15.2C12.8487 15.2 13.6626 14.8629 14.2627 14.2627C14.8629 13.6626 15.2 12.8487 15.2 12C15.2 11.1513 14.8629 10.3374 14.2627 9.73725C13.6626 9.13713 12.8487 8.79999 12 8.79999V8.79999Z'
      fill='#555555'
    />
  </svg>
);

const Memo = memo(InstagramIcon);
export { Memo as InstagramIcon };
