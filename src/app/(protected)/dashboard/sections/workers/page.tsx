"use client";
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
  Select,
  SelectItem,
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
const styles = {
  label: ["group-data-[filled-within=true]:text-black"],
  input: [
    "bg-transparent",
    "text-black",
    "placeholder:text-gray-600/50",
    "rounded-lg",
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
  return (
    <section className="w-full h-full">
      <div className="grid justify-center">
        <div className="flex justify-center">
          <h1 className="text-primary-500 text-4xl font-bold">
            Gestión de Empleados
          </h1>
        </div>
        <div className="flex my-5 ml-60 justify-center">
          <Card shadow="md" className="border-1 rounded-lg p-5">
            <CardBody>
              <Table
                removeWrapper
                aria-label="Example static collection table"
                className="w-[800px]"
              >
                <TableHeader className="flex justify-center items-center">
                  <TableColumn className="bg-secondary-500">
                    <p className="text-primary-500 text-center">Usuario</p>
                  </TableColumn>
                  <TableColumn className="bg-secondary-500 justify-center items-center">
                    <p className="text-primary-500 text-center">Rol</p>
                  </TableColumn>
                  <TableColumn className="bg-secondary-500">
                    <p className="text-primary-500 text-center">Estatus</p>
                  </TableColumn>
                  <TableColumn className="bg-secondary-500 justify-center items-center">
                    <p className="text-primary-500 text-center">Opciones</p>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell className="text-default-300 text-center">
                      user
                    </TableCell>
                    <TableCell className="text-default-300 text-center">
                      role
                    </TableCell>
                    <TableCell className="text-default-300 text-center">
                      <Switch
                        defaultSelected
                        aria-label="Automatic updates"
                        color="primary"
                      />
                    </TableCell>
                    <TableCell className="text-default-300 text-center">
                      <Dropdown className="border-1 w-28 rounded-lg">
                        <DropdownTrigger>
                          <Button variant="bordered">
                            <EllipsisVertical
                              size={20}
                              className="text-primary-500"
                            />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                          <DropdownItem key="see" className="text-black">
                            Ver
                          </DropdownItem>
                          <DropdownItem key="update" className="text-black">
                            Actualizar
                          </DropdownItem>
                          <DropdownItem
                            key="delete"
                            className="text-danger"
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

          <Card className="w-[400px] ml-16 border-1 rounded-lg p-8" shadow="md">
            <CardHeader className="flex justify-center">
              <div className="flex justify-center">
                <p className="text-md font-semibold text-black text-center">
                  Agregar un Nuevo Usuario
                </p>
              </div>
            </CardHeader>

            <CardBody>
              <form>
                <div className="grid justify-center gap-5 my-5">
                  <Input
                    placeholder="Email"
                    classNames={styles}
                    style={{ color: "black" }}
                  />
                  <Input
                    placeholder="Usuario"
                    classNames={styles}
                    style={{ color: "black" }}
                  />
                  <p className="text-gray-400 text-sm">Rol</p>
                  <Select
                    placeholder="Select"
                    className="w-80 shadow-md rounded-md"
                    style={{ color: "black" }}
                    color="primary"
                  >
                    <SelectItem
                      key={1}
                      color="success"
                      variant="solid"
                      style={{ color: "white", backgroundColor: "#EB664A" }}
                    >
                      Admin
                    </SelectItem>
                    <SelectItem
                      key={2}
                      color="primary"
                      style={{ color: "white", backgroundColor: "#EB664A" }}
                    >
                      Administrador
                    </SelectItem>
                    <SelectItem
                      key={3}
                      color="primary"
                      style={{ color: "white", backgroundColor: "#EB664A" }}
                    >
                      Empleado
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex justify-center gap-10">
                  <Button variant="bordered" color="danger" type="reset" className="w-28 border-1 border-danger-500 rounded-lg">Cancelar</Button>
                  <Button variant="solid" color="primary" type="submit" className="w-28 rounded-lg">Guardar</Button>
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
