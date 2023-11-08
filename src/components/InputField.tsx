import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="input"
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="Add a task"
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
