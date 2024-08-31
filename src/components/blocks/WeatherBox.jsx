import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Button,
  Paper,
  Container,
  Typography,
} from '@mui/material';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { extractDataForWeatherBox } from './../providers/DataParser';

const MyGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const MainPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(5),
  padding: theme.spacing(5),
  textAlign: 'center',
}));

const TempStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(1),
}));

const BottomStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export const WeatherBox = ({ data }) => {
  const {
    city,
    iconURL,
    dateTimeString,
    description,
    tempMax,
    tempMin,
    rain,
    humid,
    wind,
  } = extractDataForWeatherBox(data);

  return (
    <Container>
      <MyGrid container>
        <Grid xs={12} sm={12} md={6} mdOffset={3}>
          <MainPaper elevation={4}></MainPaper>
        </Grid>
      </MyGrid>
    </Container>
  );
};
