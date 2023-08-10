import "./style.scss";

import MarketFilter from "../../components/marketFilter/MarketFilter";
import MarketList from "../../components/marketList/MarketList";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

export default function Marketplace() {
  let activeTab = useSelector((state) => state.activeFilter.type);

  switch (activeTab) {
    case "all":
      activeTab = "Усі товари";
      break;
    case "men":
      activeTab = "Чоловічий одяг";
      break;
    case "women":
      activeTab = "Жіночий одяг";
      break;
    case "uni":
      activeTab = "Універсальний одяг";
      break;
  }
  return (
    <>
      <motion.section
        className="market"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <MarketFilter />
        <main className="market__content">
          <div className="market__head">
            <h2 className="market__content__title">
              {"Вітрина > " + activeTab}
            </h2>
            <h2 className="market__content__title market__content__title-black">
              Наші рекомендації:
            </h2>
          </div>
          <MarketList length={50} />
        </main>
      </motion.section>
    </>
  );
}
