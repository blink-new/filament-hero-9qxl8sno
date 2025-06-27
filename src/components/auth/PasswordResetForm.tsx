import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const PasswordResetForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
        Send Reset Link
      </Button>
      <div className="text-center text-sm text-gray-400">
        <Link to="/login" className="text-orange-500 hover:underline">
          Back to Login
        </Link>
      </div>
    </form>
  );
};

export default PasswordResetForm;
