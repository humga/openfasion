import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ShoppingBag } from '../ShoppingBag/ShoppingBag.js';
import classes from './Button_SizeLStatePrimaryIconLe.module.css';
import { Rectangle319Icon } from './Rectangle319Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 861:2998 */
export const Button_SizeLStatePrimaryIconLe: FC<Props> = memo(function Button_SizeLStatePrimaryIconLe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bG}></div>
      <div className={classes.content}>
        <ShoppingBag
          className={classes.shoppingBag}
          swap={{
            rectangle319: <Rectangle319Icon className={classes.icon} />,
            vector: <VectorIcon className={classes.icon2} />,
          }}
        />
        <div className={classes.checkout}>Checkout</div>
      </div>
    </div>
  );
});
