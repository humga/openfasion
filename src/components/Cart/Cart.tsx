import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_SizeLStatePrimaryIconLe } from './Button_SizeLStatePrimaryIconLe/Button_SizeLStatePrimaryIconLe.js';
import { Cart2 } from './Cart2/Cart2.js';
import classes from './Cart.module.css';
import { Close } from './Close/Close.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 843:2264 */
export const Cart: FC<Props> = memo(function Cart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.cART}>CART</div>
      <div className={classes.subTotal}>Sub Total</div>
      <div className={classes._240}>$240</div>
      <Close
        className={classes.close}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
      <Cart2 className={classes.cart} classes={{ rectangle344: classes.rectangle344, group212: classes.group212 }} />
      <Cart2
        className={classes.group214}
        classes={{ rectangle344: classes.rectangle3442, group212: classes.group2122, frame27: classes.frame27 }}
        text={{
          lamerei: <div className={classes.lamerei}>5252 by o!oi</div>,
          recycleBoucleKnitCardiganPink: (
            <div className={classes.recycleBoucleKnitCardiganPink}>2021 Signature Sweatshirt [NAVY]</div>
          ),
        }}
      />
      <div className={classes.line19}></div>
      <div className={classes.ShippingChargesTaxesAndDiscoun}>
        <div className={classes.textBlock}>*shipping charges, taxes and discount codes </div>
        <div className={classes.textBlock2}>are calculated at the time of accounting. </div>
      </div>
      <Button_SizeLStatePrimaryIconLe
        className={classes.button}
        classes={{ content: classes.content }}
        text={{
          checkout: <div className={classes.checkout}>BUY NOW</div>,
        }}
      />
    </div>
  );
});
