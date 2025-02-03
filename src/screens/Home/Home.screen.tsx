'use client';

import { ThumbnailControllerWithData } from '@/features/ControlThumbnail/ThumbnailControllerWithData';
import { ThumbnailWithData } from '@/features/ShowThumbnail/ThumbnailWithData';
import { Container } from '@/shared/components/Container';

export default function HomeScreen() {
  return (
    <Container>
      <div className="h-svh flex flex-col items-center">
        <div className="w-full flex flex-col gap-8 m-auto">
          <ThumbnailWithData />
          <ThumbnailControllerWithData />
        </div>
      </div>
    </Container>
  );
}
