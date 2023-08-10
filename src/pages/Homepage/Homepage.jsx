import "./style.scss";
import "../../global.scss";

import Hero from "../../components/hero/Hero";
import Highlight from "../../components/highlight/Highlight";
import Arrival from "../../components/arrival/Arrival";
import Saving from "../../components/saving/Saving";
import Adv from "../../components/adv/Adv";
import Category from "../../components/category/Category";
import Brands from "../../components/brands/Brands";
import Feedback from "../../components/feedback/Feedback";
import Spinner from "../../components/loading/Loading";

import { useState, useEffect } from "react";
import API from "../../utils/API";

import { motion } from "framer-motion";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getAllHomepageData } = API();

  const fetchData = async () => {
    setLoading(true);
    const fetchedData = await getAllHomepageData();
    dataFetched(fetchedData);
  };

  const dataFetched = (fetchedData) => {
    setData(fetchedData);
    setLoading(false);
  };

  const View = ({ name, Component }) => {
    if (loading) return <Spinner />;
    return (
      <>
        {data
          .find((elem) => elem.name === name)
          .data.map((item) => (
            <Component key={item.id} item={item} />
          ))}
      </>
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section className="section">
        <ul className="cards">
          {/*2 cards maximum here*/}
          {<View name={"highlight"} Component={Highlight} />}
        </ul>
      </section>
      <section className="section">
        <h2 className="section__title">Нові товари</h2>
        <ul className="cards">
          {/*4 cards maximum here*/}
          {<View name={"arrival"} Component={Arrival} />}
        </ul>
      </section>
      <section className="section">
        <h2 className="section__title">Зона великих заощаджень</h2>
        <ul className="cards-big">
          {/*5 cards maximum here*/}
          {<View name={"savings"} Component={Saving} />}
        </ul>
      </section>
      <section className="section">
        <Adv />
      </section>
      <section className="section">
        <h2 className="section__title">Категорії для чоловіків</h2>
        <ul className="cards">
          {/*4 cards maximum here*/}
          {<View name={"mens"} Component={Category} />}
        </ul>
      </section>
      <section className="section">
        <h2 className="section__title">Категорії для жінок</h2>
        <ul className="cards">
          {/*4 cards maximum here*/}
          {<View name={"womens"} Component={Category} />}
        </ul>
      </section>
      <section className="section">
        <Brands />
      </section>
      <section className="section">
        <h2 className="section__title">Відгуки</h2>
        <ul className="cards">
          {<View name={"feedback"} Component={Feedback} />}
        </ul>
      </section>
    </motion.div>
  );
}
