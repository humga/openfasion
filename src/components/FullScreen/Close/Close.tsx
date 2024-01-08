import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Close.module.css';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector4?: ReactNode;
    vector5?: ReactNode;
  };
}
/* @figmaId 112:612 */
export const Close: FC<Props> = memo(function Close(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector4}>{props.swap?.vector4 || <Vector4Icon className={classes.icon} />}</div>
      <div className={classes.vector5}>{props.swap?.vector5 || <Vector5Icon className={classes.icon2} />}</div>
    </div>
  );
});
