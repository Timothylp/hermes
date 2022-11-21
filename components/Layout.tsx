import Header from "./Header";
import localFont from "@next/font/local";

const font = localFont({ src: "../styles/fonts/Stanley.otf", variable: "--font-stanley" });

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <header className="border-b p-2">
        <h1
          className={`${font.variable} bg-gradient-to-br from-violet-400 to-black bg-clip-text font-sans text-4xl uppercase text-transparent`}
        >
          Hermes
        </h1>
      </header>
      <main className="relative flex min-h-screen overflow-x-hidden">{children}</main>
    </>
  );
}

export default Layout;
