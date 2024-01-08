import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Plus } from '../Plus/Plus.js';
import classes from './ButtonMSecondaryRight.module.css';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    plus?: ReactNode;
  };
  text?: {
    loadMore?: ReactNode;
  };
}
/* @figmaId 848:2369 */
export const ButtonMSecondaryRight: FC<Props> = memo(function ButtonMSecondaryRight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.loadMore != null ? props.text?.loadMore : <div className={classes.loadMore}>Load More</div>}
      {props.swap?.plus || (
        <Plus
          className={classes.plus}
          swap={{
            vector4: <Vector4Icon className={classes.icon} />,
            vector5: <Vector5Icon className={classes.icon2} />,
          }}
        />
      )}
    </div>
  );
});
