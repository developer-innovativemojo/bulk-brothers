import Navbar from '@/components/Navbar';
import { Html } from 'next/document';
import Head from 'next/head';

const Page = () => (
  <Html>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <body>
        <Navbar/>
    </body>
  </Html>
);

export default Page;