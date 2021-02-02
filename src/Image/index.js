import React, { forwardRef } from 'react';
import cx from 'classnames';
import { CLASS_PREFIX } from '../../constants';

const Image = ({ className, src, title, alt, ...restProps }, ref) => {
  return (
    <img
      ref={ref}
      className={cx(`${CLASS_PREFIX}-image`, className)}
      src={src}
      title={title}
      alt={alt}
      {...restProps}
    />
  );
};

export default forwardRef(Image);
