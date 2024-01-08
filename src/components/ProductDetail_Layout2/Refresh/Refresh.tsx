import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BackIcon } from './BackIcon.js';
import { Ellipse61Icon } from './Ellipse61Icon.js';
import { Ellipse62Icon } from './Ellipse62Icon.js';
import classes from './Refresh.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse61?: ReactNode;
    ellipse62?: ReactNode;
    back?: ReactNode;
    vector?: ReactNode;
  };
}
/* @figmaId 112:611 */
export const Refresh: FC<Props> = memo(function Refresh(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse61}>{props.swap?.ellipse61 || <Ellipse61Icon className={classes.icon} />}</div>
      <div className={classes.ellipse62}>{props.swap?.ellipse62 || <Ellipse62Icon className={classes.icon2} />}</div>
      <div className={classes.back}>{props.swap?.back || <BackIcon className={classes.icon3} />}</div>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon4} />}</div>
    </div>
  );
});
