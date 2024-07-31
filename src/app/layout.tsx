import './globals.css';
import { ReactNode } from 'react';
import Navbar from './ui/navbar';

type LayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'My App',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
