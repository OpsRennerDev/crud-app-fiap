export const metadata = {
  title: "Autenticação",
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
