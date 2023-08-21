import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <ScrollView style={{marginTop: 30}}>
    <View style={styles.card}>
      <Text style={styles.titulo}>Hello word</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
    </View>
    

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello word</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello word</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello word</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello word</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello word</Text>
      <StatusBar style="auto" />
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
      <Text>Isso é um parágrafo</Text>
      <Text style={styles.paragrafo}>Isso é um parágrafo</Text>
    </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    borderColor:'blue',
    borderStyle:'solid',
    borderWidth:2,
  },
  titulo:{
    color:'white',
    fontSize: 30,
    borderColor:'blue',
    borderStyle:'dotted',
    borderWidth:5,
    padding:20, 
    marginBottom:20,
    borderColor:'blue',
    borderStyle:'solid',
    borderWidth:2,
    textAlign:'center',
    backgroundColor:'red'
  },
  paragrafo:{
    fontSize:25
  }
});
