import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";

export default function Produtos({ navigation }) {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/produto")
      .then((resp) => setProdutos(resp.data))


  }, []);

  return (<ScrollView>
    {produtos.map(produto => <ProductCard key={produto.id} produto={produto} />)}
  </ScrollView>);
}
