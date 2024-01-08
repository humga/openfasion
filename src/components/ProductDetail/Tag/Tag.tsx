import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Rectangle316Icon } from './Rectangle316Icon.js';
import classes from './Tag.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rectangle316?: ReactNode;
    ellipse35?: ReactNode;
  };
}
/* @figmaId 112:569 */
export const Tag: FC<Props> = memo(function Tag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle316}>
        {props.swap?.rectangle316 || <Rectangle316Icon className={classes.icon} />}
      </div>
      <div className={classes.ellipse35}>{props.swap?.ellipse35 || <Ellipse35Icon className={classes.icon2} />}</div>
    </div>
  );
});
