import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _10Icon } from './_10Icon.js';
import { ArrowIcon2 } from './ArrowIcon2.js';
import { ArrowIcon } from './ArrowIcon.js';
import { BackIcon } from './BackIcon.js';
import { Button_SizeLStatePrimaryIcon2I } from './Button_SizeLStatePrimaryIcon2I/Button_SizeLStatePrimaryIcon2I.js';
import { DoNotBleachIcon } from './DoNotBleachIcon.js';
import { DoNotTumbleDryIcon } from './DoNotTumbleDryIcon.js';
import { DoNotWashIcon } from './DoNotWashIcon.js';
import { Ellipse35Icon } from './Ellipse35Icon.js';
import { Ellipse36Icon2 } from './Ellipse36Icon2.js';
import { Ellipse36Icon3 } from './Ellipse36Icon3.js';
import { Ellipse36Icon } from './Ellipse36Icon.js';
import { Ellipse37Icon } from './Ellipse37Icon.js';
import { Ellipse38Icon } from './Ellipse38Icon.js';
import { Ellipse40Icon } from './Ellipse40Icon.js';
import { Ellipse61Icon } from './Ellipse61Icon.js';
import { Ellipse62Icon } from './Ellipse62Icon.js';
import { Export } from './Export/Export.js';
import { Footer } from './Footer/Footer.js';
import { Forward } from './Forward/Forward.js';
import { Group199 } from './Group199/Group199.js';
import { Group205Icon } from './Group205Icon.js';
import { Header } from './Header/Header.js';
import { IronLowTemperatureIcon } from './IronLowTemperatureIcon.js';
import { Product_TypeGridview } from './Product_TypeGridview/Product_TypeGridview.js';
import classes from './ProductDetail.module.css';
import { Rectangle101Icon } from './Rectangle101Icon.js';
import { Rectangle316Icon } from './Rectangle316Icon.js';
import { Refresh } from './Refresh/Refresh.js';
import { Resize } from './Resize/Resize.js';
import { Shipping } from './Shipping/Shipping.js';
import { Tag } from './Tag/Tag.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 678:1162 */
export const ProductDetail: FC<Props> = memo(function ProductDetail(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Footer className={classes.footer} />
      <div className={classes.youAlsoMayLike}>
        <div className={classes.title}>
          <div className={classes.youMayAlsoLike}>You may also like</div>
          <div className={classes._10}>
            <_10Icon className={classes.icon14} />
          </div>
        </div>
        <Product_TypeGridview className={classes.frame21} classes={{ rectangle344: classes.rectangle344 }} />
        <Product_TypeGridview className={classes.frame24} classes={{ rectangle344: classes.rectangle3442 }} />
        <Product_TypeGridview
          className={classes.frame23}
          classes={{ rectangle344: classes.rectangle3443 }}
          text={{
            _21WN: <div className={classes._21WN}>lamerei</div>,
          }}
        />
        <Product_TypeGridview
          className={classes.frame25}
          classes={{ rectangle344: classes.rectangle3444 }}
          text={{
            _21WN: <div className={classes._21WN2}>lamerei</div>,
          }}
        />
      </div>
      <div className={classes.productDetail}>
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
        <div className={classes.weWorkWithMonitoringProgrammes}>
          We work with monitoring programmes to ensure compliance with safety, health and quality standards for our
          products.{' '}
        </div>
        <div className={classes.toKeepYourJacketsAndCoatsClean}>
          To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a
          clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are
          respectful of the environment.
        </div>
        <div className={classes.mATERIALS}>MATERIALS</div>
        <div className={classes.cARE}>CARE</div>
        <div className={classes.cARE2}>CARE</div>
        <div className={classes.doNotUseBleach}>Do not use bleach</div>
        <div className={classes.doNotBleach}>
          <DoNotBleachIcon className={classes.icon15} />
        </div>
        <div className={classes.doNotTumbleDry}>Do not tumble dry</div>
        <div className={classes.doNotTumbleDry2}>
          <DoNotTumbleDryIcon className={classes.icon16} />
        </div>
        <div className={classes.dryCleanWithTetrachloroethylen}>Dry clean with tetrachloroethylene</div>
        <div className={classes.doNotWash}>
          <DoNotWashIcon className={classes.icon17} />
        </div>
        <div className={classes.ironAtAMaximumOf110C230F}>Iron at a maximum of 110ºC/230ºF</div>
        <div className={classes.ironLowTemperature}>
          <IronLowTemperatureIcon className={classes.icon18} />
        </div>
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
          <Shipping className={classes.shipping} />
        </div>
      </div>
      <Button_SizeLStatePrimaryIcon2I className={classes.button} />
      <div className={classes.productVariation}>
        <div className={classes.ellipse38}>
          <Ellipse38Icon className={classes.icon19} />
        </div>
        <div className={classes.ellipse40}>
          <Ellipse40Icon className={classes.icon20} />
        </div>
        <div className={classes.group205}>
          <Group205Icon className={classes.icon21} />
        </div>
        <div className={classes.color}>Color</div>
        <div className={classes.size}>Size</div>
        <Group199
          className={classes.group199}
          swap={{
            ellipse36: <Ellipse36Icon className={classes.icon7} />,
          }}
          text={{
            s: <div className={classes.s}>S</div>,
          }}
        />
        <Group199
          className={classes.group200}
          swap={{
            ellipse36: <Ellipse36Icon2 className={classes.icon8} />,
          }}
          text={{
            s: <div className={classes.s2}>M</div>,
          }}
        />
        <Group199
          className={classes.group201}
          swap={{
            ellipse36: <Ellipse36Icon3 className={classes.icon9} />,
          }}
          text={{
            s: <div className={classes.s3}>L</div>,
          }}
        />
        <div className={classes.frame51}>
          <div className={classes.group261}>
            <div className={classes.mOHAN}>MOHAN</div>
            <Export
              className={classes.export}
              classes={{ line7: classes.line7 }}
              swap={{
                vector: <VectorIcon2 className={classes.icon10} />,
                rectangle101: <Rectangle101Icon className={classes.icon11} />,
              }}
            />
          </div>
          <div className={classes.recycleBoucleKnitCardiganPink}>Recycle Boucle Knit Cardigan Pink</div>
          <div className={classes._120}>$120</div>
        </div>
      </div>
      <div className={classes.iMG}>
        <div className={classes.image15}></div>
        <div className={classes.rectangle327}></div>
        <div className={classes.rectangle329}></div>
        <div className={classes.rectangle330}></div>
        <div className={classes.rectangle3312}></div>
        <div className={classes.rectangle328}></div>
        <div className={classes.ellipse37}>
          <Ellipse37Icon className={classes.icon22} />
        </div>
        <Resize
          className={classes.resize}
          swap={{
            arrow: <ArrowIcon className={classes.icon12} />,
            arrow2: <ArrowIcon2 className={classes.icon13} />,
          }}
        />
      </div>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
    </div>
  );
});
