import { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import MainRoutes from './routes/MainRoutes';
import './App.css';

function App() {
  const { checkAuth } = useActions();

  useEffect(() => {
    window.addEventListener('storage', () => {
      checkAuth();
    });
    checkAuth();
  }, []);

  return <MainRoutes />;
}

export default App;
