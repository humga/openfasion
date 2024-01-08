import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import { AddMessageIcon } from './AddMessageIcon.js';
import { Button_SizeSStatePrimaryIconNo } from './Button_SizeSStatePrimaryIconNo/Button_SizeSStatePrimaryIconNo.js';
import { ChatMessageIcon } from './ChatMessageIcon.js';
import classes from './ContactUs.module.css';
import { Footer } from './Footer/Footer.js';
import { Header } from './Header/Header.js';
import { TwitterIcon } from './TwitterIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 845:2413 */
export const ContactUs: FC<Props> = memo(function ContactUs(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.contactUs}>Contact us</div>
      <div className={classes._3}>
        <_3Icon className={classes.icon} />
      </div>
      <div className={classes.needAnASAPAnswerContactUsViaCh}>
        Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.
      </div>
      <div className={classes.chatMessage}>
        <ChatMessageIcon className={classes.icon2} />
      </div>
      <Button_SizeSStatePrimaryIconNo className={classes.button} />
      <div className={classes.youCanTextUsAt8003092622OrClic}>
        You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the
        system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details.
        Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available
        via all carriers.
      </div>
      <Button_SizeSStatePrimaryIconNo
        className={classes.button2}
        text={{
          chatWitHUs: <div className={classes.chatWitHUs}>Text us</div>,
        }}
      />
      <div className={classes.addMessage}>
        <AddMessageIcon className={classes.icon3} />
      </div>
      <div className={classes.toSendUsAPrivateOrDirectMessag}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>To send us a private or direct message, like @Open Fashion on </span>
          <span className={classes.label2}>Facebook</span>
          <span className={classes.label3}> or follow us on </span>
          <span className={classes.label4}>Twitter</span>
          <span className={classes.label5}>
            . We’ll get back to you ASAP. Please include your name, order number, and email address for a faster
            response!
          </span>
        </p>
      </div>
      <div className={classes.twitter}>
        <TwitterIcon className={classes.icon4} />
      </div>
      <Footer className={classes.footer} />
    </div>
  );
});
