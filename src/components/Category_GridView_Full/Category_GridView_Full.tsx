import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Category_GridView_Full.module.css';
import { ComponentsIconFilterIcon } from './ComponentsIconFilterIcon.js';
import { Down } from './Down/Down.js';
import { Ellipse34Icon } from './Ellipse34Icon.js';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Filter } from './Filter/Filter.js';
import { Footer } from './Footer/Footer.js';
import { Gallery } from './Gallery/Gallery.js';
import { Header } from './Header/Header.js';
import { PageNumber } from './PageNumber/PageNumber.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Product_TypeFull } from './Product_TypeFull/Product_TypeFull.js';
import { Tag_StyleBorder } from './Tag_StyleBorder/Tag_StyleBorder.js';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector115Icon } from './Vector115Icon.js';
import { Vector116Icon } from './Vector116Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 822:1720 */
export const Category_GridView_Full: FC<Props> = memo(function Category_GridView_Full(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Footer className={classes.footer} />
      <div className={classes.product2}>
        <PageNumber className={classes.pageNumber} />
        <Product_TypeFull className={classes.product} classes={{ image15: classes.image15 }} />
        <Product_TypeFull className={classes.component21} classes={{ image15: classes.image152 }} />
        <Product_TypeFull className={classes.component22} classes={{ image15: classes.image153 }} />
        <Product_TypeFull className={classes.component23} classes={{ image15: classes.image154 }} />
        <Product_TypeFull className={classes.component24} classes={{ image15: classes.image155 }} />
      </div>
      <div className={classes.filter2}>
        <div className={classes.rectangle345}></div>
        <div className={classes.ellipse34}>
          <Ellipse34Icon className={classes.icon6} />
        </div>
        <div className={classes.ellipse35}>
          <Ellipse35Icon className={classes.icon7} />
        </div>
        <div className={classes._4500Apparel}>4500 Apparel</div>
        <div className={classes.new}>New</div>
        <Gallery
          className={classes.gallery}
          swap={{
            vector8: <Vector8Icon className={classes.icon} />,
            vector115: <Vector115Icon className={classes.icon2} />,
            vector116: <Vector116Icon className={classes.icon3} />,
          }}
        />
        <Down
          className={classes.down}
          classes={{ polygon1: classes.polygon1 }}
          swap={{
            polygon1: (
              <div className={classes.polygon1}>
                <Polygon1Icon className={classes.icon4} />
              </div>
            ),
          }}
        />
        <Filter
          className={classes.filter}
          classes={{ componentsIconFilter: classes.componentsIconFilter }}
          swap={{
            componentsIconFilter: (
              <div className={classes.componentsIconFilter}>
                <ComponentsIconFilterIcon className={classes.icon5} />
              </div>
            ),
          }}
        />
        <Tag_StyleBorder className={classes.tag} />
        <Tag_StyleBorder
          className={classes.frame24}
          text={{
            _2021: <div className={classes._2021}>All apparel</div>,
          }}
        />
      </div>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
    </div>
  );
});
