import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heart.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    union?: ReactNode;
  };
}
/* @figmaId 112:548 */
export const Heart: FC<Props> = memo(function Heart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.union}>{props.swap?.union || <UnionIcon className={classes.icon} />}</div>
    </div>
  );
});
