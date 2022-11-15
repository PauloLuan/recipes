import { NavigationContainer } from "@react-navigation/native";
import { Routes as AppRoutes } from "./app.routes";

const linking = {
  prefixes: ["com.flatirons.deeplinking://"],
  config: {
    screens: {
      home: { path: "home" },
      product: {
        path: "product/:id",
      },
    },
  },
};

export const Routes = () => {
  return (
    <NavigationContainer linking={linking}>
      <AppRoutes />
    </NavigationContainer>
  );
};
