// src/Todo.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';

interface Todo {
  id: string;
  text: string;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        text: newTodo,
      },
    ]);
    setNewTodo('');
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completeTask = (text: string) => {
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, text]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your todo"
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <View style={styles.divider}></View>
      <View style={styles.listsContainer}>
        {/* Todo List */}
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Todo List</Text>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <Text>{item.text}</Text>
                <Button title='Complete' onPress={() => completeTask(item.text)} />
                <Button title="Remove" onPress={() => removeTodo(item.id)} />
              </View>
            )}
          />
        </View>
        {/* Completed List */}
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Completed List</Text>
          <FlatList
            data={completedTasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.completedItem}>
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    padding: 10,
  },
  divider: {
    width: '100%',
    height: 1, // Adjust the thickness as needed
    backgroundColor: 'black',
    marginVertical: 10,
  },
  
  listsContainer: {
    flexDirection: 'column-reverse', // Change this line
    flex: 1,
  },
  
  listContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  completedItem: {
    borderColor: 'green', // Example: Highlight completed items with a green border
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default TodoApp;
