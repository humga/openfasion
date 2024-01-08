import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Bookmark.module.css';
import { BookmarkIcon } from './BookmarkIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    bookmark?: ReactNode;
  };
}
/* @figmaId 112:563 */
export const Bookmark: FC<Props> = memo(function Bookmark(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bookmark}>{props.swap?.bookmark || <BookmarkIcon className={classes.icon} />}</div>
    </div>
  );
});
