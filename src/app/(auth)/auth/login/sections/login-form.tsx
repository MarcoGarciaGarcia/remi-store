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
    "rounded-lg",
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
  const [statusLogin, setStatusLogin] = useState('');
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
      setStatusLogin("");
      const response = await tryLogin(values);
      console.log("Data saved successfully:", response);

      if (response.status === 200) {
        const { token, userData } = response.data;

        Cookies.set("authToken", token, {
          expires: 1, // La cookie expira en 1 día (puedes ajustar este valor)
          secure: process.env.NODE_ENV === "production", // Solo envía cookies a través de HTTPS en producción
          sameSite: "Strict", 
          path: "/", 
        });

        const userRole = userData.rol;
        const userId = userData.id;

        // Guardar en localStorage
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userRole", userRole);
        sessionStorage.setItem("userId", userId);

        document.cookie = `authToken=${token}; path=/; secure;`;
        document.cookie = `userRole=${userRole}; path=/; secure;`;

        if (userRole === 1) {
          const userName = userData?.name;
          //const userFoto = userData.foto_perfil;

          sessionStorage.setItem("userName", userName);
          //sessionStorage.setItem("userFoto", userFoto);

          console.log("Stored User Name:", userName);
          //console.log("Stored User Foto:", userFoto);
          router.push("/dashboard");
        } else if (userRole === 2) {
          const userName = userData?.name;
          //const userFoto = userData.foto_perfil;

          sessionStorage.setItem("userName", userName);
          //sessionStorage.setItem("userFoto", userFoto);

          console.log("Stored User Name:", userName);
          //console.log("Stored User Foto:", userFoto);
          router.push("/dashboard/sections/check");
        } else if (userRole === 3) {
          const userName = userData?.name;
          //const userFoto = userData.foto_perfil;

          sessionStorage.setItem("userName", userName);
          //sessionStorage.setItem("userFoto", userFoto);

          console.log("Stored User Name:", userName);
          //console.log("Stored User Foto:", userFoto);
          router.push("/dashboard-empleado");
        }
      }
    } catch (error) {
      console.error("Error saving data:", error);
      setStatusLogin("Usuario o contraseña incorrectos");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="grid grid-cols-1 gap-4 gap-y-5"
    >
      <div>
        <Controller
          name="user"
          control={control}
          render={({ field }) => (
            <div className="pb-5">
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
        className="bg-black text-white rounded-lg"
        radius="sm"
        isLoading={isLoading}
      >
        Iniciar Sesión
      </Button>

      <p className="text-red-500 text-tiny text-center pb-5">{statusLogin}</p>
    </form>
  );
};
export default LoginForm;
