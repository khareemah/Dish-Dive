'use client';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function GlobalFont() {
  return (
    <style jsx global>
      {`
        :root {
          --font-archivo: ${archivo.style.fontFamily};
        }
      `}
    </style>
  );
}
