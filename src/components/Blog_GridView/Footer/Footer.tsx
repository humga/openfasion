import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _8Icon } from './_8Icon.js';
import { _10Icon } from './_10Icon.js';
import classes from './Footer.module.css';
import { InstagramIcon } from './InstagramIcon.js';
import { TwitterIcon } from './TwitterIcon.js';
import { YoutubeIcon } from './YoutubeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 673:1135 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle425}></div>
      <div className={classes.rectangle340}></div>
      <div className={classes._8}>
        <_8Icon className={classes.icon} />
      </div>
      <div className={classes._10}>
        <_10Icon className={classes.icon2} />
      </div>
      <div className={classes.twitter}>
        <TwitterIcon className={classes.icon3} />
      </div>
      <div className={classes.instagram}>
        <InstagramIcon className={classes.icon4} />
      </div>
      <div className={classes.youTube}>
        <YoutubeIcon className={classes.icon5} />
      </div>
      <div className={classes.about}>About</div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.blog}>Blog</div>
      <div className={classes.supportOpenuiDesign60825876802}>
        <div className={classes.textBlock}>support@openui.design</div>
        <div className={classes.textBlock2}>+60 825 876</div>
        <div className={classes.textBlock3}>08:00 - 22:00 - Everyday</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.copyrightOpenUIAllRightsReserv}>Copyright© OpenUI All Rights Reserved.</div>
    </div>
  );
});
