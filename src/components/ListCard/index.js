import "./index.css";
import { updateItem } from "../../services/request/index";
/*
export const ListCard = (props, onClick) => {
  const { item } = props;
  
  return (
    <div className="list-card-container" >
      <img
        className="checkbox"
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} Unidades </span>
      </div>
      <img onClick={() => onClick(item)} src="/images/editar.png" alt="editar" className="icon" />
    </div>
  );
};
*/

export const ListCard = ({item, onClick, onCheckItem}) => {
  
  return (
    <div className="list-card-container"  >
      <img
        className="checkbox"
        onClick={() => onCheckItem(item)}
        src={`/images/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} Unidades </span>
      </div>
      <img onClick={() => onClick(item)}  src="/images/editar.png" alt="editar" className="icon" />
    </div>
  );
};

