import List_page from "./components/list_page";

export default function App() {
  const day = new Date();
  const month = day.getMonth() + 1;
  const currentDay = `${day.getDate()}.${
    month < 10 ? "0" + month : month + 1
  } `;
  const products = [
    {
      id: 1,
      p_name: "Kartoshka",
      d_o_n: "#00FF1A",
      birlik: "KG",
      miqdor: 5,
    },
    {
      id: 2,
      p_name: "Piyoz",
      d_o_n: "#F00",
      birlik: "KG",
      miqdor: 6,
    },
    {
      id: 3,
      p_name: "Karam",
      d_o_n: "#FFC700",
      birlik: "Dona",
      miqdor: 2,
    },
    {
      id: 4,
      p_name: "Qovun",
      d_o_n: "#00FF1A",
      birlik: "Dona",
      miqdor: 3,
    },
    {
      id: 5,
      p_name: "Sabzi",
      d_o_n: "#FFC700",
      birlik: "KG",
      miqdor: 2,
    },
  ];
  return (
    <div>
      <List_page products={products} currentDay={currentDay} />
    </div>
  );
}
