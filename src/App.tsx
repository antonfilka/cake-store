import { Box, CssBaseline, Paper, Typography } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column">
        <Paper elevation={24} sx={{ padding: '1rem', backgroundColor: 'primary' }}>
          <Typography color="primary.dark" variant="h1">
            Hello tortik
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default App;
