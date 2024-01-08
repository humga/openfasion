import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Bookmark } from '../Bookmark/Bookmark.js';
import { BookmarkIcon } from './BookmarkIcon.js';
import classes from './Post.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle434?: string;
    root?: string;
  };
}
/* @figmaId 746:1856 */
export const Post: FC<Props> = memo(function Post(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle434 || ''} ${classes.rectangle434}`}></div>
      <div className={classes.rectangle435}></div>
      <div className={classes._2021StyleGuideTheBiggestFallTr}>
        <div className={classes.textBlock}>2021 Style Guide: The Biggest </div>
        <div className={classes.textBlock2}>Fall Trends</div>
      </div>
      <div className={classes.frame30}>
        <div className={classes.Fashion}>#Fashion</div>
      </div>
      <div className={classes.frame31}>
        <div className={classes.Tips}>#Tips</div>
      </div>
      <Bookmark
        className={classes.bookmark}
        swap={{
          bookmark: <BookmarkIcon className={classes.icon} />,
        }}
      />
      <div className={classes._4DaysAgo}>4 days ago</div>
    </div>
  );
});
