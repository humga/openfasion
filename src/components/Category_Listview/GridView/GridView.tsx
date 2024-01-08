import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './GridView.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 671:1180 */
export const GridView: FC<Props> = memo(function GridView(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle353}></div>
      <div className={classes.rectangle355}></div>
      <div className={classes.rectangle354}></div>
      <div className={classes.rectangle356}></div>
    </div>
  );
});
