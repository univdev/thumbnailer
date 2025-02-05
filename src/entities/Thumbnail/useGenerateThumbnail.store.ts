import { create } from 'zustand';
import { THUMBNAIL_TYPE } from './ThumbnailType.constant';
import DefaultImage from '@/shared/assets/background/dark_circle.png';

const createGenerateThumbnailStore = (set: any) => {
  return {
    type: THUMBNAIL_TYPE.image,
    image: DefaultImage.src,
    title: 'Default Title',
    titleFontSize: '64px',
    subText: 'Default SubText',
    subTextFontSize: '18px',
    titleColor: '#a8ff30',
    subTextColor: '#a8ff30',
    horizontalPadding: '100px',
    showTitle: true,
    showSubText: true,

    setTitle: (title: string) => set({ title }),
    setTitleFontSize: (titleFontSize: string) => set({ titleFontSize }),
    setSubText: (subText: string) => set({ subText }),
    setSubTextFontSize: (subTextFontSize: string) => set({ subTextFontSize }),
    setTitleColor: (titleColor: string) => set({ titleColor }),
    setSubTextColor: (subTextColor: string) => set({ subTextColor }),
    setHorizontalPadding: (horizontalPadding: string) =>
      set({ horizontalPadding }),
    setShowTitle: (showTitle: boolean) => set({ showTitle }),
    setShowSubText: (showSubText: boolean) => set({ showSubText }),
  };
};

export default create(createGenerateThumbnailStore);
