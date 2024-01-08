import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Component9 } from '../Component9/Component9.js';
import { Forward } from '../Forward/Forward.js';
import classes from './PageNumber.module.css';

interface Props {
  className?: string;
}
/* @figmaId 673:1229 */
export const PageNumber: FC<Props> = memo(function PageNumber(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Component9 className={classes.component9} />
      <Component9
        className={classes.component10}
        classes={{ rectangle424: classes.rectangle424 }}
        text={{
          _1: <div className={classes._1}>2</div>,
        }}
      />
      <Component9
        className={classes.component11}
        classes={{ rectangle424: classes.rectangle4242 }}
        text={{
          _1: <div className={classes._12}>3</div>,
        }}
      />
      <Component9
        className={classes.component12}
        classes={{ rectangle424: classes.rectangle4243 }}
        text={{
          _1: <div className={classes._13}>4</div>,
        }}
      />
      <Component9
        className={classes.component13}
        classes={{ rectangle424: classes.rectangle4244 }}
        text={{
          _1: <div className={classes._14}>5</div>,
        }}
      />
      <Forward className={classes.forward} />
    </div>
  );
});
