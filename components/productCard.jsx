import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProductCard({ produto }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBetween}>
        <View style={styles.card}>
          <View style={styles.boxProduct}>
            <Text style={styles.title}>{produto.name}</Text>
            <Text style={styles.calories}>
              {""}
              <FontAwesome5
                style={styles.icon}
                name="fire-alt"
                size={16}
                color="orange"
              />
              {produto.calories} Calorias
            </Text>
            <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
          </View>

          <View style={styles.boxImage}>
            <Image style={styles.image} source={{ uri: produto.imagePath }} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  containerBetween: {
    flex: 0.2,
    display: "flex-inline",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "space-between",
    width: 380,
    backgroundColor: "#f5f5f5",
  },

  card: {
    margin: 15,
    padding: 20,
    width: 340,
    height: 150,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderRadius: 20,
  },

  boxProduct: {
    flexDirection: "colunm",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  title: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  calories: {
    color: "#D3D3D3",
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 10,
    marginBottom: 10,
  },

  price: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },

  icon: {
    marginRight: 5,
  },

  boxImage: {
    flexDirection: "colunm",
    justifyContent: "flex-end",
    alignSelf: "center",
  },

  image: {

    width: 50,
    height: 50,
  },
});
