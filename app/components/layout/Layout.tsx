import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  headerLinks: Array<{
    href: string;
    label: string;
    icon?: string;
  }>;
}

export function Layout({ children, headerLinks }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header links={headerLinks} />
      <main className="flex-1">{children}</main>
      <Footer links={headerLinks} />
    </div>
  );
}
