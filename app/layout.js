export const metadata = {
  title: "Ingeniería en Inteligencia Artificial Online | UAG",
  description: "Licenciatura en Ingeniería en Inteligencia Artificial 100% online. Respaldo de Arizona State University. Inicio septiembre 2026.",
  keywords: "inteligencia artificial, ingeniería, UAG, online, licenciatura, machine learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
