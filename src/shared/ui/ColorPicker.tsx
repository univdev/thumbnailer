import { Box, ClickAwayListener, styled } from '@mui/material';
import { FC } from 'react';
import { SketchPicker } from 'react-color';
import { useToggle } from '../hooks/useToggle';

export type ColorPickerProps = {
  value: string;
  onChange: (color: string) => void;
};

export const ColorPicker: FC<ColorPickerProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen, toggle] = useToggle(false);

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            p: 2,
            boxShadow: 2,
            cursor: 'pointer',
          }}
          onClick={toggle}
        >
          <Box sx={{ width: '100%', height: '100%', backgroundColor: value }} />
        </Box>
        {isOpen && (
          <StyledBlockPicker
            color={value}
            onChange={(event) => onChange(event.hex)}
          />
        )}
      </Box>
    </ClickAwayListener>
  );
};

const StyledBlockPicker = styled(SketchPicker)({
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: 10,
});
