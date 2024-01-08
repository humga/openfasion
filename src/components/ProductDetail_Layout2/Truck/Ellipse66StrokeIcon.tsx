import { memo, SVGProps } from 'react';

const Ellipse66StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.05225 4.90629C4.11363 4.90629 4.97405 4.04587 4.97405 2.98449C4.97405 1.9231 4.11363 1.06268 3.05225 1.06268C1.99087 1.06268 1.13045 1.9231 1.13045 2.98449C1.13045 4.04587 1.99087 4.90629 3.05225 4.90629ZM3.05225 5.90629C4.66592 5.90629 5.97405 4.59815 5.97405 2.98449C5.97405 1.37082 4.66592 0.0626831 3.05225 0.0626831C1.43859 0.0626831 0.130451 1.37082 0.130451 2.98449C0.130451 4.59815 1.43859 5.90629 3.05225 5.90629Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Ellipse66StrokeIcon);
export { Memo as Ellipse66StrokeIcon };
