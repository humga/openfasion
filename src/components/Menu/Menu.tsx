import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Call } from './Call/Call.js';
import { CallIcon } from './CallIcon.js';
import { Close } from './Close/Close.js';
import { DividerIcon } from './DividerIcon.js';
import { Ellipse22Icon } from './Ellipse22Icon.js';
import { Ellipse33Icon } from './Ellipse33Icon.js';
import { Forward } from './Forward/Forward.js';
import { ForwardIcon2 } from './ForwardIcon2.js';
import { ForwardIcon3 } from './ForwardIcon3.js';
import { ForwardIcon4 } from './ForwardIcon4.js';
import { ForwardIcon5 } from './ForwardIcon5.js';
import { ForwardIcon6 } from './ForwardIcon6.js';
import { ForwardIcon } from './ForwardIcon.js';
import { InstagramIcon } from './InstagramIcon.js';
import { Location } from './Location/Location.js';
import classes from './Menu.module.css';
import { TwitterIcon } from './TwitterIcon.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';
import { YoutubeIcon } from './YoutubeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 658:721 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.line13}></div>
      <div className={classes.women}>Women</div>
      <div className={classes.newApparelBagShoesBeautyAccess}>
        <div className={classes.textBlock}>New</div>
        <div className={classes.textBlock2}>Apparel</div>
        <div className={classes.textBlock3}>Bag</div>
        <div className={classes.textBlock4}>Shoes</div>
        <div className={classes.textBlock5}>Beauty</div>
        <div className={classes.textBlock6}>Accessories</div>
      </div>
      <div className={classes.man}>Man</div>
      <div className={classes.kids}>Kids</div>
      <Close
        className={classes.close}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
      <div className={classes.dropdown}>
        <Forward
          className={classes.forward}
          swap={{
            forward: <ForwardIcon className={classes.icon3} />,
          }}
        />
        <Forward
          className={classes.forward2}
          swap={{
            forward: <ForwardIcon2 className={classes.icon4} />,
          }}
        />
        <Forward
          className={classes.forward3}
          swap={{
            forward: <ForwardIcon3 className={classes.icon5} />,
          }}
        />
        <Forward
          className={classes.forward4}
          swap={{
            forward: <ForwardIcon4 className={classes.icon6} />,
          }}
        />
        <Forward
          className={classes.forward5}
          swap={{
            forward: <ForwardIcon5 className={classes.icon7} />,
          }}
        />
        <Forward
          className={classes.forward6}
          swap={{
            forward: <ForwardIcon6 className={classes.icon8} />,
          }}
        />
      </div>
      <div className={classes.twitter}>
        <TwitterIcon className={classes.icon12} />
      </div>
      <div className={classes.instagram}>
        <InstagramIcon className={classes.icon13} />
      </div>
      <div className={classes.youTube}>
        <YoutubeIcon className={classes.icon14} />
      </div>
      <div className={classes.storeLocator}>
        <Location
          swap={{
            ellipse33: <Ellipse33Icon className={classes.icon9} />,
            ellipse22: <Ellipse22Icon className={classes.icon10} />,
          }}
        />
        <div className={classes.storeLocator2}>Store locator</div>
      </div>
      <div className={classes.line12}></div>
      <div className={classes.rectangle327}></div>
      <div className={classes.customerService}>
        <Call
          swap={{
            call: <CallIcon className={classes.icon11} />,
          }}
        />
        <div className={classes._7867138616}>(786) 713-8616</div>
      </div>
      <div className={classes.divider}>
        <DividerIcon className={classes.icon15} />
      </div>
    </div>
  );
});
