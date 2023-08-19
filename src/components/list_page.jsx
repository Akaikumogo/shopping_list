export default function List_page({ products, currentDay }) {
  const items = products.map((item) => {
    const itemStyle = {
      backgroundColor: item.d_o_n,
    };
    return (
      <div className="item" key={item.id}>
        <div className="item_block">
          <h3 className="title">{item.p_name}</h3>
          <p className="hajm">
            {item.birlik}: {item.miqdor}
          </p>
        </div>
        <div className="d_o_n" style={itemStyle}></div>
      </div>
    );
  });
  return (
    <div className="main">
      <div className="shop_list">
        <h1>Shopping List</h1>
        <div className="manage">
          <p>Date: {currentDay}</p>
          <p>All products</p>
        </div>
        <div className="list">{items}</div>
      </div>
    </div>
  );
}
