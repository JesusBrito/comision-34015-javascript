import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getDataFromApi();
  }, []);

  async function getDataFromApi() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/products"
      );
      const dataResponse = await response.json();
      setProducts(dataResponse);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio compra</th>
          <th>Precio venta</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.nombre}</td>
            <td>{product.precioCompra}</td>
            <td>{product.precioVenta}</td>
            <td>{product.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
