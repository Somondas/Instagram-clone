import { View, Text, SafeAreaView } from "react-native";
import SignedInStack from "./navigation";
import 'react-native-gesture-handler';
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return (
    <AuthNavigation />
  );
}
