import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ForwardArrow } from '../ForwardArrow/ForwardArrow.js';
import classes from './Button_SizeSStatePrimaryIconLe.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 848:2375 */
export const Button_SizeSStatePrimaryIconLe: FC<Props> = memo(function Button_SizeSStatePrimaryIconLe(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ForwardArrow
        className={classes.forwardArrow}
        classes={{ line7: classes.line7 }}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.homePage}>Home Page</div>
    </button>
  );
});
