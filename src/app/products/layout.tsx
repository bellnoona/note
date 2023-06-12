import { Metadata } from 'next';
import Link from 'next/link';
import styles from './layout.module.css';

export const metadata: Metadata = {
  title: 'Gorgeous Products Site👖💄 | All Products',
  description: '고져스한 제품을 확인해보세요! 👖💄',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>여성의류</Link>
        <Link href='/products/men'>남성의류</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
