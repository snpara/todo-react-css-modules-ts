import { HTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

const Button: React.FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
