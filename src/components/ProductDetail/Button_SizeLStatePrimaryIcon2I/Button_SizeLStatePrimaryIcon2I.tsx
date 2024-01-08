import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Heart } from '../Heart/Heart.js';
import { Plus } from '../Plus/Plus.js';
import classes from './Button_SizeLStatePrimaryIcon2I.module.css';
import { UnionIcon } from './UnionIcon.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 856:2453 */
export const Button_SizeLStatePrimaryIcon2I: FC<Props> = memo(function Button_SizeLStatePrimaryIcon2I(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle427}></div>
      <div className={classes.addToBasket}>Add to basket</div>
      <Plus
        className={classes.plus}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
      <Heart
        className={classes.heart}
        swap={{
          union: <UnionIcon className={classes.icon3} />,
        }}
      />
    </div>
  );
});
