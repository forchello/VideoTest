import React from 'react';
import { Button, View } from 'react-native';
import { useModal } from 'react-native-modalfy';
import Video from 'react-native-video';

const HomeScreen = () => {
  const { openModal } = useModal();

  const handleOnPress = () => {
    openModal('VideoTestModal', {});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      }}>
      <Video
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          type: 'mp4',
        }}
        style={{
          width: 400,
          height: 300,
        }}
        controls
        repeat
        resizeMode={'contain'}
        rate={1}
        playInBackground={false}
        playWhenInactive={false}
        hideShutterView
        shutterColor="transparent"
        renderLoader={null}
        muted
      />
      <Button onPress={handleOnPress} title="Invoke the modal" />
    </View>
  );
};

export default HomeScreen;
