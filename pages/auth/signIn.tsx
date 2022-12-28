import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn("credentials", { callbackUrl: "/", username: username, password: password });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "unauthenticated") {
    return (
      <form className="flex h-[80vh] w-full flex-col items-center justify-center" onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
            Nom d'utilisateur
          </label>
          <Input id="username" placeholder="Nom d'utilisateur" value={username} setValue={setUsername} required />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
            Mot de passe
          </label>
          <Input id="password" type="password" placeholder="Mot de passe" value={password} setValue={setPassword} required />
        </div>
        <div className="flex items-center justify-between">
          <Button className="transition-all duration-300 hover:scale-105" type="submit" disabled={loading}>
            Connexion
          </Button>
        </div>
      </form>
    );
  }
};

export default SignIn;
