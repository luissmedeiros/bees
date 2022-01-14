import { CssBaseline, ThemeProvider, Box} from "@mui/material"
import { Header, Footer } from "components/molecules"
import Head from "next/head"
import { theme } from "styles"

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Bees</title>
        </Head>
          <CssBaseline/>
          <Box sx={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'scroll', overflowX: 'hidden'}}>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
          </Box>
      </ThemeProvider>
  )
}