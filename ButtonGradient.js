import react from "react";
import { StyleSheet, Text, View, TextInput, ressabl } from 'react-native';
import { TouchableOpacity } from "react-native-web";
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient () {
    return (
       <TouchableOpacity  style={styles.button}>
           <LinearGradient
                // Button Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
               style={styles.button}>
             <Text>Sign in</Text>
            </LinearGradient>
       </TouchableOpacity>
    )

}
export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
  
    button: {
      width: '80%',
      height: 50,
    },
  
  });