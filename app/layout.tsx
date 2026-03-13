import type { Metadata } from 'next';
<<<<<<< HEAD
import './globals.css';

export const metadata: Metadata = {
  title: 'WALLTRACE',
  description: 'Digital graffiti archive and social platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
=======
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'WALLTRACE',
  description: 'Digital graffiti archive and social platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebas.variable} antialiased`}>{children}</body>
    </html>
  );
}
>>>>>>> 79a5ba6cf827965ae447b20eac7da888d9156c3f
