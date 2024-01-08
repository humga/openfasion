import { memo, SVGProps } from 'react';

const Group11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_b_1049_4067)'>
      <circle cx={17.5028} cy={17.47} r={16.6341} fill='black' fillOpacity={0.5} />
    </g>
    <path
      d='M23.7633 16.6454C24.3423 17.0426 24.3423 17.8972 23.7633 18.2945L15.4476 24.0004C14.784 24.4557 13.8818 23.9806 13.8818 23.1758L13.8818 11.764C13.8818 10.9593 14.784 10.4842 15.4476 10.9395L23.7633 16.6454Z'
      fill='white'
    />
    <defs>
      <filter
        id='filter0_b_1049_4067'
        x={-3.13126}
        y={-3.1641}
        width={41.2682}
        height={41.2682}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={2} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1049_4067' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_1049_4067' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Group11Icon);
export { Memo as Group11Icon };
