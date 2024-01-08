import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import classes from './AddNewAddress.module.css';
import { Button_SizeLStatePrimaryIconLe } from './Button_SizeLStatePrimaryIconLe/Button_SizeLStatePrimaryIconLe.js';
import { Header } from './Header/Header.js';
import { Plus } from './Plus/Plus.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 837:3163 */
export const AddNewAddress: FC<Props> = memo(function AddNewAddress(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.addShippingAdress}>Add shipping adress</div>
      <div className={classes._3}>
        <_3Icon className={classes.icon3} />
      </div>
      <div className={classes.inputTextLightFocus}>
        <div className={classes.input}>
          <div className={classes.background}></div>
          <div className={classes.line}></div>
          <div className={classes.text}>Last name</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus2}>
        <div className={classes.input2}>
          <div className={classes.background2}></div>
          <div className={classes.line2}></div>
          <div className={classes.text2}>First name</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus3}>
        <div className={classes.input3}>
          <div className={classes.background3}></div>
          <div className={classes.line3}></div>
          <div className={classes.text3}>ZIP code</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus4}>
        <div className={classes.input4}>
          <div className={classes.background4}></div>
          <div className={classes.line4}></div>
          <div className={classes.text4}>State</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus5}>
        <div className={classes.input5}>
          <div className={classes.background5}></div>
          <div className={classes.line5}></div>
          <div className={classes.text5}>Adress</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus6}>
        <div className={classes.input6}>
          <div className={classes.background6}></div>
          <div className={classes.line6}></div>
          <div className={classes.text6}>City</div>
        </div>
      </div>
      <div className={classes.inputTextLightFocus7}>
        <div className={classes.input7}>
          <div className={classes.background7}></div>
          <div className={classes.line7}></div>
          <div className={classes.text7}>Phone number</div>
        </div>
      </div>
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
          checkout: <div className={classes.checkout}>Add now</div>,
        }}
      />
    </div>
  );
});
