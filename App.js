import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <SafeAreaView>
        <Text style={styles.mainHeader}>Movies</Text>
      </SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({  
  mainHeader: {
    fontSize: 24,
    textAlign: "center",
    margin: 16,
    fontStyle:"italic",
    fonstWeight: "bold", 
  },  
  dataItem :{
    
  }
} );

export default App;

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   Platform,
//   SafeAreaView,
//   Keyboard,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Task from "./components/Task";

// export default function App() {
//   const [task, setTask] = useState();
//   const [taskItems, setTaskItems] = useState([]);

//   const handleAddTask = () => {
//     Keyboard.dismiss();
//     setTaskItems([...taskItems, task])
//     setTask(null);
//   }

//   const completeTask = (index) => {
//     let itemsCopy = [...taskItems];
//     itemsCopy.splice(index, 1);
//     setTaskItems(itemsCopy)
//   }

//   return (
//     <View style={styles.container}>

//       {/* Today's Tasks */}
//       <View style={styles.tasksWrapper}>
//         <Text style={styles.sectionTitle}>Today's tasks</Text>
//         <View style={styles.items}>
//           {
//             taskItems.map((item, index) => {
//               return (
//                 <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
//                   <Task text={item} />
//                 </TouchableOpacity>
//               )
//             })
//           }
//         </View>
//       </View>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         style={styles.writeTaskWrapper}
//       >
//         <TextInput
//           style={styles.input}
//           placeholder={"Write a Task"}
//           value={task}
//           onChangeText={(text) => setTask(text)}
//         ></TextInput>
//         <TouchableOpacity onPress={() => handleAddTask()}>
//           <View style={styles.addWrapper}>
//             <Text styles={styles.addText}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#E8EAED",
//   },
//   tasksWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//     fontStyle: "italic",
//     fontWeight: "bold",
//   },
//   items: {
//     marginTop: 30,
//   },
//   writeTaskWrapper: {
//     position: "absolute",
//     bottom: 60,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//     width: 250,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#FFF",
//     borderRadius: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#C0C0C0",
//     borderWidth: 1,
//   },
//   addText: {},
// });
