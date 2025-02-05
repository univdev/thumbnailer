import {
  Box,
  Button,
  Divider,
  Slider,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { ColorPicker } from '@/shared/ui/ColorPicker';

export type ThumbnailGeneratorProps = {
  title: string;
  titleColor: string;
  subText: string;
  subTextColor: string;
  showTitle: boolean;
  showSubText: boolean;
  horizontalPadding: number;

  setTitle: (title: string) => void;
  setTitleColor: (titleColor: string) => void;
  setSubText: (subText: string) => void;
  setSubTextColor: (subTextColor: string) => void;
  setShowTitle: (showTitle: boolean) => void;
  setShowSubText: (showSubText: boolean) => void;
  setHorizontalPadding: (horizontalPadding: number) => void;
  onGenerate: () => void;
};

export const ThumbnailGenerator: FC<ThumbnailGeneratorProps> = ({
  title,
  titleColor,
  subText,
  subTextColor,
  showTitle,
  showSubText,
  horizontalPadding,
  setTitle,
  setTitleColor,
  setSubText,
  setSubTextColor,
  setShowTitle,
  setShowSubText,
  setHorizontalPadding,
  onGenerate,
}) => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" flexDirection="column" rowGap={2} width="100%">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            제목
          </Typography>
          <Box display="flex" alignItems="center" rowGap={2}>
            <ColorPicker value={titleColor} onChange={setTitleColor} />
            <Switch
              checked={showTitle}
              onChange={() => setShowTitle(!showTitle)}
            />
          </Box>
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
          <Box display="flex" alignItems="center" rowGap={2}>
            <ColorPicker value={subTextColor} onChange={setSubTextColor} />
            <Switch
              checked={showSubText}
              onChange={() => setShowSubText(!showSubText)}
            />
          </Box>
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        rowGap={4}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            가로 여백
          </Typography>
          <TextField
            value={horizontalPadding}
            size="small"
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (Number.isNaN(value) === false) setHorizontalPadding(value);
              else setHorizontalPadding(48);
            }}
          />
        </Box>
        <Slider
          value={horizontalPadding}
          min={48}
          max={128}
          step={4}
          onChange={(e, value) => {
            if (typeof value === 'number') setHorizontalPadding(value);
          }}
        />
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
