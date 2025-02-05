'use client';

import ThumbnailViewerAndGenerator from '@/widgets/Thumbnail/ThumbnailViewerAndGenerator';
import { Box, Container } from '@mui/material';

export default function HomeScreen() {
  return (
    <Container>
      <Box
        sx={{ minHeight: '100svh', py: 24 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box margin="auto" width="100%">
          <ThumbnailViewerAndGenerator />
        </Box>
      </Box>
    </Container>
  );
}
