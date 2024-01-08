import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Menu.module.css';
import { Vector7Icon } from './Vector7Icon.js';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 112:587 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector7}>
        <Vector7Icon className={classes.icon} />
      </div>
      <div className={classes.vector10}>
        <Vector10Icon className={classes.icon2} />
      </div>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon3} />
      </div>
    </div>
  );
});
