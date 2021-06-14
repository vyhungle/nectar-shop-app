import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/Octicons';

const {width, height} = Dimensions.get('window');

const WIDTH_IMAGE = width;
const HEIGHT_IMAGE = height / 1.5;
export default function Detail() {
  const route = useRoute();
  const {product} = route.params;

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderContent = () => (
    <View style={styles.ContentBottomSheet}>
      <View style={styles.LineBottomSheet} />
      <View style={styles.BoxBodyBottomSheet}>
        <Text>{product.name}</Text>
        <Text>{product.descriptions}</Text>
      </View>
    </View>
  );

  const renderImage = item => (
    <View>
      <Image source={{uri: item.item}} style={styles.ImageItem} />
      <View style={styles.BoxImage} />
    </View>
  );

  const renderDots = () => (
    <View style={styles.BoxListDot}>
      {product.image.map((p, index) => (
        <Text key={index} style={{letterSpacing: 10}}>
          <Icon name="primitive-dot" size={20} color="#989898" />
        </Text>
      ))}
      <Animated.View
        style={[
          styles.DotActive,
          {
            transform: [
              {
                translateX: Animated.divide(scrollX, width).interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 20],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );

  return (
    <View style={styles.Container}>
      {renderDots()}
      <Animated.FlatList
        data={product.image}
        pagingEnabled={true}
        horizontal={true}
        keyExtractor={(item, index) => index}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={item => renderImage(item)}
      />
      <BottomSheet
        snapPoints={[height - HEIGHT_IMAGE, height - 50]}
        renderContent={renderContent}
        enableBottomInitialAnimation={true}
        borderRadius={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  BoxImage: {
    width: WIDTH_IMAGE,
    height: HEIGHT_IMAGE,
    backgroundColor: 'rgba(0,0,0,0.05)',
    zIndex: 10,
    position: 'absolute',
  },
  ImageItem: {
    width: WIDTH_IMAGE,
    height: HEIGHT_IMAGE,
  },
  ContentBottomSheet: {
    backgroundColor: 'white',
    height: height - 50,
    width: width,
    display: 'flex',
    alignItems: 'center',
  },
  LineBottomSheet: {
    width: 35,
    height: 8,
    backgroundColor: '#989898',
    borderRadius: 5,
    marginTop: 10,
  },
  BoxBodyBottomSheet: {
    width: width,
    padding: 10,
  },
  BoxListDot: {
    flexDirection: 'row',
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: height - HEIGHT_IMAGE + 10,
    zIndex: 10,
  },
  DotActive: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#989898',
    borderRadius: 20,
    position: 'absolute',
    left: 0,
  },
});
