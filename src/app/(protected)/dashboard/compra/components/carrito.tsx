"use client";
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
import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  codigo: string;
  precio: string;
}

const productos: Producto[] = [
  { id: 1, nombre: "Cocacola", codigo: "LP1001", precio: "20.00" },
  { id: 2, nombre: "Agua Bonafont 1.5L", codigo: "SP2002", precio: "16.00" },
  { id: 3, nombre: "Cigarros Malboro", codigo: "TB3003", precio: "83.00" },
  { id: 4, nombre: "Red Cola", codigo: "MN4004", precio: "13.00" },
  { id: 5, nombre: "Takis Fuego", codigo: "TC5005", precio: "16.00" },
];

const Ventas: React.FC = () => {
  const [codigoBarras, setCodigoBarras] = useState("");
  const [listaVentas, setListaVentas] = useState<Producto[]>([]);
  const [total, setTotal] = useState(0.0);
  const [subtotal, setSubtotal] = useState(0.0);
  const [isChecked, setIsChecked] = useState(false);

  const agregarProducto = () => {
    const producto = productos.find((p) => p.codigo === codigoBarras);
    if (producto) {
      setListaVentas((prevLista) => [...prevLista, producto]);
      setTotal(total + parseFloat(producto.precio));
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

  return (
    <div className="w-[700px] h-auto justify-start border-3 border-primary-500 rounded-lg mr-14">
      <h1 className="text-center text-primary-500 text-md font-semibold px-5 pt-5">
        Servicio de Ventas
      </h1>
      <Input
        type="text"
        placeholder="Escanea el código de barras"
        value={codigoBarras}
        onChange={(e) => setCodigoBarras(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-[400px] mb-4 text-black px-5 pt-5"
      />

      <div className="flex w-full justify-center">
        <Table
          aria-label="Lista de ventas"
          className="md:w-[400px] justify-center"
        >
          <TableHeader>
            <TableColumn className="bg-secondary-500 text-primary-500 text-center">
              Nombre
            </TableColumn>
            <TableColumn className="bg-secondary-500 text-primary-500 text-center">
              Precio
            </TableColumn>
          </TableHeader>
          <TableBody>
            {listaVentas.map((producto, index) => (
              <TableRow key={index}>
                <TableCell className="text-black text-start">
                  {producto.nombre}
                </TableCell>
                <TableCell className="text-black text-center">
                  ${producto.precio}
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
        <p className="text-black text-tiny py-3">
          En caso de pagar con tarjeta, llena el siguiente check para aplicar el
          porcentaje correspondiente
        </p>
        <input
          id="myCheckbox"
          type="checkbox"
          className="form-checkbox text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          checked={isChecked}
          onChange={OnCreditCard}
        ></input>
        <label htmlFor="myCheckbox" className="text-black text-tiny ml-2">
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
          className="text-primary-500 rounded-lg"
          color="primary"
          variant="bordered"
        >
          Cancelar
        </Button>
        <Button
          className="text-white rounded-lg"
          color="primary"
          variant="solid"
        >
          Vender
        </Button>
      </div>
    </div>
  );
};

export default Ventas;
