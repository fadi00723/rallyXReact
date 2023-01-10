import * as React from 'react';
import {
  View,
  Image,
  Pressable,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import GlobalColors from '../src/utlis/GlobalColors';

export const CustomTabBar = ({navigation, route}) => {
  // const islogin=useSelector(state=>state.login);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.childContainer}>
        <Pressable
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
          hitSlop={40}
          onPress={() => {
            onPressMore();
          }}>
          {/* <Image
              source={require("../assets/Settings_Icon.png")}
              resizeMode="contain"
              style={GlobalStyles.TabBarIcon}
            /> */}

          <Text
            style={{
              fontFamily: 'Poppins_500Medium',
              fontSize: 10,
              paddingTop: '0.7%',
            }}>
            asdasd
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: GlobalColors.TXTGray,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  shadowbox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 7,
    backgroundColor: 'white',
  },
  badgeStyle: {
    position: 'absolute',
    top: -8,
    right: -12,
  },
  childContainer: {
    marginTop: '2%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
