import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse22Icon } from './Ellipse22Icon.js';
import { Ellipse33Icon } from './Ellipse33Icon.js';
import classes from './Location.module.css';

interface Props {
  className?: string;
  swap?: {
    ellipse33?: ReactNode;
    ellipse22?: ReactNode;
  };
}
/* @figmaId 112:566 */
export const Location: FC<Props> = memo(function Location(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse33}>{props.swap?.ellipse33 || <Ellipse33Icon className={classes.icon} />}</div>
      <div className={classes.ellipse22}>{props.swap?.ellipse22 || <Ellipse22Icon className={classes.icon2} />}</div>
    </div>
  );
});
