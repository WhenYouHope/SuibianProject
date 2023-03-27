import React from "react";
import "../styles/global.css";
import { ThemeProvider } from 'styled-components'

export default function Suibian({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}