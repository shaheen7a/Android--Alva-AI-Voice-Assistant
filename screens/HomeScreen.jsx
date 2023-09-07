import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/bot.png")}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
