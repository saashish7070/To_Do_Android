import TodoApp from './src/Todo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TodoApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Adjusted justifyContent to start from the top
    paddingTop: 50, // Added paddingTop for space at the top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Added marginBottom to the title for spacing
  },
});
