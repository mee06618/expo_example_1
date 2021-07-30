import React from "react";
import tw from "tailwind-react-native-classnames";

import { View } from "react-native";
import ReactDOM from "react-dom";
ReactDOM.render(<List />, document.getElementById("root"));
function List() {
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
        <ul style={tw`h-full list-none .overflow-scroll`}>
          {list.map((listItem) => {
            return (
              <li style={tw`bg-blue-100 p-8 mx-8 my-10 `}>
                <span>{listItem}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </View>
  );
}
export default List;
