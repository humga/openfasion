import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Listview.module.css';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector10Icon } from './Vector10Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector8?: ReactNode;
    vector10?: ReactNode;
  };
}
/* @figmaId 673:1048 */
export const Listview: FC<Props> = memo(function Listview(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector8}>{props.swap?.vector8 || <Vector8Icon className={classes.icon} />}</div>
      <div className={classes.vector10}>{props.swap?.vector10 || <Vector10Icon className={classes.icon2} />}</div>
      <div className={classes.rectangle422}></div>
      <div className={classes.rectangle423}></div>
    </div>
  );
});
