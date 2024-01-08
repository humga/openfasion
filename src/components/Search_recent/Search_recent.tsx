import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Delete } from './Delete/Delete.js';
import { Frame35 } from './Frame35/Frame35.js';
import { Search } from './Search/Search.js';
import classes from './Search_recent.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 823:2054 */
export const Search_recent: FC<Props> = memo(function Search_recent(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Search className={classes.search} />
      <div className={classes.line15}></div>
      <div className={classes.searchItems}>Search items</div>
      <Delete
        className={classes.delete}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.popularSearchTerms}>Popular search terms</div>
      <div className={classes.recentSearch}>Recent search</div>
      <div className={classes.trendDressBagTshirtBeautyAcces}>
        <div className={classes.textBlock}>Trend</div>
        <div className={classes.textBlock2}>Dress</div>
        <div className={classes.textBlock3}>Bag</div>
        <div className={classes.textBlock4}>Tshirt</div>
        <div className={classes.textBlock5}>Beauty</div>
        <div className={classes.textBlock6}>Accessories</div>
      </div>
      <Frame35 />
      <Frame35
        className={classes.frame36}
        text={{
          dress: <div className={classes.dress}>Collection</div>,
        }}
      />
      <Frame35
        className={classes.frame37}
        text={{
          dress: <div className={classes.dress2}>Nike</div>,
        }}
      />
    </div>
  );
});
