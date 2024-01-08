import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Heart } from '../Heart/Heart.js';
import classes from './Product_TypeFull.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    image15?: string;
    root?: string;
  };
}
/* @figmaId 823:1922 */
export const Product_TypeFull: FC<Props> = memo(function Product_TypeFull(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image15 || ''} ${classes.image15}`}></div>
      <div className={classes.mOHAN}>MOHAN</div>
      <div className={classes.recycleBoucleKnitCardiganPink}>Recycle Boucle Knit Cardigan Pink</div>
      <Heart
        className={classes.heart}
        swap={{
          union: <UnionIcon className={classes.icon} />,
        }}
      />
      <div className={classes._120}>$120</div>
    </div>
  );
});
