"use client";
import { IProducto, IProductos } from "@/schemas/productos-schema";
import {
  Button,
  Divider,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

{
  /*const productos: Producto[] = [
  { id: 1, nombre: "Cocacola", codigo: "LP1001", precio: "20.00" },
  { id: 2, nombre: "Agua Bonafont 1.5L", codigo: "SP2002", precio: "16.00" },
  { id: 3, nombre: "Cigarros Malboro", codigo: "TB3003", precio: "83.00" },
  { id: 4, nombre: "Red Cola", codigo: "MN4004", precio: "13.00" },
  { id: 5, nombre: "Takis Fuego", codigo: "TC5005", precio: "16.00" },
];*/
}

const Ventas: React.FC = () => {
  const [productos, setProducts] = useState<IProductos>();
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/getAllProductos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const [codigoBarras, setCodigoBarras] = useState("");
  const [listaVentas, setListaVentas] = useState<IProducto[]>([]);
  const [total, setTotal] = useState(0.0);
  const [subtotal, setSubtotal] = useState(0.0);
  const [isChecked, setIsChecked] = useState(false);

  const agregarProducto = () => {
    const producto = productos?.data.find(
      (p) => p.codigo_barras === codigoBarras
    );
    if (producto) {
      setListaVentas((prevLista) => [...prevLista, producto]);
      setTotal(total + parseFloat(producto.precio_venta.toString()));
    } else {
      alert("Producto no encontrado");
    }
    setCodigoBarras("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      agregarProducto();
    }
  };

  const OnCreditCard = () => {
    setIsChecked(!isChecked);
    if (isChecked === true) {
      setSubtotal(0);
    } else {
      setSubtotal(total * 0.05);
    }
  };

  const [token, setToken] = useState("");
  const [idUsuario, setIdUsuario] = useState(0)

  useEffect(() => {
    setToken(sessionStorage.getItem("authToken") ?? "");
    setIdUsuario(parseInt(sessionStorage.getItem("userId") || "0"))
  }, []);

  const handleVenta = () => {
    const ventaData = {
      id_usuario: idUsuario,
      total_venta: total,
      productos: listaVentas.map((venta) => ({
        id_producto: venta.id_producto,
        cantidad: 1,
      })),
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/registrarVenta`, ventaData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Venta realizada con éxito:", response.data);
        setListaVentas([]);
        setTotal(0);
        setSubtotal(0);
        setIsChecked(false);
      })
      .catch((error) => {
        console.error("Error al realizar la venta:", error);
      });
  };

  return (
    <div className="w-auto h-auto justify-start shadow-lg bg-white rounded-lg mr-14">
      <h1 className="text-center text-xl text-black text-md font-sans px-5 pt-5">
        Servicio de Ventas
      </h1>
      <Input
        type="text"
        placeholder="Escanea el código de barras"
        value={codigoBarras}
        onChange={(e) => setCodigoBarras(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-[400px] mb-2 text-black px-5 pl-10 pt-5 font-sans"
      />

      <div className="flex w-full justify-center">
        <Table
          aria-label="Lista de ventas"
          className="md:w-[400px] justify-center"
        >
          <TableHeader>
            <TableColumn className="bg-black text-white rounded-s-lg text-center font-sans">
              Nombre
            </TableColumn>
            <TableColumn className="bg-black text-white rounded-e-lg text-center font-sans">
              Precio
            </TableColumn>
          </TableHeader>
          <TableBody>
            {listaVentas.map((producto, index) => (
              <TableRow key={index}>
                <TableCell className="text-black text-start">
                  {producto.nombre_producto}
                </TableCell>
                <TableCell className="text-black text-center">
                  ${producto.precio_venta}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-full px-10 py-5">
        <Divider></Divider>
      </div>
      <div className="w-full px-10 pb-5">
        <p className="text-black font-semibold text-tiny py-3 font-sans">
          En caso de pagar con tarjeta, llena el siguiente check para aplicar el
          porcentaje correspondiente
        </p>
        <input
          id="myCheckbox"
          type="checkbox"
          className="form-checkbox text-black border-gray-300 rounded focus:ring-black"
          checked={isChecked}
          onChange={OnCreditCard}
        ></input>
        <label
          htmlFor="myCheckbox"
          className="text-black font-sans text-tiny ml-2"
        >
          Pago con tarjeta
        </label>
      </div>
      <div className="flex w-full justify-center">
        <p className="font-semibold text-black">Subtotal: &nbsp;</p>
        <p className="text-black">${total}</p>
      </div>
      <div className="flex w-full justify-center">
        <p className="font-semibold text-black">Total: &nbsp;</p>
        <p className="text-black">${total + subtotal}</p>
      </div>
      <div className="flex justify-end w-full mx-10 py-6 pr-20 gap-5">
        <Button
          className="text-black border-1 border-black rounded-lg"
          color="primary"
          onClick={() => setListaVentas([])}
          variant="bordered"
        >
          Cancelar
        </Button>
        <Button
          className="text-white bg-black rounded-lg"
          color={"" as never}
          variant="solid"
          type="submit"
          onClick={handleVenta}
        >
          Vender
        </Button>
      </div>
    </div>
  );
};

export default Ventas;
