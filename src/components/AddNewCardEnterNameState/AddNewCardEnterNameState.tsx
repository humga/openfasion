import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import classes from './AddNewCardEnterNameState.module.css';
import { Button_SizeLStatePrimaryIconLe } from './Button_SizeLStatePrimaryIconLe/Button_SizeLStatePrimaryIconLe.js';
import { Header } from './Header/Header.js';
import { MastercardIcon } from './MastercardIcon.js';
import { Plus } from './Plus/Plus.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 839:3395 */
export const AddNewCardEnterNameState: FC<Props> = memo(function AddNewCardEnterNameState(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.paymentMethod}>Payment method</div>
      <div className={classes._3}>
        <_3Icon className={classes.icon3} />
      </div>
      <div className={classes.background}></div>
      <div className={classes.background2}></div>
      <div className={classes.background3}></div>
      <div className={classes.irisWatson}>Iris Watson</div>
      <div className={classes._325}>03/25</div>
      <div className={classes._2365365423653698}>2365 3654 2365 3698</div>
      <div className={classes.masterCard}>
        <MastercardIcon className={classes.icon4} />
      </div>
      <div className={classes.inputTextLightFocus}>
        <div className={classes.input}>
          <div className={classes.background4}></div>
          <div className={classes.line}></div>
          <div className={classes.text}>CVV</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus2}>
        <div className={classes.input2}>
          <div className={classes.background5}></div>
          <div className={classes.line2}></div>
          <div className={classes.text2}>Exp Date</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus3}>
        <div className={classes.input3}>
          <div className={classes.background6}></div>
          <div className={classes.line3}></div>
          <div className={classes.text3}>Exp Month</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus4}>
        <div className={classes.input4}>
          <div className={classes.background7}></div>
          <div className={classes.line4}></div>
          <div className={classes.text4}>Card Number</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus5}>
        <div className={classes.input5}>
          <div className={classes.background8}></div>
          <div className={classes.line5}></div>
          <div className={classes.text5}>Name On Card</div>
          <div className={classes.text6}>OPEN Fashion</div>
        </div>
      </div>
      <div className={classes.rectangle327}></div>
      <div className={classes.rectangle329}></div>
      <div className={classes.rectangle328}></div>
      <div className={classes.PleaseEnterYourE}>*Please enter your exactly as it appears on your card</div>
      <Button_SizeLStatePrimaryIconLe
        className={classes.button}
        classes={{ content: classes.content }}
        swap={{
          shoppingBag: (
            <Plus
              className={classes.plus}
              swap={{
                vector4: <Vector4Icon className={classes.icon} />,
                vector5: <Vector5Icon className={classes.icon2} />,
              }}
            />
          ),
        }}
        text={{
          checkout: <div className={classes.checkout}>Add Card</div>,
        }}
      />
    </div>
  );
});
