import "./MarketList.scss";

import MarketCard from "../marketCard/MarketCard";
import Spinner from "../loading/Loading";
import API from "../../utils/API";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductModal from "../productModal/ProductModal";

export default function MarketList({ length = 20, type = "user" }) {
  const [marketItems, setMarketItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeFilter = useSelector((state) => state.activeFilter.type);
  const filterTitle = useSelector((state) => state.activeFilter.title);
  const activeSize = useSelector((state) => state.activeFilter.size);

  const { getAllMarketplaceProduct } = new API();

  const fetching = async () => {
    setLoading(true);
    const data = await getAllMarketplaceProduct();
    dataFetched(data);
  };

  const dataFetched = (fetchedData) => {
    setMarketItems(fetchedData);
    setLoading(false);
  };

  useEffect(() => {
    fetching();
  }, []);

  const View = () => {
    if (loading) return <Spinner />;

    const filteredData = marketItems
      .filter((item) =>
        activeFilter !== "all" ? item.type === activeFilter : item
      )
      .filter((item) =>
        item.title.toLowerCase().includes(filterTitle.toLowerCase())
      )
      .filter((item) =>
        activeSize !== "All" ? item.size === activeSize : item
      );

    let viewData = <h2>Нажаль таких товарів немає в наявності...</h2>;

    if (filteredData.length > 0) {
      viewData = filteredData.map((item, index) => {
        if (index < length)
          return <MarketCard key={index} item={item} type={type} />;
      });
    }

    return <>{viewData}</>;
  };

  return (
    <ul className="market__list">
      {type === "admin" && <ProductModal />}
      <View />
    </ul>
  );
}
