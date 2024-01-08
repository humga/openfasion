import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component9.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rectangle424?: string;
  };
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 673:1117 */
export const Component9: FC<Props> = memo(function Component9(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle424 || ''} ${classes.rectangle424}`}></div>
      {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
    </div>
  );
});
