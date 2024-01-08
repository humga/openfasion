import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import { Button_SizeLStatePrimaryIconLe } from './Button_SizeLStatePrimaryIconLe/Button_SizeLStatePrimaryIconLe.js';
import { Cart } from './Cart/Cart.js';
import classes from './Checkout.module.css';
import { DoorToDoorDelivery } from './DoorToDoorDelivery/DoorToDoorDelivery.js';
import { Header } from './Header/Header.js';
import { Voucher } from './Voucher/Voucher.js';

interface Props {
  className?: string;
}
/* @figmaId 835:3066 */
export const Checkout: FC<Props> = memo(function Checkout(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.checkout}>Checkout</div>
      <div className={classes._3}>
        <_3Icon className={classes.icon} />
      </div>
      <div className={classes.line20}></div>
      <div className={classes.line23}></div>
      <div className={classes.frame28}>
        <Voucher />
        <div className={classes.addPromoCode}>Add promo code</div>
      </div>
      <div className={classes.frame29}>
        <DoorToDoorDelivery />
        <div className={classes.delivery}>Delivery</div>
        <div className={classes.free}>Free</div>
      </div>
      <Button_SizeLStatePrimaryIconLe className={classes.button} />
      <div className={classes.estTotal}>Est. Total</div>
      <div className={classes._240}>$240</div>
      <Cart className={classes.cart} classes={{ rectangle344: classes.rectangle344, group212: classes.group212 }} />
      <div className={classes.line22}></div>
    </div>
  );
});
