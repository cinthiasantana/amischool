import RoutesApp from "./routes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/auth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
