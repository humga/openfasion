import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_SizeMStateSecondaryIcon.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 861:3052 */
export const Button_SizeMStateSecondaryIcon: FC<Props> = memo(function Button_SizeMStateSecondaryIcon(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.backToHome}>Back to home</div>
    </button>
  );
});
