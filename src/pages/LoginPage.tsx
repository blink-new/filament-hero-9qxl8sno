import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Welcome Back!</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
