import ThumbnailViewer from '@/entities/Thumbnail/ThumbnailViewer';
import useGenerateThumbnailStore from '@/entities/Thumbnail/useGenerateThumbnail.store';

export default function ShowThumbnail() {
  const generateThumbnailStore = useGenerateThumbnailStore();

  return (
    <ThumbnailViewer
      type={generateThumbnailStore.type}
      title={generateThumbnailStore.title}
      subText={generateThumbnailStore.subText}
      titleColor={generateThumbnailStore.titleColor}
      subTextColor={generateThumbnailStore.subTextColor}
      image={generateThumbnailStore.image}
      horizontalPadding={generateThumbnailStore.horizontalPadding}
      titleSize={generateThumbnailStore.titleFontSize}
      subTextSize={generateThumbnailStore.subTextFontSize}
      showTitle={generateThumbnailStore.showTitle}
      showSubText={generateThumbnailStore.showSubText}
    />
  );
}
