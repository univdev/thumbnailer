import {
  Box,
  Button,
  Divider,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';

export type ThumbnailGeneratorProps = {
  title: string;
  subText: string;
  showTitle: boolean;
  showSubText: boolean;

  setTitle: (title: string) => void;
  setSubText: (subText: string) => void;
  setShowTitle: (showTitle: boolean) => void;
  setShowSubText: (showSubText: boolean) => void;
  onGenerate: () => void;
};

export const ThumbnailGenerator: FC<ThumbnailGeneratorProps> = ({
  title,
  subText,
  showTitle,
  showSubText,
  setTitle,
  setSubText,
  setShowTitle,
  setShowSubText,
  onGenerate,
}) => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" flexDirection="column" rowGap={2} width="100%">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            제목
          </Typography>
          <Switch
            checked={showTitle}
            onChange={() => setShowTitle(!showTitle)}
          />
        </Box>
        <Box width="100%">
          <TextField
            fullWidth
            multiline
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
      </Box>
      <Divider sx={{ my: 8 }} />
      <Box display="flex" flexDirection="column" rowGap={2} width="100%">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            부제목
          </Typography>
          <Switch
            checked={showSubText}
            onChange={() => setShowSubText(!showSubText)}
          />
        </Box>
        <Box width="100%">
          <TextField
            fullWidth
            multiline
            value={subText}
            onChange={(e) => setSubText(e.target.value)}
          />
        </Box>
      </Box>
      <Divider sx={{ my: 8 }} />
      <Box display="flex" alignItems="center" justifyContent="end">
        <Button type="button" variant="contained" onClick={onGenerate}>
          생성
        </Button>
      </Box>
    </Box>
  );
};
