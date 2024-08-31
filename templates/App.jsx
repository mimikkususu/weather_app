import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/routing/Router';
import { AppProvider } from './components/providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
