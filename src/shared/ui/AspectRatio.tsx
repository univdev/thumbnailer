import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

export type AspectRatioProps = {
  children: ReactNode;
  ratio: number;
};

export const AspectRatio: FC<AspectRatioProps> = ({ children, ratio }) => {
  return (
    <Box sx={{ position: 'relative', paddingBottom: `${ratio * 100}%` }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
