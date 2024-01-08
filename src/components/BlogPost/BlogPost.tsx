import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './BlogPost.module.css';
import { Bookmark } from './Bookmark/Bookmark.js';
import { BookmarkIcon } from './BookmarkIcon.js';
import { Footer } from './Footer/Footer.js';
import { Header } from './Header/Header.js';

interface Props {
  className?: string;
}
/* @figmaId 746:1904 */
export const BlogPost: FC<Props> = memo(function BlogPost(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Header className={classes.header} classes={{ rectangle331: classes.rectangle331 }} />
      <Footer className={classes.footer} />
      <div className={classes.rectangle434}></div>
      <div className={classes._2021StyleGuideTheBiggestFallTr}>2021 Style Guide: The Biggest Fall Trends</div>
      <Bookmark
        className={classes.bookmark}
        swap={{
          bookmark: <BookmarkIcon className={classes.icon} />,
        }}
      />
      <div className={classes.youGuysKnowHowMuchILoveMixingH}>
        You guys know how much I love mixing high and low-end – it’s the best way to get the most bang for your buck
        while still elevating your wardrobe. The same goes for handbags! And honestly they are probably the best pieces
        to mix and match. I truly think the key to completing a look is with a great bag and I found so many this year
        that I wanted to share a round-up of my most worn handbags.
      </div>
      <div className={classes.iFoundThisSaintLaurentCanvasHa}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>I found this </span>
          <span className={classes.label2}>Saint Laurent canvas handbag</span>
          <span className={classes.label3}>
            {' '}
            this summer and immediately fell in love. The neutral fabrics are so beautiful and I like how this handbag
            can also carry into fall. The mini Fendi bucket bag with the sheer fabric is so fun and such a statement
            bag. Also this DeMellier off white bag is so cute to carry to a dinner with you or going out, it’s small but
            not too small to fit your phone and keys still.
          </span>
        </p>
      </div>
      <div className={classes.image14}></div>
      <div className={classes.rectangle327}></div>
      <div className={classes.rectangle329}></div>
      <div className={classes.rectangle328}></div>
      <div className={classes.postedByOpenFashion}>Posted by OpenFashion |</div>
      <div className={classes._3DaysAgo}>3 Days ago</div>
      <div className={classes.frame30}>
        <div className={classes.Fashion}>#Fashion</div>
      </div>
      <div className={classes.frame31}>
        <div className={classes.Tips}>#Tips</div>
      </div>
    </div>
  );
});
