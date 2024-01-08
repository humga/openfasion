import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse65Icon } from './Ellipse65Icon.js';
import { Ellipse66StrokeIcon } from './Ellipse66StrokeIcon.js';
import classes from './Shipping.module.css';
import { Vector22Icon } from './Vector22Icon.js';
import { Vector23Icon } from './Vector23Icon.js';
import { Vector24Icon } from './Vector24Icon.js';
import { Vector25Icon } from './Vector25Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 865:2352 */
export const Shipping: FC<Props> = memo(function Shipping(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector22}>
        <Vector22Icon className={classes.icon} />
      </div>
      <div className={classes.vector23}>
        <Vector23Icon className={classes.icon2} />
      </div>
      <div className={classes.ellipse65}>
        <Ellipse65Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse66Stroke}>
        <Ellipse66StrokeIcon className={classes.icon4} />
      </div>
      <div className={classes.vector24}>
        <Vector24Icon className={classes.icon5} />
      </div>
      <div className={classes.vector25}>
        <Vector25Icon className={classes.icon6} />
      </div>
    </div>
  );
});
