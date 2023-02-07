import { ListCard } from "../ListCard";
import "./index.css"

export const ListRender = ({ list }) => {
  if (list?.length === 0) {
    return (
      <h3>
        {" "}
        Sua lista está vazia, clique no botão de "Adicionar" para incluir novos
        itens{" "}
      </h3>
    );
  }

  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard item={item} key={item?._id} />
      ))}
    </div>
  );
};
