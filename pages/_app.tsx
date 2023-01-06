import 'tailwindcss/tailwind.css';
import Header from '../common/Header';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
