import { FC, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className="w-full h-auto mx-auto bg-white py-8 px-20">{children}</div>;
};
export default Container;
