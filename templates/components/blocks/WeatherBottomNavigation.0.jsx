import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Paper,
  Container,
  Typography,
} from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocationModal } from './LocationModal';

const BottomStaticPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
}));

export const WeatherBottomNavigation = () => {
  // 選択項目
  const [value, setValue] = useState(0);
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };

  // 地域選択のモーダルフラグ
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BottomStaticPaper elevation={3}>
      <BottomNavigation showLabels value={value} onChange={handleOnChange}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to={'/'}
        />
        s
        <BottomNavigationAction
          label="Location"
          icon={<LocationOnIcon />}
          onClick={handleOpen}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          href="/about"
          component={Link}
          to={'/about'}
        />
      </BottomNavigation>
      <LocationModal {...{ open, handleClose }} />
    </BottomStaticPaper>
  );
};
