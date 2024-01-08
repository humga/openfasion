import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_SizeLStatePrimaryIconLe } from './Button_SizeLStatePrimaryIconLe/Button_SizeLStatePrimaryIconLe.js';
import classes from './Cart_Empty.module.css';
import { Close } from './Close/Close.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 700:1372 */
export const Cart_Empty: FC<Props> = memo(function Cart_Empty(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.cART}>CART</div>
      <Close
        className={classes.close}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
      <div className={classes.youHaveNoItemsInYourShoppingBa}>You have no items in your Shopping Bag.</div>
      <Button_SizeLStatePrimaryIconLe
        className={classes.button}
        classes={{ content: classes.content }}
        text={{
          checkout: <div className={classes.checkout}>Continue shopping</div>,
        }}
      />
    </div>
  );
});
