import React from 'react';
import { View, Text, Button } from 'react-native';
import { Button as BaseButton, Text as BaseText } from 'native-base';
import PropTypes from 'prop-types';

const DetailScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <BaseButton bordered success onPress={() => navigation.push('Details', { itemId: Math.floor(Math.random() * 100) })}>
        <BaseText success>Go to Details... again</BaseText>
      </BaseButton>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

DetailScreen.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

DetailScreen.defaultProps = {
  route: {
    params: {
      itemId: 0,
      otherParam: '',
    },
  },
  navigation: {},
};

export default DetailScreen;
