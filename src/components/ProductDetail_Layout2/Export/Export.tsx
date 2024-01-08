import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Export.module.css';
import { Rectangle101Icon } from './Rectangle101Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    line7?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    rectangle101?: ReactNode;
  };
}
/* @figmaId 112:603 */
export const Export: FC<Props> = memo(function Export(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={`${props.classes?.line7 || ''} ${classes.line7}`}></div>
      <div className={classes.rectangle101}>
        {props.swap?.rectangle101 || <Rectangle101Icon className={classes.icon2} />}
      </div>
    </div>
  );
});
