import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788484015687 | Estética Dental de Alta Precisión',
  description: 'Diseñamos sonrisas que transforman vidas. Combinamos ciencia, arte y tecnología para brindarte tratamientos personalizados con resultados naturales y duraderos.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
