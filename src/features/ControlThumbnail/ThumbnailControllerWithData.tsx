import { useThumbnailStore } from '@/entities/Thumbnail/Thumbnail.store';
import { ThumbnailController } from '@/entities/Thumbnail/ThumnailController';

export const ThumbnailControllerWithData = () => {
  const thumbnailStore = useThumbnailStore();

  return (
    <ThumbnailController
      titleText={thumbnailStore.titleText}
      showTitle={thumbnailStore.showTitle}
      subText={thumbnailStore.subText}
      showSubText={thumbnailStore.showSubText}
      onChangeTitleText={thumbnailStore.setTitleText}
      onChangeSubText={thumbnailStore.setSubText}
      onChangeShowTitle={thumbnailStore.setShowTitle}
      onChangeShowSubText={thumbnailStore.setShowSubText}
    />
  );
};
