import { Box, Stack, Paper, Button } from '@mui/material';
import { Container, Typography } from '@mui/material';

export const About = () => (
  <Container>
    <Stack direction="column" alignItems="center" p={2} gap={3}>
      <Typography variant="h4" component="h2">
        アプリケーションの紹介
      </Typography>
      <Typography variant="subtitle1" component="h3">
        お天気情報を提供します
      </Typography>
      <Box>
        <li>東京の天気</li>
        <li>その他地域の天気</li>
        <li>検索します</li>
      </Box>
    </Stack>
  </Container>
);
