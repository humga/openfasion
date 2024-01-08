import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ComponentsIconFilterIcon } from './ComponentsIconFilterIcon.js';
import { Delete } from './Delete/Delete.js';
import { Down } from './Down/Down.js';
import { Ellipse34Icon } from './Ellipse34Icon.js';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Filter } from './Filter/Filter.js';
import { Footer } from './Footer/Footer.js';
import { Header } from './Header/Header.js';
import { Listview } from './Listview/Listview.js';
import { PageNumber } from './PageNumber/PageNumber.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Product_TypeGridview } from './Product_TypeGridview/Product_TypeGridview.js';
import { Search } from './Search/Search.js';
import classes from './SearchView.module.css';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector10Icon } from './Vector10Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 832:1902 */
export const SearchView: FC<Props> = memo(function SearchView(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.filter2}>
        <div className={classes.rectangle345}></div>
        <div className={classes.ellipse34}>
          <Ellipse34Icon className={classes.icon6} />
        </div>
        <div className={classes.ellipse35}>
          <Ellipse35Icon className={classes.icon7} />
        </div>
        <div className={classes._8ResultOfDress}>8 result of dress</div>
        <div className={classes.new}>New</div>
        <Listview
          className={classes.listview}
          swap={{
            vector8: <Vector8Icon className={classes.icon} />,
            vector10: <Vector10Icon className={classes.icon2} />,
          }}
        />
        <Down
          className={classes.down}
          classes={{ polygon1: classes.polygon1 }}
          swap={{
            polygon1: (
              <div className={classes.polygon1}>
                <Polygon1Icon className={classes.icon3} />
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
                <ComponentsIconFilterIcon className={classes.icon4} />
              </div>
            ),
          }}
        />
      </div>
      <div className={classes.product2}>
        <Product_TypeGridview className={classes.product} classes={{ rectangle344: classes.rectangle344 }} />
        <Product_TypeGridview className={classes.frame20} classes={{ rectangle344: classes.rectangle3442 }} />
        <Product_TypeGridview className={classes.frame18} classes={{ rectangle344: classes.rectangle3443 }} />
        <Product_TypeGridview className={classes.frame21} classes={{ rectangle344: classes.rectangle3444 }} />
        <Product_TypeGridview
          className={classes.frame17}
          classes={{ rectangle344: classes.rectangle3445 }}
          text={{
            _21WN: <div className={classes._21WN}>lamerei</div>,
          }}
        />
        <Product_TypeGridview
          className={classes.frame22}
          classes={{ rectangle344: classes.rectangle3446 }}
          text={{
            _21WN: <div className={classes._21WN2}>lamerei</div>,
          }}
        />
        <Product_TypeGridview
          className={classes.frame19}
          classes={{ rectangle344: classes.rectangle3447 }}
          text={{
            _21WN: <div className={classes._21WN3}>lamerei</div>,
          }}
        />
        <Product_TypeGridview
          className={classes.frame23}
          classes={{ rectangle344: classes.rectangle3448 }}
          text={{
            _21WN: <div className={classes._21WN4}>lamerei</div>,
          }}
        />
        <PageNumber className={classes.pageNumber} />
      </div>
      <Footer className={classes.footer} />
      <div className={classes.searchbox}>
        <Search className={classes.search} />
        <div className={classes.line15}></div>
        <div className={classes.dress}>Dress</div>
        <div className={classes.frame39}>
          <Delete
            className={classes.delete}
            swap={{
              vector: <VectorIcon className={classes.icon5} />,
            }}
          />
        </div>
      </div>
    </div>
  );
});
