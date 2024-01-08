import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import { _5Icon } from './_5Icon.js';
import { Button_SizeLStatePrimaryIconLe } from './Button_SizeLStatePrimaryIconLe/Button_SizeLStatePrimaryIconLe.js';
import { Button_SizeMStatePrimaryIconNo } from './Button_SizeMStatePrimaryIconNo/Button_SizeMStatePrimaryIconNo.js';
import { Button_SizeMStateSecondaryIcon } from './Button_SizeMStateSecondaryIcon/Button_SizeMStateSecondaryIcon.js';
import { Cart } from './Cart/Cart.js';
import { Close } from './Close/Close.js';
import { DisappointedIcon } from './DisappointedIcon.js';
import { Forward } from './Forward/Forward.js';
import { ForwardIcon2 } from './ForwardIcon2.js';
import { ForwardIcon } from './ForwardIcon.js';
import { HappyIcon } from './HappyIcon.js';
import { Header } from './Header/Header.js';
import { InLoveIcon } from './InLoveIcon.js';
import { MastercardIcon } from './MastercardIcon.js';
import classes from './PaymentSuccess.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 802:1677 */
export const PaymentSuccess: FC<Props> = memo(function PaymentSuccess(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.checkout}>Checkout</div>
      <div className={classes._3}>
        <_3Icon className={classes.icon3} />
      </div>
      <div className={classes._221bBakerStMaryl}>
        <div className={classes.textBlock}>606-3727 Ullamcorper. Street</div>
        <div className={classes.textBlock2}>Roseville NH 11523</div>
      </div>
      <div className={classes._221bBakerStMaryl2}>(786) 713-8616</div>
      <div className={classes.cassieDonk}>Iris Watson</div>
      <Forward
        className={classes.forward}
        swap={{
          forward: <ForwardIcon className={classes.icon} />,
        }}
      />
      <div className={classes.masterCardEnding}>Master Card ending ••••89</div>
      <div className={classes.masterCard}>
        <MastercardIcon className={classes.icon4} />
      </div>
      <Forward
        className={classes.forward2}
        swap={{
          forward: <ForwardIcon2 className={classes.icon2} />,
        }}
      />
      <div className={classes.line19}></div>
      <div className={classes.line20}></div>
      <div className={classes.line21}></div>
      <div className={classes.frame28}>
        <div className={classes.addPromoCode}>Add promo code</div>
      </div>
      <div className={classes.total}>Total</div>
      <div className={classes._240}>$240</div>
      <Cart className={classes.cart} classes={{ rectangle344: classes.rectangle344, group212: classes.group212 }} />
      <div className={classes.line22}></div>
      <div className={classes.rectangle436}></div>
      <div className={classes.frame32}>
        <div className={classes.rectangle437}></div>
        <div className={classes._5}>
          <_5Icon className={classes.icon5} />
        </div>
        <div className={classes.paymentSuccess}>Payment success</div>
        <div className={classes.yourPaymentWasSuccess}>Your payment was success</div>
        <div className={classes.rateYourPurchase}>Rate your purchase</div>
        <div className={classes.paymentID}>Payment ID</div>
        <div className={classes._15263541}>15263541</div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon6} />
        </div>
        <div className={classes.vector2}>
          <VectorIcon2 className={classes.icon7} />
        </div>
        <div className={classes.vector3}>
          <VectorIcon3 className={classes.icon8} />
        </div>
        <div className={classes.happy}>
          <HappyIcon className={classes.icon9} />
        </div>
        <div className={classes.inLove}>
          <InLoveIcon className={classes.icon10} />
        </div>
        <div className={classes.disappointed}>
          <DisappointedIcon className={classes.icon11} />
        </div>
        <Button_SizeMStatePrimaryIconNo className={classes.frame35} />
        <Button_SizeMStateSecondaryIcon className={classes.frame36} />
        <Close className={classes.close} />
      </div>
      <Button_SizeLStatePrimaryIconLe className={classes.button} />
    </div>
  );
});
