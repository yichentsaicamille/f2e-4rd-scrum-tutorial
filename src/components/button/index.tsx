import styles from "./styles.module.scss";

const Button = (props: any) => {
  return (
    <button
      className={`${styles.button}`}
      style={{ width: "356px", color: props.color }}
    ></button>
  );
};

export default Button;
