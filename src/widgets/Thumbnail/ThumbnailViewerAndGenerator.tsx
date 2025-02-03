import { GenerateThumbnail } from '@/features/GenerateThumbnail/GenerateThumbnail';
import ShowThumbnail from '@/features/ShowThumbnail/ShowThumbnail';
import { Box } from '@mui/material';

export default function ThumbnailViewerAndGenerator() {
  return (
    <Box display="flex" flexDirection="column" rowGap={4} width="100%">
      <ShowThumbnail />
      <GenerateThumbnail />
    </Box>
  );
}
