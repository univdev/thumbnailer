import { AspectRatio } from '@/shared/shadcn/components/ui/aspect-ratio';
import { FC } from 'react';
import { BackgroundType } from './BackgroundType.type';
import { BACKGROUND_TYPE } from './BackgroundType.constant';

export type ThumbnailViewerProps = {
  backgroundType?: BackgroundType;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  showTitle?: boolean;
  showSubText?: boolean;
  titleColor: string;
  titleText: string;
  subTextColor: string;
  subText: string;
  padding?: string;
  titleSize?: string;
  subTextSize?: string;
};

export const ThumbnailViewer: FC<ThumbnailViewerProps> = ({
  backgroundType = BACKGROUND_TYPE.COLOR,
  backgroundColor,
  backgroundImage,
  backgroundGradient,
  showTitle = true,
  showSubText = true,
  titleText,
  titleColor,
  subTextColor,
  subText,
  padding,
  titleSize = '48px',
  subTextSize = '24px',
}) => {
  const backgroundGradientStyle =
    backgroundType === BACKGROUND_TYPE.GRADIENT ? `linear-gradient(to right, ${backgroundGradient})` : undefined;

  return (
    <AspectRatio
      id="thumbnail-viewer"
      className={`overflow-hidden flex flex-col justify-center select-none bg-cover bg-center`}
      ratio={16 / 9}
      style={{
        padding,
        backgroundColor: backgroundType === BACKGROUND_TYPE.COLOR ? backgroundColor : undefined,
        backgroundImage: backgroundType === BACKGROUND_TYPE.GRADIENT ? backgroundGradientStyle : backgroundImage,
      }}
    >
      <div className="flex flex-col w-full gap-4">
        {showTitle && (
          <h3
            className="font-bold"
            dangerouslySetInnerHTML={{ __html: titleText.replace(/\n/g, '<br />') }}
            style={{ color: titleColor, fontSize: titleSize }}
          />
        )}
        {showSubText && (
          <h6
            style={{ color: subTextColor, fontSize: subTextSize }}
            dangerouslySetInnerHTML={{ __html: subText.replace(/\n/g, '<br />') }}
          />
        )}
      </div>
    </AspectRatio>
  );
};
