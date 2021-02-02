import React, { forwardRef } from 'react';
import cx from 'classnames';
import { CLASS_PREFIX } from '../../constants';
import Icon from '../Icon';

import './index.less';

const BUTTON_PREFIX = `${CLASS_PREFIX}-button`;

const Button = (
  { text, type = 'primary', size = 'lg', status = 'normal', icon, iconColor, className, ...restProps },
  ref,
) => {
  return (
    <button
      ref={ref}
      className={cx(
        BUTTON_PREFIX,
        `${BUTTON_PREFIX}-${type}`,
        `${BUTTON_PREFIX}-${size}`,
        `${BUTTON_PREFIX}-${status}`,
        className,
      )}
      {...restProps}
    >
      <span>
        {icon && <Icon type={icon} style={{ color: iconColor }} />}
        {text}
      </span>
    </button>
  );
};

export default forwardRef(Button);
