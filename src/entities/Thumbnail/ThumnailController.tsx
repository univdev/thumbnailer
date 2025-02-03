import { Button } from '@/shared/shadcn/components/ui/button';
import { Separator } from '@/shared/shadcn/components/ui/separator';
import { Switch } from '@/shared/shadcn/components/ui/switch';
import { Textarea } from '@/shared/shadcn/components/ui/textarea';
import { FC } from 'react';
import html2canvas from 'html2canvas';

export type ThumbnailControllerProps = {
  titleText: string;
  showTitle: boolean;
  subText: string;
  showSubText: boolean;
  onChangeTitleText: (titleText: string) => void;
  onChangeSubText: (subText: string) => void;
  onChangeShowTitle: (showTitle: boolean) => void;
  onChangeShowSubText: (showSubText: boolean) => void;
};

export const ThumbnailController: FC<ThumbnailControllerProps> = ({
  titleText,
  subText,
  showTitle,
  showSubText,
  onChangeTitleText,
  onChangeSubText,
  onChangeShowTitle,
  onChangeShowSubText,
}) => {
  const handleCapture = () => {
    const target = document.getElementById('thumbnail-viewer') as HTMLElement;

    if (!target) return;

    html2canvas(target).then((canvas) => {
      const a = document.createElement('a');
      a.href = canvas.toDataURL();
      a.download = 'thumbnail.png';
      a.click();
    });
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <p className="font-bold">제목</p>
        <div className="flex items-center gap-2">
          <Switch checked={showTitle} onCheckedChange={onChangeShowTitle} />
        </div>
      </div>
      <div className="w-full">
        <Textarea value={titleText} onChange={(e) => onChangeTitleText(e.target.value)} />
      </div>
      <Separator />
      <div className="w-full flex items-center justify-between">
        <p className="font-bold">부제목</p>
        <div className="flex items-center gap-2">
          <Switch checked={showSubText} onCheckedChange={onChangeShowSubText} />
        </div>
      </div>
      <div className="w-full">
        <Textarea value={subText} onChange={(e) => onChangeSubText(e.target.value)} />
      </div>
      <div className="w-full flex items-center justify-end gap-2">
        <Button type="button" onClick={handleCapture}>
          Download
        </Button>
      </div>
    </div>
  );
};
