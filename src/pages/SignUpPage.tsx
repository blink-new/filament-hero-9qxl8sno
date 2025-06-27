import SignUpForm from '../components/auth/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Create Account</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
