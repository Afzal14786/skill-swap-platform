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

import "./Login.css";

const LoginForm = () => {
  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              {/* First line: "Don't have an account? Sign Up" */}
              <p>
                {" "}
                {/* Use a <p> tag to make this whole line a block */}
                Don&apos;t have an account?{" "}
                <Link to={"/register"} className="underline underline-offset-4">
                  Sign Up
                </Link>
              </p>

              {/* Second line: "Forgot your password?" with margin on its container */}
              <p className="forger-password">
                {" "}
                {/* Apply mt-4 to this <p> tag */}
                <Link
                  to={"/forget-password"}
                  className="underline underline-offset-4"
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
