import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ArrowIcon2 } from './ArrowIcon2.js';
import { ArrowIcon } from './ArrowIcon.js';
import classes from './Resize.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    arrow?: ReactNode;
    arrow2?: ReactNode;
  };
}
/* @figmaId 112:595 */
export const Resize: FC<Props> = memo(function Resize(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.arrow}>{props.swap?.arrow || <ArrowIcon className={classes.icon} />}</div>
      <div className={classes.arrow2}>{props.swap?.arrow2 || <ArrowIcon2 className={classes.icon2} />}</div>
    </div>
  );
});
