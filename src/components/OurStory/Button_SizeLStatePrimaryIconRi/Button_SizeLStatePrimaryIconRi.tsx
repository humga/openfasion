import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ForwardArrow } from '../ForwardArrow/ForwardArrow.js';
import classes from './Button_SizeLStatePrimaryIconRi.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 861:3077 */
export const Button_SizeLStatePrimaryIconRi: FC<Props> = memo(function Button_SizeLStatePrimaryIconRi(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bG}></div>
      <div className={classes.content}>
        <div className={classes.checkout}>submit</div>
        <ForwardArrow
          className={classes.forwardArrow}
          classes={{ line7: classes.line7 }}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      </div>
    </div>
  );
});
