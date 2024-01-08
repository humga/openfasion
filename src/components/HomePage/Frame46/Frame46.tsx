import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame46.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    Mia?: ReactNode;
  };
}
/* @figmaId 852:2405 */
export const Frame46: FC<Props> = memo(function Frame46(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.Mia != null ? props.text?.Mia : <div className={classes.Mia}>@mia</div>}
    </div>
  );
});
