import { StatusBar } from "expo-status-bar";
import StackNavigation from "./src/navigation/StackNavigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "./src/utils/Constent";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/redux/store";

const App = () => {
  const theme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme.colors,
      lightTheme,
      darkTheme,
    },
  };
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <StackNavigation />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
