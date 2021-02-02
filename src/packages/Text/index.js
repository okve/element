import React, { forwardRef } from 'react';
import cx from 'classnames';
import { CLASS_PREFIX } from '../../constants';

const Text = ({ text, className, ...restProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(`${CLASS_PREFIX}-text`, className)}
      {...restProps}
    >
      {text}
    </div>
  );
};

export default forwardRef(Text);
