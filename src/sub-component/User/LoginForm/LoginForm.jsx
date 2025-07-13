import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react"; // Eye icons and spinner

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    // just for try form submitted
    setTimeout(() => {
      setLoading(false);
      alert("Login submitted!");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">Login</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Email Input */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password Input with toggle */}
              <div className="grid gap-3 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-2.5 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button with loader */}
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5 mr-2" />
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="mt-6 text-center text-sm">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:underline underline-offset-4"
                >
                  Sign Up
                </Link>
              </p>

              <p className="mt-3">
                <Link
                  to="/forget-password"
                  className="text-blue-500 hover:underline underline-offset-4"
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
