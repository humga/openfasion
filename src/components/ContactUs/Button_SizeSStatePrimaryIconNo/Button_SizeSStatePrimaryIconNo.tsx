import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_SizeSStatePrimaryIconNo.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    chatWitHUs?: ReactNode;
  };
}
/* @figmaId 861:3085 */
export const Button_SizeSStatePrimaryIconNo: FC<Props> = memo(function Button_SizeSStatePrimaryIconNo(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.chatWitHUs != null ? props.text?.chatWitHUs : <div className={classes.chatWitHUs}>Chat witH us</div>}
    </button>
  );
});
