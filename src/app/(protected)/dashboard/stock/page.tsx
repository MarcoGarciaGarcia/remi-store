"use client";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Dropdown,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { NextPage } from "next";

const Stock: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState([
    { id: 1, name: "Producto A", quantity: 3 },
    { id: 2, name: "Producto B", quantity: 5 },
    { id: 3, name: "Producto C", quantity: 2 },
  ]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductQuantity, setNewProductQuantity] = useState("");

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateStock = (id: number) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="h-auto justify-center px-10 py-5">
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-white h-80 flex justify-center"
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Nombre del Producto"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                />
                <Input
                  label="Cantidad"
                  type="number"
                  value={newProductQuantity}
                  onChange={(e) => setNewProductQuantity(e.target.value)}
                  className="mt-4"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <h1 className="text-primary-500 font-bold text-2xl mb-5">
        Administración de stock
      </h1>
      <Button
        onPress={onOpen}
        color="primary"
        className="text-white rounded-lg"
      >
        Agregar Producto
      </Button>

      <div className="mt-6">
        <Table aria-label="Tabla de productos">
          <TableHeader>
            <TableColumn>Producto</TableColumn>
            <TableColumn>Cantidad</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                className={product.quantity <= 3 ? "bg-red-100" : ""}
              >
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button>Acciones</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Acciones">
                      <DropdownItem
                        key="edit"
                        onClick={() => handleUpdateStock(product.id)}
                      >
                        Actualizar Stock
                      </DropdownItem>
                      <DropdownItem
                        key="delete"
                        color="danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Eliminar
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Stock;
