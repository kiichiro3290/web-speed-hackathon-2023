//tmp
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
  faPlay,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import type { FC } from 'react';

import * as styles from './Icon.styles';

library.add(faShoppingCart, faArrowLeft, faArrowRight, faUser, faPlay, faCheckCircle);
dom.watch();
type Icons = 'FaShoppingCart' | 'FaArrowLeft' | 'FaArrowRight' | 'FaUser' | 'FaPlay' | 'FaCheckCircle';

// パスカルケースをケバブケースにする
const PascalToKebab = (pascal: string) => {
  console.log(PascalToKebab);
  return pascal
    .replace(/[A-Z]/g, (searchStr: string) => {
      return '-' + searchStr.charAt(0).toLowerCase();
    })
    .slice(1);
};

type Props = {
  type: Icons;
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  return (
    <span className={classNames(styles.container({ color, height, width }))}>
      <i className={classNames('fas', PascalToKebab(type))} />
    </span>
  );
};
