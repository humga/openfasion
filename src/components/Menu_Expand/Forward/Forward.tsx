import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Forward.module.css';
import { ForwardIcon } from './ForwardIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    forward?: ReactNode;
  };
}
/* @figmaId 112:583 */
export const Forward: FC<Props> = memo(function Forward(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.forward}>{props.swap?.forward || <ForwardIcon className={classes.icon} />}</div>
    </div>
  );
});
