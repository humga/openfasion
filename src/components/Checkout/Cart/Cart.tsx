import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Plus } from '../Plus/Plus.js';
import classes from './Cart.module.css';
import { Ellipse68Icon } from './Ellipse68Icon.js';
import { Ellipse69Icon } from './Ellipse69Icon.js';
import { PlusIcon } from './PlusIcon.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle344?: string;
    group212?: string;
    root?: string;
  };
}
/* @figmaId 700:1478 */
export const Cart: FC<Props> = memo(function Cart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame18}>
        <div className={`${props.classes?.rectangle344 || ''} ${classes.rectangle344}`}></div>
      </div>
      <div className={classes.frame27}>
        <div className={classes.frame14}>
          <div className={classes.lamerei}>lamerei</div>
          <div className={classes.recycleBoucleKnitCardiganPink}>Recycle Boucle Knit Cardigan Pink</div>
        </div>
        <div className={`${props.classes?.group212 || ''} ${classes.group212}`}>
          <div className={classes.ellipse68}>
            <Ellipse68Icon className={classes.icon3} />
          </div>
          <div className={classes.ellipse69}>
            <Ellipse69Icon className={classes.icon4} />
          </div>
          <div className={classes.plus2}>
            <PlusIcon className={classes.icon5} />
          </div>
          <Plus
            className={classes.plus}
            swap={{
              vector4: <Vector4Icon className={classes.icon} />,
              vector5: <Vector5Icon className={classes.icon2} />,
            }}
          />
          <div className={classes._1}>1</div>
        </div>
        <div className={classes._120}>$120</div>
      </div>
    </div>
  );
});
