import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen">{children}</main>
    </>
  );
}

export default Layout;
