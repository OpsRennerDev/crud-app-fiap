import "./globals.css";

export const metadata = {
  title: "Crud Fiap",
  description: "Projeto de cadastro e login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
