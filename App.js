import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

// 1) Set up Redux

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Lets build Uber</Text>
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
