import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Close } from './Close/Close.js';
import classes from './FullScreen.module.css';
import { Header } from './Header/Header.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 826:1836 */
export const FullScreen: FC<Props> = memo(function FullScreen(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.rectangle438}></div>
      <div className={classes.image15}></div>
      <div className={classes.image16}></div>
      <Close
        className={classes.close}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
      <div className={classes.frame38}>
        <div className={classes.rectangle327}></div>
        <div className={classes.rectangle328}></div>
        <div className={classes.rectangle329}></div>
        <div className={classes.rectangle330}></div>
        <div className={classes.rectangle3312}></div>
      </div>
      <div className={classes.rectangle439}></div>
    </div>
  );
});
