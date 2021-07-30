import React from "react";
import { View } from "react-native";
const List = () => {
  const [newTodoTitle, setNewTodoTitle] = React.useState("");
  const [list, setList] = React.useState([1, 2, 3]);

  function addTodo() {
    setList([...list, newTodoTitle]);
    setNewTodoTitle("");
  }

  return (
    <View>
      <div>
        <div>
          <input
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
          <button onClick={() => addTodo()}>추가</button>
        </div>
      </div>
    </View>
  );
};

export default List;
