import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _10Icon } from './_10Icon.js';
import { ArrowIcon2 } from './ArrowIcon2.js';
import { ArrowIcon } from './ArrowIcon.js';
import { BackIcon } from './BackIcon.js';
import { Button_SizeLStatePrimaryIcon2I } from './Button_SizeLStatePrimaryIcon2I/Button_SizeLStatePrimaryIcon2I.js';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Ellipse36Icon2 } from './Ellipse36Icon2.js';
import { Ellipse36Icon3 } from './Ellipse36Icon3.js';
import { Ellipse36Icon4 } from './Ellipse36Icon4.js';
import { Ellipse36Icon5 } from './Ellipse36Icon5.js';
import { Ellipse36Icon } from './Ellipse36Icon.js';
import { Ellipse37Icon } from './Ellipse37Icon.js';
import { Ellipse61Icon } from './Ellipse61Icon.js';
import { Ellipse62Icon } from './Ellipse62Icon.js';
import { Export } from './Export/Export.js';
import { Footer } from './Footer/Footer.js';
import { Forward } from './Forward/Forward.js';
import { Group199 } from './Group199/Group199.js';
import { Group210Icon } from './Group210Icon.js';
import { Header } from './Header/Header.js';
import { Product_TypeGridview } from './Product_TypeGridview/Product_TypeGridview.js';
import classes from './ProductDetail_Layout2.module.css';
import { Rectangle101Icon } from './Rectangle101Icon.js';
import { Rectangle316Icon } from './Rectangle316Icon.js';
import { Refresh } from './Refresh/Refresh.js';
import { Resize } from './Resize/Resize.js';
import { Tag } from './Tag/Tag.js';
import { Truck } from './Truck/Truck.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 695:1265 */
export const ProductDetail_Layout2: FC<Props> = memo(function ProductDetail_Layout2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Footer className={classes.footer} />
      <div className={classes.relatedProduct}>
        <Product_TypeGridview className={classes.frame21} classes={{ rectangle344: classes.rectangle344 }} />
        <Product_TypeGridview className={classes.frame23} classes={{ rectangle344: classes.rectangle3442 }} />
        <Product_TypeGridview className={classes.frame24} classes={{ rectangle344: classes.rectangle3443 }} />
        <Product_TypeGridview className={classes.frame22} classes={{ rectangle344: classes.rectangle3444 }} />
        <div className={classes.title}>
          <div className={classes.youMayAlsoLike}>You may also like</div>
          <div className={classes._10}>
            <_10Icon className={classes.icon16} />
          </div>
        </div>
      </div>
      <div className={classes.service}>
        <div className={classes.line16}></div>
        <div className={classes.line17}></div>
        <div className={classes.frame54}>
          <div className={classes.cODPolicy}>COD Policy</div>
          <Tag
            className={classes.tag}
            swap={{
              rectangle316: <Rectangle316Icon className={classes.icon} />,
              ellipse35: <Ellipse35Icon className={classes.icon2} />,
            }}
          />
          <Forward className={classes.forward} />
        </div>
        <div className={classes.frame55}>
          <div className={classes.returnPolicy}>Return Policy</div>
          <Refresh
            className={classes.refresh}
            swap={{
              ellipse61: <Ellipse61Icon className={classes.icon3} />,
              ellipse62: <Ellipse62Icon className={classes.icon4} />,
              back: <BackIcon className={classes.icon5} />,
              vector: <VectorIcon className={classes.icon6} />,
            }}
          />
          <Forward className={classes.forward2} />
        </div>
        <div className={classes.cARE}>CARE</div>
        <div className={classes.frame53}>
          <div className={classes.freeFlatRateShipping}>Free Flat Rate Shipping</div>
          <div className={classes.estimatedToBeDeliveredOn911202}>
            <div className={classes.textBlock}>Estimated to be delivered on </div>
            <div className={classes.textBlock2}>09/11/2021 - 12/11/2021.</div>
            <div className={classes.textBlock3}>
              <p></p>
            </div>
          </div>
          <Forward className={classes.forward3} />
          <Truck />
        </div>
      </div>
      <div className={classes.gallery}>
        <div className={classes.gallery2}>Gallery</div>
        <div className={classes.image16}></div>
        <div className={classes.image17}></div>
        <div className={classes.image18}></div>
      </div>
      <Button_SizeLStatePrimaryIcon2I className={classes.button} />
      <div className={classes.productVariaty}>
        <div className={classes.ringSize}>Ring Size</div>
        <Group199
          className={classes.group199}
          swap={{
            ellipse36: <Ellipse36Icon className={classes.icon7} />,
          }}
          text={{
            s: <div className={classes.s}>6</div>,
          }}
        />
        <Group199
          className={classes.group201}
          swap={{
            ellipse36: <Ellipse36Icon2 className={classes.icon8} />,
          }}
          text={{
            s: <div className={classes.s2}>8</div>,
          }}
        />
        <Group199
          className={classes.group202}
          swap={{
            ellipse36: <Ellipse36Icon3 className={classes.icon9} />,
          }}
          text={{
            s: <div className={classes.s3}>9</div>,
          }}
        />
        <Group199
          className={classes.group203}
          swap={{
            ellipse36: <Ellipse36Icon4 className={classes.icon10} />,
          }}
          text={{
            s: <div className={classes.s4}>10</div>,
          }}
        />
        <Group199
          className={classes.group204}
          swap={{
            ellipse36: <Ellipse36Icon5 className={classes.icon11} />,
          }}
          text={{
            s: <div className={classes.s5}>11</div>,
          }}
        />
        <div className={classes.frame52}>
          <div className={classes.group261}>
            <div className={classes.mOHAN}>MOHAN</div>
            <Export
              className={classes.export}
              classes={{ line7: classes.line7 }}
              swap={{
                vector: <VectorIcon2 className={classes.icon12} />,
                rectangle101: <Rectangle101Icon className={classes.icon13} />,
              }}
            />
          </div>
          <div className={classes.recycleBoucleKnitCardiganPink}>Recycle Boucle Knit Cardigan Pink</div>
          <div className={classes._120}>$120</div>
        </div>
      </div>
      <div className={classes.iMG}>
        <div className={classes.image15}></div>
        <div className={classes.rectangle429}></div>
        <div className={classes.rectangle430}></div>
        <div className={classes.rectangle431}></div>
        <div className={classes.rectangle432}></div>
        <div className={classes.line18}></div>
        <div className={classes.rectangle327}></div>
        <div className={classes.group210}>
          <Group210Icon className={classes.icon17} />
        </div>
        <div className={classes.ellipse37}>
          <Ellipse37Icon className={classes.icon18} />
        </div>
        <Resize
          className={classes.resize}
          swap={{
            arrow: <ArrowIcon className={classes.icon14} />,
            arrow2: <ArrowIcon2 className={classes.icon15} />,
          }}
        />
      </div>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
    </div>
  );
});
