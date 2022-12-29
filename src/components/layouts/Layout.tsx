import Header from "./Header";
import localFont from "@next/font/local";

import { signOut, useSession } from "next-auth/react";

const font = localFont({ src: "../../styles/fonts/Stanley.otf", variable: "--font-stanley" });

function Layout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  return (
    <>
      <Header />
      <header className="flex h-[8vh] items-center justify-between border-b p-2">
        <h1 className={`${font.variable} bg-gradient-to-br from-violet-400 to-black bg-clip-text font-sans text-5xl uppercase text-transparent`}>Hermes</h1>
        {status == "authenticated" && (
          <>
            <p className="text-lg">{session?.user?.email}</p>
            <button onClick={() => signOut()}>Se deconnecter</button>
          </>
        )}
      </header>
      <main className="relative flex min-h-[92vh] overflow-x-hidden">{children}</main>
    </>
  );
}

export default Layout;
