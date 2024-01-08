import { memo } from 'react';
import type { FC, ReactNode } from 'react';

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
    root?: string;
  };
  swap?: {
    vector7?: ReactNode;
    vector10?: ReactNode;
    vector9?: ReactNode;
    vector?: ReactNode;
    vector2?: ReactNode;
    rectangle319?: ReactNode;
    vector3?: ReactNode;
    group?: ReactNode;
  };
  hide?: {
    rectangle331?: boolean;
  };
}
/* @figmaId 658:708 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.rectangle331 && <div className={classes.rectangle331}></div>}
      <Menu
        className={classes.menu}
        swap={{
          vector7: props.swap?.vector7,
          vector10: props.swap?.vector10,
          vector9: props.swap?.vector9,
        }}
      />
      <Search
        className={classes.search}
        swap={{
          vector: props.swap?.vector,
          vector2: props.swap?.vector2,
        }}
      />
      <ShoppingBag
        className={classes.shoppingBag}
        swap={{
          rectangle319: props.swap?.rectangle319,
          vector: props.swap?.vector3,
        }}
      />
      <Logo
        className={classes.logo}
        classes={{ group: classes.group }}
        swap={{
          group: props.swap?.group || (
            <div className={classes.group}>
              <GroupIcon className={classes.icon} />
            </div>
          ),
        }}
      />
    </div>
  );
});
