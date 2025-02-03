import { useThumbnailStore } from '@/entities/Thumbnail/Thumbnail.store';
import { ThumbnailViewer } from '@/entities/Thumbnail/ThumbnailViewer';

export const ThumbnailWithData = () => {
  const thumbnailStore = useThumbnailStore();

  return (
    <ThumbnailViewer
      backgroundType={thumbnailStore.backgroundType}
      backgroundColor={thumbnailStore.backgroundColor}
      backgroundImage={thumbnailStore.backgroundImage}
      titleColor={thumbnailStore.titleColor}
      titleText={thumbnailStore.titleText}
      subTextColor={thumbnailStore.subTextColor}
      subText={thumbnailStore.subText}
      padding={thumbnailStore.padding}
      titleSize={thumbnailStore.titleFontSize}
      subTextSize={thumbnailStore.subTextFontSize}
      showTitle={thumbnailStore.showTitle}
      showSubText={thumbnailStore.showSubText}
    />
  );
};
