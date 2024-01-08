import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import { _5Icon } from './_5Icon.js';
import { _9Icon } from './_9Icon.js';
import { BrandIcon } from './BrandIcon.js';
import { ButtonMSecondaryRight } from './ButtonMSecondaryRight/ButtonMSecondaryRight.js';
import { Footer } from './Footer/Footer.js';
import { ForwardArrow } from './ForwardArrow/ForwardArrow.js';
import { Frame46 } from './Frame46/Frame46.js';
import { Group11Icon } from './Group11Icon.js';
import { Header } from './Header/Header.js';
import classes from './HomePage.module.css';
import { Icon } from './Icon.js';
import { InstagramIcon } from './InstagramIcon.js';
import { Logo } from './Logo/Logo.js';
import { Product } from './Product/Product.js';
import { Product_TypeHomepage } from './Product_TypeHomepage/Product_TypeHomepage.js';
import { Tag_StyleFill } from './Tag_StyleFill/Tag_StyleFill.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 418:616 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.banner}>
        <div className={classes.image10}></div>
        <div className={classes.luxury}>Luxury </div>
        <div className={classes.unnamed}>&amp; </div>
        <div className={classes.rectangle327}></div>
        <div className={classes.rectangle329}></div>
        <div className={classes.rectangle328}></div>
        <div className={classes.fashion}>Fashion</div>
        <div className={classes.accessories}>Accessories</div>
        <button className={classes.button2}>
          <div className={classes.exploreCollection}>Explore Collection</div>
        </button>
      </div>
      <div className={classes.newArrival}>
        <ButtonMSecondaryRight
          className={classes.button}
          swap={{
            plus: (
              <ForwardArrow
                className={classes.forwardArrow}
                classes={{ line7: classes.line7 }}
                swap={{
                  vector: <VectorIcon className={classes.icon} />,
                }}
              />
            ),
          }}
          text={{
            loadMore: <div className={classes.loadMore}>Explore More</div>,
          }}
        />
        <Product_TypeHomepage
          className={classes.product6}
          classes={{ rectangle325: classes.rectangle325, frame1: classes.frame1 }}
          text={{
            _21WNReversibleAngoraCardigan: (
              <div className={classes._21WNReversibleAngoraCardigan}>21WN reversible angora cardigan</div>
            ),
          }}
        />
        <Product_TypeHomepage className={classes.product4} classes={{ rectangle325: classes.rectangle3252 }} />
        <Product_TypeHomepage className={classes.product3} classes={{ rectangle325: classes.rectangle3253 }} />
        <Product_TypeHomepage
          className={classes.product5}
          classes={{ rectangle325: classes.rectangle3254, frame1: classes.frame12 }}
          text={{
            _21WNReversibleAngoraCardigan: <div className={classes._21WNReversibleAngoraCardigan2}>Oblong bag</div>,
          }}
        />
        <div className={classes.title}>
          <div className={classes.newArrival2}>New Arrival</div>
          <div className={classes._3}>
            <_3Icon className={classes.icon2} />
          </div>
        </div>
        <div className={classes.tab}>
          <div className={classes.all}>All</div>
          <div className={classes.apparel}>Apparel</div>
          <div className={classes.dress}>Dress</div>
          <div className={classes.tshirt}>Tshirt</div>
          <div className={classes.bag}>Bag</div>
          <div className={classes.rectangle3272}></div>
        </div>
      </div>
      <div className={classes.brand}>
        <BrandIcon className={classes.icon3} />
      </div>
      <div className={classes.collection}>
        <div className={classes.collections}>Collections</div>
        <div className={classes.frame2}>
          <div className={classes.image12}></div>
          <div className={classes._10}>10</div>
          <div className={classes.october}>October</div>
          <div className={classes.collection2}>Collection</div>
        </div>
        <div className={classes.image9}></div>
        <div className={classes.autumn}>Autumn</div>
        <div className={classes.collection3}>Collection</div>
      </div>
      <div className={classes.video}>
        <div className={classes.image122}></div>
        <div className={classes.rectangle341}></div>
        <div className={classes.group11}>
          <Group11Icon className={classes.icon4} />
        </div>
      </div>
      <div className={classes.product8}>
        <div className={classes.rectangle3273}></div>
        <div className={classes.rectangle3292}></div>
        <div className={classes.rectangle3282}></div>
        <Product />
        <Product
          className={classes.product}
          classes={{ rectangle321: classes.rectangle321 }}
          text={{
            harrisTweedThreeButtonJacket: (
              <div className={classes.harrisTweedThreeButtonJacket}>Cashmere Blend Cropped Jacket SW1WJ285-AM</div>
            ),
          }}
        />
        <Product
          className={classes.product2}
          classes={{ rectangle321: classes.rectangle3212 }}
          text={{
            harrisTweedThreeButtonJacket: (
              <div className={classes.harrisTweedThreeButtonJacket2}>Harris Tweed Three-button Jacket</div>
            ),
          }}
        />
        <Product
          className={classes.product7}
          classes={{ rectangle321: classes.rectangle3213 }}
          text={{
            harrisTweedThreeButtonJacket: (
              <div className={classes.harrisTweedThreeButtonJacket3}>1WN reversible angora cardigan</div>
            ),
          }}
        />
        <div className={classes.titile}>
          <div className={classes._9}>
            <_9Icon className={classes.icon5} />
          </div>
          <div className={classes.justForYou}>Just for You</div>
        </div>
      </div>
      <div className={classes.trending}>
        <div className={classes.Trending}>@Trending</div>
        <Tag_StyleFill className={classes.frame11} />
        <Tag_StyleFill
          className={classes.frame8}
          text={{
            _2021: <div className={classes._2021}>#dress</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame9}
          text={{
            _2021: <div className={classes._20212}>#autumncollection</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame5}
          text={{
            _2021: <div className={classes._20213}>#spring</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame6}
          text={{
            _2021: <div className={classes._20214}>#collection</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame7}
          text={{
            _2021: <div className={classes._20215}>#fall</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame10}
          text={{
            _2021: <div className={classes._20216}>#openfashion</div>,
          }}
        />
      </div>
      <div className={classes.openfashion}>
        <div className={classes.rectangle342}></div>
        <div className={classes.makingALuxuriousLifestyleAcces}>
          Making a luxurious lifestyle accessible for a generous group of women is our daily drive.
        </div>
        <div className={classes.fastShippingFreeOnOrdersOver25}>Fast shipping. Free on orders over $25.</div>
        <div className={classes.miroodlesSticker}></div>
        <div className={classes.sustainableProcessFromStartToF}>
          <div className={classes.textBlock}>Sustainable process </div>
          <div className={classes.textBlock2}>from start to finish.</div>
        </div>
        <div className={classes.miroodlesSticker2}></div>
        <div className={classes.unnamed2}>
          <Icon className={classes.icon6} />
        </div>
        <div className={classes._5}>
          <_5Icon className={classes.icon7} />
        </div>
        <div className={classes.uniqueDesignsAndHighQualityMat}>
          <div className={classes.textBlock3}>Unique designs </div>
          <div className={classes.textBlock4}>and high-quality materials.</div>
        </div>
        <div className={classes.miroodlesSticker3}></div>
        <div className={classes.fastShippingFreeOnOrdersOver252}>
          <div className={classes.textBlock5}>Fast shipping. </div>
          <div className={classes.textBlock6}>Free on orders over $25.</div>
        </div>
        <div className={classes.miroodlesSticker4}></div>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.followUs}>
        <div className={classes.followUs2}>Follow Us</div>
        <div className={classes.instagram}>
          <InstagramIcon className={classes.icon8} />
        </div>
        <div className={classes.rectangle333}></div>
        <Frame46
          className={classes.frame47}
          text={{
            Mia: <div className={classes.Mia}>@_jihyn</div>,
          }}
        />
        <div className={classes.rectangle332}></div>
        <Frame46 />
        <div className={classes.rectangle334}></div>
        <Frame46 className={classes.frame48} />
        <div className={classes.rectangle335}></div>
        <Frame46
          className={classes.frame49}
          text={{
            Mia: <div className={classes.Mia2}>@_jihyn</div>,
          }}
        />
      </div>
      <Footer />
    </div>
  );
});
