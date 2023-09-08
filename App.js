import { View, Text } from "react-native";
import AppNavigation from "./navigation";
import { useEffect } from "react";
import { apiCall } from "./api/openAi";

export default function App() {
  useEffect(() => {
    // apiCall('what is your name');
  }, [])
  return (
    <AppNavigation />
  );
}
