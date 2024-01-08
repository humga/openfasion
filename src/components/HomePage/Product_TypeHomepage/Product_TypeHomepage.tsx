import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import classes from './Product_TypeHomepage.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle325?: string;
    frame1?: string;
    root?: string;
  };
  text?: {
    _21WNReversibleAngoraCardigan?: ReactNode;
  };
}
/* @figmaId 431:913 */
export const Product_TypeHomepage: FC<Props> = memo(function Product_TypeHomepage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle325 || ''} ${classes.rectangle325}`}></div>
      <div className={`${props.classes?.frame1 || ''} ${classes.frame1}`}>
        {props.text?._21WNReversibleAngoraCardigan != null ? (
          props.text?._21WNReversibleAngoraCardigan
        ) : (
          <div className={classes._21WNReversibleAngoraCardigan}>21WN reversible angora cardigan</div>
        )}
        <div className={classes._120}>$120</div>
      </div>
    </div>
  );
});
