import styles from "./input.module.css";

const Input = ({ type, id, onChange, value, placeholder, name, className }) => {
    return <input type={type} id={id} onChange={onChange} value={value} name={name} className={styles[className]} placeholder={placeholder} />;
  };
  
  export default Input;