import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse36Icon } from './Ellipse36Icon.js';
import classes from './Group199.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse36?: ReactNode;
  };
  text?: {
    s?: ReactNode;
  };
}
/* @figmaId 671:1218 */
export const Group199: FC<Props> = memo(function Group199(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse36}>{props.swap?.ellipse36 || <Ellipse36Icon className={classes.icon} />}</div>
      {props.text?.s != null ? props.text?.s : <div className={classes.s}>S</div>}
    </div>
  );
});
