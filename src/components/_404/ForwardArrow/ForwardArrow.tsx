import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ForwardArrow.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    line7?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 112:585 */
export const ForwardArrow: FC<Props> = memo(function ForwardArrow(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={`${props.classes?.line7 || ''} ${classes.line7}`}></div>
    </div>
  );
});
