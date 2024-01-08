import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Tag_StyleFill.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _2021?: ReactNode;
  };
}
/* @figmaId 549:856 */
export const Tag_StyleFill: FC<Props> = memo(function Tag_StyleFill(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._2021 != null ? props.text?._2021 : <div className={classes._2021}>#2021</div>}
    </div>
  );
});
