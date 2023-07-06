import { Alert, Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { login } from "@/api/user";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const response = await login({ email, password });
      localStorage.setItem("accessToken", response.token);
      router.push("/");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          WAFO
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Login
            </h1>
            {error && (
              <Alert color="failure">
                <p className="font-medium">Incorrect email or password!</p>
                <p>Please enter the correct email or password</p>
              </Alert>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="Insert your email here"
                  required
                  type="email"
                  value={email}
                  color={error && "failure"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  id="password"
                  placeholder="Insert your password here"
                  required
                  type="password"
                  value={password}
                  color={error && "failure"}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit">Login</Button>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link className="font-bold hover:text-teal-600" href="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
