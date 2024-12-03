import { Select } from "antd";


const SelectLocal = (props) => {
  return <Select className={props.className || "select"} {...props} />;
};

export default SelectLocal;
