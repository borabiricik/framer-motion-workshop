import React, { useRef, useState } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../src/layout/Layout";
import { HiOutlineTrash } from "react-icons/hi";
import { AnimatePresence, Reorder, motion } from "framer-motion";

interface TodoItem {
  note: string;
}

const TODO: NextPageWithLayout = () => {
  const [todos, settodos] = useState<TodoItem[]>([{ note: "First Todo" }]);
  const [inputValue, setinputValue] = useState("");
  const handleRemove = (index: number) => {
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
    settodos(tempTodos);
  };
  const handleAdd = () => {
    settodos((prevtodos) => [...prevtodos, { note: inputValue }]);
    setinputValue("");
  };
  return (
    <div className="flex flex-col items-center justify-center my-10 gap-y-5">
      <h1 className="font-semibold text-3xl">TO-DO List</h1>
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="font-semibold text-xl">Add Todo:</h1>
        <input
          className="border border-gray-400 rounded-md px-2 py-1"
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <AnimatePresence>
        <Reorder.Group
          dragSnapToOrigin
          className="gap-y-4 flex flex-col w-1/3"
          onReorder={settodos}
          values={todos}
        >
          {todos.map((todo, index) => (
            <Reorder.Item
              value={todo}
              as="div"
              drag="y"
              dragSnapToOrigin
              whileDrag={{ scale: 1.1, zIndex: 10 }}
              className="border rounded-md border-gray-400 px-4 py-2 flex items-center justify-between bg-white"
              key={JSON.stringify(todo)}
              initial={{ x: 100, width: "100%", opacity: 0 }}
              animate={{ x: 0, width: "100%", opacity: 1 }}
              exit={{ width: 0, y: [0, -50, -100, 0], opacity: 0 }}
            >
              <span>{todo.note}</span>
              <button onClick={() => handleRemove(index)}>
                <HiOutlineTrash />
              </button>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </div>
  );
};

TODO.getLayout = (page) => <Layout>{page}</Layout>;

export default TODO;
