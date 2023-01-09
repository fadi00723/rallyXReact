import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Home_Compitator = () => {
  const data = [
    {
      name: 'Media',
      image: require('../../../assets/media.png'),
    },
    {
      name: 'Social Hub',
      image: require('../../../assets/soacialhub.png'),
    },
    {
      name: 'Partners',
      image: require('../../../assets/partners.png'),
    },
    {
      name: 'Tickets',
      image: require('../../../assets/tickets.png'),
    },
    {
      name: 'Latest News',
      image: require('../../../assets/latestnews.png'),
    },
    {
      name: 'Documents',
      image: require('../../../assets/documents.png'),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/backcomhome.png')}
        style={styles.bgImg}
        resizeMode={'cover'}>
        <View style={{width: '85%', height: '100%'}}>
          <Image
            source={require('../../../assets/icons/rallyIcon.png')}
            style={styles.rallyIcon}
          />

          <FlatList
            contentContainerStyle={{
              margin: 5,
              width: '100%',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            data={data}
            numColumns={2}
            renderItem={(item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{
                    height: 130,
                    width: 130,
                    margin: '5%',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.item.image}
                    style={{height: '80%', width: '80%', marginTop: 5}}>
                    {/* <Image
                      style={{height: '80%', width: '90%'}}
                      source={require('../../../assets/media.png')}></Image> */}
                  </Image>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'white',
                      textAlign: 'center',
                      paddingTop: 5,
                    }}>
                    {item.item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home_Compitator;

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rallyIcon: {
    width: '100%',
    height: '11%',
    marginTop: '15%',
  },
});
