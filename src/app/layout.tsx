import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PlausibleProvider from 'next-plausible';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'ReLeaf Financial',
  description:
    'ReLeaf Financial is turning $20 billion of Telco loyalty losses into profit by transforming smartphones into self-funding reward engines.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        <PlausibleProvider domain='releaf-financial.com'>
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}
