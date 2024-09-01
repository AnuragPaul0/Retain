import * as React from "react";
import { List, arrayMove } from "react-movable";

export default SuperSimple = () => {
  const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"]);
  return (
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) =>
        setItems(arrayMove(items, oldIndex, newIndex))
      }
      renderList={({ children, props }) => <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => <li {...props}>{value}</li>}
    />
  );
};