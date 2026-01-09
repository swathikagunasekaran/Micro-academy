import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Home } from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header /> {/* Fixed header */}
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};