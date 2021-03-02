import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#436ccc',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#436ccc',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 10,
    padding: 20
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#436ccc",
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#FFF",
    fontWeight: 'bold',
    fontSize: 20
  }
});