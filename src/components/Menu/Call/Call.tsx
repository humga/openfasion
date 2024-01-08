import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Call.module.css';
import { CallIcon } from './CallIcon.js';

interface Props {
  className?: string;
  swap?: {
    call?: ReactNode;
  };
}
/* @figmaId 112:599 */
export const Call: FC<Props> = memo(function Call(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.call}>{props.swap?.call || <CallIcon className={classes.icon} />}</div>
    </div>
  );
});
