import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import { styles } from "./img/style.js";
import {
  MaterialIcons as Icon,
  AntDesign as Icons,
  Ionicons as Iconss,
  MaterialCommunityIcons as Icon1,
  Entypo as Icon2,
} from "react-native-vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.greet}>Good Afternoon</Text>
        <Icon name="notifications-none" size={30} color="white" />
        <Icons
          style={styles.icon}
          name="clockcircleo"
          size={25}
          color="white"
        />
        <Icons name="setting" size={25} color="white" />
      </View>
      <View style={styles.body}>
        <View style={styles.top}>
          <Text style={styles.music}>Music</Text>
          <Text style={styles.music}>Podcasts & Shows</Text>
        </View>
        <Text style={styles.recent}>Recently played</Text>
        <View style={styles.hey}>
          <Image
            source={require("./img/image5.jpg")}
            style={{ width: 100, height: 120, resizeMode: "stretch" }}
          />
          <Image
            source={require("./img/image6.jpg")}
            style={{ width: 100, height: 120, resizeMode: "stretch" }}
          />
        </View>
        <Text style={styles.pop}>Today's biggest hits</Text>
        <View style={styles.rows}>
          <Image
            source={require("./img/image2.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
          <Image
            source={require("./img/image1.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
        </View>
        <View style={styles.rows1}>
          <Image
            source={require("./img/image5s.jpg")}
            style={{ width: 50, height: 50, resizeMode: "stretch" }}
          />
          <View style={styles.rows2}>
            <Text style={styles.titles1}>MORE LIKE</Text>
            <Text style={styles.titles2}>Sugarcane</Text>
          </View>
        </View>
        <View style={styles.rows3}>
          <Image
            source={require("./img/image3.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
          <Image
            source={require("./img/image4.jpg")}
            style={{ width: 150, height: 140, resizeMode: "stretch" }}
          />
        </View>
      </View>
     
      <View style={styles.foots}>
      <View style={styles.footss}>
      <View style={styles.musics}>
        <Image
          source={require("./img/bot.jpg")}
          style={{ width: 40, height: 40, resizeMode: "stretch" }}
        />
        <View style={styles.musics1}>
          <Text style={styles.musictitle}>Paruparo</Text>
          <Text style={styles.musictitles}>Sugarcane</Text>
        </View>
        <Icon1 name="monitor-speaker" size={22} color="grey" />
        <Icon2
          style={styles.gaps}
          name="heart"
          size={27}
          color="green"
        />
        <Iconss name="pause-sharp" size={20} color="white" />
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.foot}>
        <View style={styles.foot1}>
          <Icon1 name="home-variant" size={20} color="white" />
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.foot1}>
          <Icons name="search1" size={20} color="#b3b3b3" />
          <Text style={styles.title1}>Search</Text>
        </View>

        <View style={styles.foot1}>
          <Iconss name="library-outline" size={20} color="#b3b3b3" />
          <Text style={styles.title1}>Your Library</Text>
        </View>
        <View style={styles.foot1}>
          <Icon2 name="spotify" size={20} color="#b3b3b3" />
          <Text style={styles.title1}>Premium</Text>
        
          </View>
        </View>
      </View>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
        translucent={true}
      />
    </View>
  );
}