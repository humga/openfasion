import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Close } from '../Close/Close.js';
import classes from './Tag_StyleBorder.module.css';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _2021?: ReactNode;
  };
}
/* @figmaId 673:1079 */
export const Tag_StyleBorder: FC<Props> = memo(function Tag_StyleBorder(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._2021 != null ? props.text?._2021 : <div className={classes._2021}>Women</div>}
      <Close
        className={classes.close}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
    </div>
  );
});
