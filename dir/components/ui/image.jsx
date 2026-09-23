import * as React from 'react';

export const Image = React.forwardRef(function Image({ src, alt = '', ...props }, ref) {
  return <img ref={ref} src={src} alt={alt} {...props} />;
});
