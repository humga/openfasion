import { memo, SVGProps } from 'react';

const Group205Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={11.412} cy={11.1199} r={8} fill='#0F140D' />
    <circle opacity={0.5} cx={11.4121} cy={11.1199} r={11.1199} stroke='#888888' />
  </svg>
);

const Memo = memo(Group205Icon);
export { Memo as Group205Icon };
