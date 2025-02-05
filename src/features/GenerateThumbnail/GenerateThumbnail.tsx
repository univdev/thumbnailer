import { ThumbnailGenerator } from '@/entities/Thumbnail/ThumbnailGenerator';
import { THUMBNAIL_CONTAINER_ID } from '@/entities/Thumbnail/ThumbnailViewer';
import useGenerateThumbnailStore from '@/entities/Thumbnail/useGenerateThumbnail.store';
import { useDownloadLink } from '@/shared/hooks/useDownloadLink';
import html2canvas from 'html2canvas';

export const GenerateThumbnail = () => {
  const download = useDownloadLink();
  const generateThumbnailStore = useGenerateThumbnailStore();

  const handleGenerate = () => {
    const targetEl = document.getElementById(THUMBNAIL_CONTAINER_ID);
    if (!targetEl) return;

    html2canvas(targetEl).then((canvas) => {
      const url = canvas.toDataURL('image/png');
      download(url, 'thumbnail.png');
    });
  };

  const handleUpdateHorizontalPadding = (horizontalPadding: number) => {
    generateThumbnailStore.setHorizontalPadding(
      `${horizontalPadding.toString()}px`,
    );
  };

  return (
    <ThumbnailGenerator
      title={generateThumbnailStore.title}
      titleColor={generateThumbnailStore.titleColor}
      subText={generateThumbnailStore.subText}
      subTextColor={generateThumbnailStore.subTextColor}
      showTitle={generateThumbnailStore.showTitle}
      showSubText={generateThumbnailStore.showSubText}
      horizontalPadding={parseInt(generateThumbnailStore.horizontalPadding)}
      setTitle={generateThumbnailStore.setTitle}
      setTitleColor={generateThumbnailStore.setTitleColor}
      setSubText={generateThumbnailStore.setSubText}
      setSubTextColor={generateThumbnailStore.setSubTextColor}
      setShowTitle={generateThumbnailStore.setShowTitle}
      setShowSubText={generateThumbnailStore.setShowSubText}
      setHorizontalPadding={handleUpdateHorizontalPadding}
      onGenerate={handleGenerate}
    />
  );
};
