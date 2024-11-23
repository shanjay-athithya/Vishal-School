import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Vishal Bharti School",
  description: "Welcome to Vishal Bharti Senior Secondary School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
