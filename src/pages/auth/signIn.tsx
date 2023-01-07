import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useRouter } from "next/router";
import { io } from "socket.io-client";

const SignIn = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      await signIn("credentials", { email: email, password: password });
    } catch (error) {
      console.error(error);
    }
  };

  if (status === "authenticated") {
    socketInitializer();
    router.push("/");
  }

  if (status === "unauthenticated") {
    return (
      <form className="flex h-[80vh] w-full flex-col items-center justify-center" onSubmit={handleSubmit}>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
            Adresse email
          </label>
          <Input id="email" placeholder="Adresse email" value={email} setValue={setEmail} required />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
            Mot de passe
          </label>
          <Input id="password" type="password" placeholder="Mot de passe" value={password} setValue={setPassword} required />
        </div>
        <div className="flex items-center justify-between">
          <Button className="transition-all duration-300 hover:scale-105" type="submit">
            Connexion
          </Button>
        </div>
      </form>
    );
  }
};


const socketInitializer = async () => {
  await fetch('/api/socket')
  let socket = io();

  socket.on('connect', () => {
    console.log('socket connected from client to server on "/api/socket');
  })
}

export default SignIn;
