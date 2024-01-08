import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle319Icon } from './Rectangle319Icon.js';
import classes from './ShoppingBag.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rectangle319?: ReactNode;
    vector?: ReactNode;
  };
}
/* @figmaId 425:655 */
export const ShoppingBag: FC<Props> = memo(function ShoppingBag(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle319}>
        {props.swap?.rectangle319 || <Rectangle319Icon className={classes.icon} />}
      </div>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon2} />}</div>
    </div>
  );
});
