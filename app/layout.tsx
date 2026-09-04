import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clínica Dental Sonrisa | Odontología Estética',
  description: 'Diseñamos sonrisas que transforman vidas. Clínica dental especializada en odontología estética, implantes, ortodoncia invisible y blanqueamiento dental. Más de 25 años de experiencia.',
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
