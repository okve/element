import React, { forwardRef } from 'react';
import cx from 'classnames';
import { CLASS_PREFIX } from '../../constants';

const Container = ({ text, className, ...restProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(`${CLASS_PREFIX}-container`, className)}
      {...restProps}
    />
  );
};

export default forwardRef(Container);
