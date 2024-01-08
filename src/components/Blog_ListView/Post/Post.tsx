import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Post.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle433?: string;
    root?: string;
  };
  text?: {
    _2021StyleGuideTheBiggestFallTr?: ReactNode;
    _4DaysAgo?: ReactNode;
  };
}
/* @figmaId 742:1567 */
export const Post: FC<Props> = memo(function Post(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle433 || ''} ${classes.rectangle433}`}></div>
      <div className={classes.theExcitementOfFallFashionIsHe}>
        The excitement of fall fashion is here and I’m already loving some of the trend forecasts{' '}
      </div>
      {props.text?._2021StyleGuideTheBiggestFallTr != null ? (
        props.text?._2021StyleGuideTheBiggestFallTr
      ) : (
        <div className={classes._2021StyleGuideTheBiggestFallTr}>
          <div className={classes.textBlock}>2021 Style Guide: </div>
          <div className={classes.textBlock2}>The Biggest Fall Trends</div>
        </div>
      )}
      {props.text?._4DaysAgo != null ? props.text?._4DaysAgo : <div className={classes._4DaysAgo}>4 days ago</div>}
    </div>
  );
});
