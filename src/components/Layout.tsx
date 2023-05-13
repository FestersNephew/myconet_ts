import React, { ReactNode } from 'react';
import Head from 'next/head';
import 'animate.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      {/* Your header content */}
    </Head>
    <main>{children}</main>
    <footer>
      {/* Your footer content */}
    </footer>
  </>
);

export default Layout;
