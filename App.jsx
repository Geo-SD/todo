/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Todoform from './Components/todoform';
import Todolist from './Components/todolist';

function App() {
  return (
    <SafeAreaView>
      <Todoform />
      <Todolist />
    </SafeAreaView>
  );
}

export default App;
