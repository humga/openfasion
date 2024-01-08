import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _10Icon } from './_10Icon.js';
import { _11Icon } from './_11Icon.js';
import classes from './Collection.module.css';
import { Footer } from './Footer/Footer.js';
import { GroupIcon } from './GroupIcon.js';
import { Header } from './Header/Header.js';
import { Rectangle319Icon } from './Rectangle319Icon.js';
import { Vector7Icon } from './Vector7Icon.js';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    rectangle331?: boolean;
  };
}
/* @figmaId 826:1921 */
export const Collection: FC<Props> = memo(function Collection(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header
        className={classes.header}
        swap={{
          vector7: <Vector7Icon className={classes.icon} />,
          vector10: <Vector10Icon className={classes.icon2} />,
          vector9: <Vector9Icon className={classes.icon3} />,
          vector: <VectorIcon className={classes.icon4} />,
          vector2: <VectorIcon2 className={classes.icon5} />,
          rectangle319: <Rectangle319Icon className={classes.icon6} />,
          vector3: <VectorIcon3 className={classes.icon7} />,
          group: <GroupIcon className={classes.icon8} />,
        }}
        hide={{
          rectangle331: true,
        }}
      />
      <Footer className={classes.footer} />
      <div className={classes.frame56}>
        <div className={classes._10}>
          <_10Icon className={classes.icon9} />
        </div>
        <div className={classes.october}>October</div>
        <div className={classes.collection}>Collection</div>
        <div className={classes.octoberCollection}>October collection</div>
        <div className={classes._1}>01</div>
        <div className={classes.image20}></div>
        <div className={classes.line23}></div>
        <div className={classes._11}>
          <_11Icon className={classes.icon10} />
        </div>
      </div>
      <div className={classes.frame57}>
        <div className={classes.blackCollection}>Black collection</div>
        <div className={classes._2}>02</div>
        <div className={classes.image21}></div>
        <div className={classes.line24}></div>
      </div>
      <div className={classes.frame58}>
        <div className={classes.hAEBYHAEKIM}>HAE BY HAEKIM</div>
        <div className={classes._3}>03</div>
        <div className={classes.image22}></div>
        <div className={classes.line25}></div>
      </div>
    </div>
  );
});
