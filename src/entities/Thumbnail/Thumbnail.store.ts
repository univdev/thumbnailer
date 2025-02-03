import { create } from 'zustand';
import { BACKGROUND_TYPE } from './BackgroundType.constant';
import { BackgroundType } from './BackgroundType.type';
import DefaultBackgroundImage from '@/shared/assets/backgrounds/dark_circle.png';

const createThumbnailStore = (set: any) => {
  return {
    backgroundType: BACKGROUND_TYPE.IMAGE as BackgroundType,
    backgroundColor: '#ECECEC',
    backgroundImage: `url(${DefaultBackgroundImage.src})`,
    titleText: '여기는 제목입니다.',
    subText: '여기는 부제목입니다.',
    titleColor: '#a8ff30',
    subTextColor: '#a8ff30',
    titleFontSize: '64px',
    subTextFontSize: '24px',
    padding: '48px',
    showTitle: true,
    showSubText: true,

    setBackgroundType: (backgroundType: BackgroundType) => set({ backgroundType }),
    setTitleText: (titleText: string) => set({ titleText }),
    setSubText: (subText: string) => set({ subText }),
    setBackgroundColor: (backgroundColor: string) => set({ backgroundColor }),
    setBackgroundImage: (backgroundImage: string) => set({ backgroundImage }),
    setTitleColor: (titleColor: string) => set({ titleColor }),
    setSubTextColor: (subTextColor: string) => set({ subTextColor }),
    setPadding: (padding: string) => set({ padding }),
    setShowTitle: (showTitle: boolean) => set({ showTitle }),
    setShowSubText: (showSubText: boolean) => set({ showSubText }),
  };
};

export const useThumbnailStore = create(createThumbnailStore);
