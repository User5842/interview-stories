import { FunctionComponent } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

const Button: FunctionComponent<ButtonProps> = ({
  children,
  disabled,
  onClick,
  type = "button",
}) => (
  <button
    className={styles.button}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
