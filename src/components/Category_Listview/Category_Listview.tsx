import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Category_Listview.module.css';
import { ComponentsIconFilterIcon } from './ComponentsIconFilterIcon.js';
import { Down } from './Down/Down.js';
import { Ellipse34Icon } from './Ellipse34Icon.js';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Filter } from './Filter/Filter.js';
import { Footer } from './Footer/Footer.js';
import { GridView } from './GridView/GridView.js';
import { Header } from './Header/Header.js';
import { PageNumber } from './PageNumber/PageNumber.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Product_TypeListview } from './Product_TypeListview/Product_TypeListview.js';

interface Props {
  className?: string;
}
/* @figmaId 671:1121 */
export const Category_Listview: FC<Props> = memo(function Category_Listview(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Footer className={classes.footer} />
      <div className={classes.product2}>
        <Product_TypeListview className={classes.component3} classes={{ rectangle344: classes.rectangle344 }} />
        <Product_TypeListview className={classes.component4} classes={{ rectangle344: classes.rectangle3442 }} />
        <Product_TypeListview className={classes.component5} classes={{ rectangle344: classes.rectangle3443 }} />
        <Product_TypeListview className={classes.component11} classes={{ rectangle344: classes.rectangle3444 }} />
        <Product_TypeListview className={classes.component6} classes={{ rectangle344: classes.rectangle3445 }} />
        <Product_TypeListview className={classes.component10} classes={{ rectangle344: classes.rectangle3446 }} />
        <Product_TypeListview className={classes.component7} classes={{ rectangle344: classes.rectangle3447 }} />
        <Product_TypeListview className={classes.component9} classes={{ rectangle344: classes.rectangle3448 }} />
        <Product_TypeListview className={classes.component8} classes={{ rectangle344: classes.rectangle3449 }} />
        <PageNumber className={classes.pageNumber} />
        <Product_TypeListview className={classes.product} classes={{ rectangle344: classes.rectangle34410 }} />
      </div>
      <div className={classes.filter2}>
        <div className={classes.rectangle345}></div>
        <div className={classes.ellipse34}>
          <Ellipse34Icon className={classes.icon3} />
        </div>
        <div className={classes.ellipse35}>
          <Ellipse35Icon className={classes.icon4} />
        </div>
        <div className={classes._4500Apparel}>4500 Apparel</div>
        <div className={classes.new}>New</div>
        <GridView className={classes.gridView} />
        <Down
          className={classes.down}
          classes={{ polygon1: classes.polygon1 }}
          swap={{
            polygon1: (
              <div className={classes.polygon1}>
                <Polygon1Icon className={classes.icon} />
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
                <ComponentsIconFilterIcon className={classes.icon2} />
              </div>
            ),
          }}
        />
      </div>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
    </div>
  );
});
