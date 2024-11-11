import "@/styles/w95.css";
import { Layout } from "./components/layout/Layout";

const headerLinks = [
  { href: "/", label: "Start", icon: "📺" },
  { href: "/docs", label: "Docs", icon: "📕" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Windows 95 UI Kit</title>
        <meta
          name="description"
          content="Windows 95 is a free Retro UI Kit to bring back the great memories of the 95's."
        />
      </head>
      <body>
        <Layout headerLinks={headerLinks}>{children}</Layout>
      </body>
    </html>
  );
}
