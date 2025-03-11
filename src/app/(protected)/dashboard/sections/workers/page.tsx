"use client";
import { getWorkers, workersRegister } from "@/apis/apiRegister";
import { userDelete } from "@/apis/apiUsers";
import { IWorker } from "@/interfaces/workers";
import { WorkersSchema, WorkersSchemaType } from "@/schemas/worker-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
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
  const [workers, setWorkers] = useState<IWorker>();

  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onOpenChange: onOpenChange1,
  } = useDisclosure();

  // Segundo modal
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onOpenChange: onOpenChange2,
  } = useDisclosure();

  const [iD, setId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const GetWorkers = async () => {
      try {
        const response = await getWorkers();
        setWorkers(response.data);
        console.log("first: " + JSON.stringify(workers?.users));
      } catch (error) {
        console.error("Error get data:", error);
      }
    };

    GetWorkers();
  }, []);

  const form = useForm<WorkersSchemaType>({
    resolver: zodResolver(WorkersSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      rol: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: WorkersSchemaType) => {
    console.log(values);
    setIsLoading(true);
    try {
      const response = await workersRegister(values);
      console.log("Data saved successfully:", response);

      if (response.status === 201) {
        Swal.fire({
          title: "Éxito",
          text: "Usuario Creado",
          icon: "success",
        });
        control._reset();
        form.reset();
      }
      form.reset();
    } catch (error) {
      console.error("Error saving data:", error);
      Swal.fire({
        title: "Error",
        text: "Proceso Incorrecto",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDetails = (id: number): void => {
    setId(id);
    onOpen1();
  };

  const handleUpdate = (id: number): void => {
    setId(id);
    onOpen2();
  };

  const deleteUser = async (id: number): Promise<void> => {
    const response = await userDelete(id);
    if (response.status === 200) {
      window.location.reload();
    } else {
      Swal.fire({
        title: "Proceso Incorrecto",
        text: "Algo salió mal",
        icon: "error",
      });
      onOpenChange2();
    }
  };

  return (
    <section className="w-full bg-transparent lg:px-0 px-2">
      <Modal
        isOpen={isOpen1}
        onOpenChange={onOpenChange1}
        backdrop="blur"
        className="bg-white shadow-2xl rounded-xl fixed top-24 h-80 p-2 mt-0"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-lg font-bold text-secondary-900 text-center font-sans">
                  Detalles del Personal
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-full grid justify-start items-center">
                  <p className="text-black">
                    Nombre:{" "}
                    {workers?.users.find((user) => user.id === iD)?.name}
                  </p>
                  <br></br>
                  <p className="text-black">
                    Rol: {workers?.users.find((user) => user.id === iD)?.rol}
                  </p>
                  <br></br>
                  <p className="text-black">
                    Email:{" "}
                    {workers?.users.find((user) => user.id === iD)?.email}
                  </p>
                  <br></br>
                  <p className="text-black">
                    Estatus:{" "}
                    {workers?.users.find((user) => user.id === iD)?.activo}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-black text-white w-20 rounded-lg"
                  color={"0" as never}
                  onPress={onClose}
                >
                  {" "}
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen2}
        onOpenChange={onOpenChange2}
        backdrop="blur"
        className="bg-white shadow-2xl rounded-xl fixed top-24 h-80 p-2 mt-0"
      >
        <ModalContent>
          {(onClose2) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-lg font-bold text-secondary-900 text-center font-sans">
                  Eliminar Empleado
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="w-full h-full grid justify-start items-center">
                  <p className="text-black font-bold">
                    Seguro que quieres eliminar a{" "}
                    {workers?.users.find((user) => user.id === iD)?.name}?
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-white text-black w-20 rounded-lg"
                  color={"0" as never}
                  onPress={onClose2}
                >
                  {" "}
                  Cerrar
                </Button>
                <Button
                  className="bg-black text-white w-20 rounded-lg"
                  color={"0" as never}
                  onPress={() =>
                    deleteUser(
                      workers?.users.find((user) => user.id === iD)?.id ?? 25000
                    )
                  }
                >
                  {" "}
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-black lg:text-4xl text-2xl font-bold font-sans lg:pt-5 pt-16">
            Gestión de Empleados
          </h1>
        </div>
        <div className="lg:flex grid my-5 lg:ml-60 ml-0 justify-center">
          <Card
            shadow="lg"
            className="rounded-lg p-5 border-none mt-3 bg-white shadow-lg"
          >
            <CardBody>
              <Table
                removeWrapper
                aria-label="Example static collection table"
                className="lg:w-[600px] w-full rounded-lg bg-white"
              >
                <TableHeader className="flex justify-center items-center rounded-lg">
                  <TableColumn className="bg-black rounded-s-lg">
                    <p className="text-white text-center">Usuario</p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center items-center">
                    <p className="text-white text-center">Rol</p>
                  </TableColumn>
                  <TableColumn className="bg-black">
                    <p className="text-white text-center">Estatus</p>
                  </TableColumn>
                  <TableColumn className="bg-black justify-center items-center rounded-e-lg">
                    <p className="text-white text-center">Opciones</p>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {workers ? (
                    workers?.users.map((worker) => (
                      <TableRow key={worker.id}>
                        <TableCell className="text-black text-start">
                          {worker.name}
                        </TableCell>
                        <TableCell className="text-black text-center">
                          {worker.rol}
                        </TableCell>
                        <TableCell className="text-black text-center">
                          {worker.activo === 1 ? (
                            <p className="text-pink-500">Activo</p>
                          ) : (
                            <p className="text-gray-300">Inactivo</p>
                          )}
                        </TableCell>
                        <TableCell className="text-default-300 text-center">
                          <Dropdown className="w-28 rounded-lg border-1 border-black bg-white">
                            <DropdownTrigger>
                              <Button variant="light">
                                <EllipsisVertical
                                  size={20}
                                  className="text-black"
                                />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                              <DropdownItem
                                key="see"
                                className="text-black font-sans"
                                onPress={() => {
                                  handleDetails(worker.id);
                                }}
                              >
                                Ver
                              </DropdownItem>
                              <DropdownItem
                                key="update"
                                className="text-red-500 font-sans"
                                onPress={() => {
                                  handleUpdate(worker.id);
                                }}
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
                      <TableCell className="text-black text-center">
                        Ninguno
                      </TableCell>
                      <TableCell className="text-black text-center">
                        Ninguno
                      </TableCell>
                      <TableCell className="text-black text-center">
                        <p>Default</p>
                      </TableCell>
                      <TableCell className="text-default-300 text-center">
                        <Dropdown className="w-28 rounded-lg border-1 border-black">
                          <DropdownTrigger>
                            <Button variant="light">
                              <EllipsisVertical
                                size={20}
                                className="text-black"
                              />
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Static Actions">
                            <DropdownItem
                              key="see"
                              className="text-black font-sans"
                            >
                              Ver
                            </DropdownItem>
                            <DropdownItem
                              key="update"
                              className="text-black font-sans"
                            >
                              Actualizar
                            </DropdownItem>
                            <DropdownItem
                              key="delete"
                              className="text-black font-sans"
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

          <Card className="lg:w-[400px] w-full h-[470px] lg:ml-16 ml-0 bg-white rounded-lg p-8 shadow-lg mt-3">
            <CardHeader className="flex justify-center">
              <div className="flex justify-center">
                <p className="text-lg text-black text-center font-bold font-sans">
                  Agregar un nuevo usuario
                </p>
              </div>
            </CardHeader>

            <CardBody className="border-none">
              <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className="grid justify-center gap-5 my-5">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          placeholder="Nombre"
                          classNames={styles}
                          {...field}
                          style={{ color: "black" }}
                          isRequired={true}
                        />
                        {errors.name?.message && (
                          <span className="text-red-500 text-xs">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          placeholder="email"
                          classNames={styles}
                          {...field}
                          style={{ color: "black" }}
                          isRequired={true}
                        />
                        {errors.email?.message && (
                          <span className="text-red-500 text-xs">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          type="password"
                          placeholder="password"
                          classNames={styles}
                          {...field}
                          style={{ color: "black" }}
                          isRequired={true}
                        />
                        {errors.password?.message && (
                          <span className="text-red-500 text-xs">
                            {errors.password.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="password_confirmation"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Input
                          type="password"
                          placeholder="password confirmation"
                          classNames={styles}
                          {...field}
                          style={{ color: "black" }}
                          isRequired={true}
                        />
                        {errors.password_confirmation?.message && (
                          <span className="text-red-500 text-xs">
                            {errors.password_confirmation.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="rol"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <select
                          {...field}
                          className="w-full p-2 border-none text-gray-200 rounded-lg"
                          style={{ color: "gray" }}
                          required
                        >
                          <option value="">Seleccione una opción</option>
                          <option value="1">Admin</option>
                          <option value="2">Empleado</option>
                          <option value="3">Gestión</option>
                        </select>
                        {errors.rol?.message && (
                          <span className="text-red-500 text-xs">
                            {errors.rol.message}
                          </span>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className="flex justify-center gap-10 pt-2">
                  <Button
                    variant="bordered"
                    color={"0" as never}
                    type="reset"
                    className="w-28 text-black border-2 border-black rounded-lg"
                    onClick={() => form.reset()}
                  >
                    Cancelar
                  </Button>
                  <Button
                    isLoading={isLoading}
                    variant="solid"
                    color={"0" as never}
                    type="submit"
                    className="w-28 rounded-lg bg-black text-white"
                  >
                    Guardar
                  </Button>
                </div>
              </form>
            </CardBody>

            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>

          <div className="w-80"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
