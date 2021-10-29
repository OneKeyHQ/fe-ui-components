import React, { FC, ComponentProps } from 'react';
import ReactImageFallback from './react-image-fallback';
import Icon from '../Icon';

type ImageProps = ComponentProps<typeof ReactImageFallback>;

const Image: FC<ImageProps> = (props) => {
  return (
    <ReactImageFallback
      fallbackImage={
        <Icon
          className="okd-w-full okd-h-full okd-text-gray-400"
          name="QuestionMarkOutline"
        />
      }
      {...props}
    />
  );
}

export default Image;
