import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Logo } from '../Logo/Logo.js';
import { Menu } from '../Menu/Menu.js';
import { Search } from '../Search/Search.js';
import { ShoppingBag } from '../ShoppingBag/ShoppingBag.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './Header.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle331?: string;
    root?: string;
  };
}
/* @figmaId 658:708 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle331 || ''} ${classes.rectangle331}`}></div>
      <Menu className={classes.menu} />
      <Search className={classes.search} />
      <ShoppingBag className={classes.shoppingBag} />
      <Logo
        className={classes.logo}
        classes={{ group: classes.group }}
        swap={{
          group: (
            <div className={classes.group}>
              <GroupIcon className={classes.icon} />
            </div>
          ),
        }}
      />
    </div>
  );
});
