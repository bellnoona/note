import './globals.css';
import { Inter } from 'next/font/google';
import styles from '@/app/layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gorgeous Products Site👖💄',
  description: '고져스한 제품을 제공하는 사이트👖💄',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
