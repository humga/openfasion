import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_404.module.css';
import { Button_SizeSStatePrimaryIconLe } from './Button_SizeSStatePrimaryIconLe/Button_SizeSStatePrimaryIconLe.js';
import { Footer } from './Footer/Footer.js';
import { Header } from './Header/Header.js';
import { TailorsDummyIcon } from './TailorsDummyIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 751:1634 */
export const _404: FC<Props> = memo(function _404(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.pAGENOTFOUND}>
        <div className={classes.textBlock}>PAGE NOT FOUND</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.weCanTFindThePageYouLookingFor}>
        We can&#39;t find the page you looking for, it will return to the
      </div>
      <div className={classes.tailorsDummy}>
        <TailorsDummyIcon className={classes.icon} />
      </div>
      <Button_SizeSStatePrimaryIconLe className={classes.button} />
      <Footer className={classes.footer} />
    </div>
  );
});
