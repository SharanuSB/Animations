import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
        keyboardShouldPersistTaps="handled"
        onScroll={() => Keyboard.dismiss()}
      >
        <View className="bg-white h-full w-full">
          <StatusBar style="light" />
          <Image
            className="h-full w-full absolute"
            source={require("../../../assets/images/background.png")}
          />
          <View className="flex-row justify-around w-full absolute">
            <Animated.Image
              entering={FadeInUp.delay(200).duration(1000).springify()}
              className="h-[200] w-[80]"
              source={require("../../../assets/images/light.png")}
            />
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              className="h-[140] w-[50]"
              source={require("../../../assets/images/light.png")}
            />
          </View>
          <View className="h-full w-full flex justify-around pt-40 pb-10">
            <View className="flex items-center">
              <Animated.Text
                entering={FadeInUp.duration(2000).springify()}
                className="text-white font-bold tracking-wider text-5xl"
              >
                Connect Free
              </Animated.Text>
            </View>
            <View className="flex item-center mx-4 space-y-4">
              <Animated.View
                className="bg-black/5 p-4 rounded-2xl w-full"
                entering={FadeInDown.delay(200).duration(1000).springify()}
              >
                <TextInput placeholder="Email" placeholderTextColor={"gray"} />
              </Animated.View>
              <Animated.View
                className="bg-black/5 p-4 rounded-2xl w-full mb-3"
                entering={FadeInDown.delay(400).duration(1000).springify()}
              >
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor={"gray"}
                />
              </Animated.View>
              <Animated.View
                className="w-full"
                entering={FadeInDown.delay(600).duration(1000).springify()}
              >
                <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                  <Text className="text-center text-xl font-bold text-white">
                    Login
                  </Text>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View
                className="flex-row justify-center"
                entering={FadeInDown.delay(800).duration(1000).springify()}
              >
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.push("Signup")}>
                  <Text className="text-sky-600">Signup</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
