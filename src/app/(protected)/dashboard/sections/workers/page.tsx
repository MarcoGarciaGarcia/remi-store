"use client";
import { workersRegister } from "@/apis/apiRegister";
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
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { EllipsisVertical } from "lucide-react";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
const styles = {
  label: ["group-data-[filled-within=true]:text-black"],
  input: [
    "bg-transparent",
    "text-black",
    "placeholder:text-gray-600/50",
    "rounded-lg",
    "w-72"
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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: WorkersSchemaType) => {
    console.log(values);
    try {
      const response = await workersRegister(values);
      console.log("Data saved successfully:", response);

      if (response.status === 200) {
      }
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
    }
  };

  return (
    <section className="w-full h-full">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-primary-500 text-4xl font-bold font-sans pt-5">
            Gestión de Empleados
          </h1>
        </div>
        <div className="flex my-5 ml-60 justify-center">
          <Card shadow="lg" className="rounded-lg p-5 border-none mt-3">
            <CardBody>
              <Table
                removeWrapper
                aria-label="Example static collection table"
                className="w-[800px] rounded-lg bg-white"
              >
                <TableHeader className="flex justify-center items-center rounded-lg">
                  <TableColumn className="bg-primary-500">
                    <p className="text-white text-center">Usuario</p>
                  </TableColumn>
                  <TableColumn className="bg-primary-500 justify-center items-center">
                    <p className="text-white text-center">Rol</p>
                  </TableColumn>
                  <TableColumn className="bg-primary-500">
                    <p className="text-white text-center">Estatus</p>
                  </TableColumn>
                  <TableColumn className="bg-primary-500 justify-center items-center">
                    <p className="text-white text-center">Opciones</p>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell className="text-secondary-900 text-center">
                      user
                    </TableCell>
                    <TableCell className="text-secondary-900 text-center">
                      role
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
                              className="text-primary-500"
                            />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                          <DropdownItem key="see" className="text-primary-800 font-sans">
                            Ver
                          </DropdownItem>
                          <DropdownItem key="update" className="text-primary-800 font-sans">
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
                </TableBody>
              </Table>
            </CardBody>
          </Card>

          <Card className="w-[400px] ml-16 bg-white rounded-lg p-8" shadow="md">
            <CardHeader className="flex justify-center">
              <div className="flex justify-center">
                <p className="text-lg font-normal text-secondary-900 text-center font-sans">
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
                          className="w-full p-2 border rounded-md"
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
                <div className="flex justify-center gap-10">
                  <Button
                    variant="bordered"
                    color="primary"
                    type="reset"
                    className="w-28 text-primary-500 border-2 border-primary-500 rounded-lg"
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="solid"
                    color="primary"
                    type="submit"
                    className="w-28 rounded-lg"
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
