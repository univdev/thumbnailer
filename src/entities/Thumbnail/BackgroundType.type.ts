import { BACKGROUND_TYPE } from './BackgroundType.constant';

export type BackgroundType = (typeof BACKGROUND_TYPE)[keyof typeof BACKGROUND_TYPE];
