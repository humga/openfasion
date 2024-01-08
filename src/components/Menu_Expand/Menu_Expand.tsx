import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Back } from './Back/Back.js';
import { Close } from './Close/Close.js';
import { Forward } from './Forward/Forward.js';
import { ForwardIcon } from './ForwardIcon.js';
import classes from './Menu_Expand.module.css';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 861:2366 */
export const Menu_Expand: FC<Props> = memo(function Menu_Expand(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.line13}></div>
      <div className={classes.women}>Women</div>
      <div className={classes.newApparel}>
        <div className={classes.textBlock}>New</div>
        <div className={classes.textBlock2}>Apparel</div>
      </div>
      <div className={classes.outerDressBlouseShirtTShirtKni}>
        <div className={classes.textBlock3}>outer</div>
        <div className={classes.textBlock4}>dress</div>
        <div className={classes.textBlock5}>blouse/shirt</div>
        <div className={classes.textBlock6}>t-shirt</div>
        <div className={classes.textBlock7}>knitwear</div>
        <div className={classes.textBlock8}>skirt</div>
        <div className={classes.textBlock9}>pants</div>
        <div className={classes.textBlock10}>denim</div>
        <div className={classes.textBlock11}>kids</div>
      </div>
      <div className={classes.man}>Man</div>
      <div className={classes.kids}>Kids</div>
      <Close
        className={classes.close}
        swap={{
          vector4: <Vector4Icon className={classes.icon} />,
          vector5: <Vector5Icon className={classes.icon2} />,
        }}
      />
      <div className={classes.dropdown}>
        <Forward
          className={classes.forward}
          swap={{
            forward: <ForwardIcon className={classes.icon3} />,
          }}
        />
        <Back className={classes.back} />
      </div>
      <div className={classes.line12}></div>
      <div className={classes.rectangle327}></div>
      <div className={classes.line26}></div>
      <div className={classes.line27}></div>
    </div>
  );
});
