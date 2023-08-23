import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './src/routes/tabRoutes';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TabRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
