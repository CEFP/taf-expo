import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from "./Home"
import List from "./List"
import Add from "./Add";
import Task from "./Task"
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('tododemo');

db.transaction((tx)=>{
  // tx.executeSql("DROP TABLE IF EXISTS Taches")
  tx.executeSql("CREATE TABLE IF NOT EXISTS Taches (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, status TEXT, createdAt INTEGER, doneAt INT)")
})
export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Text style={{fontSize:50}}>TAF</Text>
        {/*<StatusBar style="auto" />*/}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/add' element={<Add db={db}/>}/>
          <Route path='/task/:id' element={<Task db={db}/>}/>
        </Routes>
      </View>
    </NativeRouter>

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
