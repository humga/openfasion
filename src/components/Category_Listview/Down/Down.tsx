import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Down.module.css';
import { Polygon1Icon } from './Polygon1Icon.js';

interface Props {
  className?: string;
  classes?: {
    polygon1?: string;
    root?: string;
  };
  swap?: {
    polygon1?: ReactNode;
  };
}
/* @figmaId 128:542 */
export const Down: FC<Props> = memo(function Down(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.polygon1 || ''} ${classes.polygon1}`}>
        {props.swap?.polygon1 || <Polygon1Icon className={classes.icon} />}
      </div>
    </div>
  );
});
