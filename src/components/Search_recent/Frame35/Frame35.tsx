import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Close } from '../Close/Close.js';
import classes from './Frame35.module.css';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    dress?: ReactNode;
  };
}
/* @figmaId 823:2081 */
export const Frame35: FC<Props> = memo(function Frame35(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.dress != null ? props.text?.dress : <div className={classes.dress}>Dress</div>}
      <Close
        className={classes.close}
        classes={{ vector4: classes.vector4 }}
        swap={{
          vector4: (
            <div className={classes.vector4}>
              <Vector4Icon className={classes.icon} />
            </div>
          ),
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
    </div>
  );
});
