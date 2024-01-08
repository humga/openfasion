import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Gallery.module.css';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector115Icon } from './Vector115Icon.js';
import { Vector116Icon } from './Vector116Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector8?: ReactNode;
    vector115?: ReactNode;
    vector116?: ReactNode;
  };
}
/* @figmaId 823:2046 */
export const Gallery: FC<Props> = memo(function Gallery(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector8}>{props.swap?.vector8 || <Vector8Icon className={classes.icon} />}</div>
      <div className={classes.vector115}>{props.swap?.vector115 || <Vector115Icon className={classes.icon2} />}</div>
      <div className={classes.vector116}>{props.swap?.vector116 || <Vector116Icon className={classes.icon3} />}</div>
      <div className={classes.rectangle422}></div>
    </div>
  );
});
