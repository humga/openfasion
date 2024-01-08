import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Delete } from './Delete/Delete.js';
import { Search2 } from './Search2/Search2.js';
import classes from './Search.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 660:812 */
export const Search: FC<Props> = memo(function Search(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Search2 className={classes.search} />
      <div className={classes.line15}></div>
      <div className={classes.searchItems}>Search items</div>
      <Delete
        className={classes.delete}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.popularSearchTerms}>Popular search terms</div>
      <div className={classes.trendDressBagTshirtBeautyAcces}>
        <div className={classes.textBlock}>Trend</div>
        <div className={classes.textBlock2}>Dress</div>
        <div className={classes.textBlock3}>Bag</div>
        <div className={classes.textBlock4}>Tshirt</div>
        <div className={classes.textBlock5}>Beauty</div>
        <div className={classes.textBlock6}>Accessories</div>
      </div>
    </div>
  );
});
