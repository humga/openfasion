import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import { _4Icon } from './_4Icon.js';
import { Button_SizeLStatePrimaryIconRi } from './Button_SizeLStatePrimaryIconRi/Button_SizeLStatePrimaryIconRi.js';
import { Header } from './Header/Header.js';
import classes from './OurStory.module.css';

interface Props {
  className?: string;
}
/* @figmaId 844:2317 */
export const OurStory: FC<Props> = memo(function OurStory(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.openFashionFreeEcommerceUIKitI}>
        <div className={classes.textBlock}>
          Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can open Open Fashion - Free Ecommerce UI
          Kit file by Figma.{' '}
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          Create stunning shop with bulletproof guidelines and thoughtful components. Its library contains more than 50+
          components supporting Light &amp; Dark Mode and 60+ ready to use mobile screens.
        </div>
      </div>
      <div className={classes.receiveEarlyAccessToNewArrival}>
        Receive early access to new arrivals, sales, exclusive content, events and much more!
      </div>
      <div className={classes.oURStory}>OUR Story</div>
      <div className={classes.signUp}>Sign Up</div>
      <div className={classes._3}>
        <_3Icon className={classes.icon} />
      </div>
      <div className={classes._4}>
        <_4Icon className={classes.icon2} />
      </div>
      <div className={classes.image3}></div>
      <div className={classes.inputTextLightFocus}>
        <div className={classes.input}>
          <div className={classes.background}></div>
          <div className={classes.line}></div>
          <div className={classes.text}>Email adress</div>
        </div>
      </div>
      <Button_SizeLStatePrimaryIconRi className={classes.button} />
    </div>
  );
});
