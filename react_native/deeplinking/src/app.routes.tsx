import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { Product } from "./screens/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
};
