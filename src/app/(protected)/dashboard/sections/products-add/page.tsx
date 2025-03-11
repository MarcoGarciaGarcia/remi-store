"use client";
import { productsDelete, productsRegister } from "@/apis/apiRegister";
import { IProveedores } from "@/interfaces/proveedores";
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
import Swal from "sweetalert2";

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
  const [deleteProduct, setDeleteProduct] = useState(0);
  const [proveedoresData, setProveedores] = useState<IProveedores>();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onOpenChange: onOpenChange1,
  } = useDisclosure();
  const {
    //isOpen: isOpen2,
    onOpen: onOpen2,
    //onOpenChange: onOpenChange2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onOpenChange: onOpenChange3,
  } = useDisclosure();
  const form = useForm<ProductoSchemaType>({
    resolver: zodResolver(ProductoSchema),
    defaultValues: {
      id_proveedor: "",
      nombre_producto: "",
      codigo_barras: "",
      categoria: "",
      precio_unitario: "",
      precio_venta: "",
      stock: "",
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

      if (response.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        title: "Error",
        text: "Un error inesperado ocurrió, verifique si el producto ya existe",
        icon: "error",
      });
      form.reset();
    } finally {
    }
  };

  const handleDelete = async () => {
    try {
      const response = await productsDelete(deleteProduct);
      console.log("Data saved successfully:", response);

      if (response.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        title: "Error",
        text: "Un error inesperado ocurrió, verifique si el producto ya existe",
        icon: "error",
      });
      form.reset();
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

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const fetchProveedores = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/getAllProveedores`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setProveedores(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProveedores();
  }, [isOpen1]);

  const handleDeleteProduct = (id: number) => () => {
    onOpen3();
    setDeleteProduct(id);
  };

  return (
    <section className="w-full h-auto">
      <Modal
        isOpen={isOpen1}
        onOpenChange={onOpenChange1}
        backdrop="blur"
        className="bg-white shadow-2xl rounded-xl fixed top-24 lg:h-auto h-96 p-2 lg:-mt-14 -mt-0 overflow-y-scroll"
      >
        <ModalContent>
          {(onClose1) => (
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
                              placeholder="Categoría"
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
                            <label className="text-gray-400 text-[10px] pb-2">
                              Precio de Compra
                            </label>
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
                            <label className="text-gray-400 text-[10px] pb-2">
                              Precio de Venta
                            </label>
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
                            <label className="text-gray-400 text-[10px] pb-2">
                              Cantidad de Stock
                            </label>
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
                      <Controller
                        name="id_proveedor"
                        control={control}
                        render={({ field }) => (
                          <div>
                            <select
                              className="py-3 rounded-lg w-full shadow-lg border-1 border-gray-100"
                              {...field}
                              value={field.value}
                              style={{ color: "black" }}
                              required
                            >
                              <option value="">Selecciona un proveedor</option>
                              {proveedoresData?.data.map((proveedor, index) => (
                                <option
                                  key={index}
                                  value={proveedor.id_proveedor}
                                >
                                  {proveedor.nombre_proveedor}
                                </option>
                              ))}
                            </select>
                            {errors.id_proveedor?.message && (
                              <span className="text-red-500 text-xs">
                                {errors.id_proveedor.message}
                              </span>
                            )}
                          </div>
                        )}
                      />
                    </div>
                    <div className="flex justify-center gap-10 mt-4">
                      <Button
                        variant="bordered"
                        color={"0" as never}
                        type="reset"
                        onPress={onClose1}
                        className="w-28 text-black border-2 border-black rounded-lg"
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="solid"
                        color={"0" as never}
                        type="submit"
                        className="w-28 rounded-lg text-white bg-black"
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
      <Modal
        isOpen={isOpen3}
        onOpenChange={onOpenChange3}
        backdrop="blur"
        className="bg-white shadow-2xl rounded-xl fixed top-24 lg:h-auto h-96 p-2 lg:-mt-14 -mt-0 overflow-y-scroll"
      >
        <ModalContent>
          {(onClose3) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-lg font-normal text-secondary-900 text-center font-sans">
                  Eliminar Producto
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-full flex justify-center items-center">
                  <form>
                    <p className="font-bold text-xl text-black my-4">
                      ¿Seguro que deseas eliminar este producto?
                    </p>
                    <p className="font-semibold text-md text-black my-4">
                      {products
                        ? products.data.find(
                            (product) => product.id_producto === deleteProduct
                          )?.nombre_producto
                        : ""}
                    </p>
                    <div className="flex justify-center items-end gap-10 mt-4">
                      <Button
                        variant="bordered"
                        color={"0" as never}
                        type="reset"
                        onPress={onClose3}
                        className="w-28 text-black border-2 border-black rounded-lg"
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="solid"
                        color={"0" as never}
                        type="submit"
                        className="w-28 rounded-lg text-white bg-black"
                        onPress={() => {
                          handleDelete();
                        }}
                      >
                        Eliminar
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
          <h1 className="text-black lg:text-4xl text-xl font-bold font-sans lg:pt-5 pt-16">
            Control de inventario
          </h1>
        </div>

        <div className="flex my-5 lg:ml-60 ml-0 justify-center">
          <Card
            shadow="lg"
            className="rounded-lg p-5 lg:ml-20 ml-0 border-none mt-3 w-full"
          >
            <CardBody>
              <Button
                onPress={onOpen1}
                color={"0" as never}
                className="text-white bg-black my-4 rounded-lg w-40"
              >
                + Nuevo Producto
              </Button>
              <Table
                removeWrapper
                aria-label="Example static collection table"
                className="lg:w-[900px] w-full rounded-lg bg-white"
              >
                <TableHeader className="flex justify-center items-center rounded-lg">
                  <TableColumn className="bg-black rounded-s-lg">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      Producto
                    </p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center items-center">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      Código
                    </p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      Precio de compra
                    </p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center items-center">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      Precio de venta
                    </p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      Stock
                    </p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      Estatus
                    </p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center rounded-e-lg items-center">
                    <p className="text-white text-center lg:text-[12px] text-[10px]">
                      .
                    </p>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {products ? (
                    products.data.map((product) => (
                      <TableRow key={product.id_producto}>
                        <TableCell className="text-secondary-900 text-center lg:text-[12px] text-[10px]">
                          {product.nombre_producto}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center lg:text-[12px] text-[10px]">
                          {product.codigo_barras}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center lg:text-[12px] text-[10px]">
                          ${product.precio_unitario}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center lg:text-[12px] text-[10px]">
                          ${product.precio_venta}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center lg:text-[12px] text-[10px]">
                          {product.stock}
                        </TableCell>
                        <TableCell className="text-secondary-900 text-center lg:text-[12px] text-[10px]">
                          {product.estado === 1 ? (
                            <p className="text-primary-600">Activo</p>
                          ) : (
                            <p className="text-gray-300">Inactivo</p>
                          )}
                        </TableCell>
                        <TableCell className="text-default-300 text-center">
                          <Dropdown className="w-40 rounded-lg border-1 border-black bg-white">
                            <DropdownTrigger>
                              <Button variant="light">
                                <EllipsisVertical
                                  size={20}
                                  className="text-gray-400"
                                />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                              <DropdownItem
                                key="update"
                                className="text-black font-sans"
                                onPress={onOpen2}
                              >
                                Modificar Precios
                              </DropdownItem>
                              <DropdownItem
                                key="delete"
                                className="text-red-500 font-sans"
                                color="danger"
                                onPress={handleDeleteProduct(
                                  product.id_producto
                                )}
                              >
                                Eliminar
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

          <div className="lg:w-80 w-0"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
