import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon.js';
import classes from './Logo.module.css';

interface Props {
  className?: string;
  classes?: {
    group?: string;
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 651:927 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group || ''} ${classes.group}`}>
        {props.swap?.group || <GroupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
