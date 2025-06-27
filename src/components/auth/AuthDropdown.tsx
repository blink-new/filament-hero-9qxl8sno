import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthDropdown: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-gray-700 text-white border-gray-600 hover:bg-gray-600">
            Sign In / Sign Up
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700 text-white">
          <DropdownMenuItem onSelect={() => setIsLoginOpen(true)} className="cursor-pointer hover:bg-gray-700">
            Sign In
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setIsSignUpOpen(true)} className="cursor-pointer hover:bg-gray-700">
            Sign Up
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-orange-400">Sign In</DialogTitle>
            <DialogDescription className="text-gray-400">
              Welcome back! Enter your credentials to access your Filament Hero account.
            </DialogDescription>
          </DialogHeader>
          <LoginForm onSuccess={() => setIsLoginOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-orange-400">Sign Up</DialogTitle>
            <DialogDescription className="text-gray-400">
              Join Filament Hero today! Create an account to start managing your filaments.
            </DialogDescription>
          </DialogHeader>
          <SignUpForm onSuccess={() => setIsSignUpOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthDropdown;
