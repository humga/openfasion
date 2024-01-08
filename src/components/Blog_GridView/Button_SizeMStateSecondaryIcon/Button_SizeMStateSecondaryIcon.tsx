import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ShoppingBag } from '../ShoppingBag/ShoppingBag.js';
import classes from './Button_SizeMStateSecondaryIcon.module.css';
import { Rectangle319Icon } from './Rectangle319Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    shoppingBag?: ReactNode;
  };
  text?: {
    submit?: ReactNode;
  };
}
/* @figmaId 862:2414 */
export const Button_SizeMStateSecondaryIcon: FC<Props> = memo(function Button_SizeMStateSecondaryIcon(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.submit != null ? props.text?.submit : <div className={classes.submit}>Submit</div>}
      {props.swap?.shoppingBag || (
        <ShoppingBag
          className={classes.shoppingBag}
          swap={{
            rectangle319: <Rectangle319Icon className={classes.icon} />,
            vector: <VectorIcon className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
