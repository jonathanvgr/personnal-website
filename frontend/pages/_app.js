import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      note: {
        main: '#c4c4c4',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
