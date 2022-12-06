import styles from "./input.module.css";

const Input = ({ type, placeholder, name, className }) => {
    return <input type={type} name={name} className={styles[className]} placeholder={placeholder} />;
  };
  
  export default Input;