import React, { forwardRef } from 'react';
import cx from 'classnames';
import { CLASS_PREFIX } from '../../constants';

const Icon = ({ text, className, ...restProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(`${CLASS_PREFIX}-icon`, className)}
      {...restProps}
    >
      {text}
    </div>
  );
};

export default forwardRef(Icon);
