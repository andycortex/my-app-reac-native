import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  LogBox.ignoreLogs(['EventEmitter.removeListener'])
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </NavigationContainer>
  );
}

