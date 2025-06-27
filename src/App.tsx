import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import AddFilamentPage from './pages/AddFilamentPage';
import EditFilamentPage from './pages/EditFilamentPage';
import BarcodesPage from './pages/BarcodesPage';
import SettingsPage from './pages/SettingsPage';
import PrinterPage from './pages/PrinterPage';
import LandingPage from './pages/LandingPage';
import { Toaster } from './components/ui/toaster';
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading authentication...</div>; // Or a spinner
  }

  return session ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/inventory"
              element={
                <PrivateRoute>
                  <Inventory />
                </PrivateRoute>
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute>
                  <AddFilamentPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <PrivateRoute>
                  <EditFilamentPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/barcodes"
              element={
                <PrivateRoute>
                  <BarcodesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/printers"
              element={
                <PrivateRoute>
                  <PrinterPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <SettingsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
      <Toaster />
    </Router>
  );
}

export default App;