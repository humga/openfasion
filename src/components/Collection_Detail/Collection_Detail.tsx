import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _10Icon } from './_10Icon.js';
import { _11Icon } from './_11Icon.js';
import { _12Icon } from './_12Icon.js';
import classes from './Collection_Detail.module.css';
import { Footer } from './Footer/Footer.js';
import { GroupIcon } from './GroupIcon.js';
import { Header } from './Header/Header.js';
import { Product_TypeGridview } from './Product_TypeGridview/Product_TypeGridview.js';
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
/* @figmaId 840:2176 */
export const Collection_Detail: FC<Props> = memo(function Collection_Detail(props = {}) {
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
      <div className={classes.frame59}>
        <div className={classes._10}>
          <_10Icon className={classes.icon9} />
        </div>
        <div className={classes.october}>October</div>
        <div className={classes.collection}>Collection</div>
        <div className={classes.image20}></div>
        <div className={classes._11}>
          <_11Icon className={classes.icon10} />
        </div>
        <Product_TypeGridview
          className={classes.frame21}
          classes={{ rectangle344: classes.rectangle344 }}
          text={{
            _21WN: <div className={classes._21WN}>October collection</div>,
            reversibleAngoraCardigan: (
              <div className={classes.reversibleAngoraCardigan}>reversible angora cardigan</div>
            ),
          }}
        />
        <Product_TypeGridview
          className={classes.frame24}
          classes={{ rectangle344: classes.rectangle3442 }}
          text={{
            _21WN: <div className={classes._21WN2}>October collection</div>,
            reversibleAngoraCardigan: <div className={classes.reversibleAngoraCardigan2}>mnemo</div>,
          }}
        />
        <Product_TypeGridview
          className={classes.frame26}
          classes={{ rectangle344: classes.rectangle3443 }}
          text={{
            _21WN: <div className={classes._21WN3}>October collection</div>,
            reversibleAngoraCardigan: <div className={classes.reversibleAngoraCardigan3}>mnemo</div>,
          }}
        />
        <Product_TypeGridview
          className={classes.frame25}
          classes={{ rectangle344: classes.rectangle3444 }}
          text={{
            _21WN: <div className={classes._21WN4}>October collection</div>,
            reversibleAngoraCardigan: (
              <div className={classes.reversibleAngoraCardigan4}>reversible angora cardigan</div>
            ),
          }}
        />
        <Product_TypeGridview
          className={classes.frame23}
          classes={{ rectangle344: classes.rectangle3445 }}
          text={{
            _21WN: <div className={classes._21WN5}>October collection</div>,
            reversibleAngoraCardigan: (
              <div className={classes.reversibleAngoraCardigan5}>reversible angora cardigan</div>
            ),
          }}
        />
        <Product_TypeGridview
          className={classes.frame27}
          classes={{ rectangle344: classes.rectangle3446 }}
          text={{
            _21WN: <div className={classes._21WN6}>October collection</div>,
            reversibleAngoraCardigan: (
              <div className={classes.reversibleAngoraCardigan6}>reversible angora cardigan</div>
            ),
          }}
        />
      </div>
      <div className={classes.youMayAlsoLike}>
        <div className={classes.titile}>
          <div className={classes.youMayAlsoLike2}>You may also like</div>
          <div className={classes._12}>
            <_12Icon className={classes.icon11} />
          </div>
        </div>
        <div className={classes.rectangle440}></div>
        <div className={classes.blackCollection}>Black collection</div>
        <div className={classes.rectangle441}></div>
        <div className={classes.hAEBYHAEKIM}>HAE BY HAEKIM</div>
      </div>
    </div>
  );
});
