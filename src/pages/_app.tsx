import { AppProps } from "next/app";

import '../../styles/global.scss'
import { Header } from "../components/Header/Header.component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
