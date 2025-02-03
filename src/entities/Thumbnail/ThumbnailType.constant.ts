export const THUMBNAIL_TYPE = {
  color: 'color',
  image: 'image',
  gradient: 'gradient',
};

export type ThumbnailType = (typeof THUMBNAIL_TYPE)[keyof typeof THUMBNAIL_TYPE];
