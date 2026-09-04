import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788484015687',
  description: 'Sitio web moderno y confiable para Clínica Dental Sonrisa, diseñado para presentar servicios de odontología estética, demostrar credibilidad clínica y convertir visitantes en pacientes mediante reservas de consulta gratuita. La experiencia combina una estética cálida y premium con información clara sobre el equipo, beneficios, testimonios y tratamientos.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FFFFFF', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
