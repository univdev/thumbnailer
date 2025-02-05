import { Box, Typography } from '@mui/material';
import { THUMBNAIL_TYPE, ThumbnailType } from './ThumbnailType.constant';
import { AspectRatio } from '@/shared/ui/AspectRatio';

export type ThumbnailViewerProps = {
  type: ThumbnailType;
  color?: string;
  image?: string;
  gradient?: string;
  title?: string;
  subText?: string;
  titleSize?: string;
  subTextSize?: string;
  titleColor?: string;
  subTextColor?: string;
  showTitle?: boolean;
  showSubText?: boolean;
  horizontalPadding?: string;
};

export const THUMBNAIL_CONTAINER_ID = 'ThumbnailViewer';

export default function ThumbnailViewer({
  type,
  color,
  image,
  gradient,
  title,
  subText,
  titleColor,
  subTextColor,
  titleSize,
  subTextSize,
  showTitle = true,
  showSubText = true,
  horizontalPadding = '24px',
}: ThumbnailViewerProps) {
  const getBackground = () => {
    if (type === THUMBNAIL_TYPE.gradient) return gradient;
    if (type === THUMBNAIL_TYPE.image) return `url(${image})`;
    if (type === THUMBNAIL_TYPE.color) return color;
  };

  const nl2br = (text: string) => text.replaceAll('\n', '<br />');

  return (
    <AspectRatio ratio={630 / 1260}>
      <Box
        id={THUMBNAIL_CONTAINER_ID}
        sx={{
          width: '100%',
          height: '100%',
          boxShadow: 8,
          userSelect: 'none',
          overflow: 'hidden',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={{
            width: '100%',
            height: '100%',
            px: horizontalPadding,
            background: getBackground(),
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Box display="flex" flexDirection="column" rowGap={4}>
            {showTitle && (
              <Typography
                variant="h3"
                sx={{
                  color: titleColor,
                  fontSize: titleSize,
                }}
                dangerouslySetInnerHTML={{ __html: nl2br(title || '') }}
              />
            )}
            {showSubText && (
              <Typography
                variant="h6"
                sx={{
                  color: subTextColor,
                  fontSize: subTextSize,
                }}
                dangerouslySetInnerHTML={{ __html: nl2br(subText || '') }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </AspectRatio>
  );
}
