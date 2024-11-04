"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import Cookies from "js-cookie";
import { LoginSchema, LoginSchemaType } from "@/schemas/login-schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tryLogin } from "@/apis/apiLogin";
import { useRouter } from "next/navigation";

const styles = {
  label: ["group-data-[filled-within=true]:text-black"],
  input: ["bg-transparent", "text-black", "placeholder:text-gray-600/50"],
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
  ],
};

const LoginForm: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: LoginSchemaType) => {
    setIsLoading(true);
    console.log(values);
    try {
      const response = await tryLogin(values);
      console.log("Data saved successfully:", response);

      if (response.status === 200) {
        const { token, usuario } = response.data;

        Cookies.set("authToken", token, {
          expires: 1, // La cookie expira en 1 día (puedes ajustar este valor)
          secure: process.env.NODE_ENV === "production", // Solo envía cookies a través de HTTPS en producción
          sameSite: "Strict", // Evita que la cookie sea enviada en solicitudes de terceros
          path: "/", // La cookie es accesible en toda la aplicación
        });

        const userRole = usuario.rol.rol

        // Guardar en localStorage
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem('userRole', userRole)

        document.cookie = `authToken=${token}; path=/; secure;`;
        document.cookie = `userRole=${userRole}; path=/; secure;`

        if (userRole === 'ROLE_ADMINISTRATIVO') {
          const userName = usuario?.datosPersonales.nombre
          const userApellidoPaterno = usuario.datosPersonales.apellidoPaterno
          const userApellidoMaterno = usuario.datosPersonales.apellidoMaterno
          const userFoto = usuario.datosPersonales.foto

          sessionStorage.setItem('userName', userName)
          sessionStorage.setItem('userApellidoPaterno', userApellidoPaterno)
          sessionStorage.setItem('userApellidoMaterno', userApellidoMaterno)
          sessionStorage.setItem('userFoto', userFoto)

          console.log('Stored User Name:', userName)
          console.log('Stored User Apellido Paterno:', userApellidoPaterno)
          console.log('Stored User Apellido Materno:', userApellidoMaterno)
          console.log('Stored User Foto:', userFoto)
          router.push('/dashboard')
        } else if (userRole === 'ROLE_PROFESOR') {
          const userName = usuario?.datosPersonales.nombre
          const userApellidoPaterno = usuario.datosPersonales.apellidoPaterno
          const userApellidoMaterno = usuario.datosPersonales.apellidoMaterno
          const userFoto = usuario.datosPersonales.foto

          sessionStorage.setItem('userName', userName)
          sessionStorage.setItem('userApellidoPaterno', userApellidoPaterno)
          sessionStorage.setItem('userApellidoMaterno', userApellidoMaterno)
          sessionStorage.setItem('userFoto', userFoto)

          console.log('Stored User Name:', userName)
          console.log('Stored User Apellido Paterno:', userApellidoPaterno)
          console.log('Stored User Apellido Materno:', userApellidoMaterno)
          console.log('Stored User Foto:', userFoto)
          router.push('/dashboard-empleado')
        }
      }
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="grid grid-cols-1 gap-4"
    >
      <div>
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <div>
              <Input
                placeholder="Usuario"
                classNames={styles}
                {...field}
                style={{ color: "black" }}
                isRequired={true}
              />
              {errors.user?.message && (
                <span className="text-red-500 text-xs">
                  {errors.user.message}
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
                placeholder="Contraseña"
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
      </div>
      <Button
        type="submit"
        className="bg-primary-500 text-white rounded-lg"
        radius="sm"
      >
        Iniciar Sesión
      </Button>

      <p className="text-red-500 text-tiny"></p>
    </form>
  );
};
export default LoginForm;
