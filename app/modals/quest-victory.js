import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from 'assets/images'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 300,
    backgroundColor: '#413C3C',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  textWrp: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  text: {
    marginLeft: 24,
    marginRight: 24,
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    color: '#222',
  },
});

export default class QuestVictoryModal extends React.Component {
  render() {
    const {modal} = this.props;
    const {quest: {icon, victoryMsg, reward}} = modal;

    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={images.icons.success}
          resizeMode='contain'
        />
        <View style={styles.textWrp}>
          <Text style={styles.text}>
            {victoryMsg}
          </Text>
          <Text style={styles.text}>
            {reward.xp && `+${reward.xp}XP`}
          </Text>
          <Text style={styles.text}>
            {reward.hp && `+${reward.hp}HP`}
          </Text>
        </View>
      </View>
    );
  }
}
