import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Heart } from '../Heart/Heart.js';
import classes from './Product_TypeGridview.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle344?: string;
    root?: string;
  };
  text?: {
    _21WN?: ReactNode;
    reversibleAngoraCardigan?: ReactNode;
  };
}
/* @figmaId 671:966 */
export const Product_TypeGridview: FC<Props> = memo(function Product_TypeGridview(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame18}>
        <div className={`${props.classes?.rectangle344 || ''} ${classes.rectangle344}`}></div>
        <Heart
          className={classes.heart}
          swap={{
            union: <UnionIcon className={classes.icon} />,
          }}
        />
      </div>
      <div className={classes.frame15}>
        <div className={classes.frame14}>
          {props.text?._21WN != null ? props.text?._21WN : <div className={classes._21WN}>21WN </div>}
          {props.text?.reversibleAngoraCardigan != null ? (
            props.text?.reversibleAngoraCardigan
          ) : (
            <div className={classes.reversibleAngoraCardigan}>reversible angora cardigan</div>
          )}
        </div>
        <div className={classes._120}>$120</div>
      </div>
    </div>
  );
});
