import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import classes from './Blog_GridView.module.css';
import { Button_SizeMStateSecondaryIcon } from './Button_SizeMStateSecondaryIcon/Button_SizeMStateSecondaryIcon.js';
import { Footer } from './Footer/Footer.js';
import { Header } from './Header/Header.js';
import { Plus } from './Plus/Plus.js';
import { Post } from './Post/Post.js';
import { Tag_StyleFill } from './Tag_StyleFill/Tag_StyleFill.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector5Icon } from './Vector5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 746:1759 */
export const Blog_GridView: FC<Props> = memo(function Blog_GridView(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <div className={classes.title}>
        <div className={classes.blog}>Blog</div>
        <div className={classes._3}>
          <_3Icon className={classes.icon3} />
        </div>
      </div>
      <div className={classes.tag2}>
        <Tag_StyleFill
          className={classes.tag}
          text={{
            _2021: <div className={classes._2021}>Fashion</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame5}
          text={{
            _2021: <div className={classes._20212}>Promo</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame6}
          text={{
            _2021: <div className={classes._20213}>Policy</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame7}
          text={{
            _2021: <div className={classes._20214}>Lookbook</div>,
          }}
        />
        <Tag_StyleFill
          className={classes.frame8}
          text={{
            _2021: <div className={classes._20215}>Sale</div>,
          }}
        />
      </div>
      <Footer className={classes.footer} />
      <div className={classes.frame43}>
        <Post />
        <Post className={classes.post} classes={{ rectangle434: classes.rectangle434 }} />
        <Post className={classes.post2} classes={{ rectangle434: classes.rectangle4342 }} />
        <Post className={classes.post3} classes={{ rectangle434: classes.rectangle4343 }} />
      </div>
      <Button_SizeMStateSecondaryIcon
        className={classes.button}
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
          submit: <div className={classes.submit}>Load more</div>,
        }}
      />
    </div>
  );
});
