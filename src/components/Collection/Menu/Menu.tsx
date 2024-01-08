import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Menu.module.css';
import { Vector7Icon } from './Vector7Icon.js';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector7?: ReactNode;
    vector10?: ReactNode;
    vector9?: ReactNode;
  };
}
/* @figmaId 112:587 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector7}>{props.swap?.vector7 || <Vector7Icon className={classes.icon} />}</div>
      <div className={classes.vector10}>{props.swap?.vector10 || <Vector10Icon className={classes.icon2} />}</div>
      <div className={classes.vector9}>{props.swap?.vector9 || <Vector9Icon className={classes.icon3} />}</div>
    </div>
  );
});
