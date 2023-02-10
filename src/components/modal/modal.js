import { useEffect, useState } from "react";
import "./modal.css";
import { Input } from "../input/input";
import { Button } from "../Button/button";
import {
  createItem,
  updateItem,
  deleteItem,
} from "../../services/request/index";

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const validateBeforeSabe = () => {
    if (name.length < 3) {
      alert("Nome tem que ter mais que 3 caracteres");
      return false;
    }
    if (quantity < 1) {
      alert("quantidade não pode ser menor do que 1");
      return false;
    }
    return true;
  };

  const callAddItem = async () => {
    const validate = validateBeforeSabe();

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) });
      if (!result?.error) {
        alert("item salvo com sucesso!");
        onClose();
      }
    }
  };

  const callUpdateItem = async () => {
    const validate = validateBeforeSabe();

    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked,
      });
      if (!result?.error) {
        alert("item atualizado com sucesso!");
        onClose();
      }
    }
  };

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id);
    if (!result?.error) {
      alert("item deletado com sucesso!");
      onClose();
    }
  };

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name);
      setQuantity(item?.quantity);
    }
  }, [item]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{item ? "Editar item" : "Adicionar novo item"}</h1>
          <button onClick={onClose} className="modal-close-button"></button>
        </div>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Nome"
          placeholder="Digite o item a ser adicionado"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade"
          type="number"
        />
        <div className="buttons-container">
          {item && (
            <Button icon="excluir" variant="outline" onClick={callDeleteItem}>
              Deletar
            </Button>
          )}
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? "Atualizar" : "Adicionar"}
          </Button>
        </div>
      </div>
    </div>
  );
};
