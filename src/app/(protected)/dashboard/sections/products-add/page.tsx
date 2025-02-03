"use client";
import { productsRegister } from "@/apis/apiRegister";
import { IProductos } from "@/schemas/productos-schema";
import { ProductoSchema, ProductoSchemaType } from "@/schemas/products-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { EllipsisVertical } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { number } from "zod";
const styles = {
  label: ["group-data-[filled-within=true]:text-black"],
  input: [
    "bg-transparent",
    "text-black",
    "placeholder:text-gray-600/50",
    "rounded-lg",
    "w-72",
  ],
  innerWrapper: "bg-transparent",
  inputWrapper: [
    "shadow-md",
    "bg-white/5",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-black/5",
    "group-data-[focused=true]:bg-white/5",
    "dark:group-data-[focused=true]:bg-white",
    "border-black/10",
    "group-data-[focus=true]:border-black",
    "!cursor-text",
    "rounded-lg",
  ],
};

const DashboardPage: FC = () => {
  const [products, setProducts] = useState<IProductos>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const form = useForm<ProductoSchemaType>({
    resolver: zodResolver(ProductoSchema),
    defaultValues: {
      id_proveedor: 0,
      nombre_producto: "",
      codigo_barras: "",
      categoria: "",
      precio_unitario: 0,
      precio_venta: 0,
      stock: 0,
      estado: 1,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: ProductoSchemaType) => {
    console.log(values);
    try {
      const response = await productsRegister(values);
      console.log("Data saved successfully:", response);

      if (response.status === 200) {
      }
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
    }
  };

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

  return (
    <section className="w-full h-full">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        className="bg-white shadow-xl rounded-xl fixed top-24 h-[500px] p-2"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-lg font-normal text-secondary-900 text-center font-sans">
                  Agregar Nuevo Producto
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-full flex justify-center items-center">
                  <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="grid justify-center gap-5 my-5">
                      <Controller
                        name="nombre_producto"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Input
                              placeholder="Nombre"
                              classNames={styles}
                              {...field}
                              value={field.value.toString()}
                              style={{ color: "black" }}
                              isRequired={true}
                            />
                            {errors.nombre_producto?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.nombre_producto.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="codigo_barras"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Input
                              placeholder="Código de barras"
                              classNames={styles}
                              {...field}
                              style={{ color: "black" }}
                              isRequired={true}
                            />
                            {errors.codigo_barras?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.codigo_barras.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="categoria"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Input
                              placeholder="Código de barras"
                              classNames={styles}
                              {...field}
                              style={{ color: "black" }}
                              isRequired={true}
                            />
                            {errors.categoria?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.categoria.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="precio_unitario"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Input
                              placeholder="Precio de compra"
                              classNames={styles}
                              {...field}
                              value={field.value.toString()}
                              style={{ color: "black" }}
                              isRequired={true}
                            />
                            {errors.precio_unitario?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.precio_unitario.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="precio_venta"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Input
                              placeholder="Precio de venta"
                              classNames={styles}
                              {...field}
                              value={field.value.toString()}
                              style={{ color: "black" }}
                              isRequired={true}
                            />
                            {errors.precio_venta?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.precio_venta.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="stock"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <Input
                              placeholder="Cantidad en stock"
                              classNames={styles}
                              {...field}
                              value={field.value.toString()}
                              style={{ color: "black" }}
                              isRequired={true}
                            />
                            {errors.stock?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.stock.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                    </div>
                    <div className="flex justify-center gap-10 mt-4">
                      <Button
                        variant="bordered"
                        color="primary"
                        type="reset"
                        onPress={onClose}
                        className="w-28 text-primary-500 border-2 border-primary-500 rounded-lg"
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="solid"
                        color="primary"
                        type="submit"
                        className="w-28 rounded-lg"
                        onPress={onClose}
                      >
                        Guardar
                      </Button>
                    </div>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-black text-4xl font-bold font-sans pt-5">
            Control de inventario
          </h1>
        </div>

        <div className="flex my-5 ml-60 justify-center">
          <Card shadow="lg" className="rounded-lg p-5 ml-20 border-none mt-3">
            <CardBody>
              <Button
                onPress={onOpen}
                color={"0" as never}
                className="text-white bg-black my-4 rounded-lg w-40"
              >
                + Nuevo Producto
              </Button>
              <Table
                removeWrapper
                aria-label="Example static collection table"
                className="w-[900px] rounded-lg bg-white"
              >
                <TableHeader className="flex justify-center items-center rounded-lg">
                  <TableColumn className="bg-black rounded-s-lg">
                    <p className="text-white text-center">Producto</p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center items-center">
                    <p className="text-white text-center">Código</p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center">Precio de compra</p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center items-center">
                    <p className="text-white text-center">Precio de venta</p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center">Stock</p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center">Estatus</p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center rounded-e-lg items-center">
                    <p className="text-white text-center">Opciones</p>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {products ? (
                    products.data.map((product) => (
                      <TableRow key={product.id_producto}>
                        <TableCell className="text-secondary-900 text-center">
                          {product.nombre_producto}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center">
                          {product.codigo_barras}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center">
                          ${product.precio_unitario}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center">
                          ${product.precio_venta}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center">
                          {product.stock}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center">
                          {product.estado === 1 ? (
                            <p className="text-pink-500">Activo</p>
                          ) : (
                            <p className="text-gray-300">Inactivo</p>
                          )}
                        </TableCell>
                        <TableCell className="text-default-300 text-center">
                          <Dropdown className="w-28 rounded-lg border-1 border-primary-800">
                            <DropdownTrigger>
                              <Button variant="light">
                                <EllipsisVertical
                                  size={20}
                                  className="text-pink-500"
                                />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                              <DropdownItem
                                key="see"
                                className="text-primary-800 font-sans"
                              >
                                Ver
                              </DropdownItem>
                              <DropdownItem
                                key="update"
                                className="text-primary-800 font-sans"
                              >
                                Actualizar
                              </DropdownItem>
                              <DropdownItem
                                key="delete"
                                className="text-secondary-800 font-sans"
                                color="danger"
                              >
                                Dar de baja
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow key={0}>
                      <TableCell className="text-secondary-900 text-center">
                        -
                      </TableCell>
                      <TableCell className="text-secondary-900 text-center">
                        -
                      </TableCell>
                      <TableCell className="text-secondary-900 text-center">
                        -
                      </TableCell>
                      <TableCell className="text-secondary-900 text-center">
                        -
                      </TableCell>
                      <TableCell className="text-secondary-900 text-center">
                        -
                      </TableCell>
                      <TableCell className="text-secondary-900 text-center">
                        <Switch
                          defaultSelected
                          aria-label="Automatic updates"
                          color="primary"
                        />
                      </TableCell>
                      <TableCell className="text-default-300 text-center">
                        <Dropdown className="w-28 rounded-lg border-1 border-primary-800">
                          <DropdownTrigger>
                            <Button variant="light">
                              <EllipsisVertical
                                size={20}
                                className="text-pink-500"
                              />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                              key="see"
                              className="text-primary-800 font-sans"
                            >
                              Ver
                            </DropdownItem>
                            <DropdownItem
                              key="update"
                              className="text-primary-800 font-sans"
                            >
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              key="delete"
                              className="text-secondary-800 font-sans"
                              color="danger"
                            >
                              Dar de baja
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardBody>
          </Card>

          <div className="w-80"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
