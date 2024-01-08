import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Group199 } from '../Group199/Group199.js';
import { Heart } from '../Heart/Heart.js';
import { Ellipse36Icon2 } from './Ellipse36Icon2.js';
import { Ellipse36Icon3 } from './Ellipse36Icon3.js';
import { Ellipse36Icon } from './Ellipse36Icon.js';
import classes from './Product_TypeListview.module.css';
import { Star1Icon } from './Star1Icon.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle344?: string;
    root?: string;
  };
}
/* @figmaId 673:858 */
export const Product_TypeListview: FC<Props> = memo(function Product_TypeListview(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame18}>
        <div className={`${props.classes?.rectangle344 || ''} ${classes.rectangle344}`}></div>
      </div>
      <Heart
        className={classes.heart}
        swap={{
          union: <UnionIcon className={classes.icon} />,
        }}
      />
      <div className={classes.frame26}>
        <div className={classes.frame15}>
          <div className={classes.frame14}>
            <div className={classes.lamerei}>lamerei</div>
            <div className={classes.recycleBoucleKnitCardiganPink}>Recycle Boucle Knit Cardigan Pink</div>
          </div>
          <div className={classes._120}>$120</div>
        </div>
        <div className={classes.frame24}>
          <div className={classes.star1}>
            <Star1Icon className={classes.icon5} />
          </div>
          <div className={classes._48Ratings}>4.8 Ratings</div>
        </div>
        <div className={classes.frame25}>
          <div className={classes.size}>Size</div>
          <Group199
            swap={{
              ellipse36: <Ellipse36Icon className={classes.icon2} />,
            }}
          />
          <Group199
            swap={{
              ellipse36: <Ellipse36Icon2 className={classes.icon3} />,
            }}
            text={{
              s: <div className={classes.s}>M</div>,
            }}
          />
          <Group199
            swap={{
              ellipse36: <Ellipse36Icon3 className={classes.icon4} />,
            }}
            text={{
              s: <div className={classes.s2}>L</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});
