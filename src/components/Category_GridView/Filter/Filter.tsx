import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ComponentsIconFilterIcon } from './ComponentsIconFilterIcon.js';
import classes from './Filter.module.css';

interface Props {
  className?: string;
  classes?: {
    componentsIconFilter?: string;
    root?: string;
  };
  swap?: {
    componentsIconFilter?: ReactNode;
  };
}
/* @figmaId 671:1057 */
export const Filter: FC<Props> = memo(function Filter(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.componentsIconFilter || ''} ${classes.componentsIconFilter}`}>
        {props.swap?.componentsIconFilter || <ComponentsIconFilterIcon className={classes.icon} />}
      </div>
    </div>
  );
});
