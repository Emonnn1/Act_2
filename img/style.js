import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  head: {
    backgroundColor: "#121212",
    flexDirection: "row",
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  body: {
    backgroundColor: "#121212",
    flex: 1,
  },
  hey: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    
  },
  hey3: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  rows1: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginVertical: 10
  },
  rows2: {
    flexDirection: "column",
    gap: 5,
  },
  rows3: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingRight: 15,
    gap: 5,
  },
  foot: {
    height: 60,
    paddingTop: 5,
    backgroundColor: "#00000080",
    flexDirection: "row",
    justifyContent: "space-around",
    opacity: 1.5,
  },
  foots: {
    height: 120,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: "space-around",
    opacity: 1.5,
  },
  foot1: {
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    flexDirection: "row",
    marginTop: 30,
    paddingLeft: 20,
    gap: 10,
  },
  greet: {
    flex: 1,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 20,
    marginRight: 20,
  },
  music: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    color: "white",
  },
  title1: {
    color: "#b3b3b3",
  },
  title: {
    color: "white",
  },
  titles: {
    color: "white",
  },
  pop: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  titles1: {
    color: "#bdbdbd",
    fontSize: 10,
  },
  titles2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  recent:{
    color: 'white',
    paddingLeft: 20,
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  musics:{
    backgroundColor: '#291b1b',
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 5,
    alignItems: 'center'
  },
  musictitle:{
    
    color: 'white',
    marginLeft: 10
  },
  musictitles:{
    
    color: 'grey',
    marginLeft: 10
  },
  musics1:{
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  gaps:{
    marginHorizontal: 10
  },
  footss:{
    flexDirection: 'column'
  },
  line:{
    height: 2,
    width: 40,
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 50
  }
});
