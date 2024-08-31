import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const NotFound = () => (
  <Container>
    <Stack direction="column" alignItems="center" p={2} gap={3}>
      <Typography variant="h4" component="h2" color="error">
        Not Found
      </Typography>
      <Typography variant="subtitle1" component="h3">
        このページは存在しません。
        <br />
        URLを確認の上、再度アクセスしてください
      </Typography>
      <WarningAmberIcon
        color="error"
        sx={{
          width: '30%',
          height: 'unset',
        }}
      />
    </Stack>
  </Container>
);
