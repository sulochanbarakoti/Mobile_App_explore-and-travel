import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";

const Home = () => {
  // useLayoutEffect is similar to useEffect and this code help to hide header section
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View>
      <Text>Welcome to Home!</Text>
    </View>
  );
};

export default Home;
