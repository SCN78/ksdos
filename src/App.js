import './App.css';
import RootNavigator from './Components/RootNavigator';
import { AuthContextProvider } from './Contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <RootNavigator />
    </AuthContextProvider>    
  );
}

export default App;
