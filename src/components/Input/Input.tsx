import { ChangeEventHandler } from "react";
import "./Input.css";

const Input = ({ onChange, type }: Props) => {
  return (
    <div className="input_bs">
      <input
        onChange={onChange}
        type={type}
        placeholder="search.."
      ></input>
    </div>
  );
};

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  type: string;
};
export default Input;
