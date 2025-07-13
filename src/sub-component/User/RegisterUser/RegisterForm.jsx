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
import { Eye, EyeOff } from "lucide-react";

// Function to calculate password strength
const getPasswordStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  switch (score) {
    case 0:
    case 1:
      return { label: "Weak", color: "bg-red-500" };
    case 2:
      return { label: "Moderate", color: "bg-yellow-500" };
    case 3:
    case 4:
      return { label: "Strong", color: "bg-green-600" };
    default:
      return { label: "Weak", color: "bg-gray-400" };
  }
};

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl">Register</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Enter your email below to register.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                {/* Strength Bar */}
                {password && (
                  <div className="mt-1">
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${passwordStrength.color}`}
                        style={{ width: `${(getPasswordStrength(password).label === "Weak" ? 33 : getPasswordStrength(password).label === "Moderate" ? 66 : 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">
                      Strength: <span className="font-semibold">{passwordStrength.label}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="grid gap-3 relative">
                <Label htmlFor="confirmPassword">Password Again</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute top-2.5 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </div>

            {/* Already have account */}
            <div className="mt-6 text-center text-sm">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 hover:underline underline-offset-4"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
