import { useParams } from "react-router-dom";

export default function UrunDetay() {
  const { id } = useParams();
  return <h1>Ürün Detayı — ID: {id}</h1>;
}