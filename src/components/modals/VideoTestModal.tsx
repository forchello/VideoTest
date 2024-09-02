import { Button, Dimensions, View } from 'react-native';
import Video from 'react-native-video';
import { ModalfyParams } from 'react-native-modalfy';

interface Props {
  modal: ModalfyParams;
}

const VideoTestModal = ({ modal: { closeModal } }: Props) => {
  const handleOnPress = () => {
    closeModal();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Math.round(Dimensions.get('screen').height),
        alignItems: 'center',
        backgroundColor: 'red',
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
      <Button onPress={handleOnPress} title="Close the modal" />
    </View>
  );
};

export default VideoTestModal;
