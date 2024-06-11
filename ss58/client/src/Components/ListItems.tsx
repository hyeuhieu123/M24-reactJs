import { useEffect, useState } from "react";
import AddItemModal from "./AddItemModel";
import axios from "axios";

interface Items {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  create_at: string;
}

export default function ListItems() {
  const [items, setItems] = useState<Items[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8100/Items");
        setItems(response.data);
      } catch (error) {
        console.log("lỗi");
      }
    };
    fetchItems();
  }, []);

  const handleAddItem = (item: Items) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return <></>;
}
