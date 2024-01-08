import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_SizeMStatePrimaryIconNo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 861:3051 */
export const Button_SizeMStatePrimaryIconNo: FC<Props> = memo(function Button_SizeMStatePrimaryIconNo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.submit}>Submit</div>
    </button>
  );
});
