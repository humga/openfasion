import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Product.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle321?: string;
    root?: string;
  };
  text?: {
    harrisTweedThreeButtonJacket?: ReactNode;
  };
}
/* @figmaId 430:761 */
export const Product: FC<Props> = memo(function Product(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle321 || ''} ${classes.rectangle321}`}></div>
      <div className={classes.frame1}>
        {props.text?.harrisTweedThreeButtonJacket != null ? (
          props.text?.harrisTweedThreeButtonJacket
        ) : (
          <div className={classes.harrisTweedThreeButtonJacket}>Harris Tweed Three button Jacket</div>
        )}
        <div className={classes._120}>$120</div>
      </div>
    </div>
  );
});
