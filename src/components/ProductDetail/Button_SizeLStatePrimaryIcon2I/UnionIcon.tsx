import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.77216 1.77216C-0.59072 4.13503 -0.590718 7.96602 1.77216 10.3289L10.937 19.4937L11 19.4307L11.0631 19.4938L20.2279 10.329C22.5908 7.96609 22.5908 4.13511 20.2279 1.77223C17.865 -0.590642 14.034 -0.59064 11.6712 1.77224L11.3536 2.08978C11.1584 2.28505 10.8418 2.28505 10.6465 2.08978L10.3289 1.77216C7.96601 -0.590719 4.13503 -0.590718 1.77216 1.77216Z'
      stroke='#F9F9F9'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
