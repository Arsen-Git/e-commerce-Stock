import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__block">
          <h2 className="footer__title">Потрібна допомога</h2>
          <ul className="footer__list">
            <a href="mailto:email@example.com" className="footer__list__link">
              Контакт з нами
            </a>
            <a
              href="mailto:email@example.com?subject=Повернення товару&body=Хочу повернути замовлення під номером:(впишіть номер замовлення)"
              className="footer__list__link"
            >
              Повернення товару
            </a>
          </ul>
        </div>
        <div className="footer__block">
          <h2 className="footer__title">Більше нас</h2>
          <ul className="footer__list">
            <a
              href="https://www.instagram.com/euro_stock_brand/"
              target="blanc"
              className="footer__list__link"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100072983029574"
              target="blanc"
              className="footer__list__link"
            >
              Facebook
            </a>
          </ul>
        </div>
        <div className="footer__block">
          <h2 className="footer__title">Локалізація</h2>
          <ul className="footer__list">
            <li className="footer__list__link">
              Сміла, Черкаська обл. Україна
            </li>
            <a
              target="blanc"
              href="https://www.google.pl/maps/place/49%C2%B012'30.4%22N+31%C2%B052'13.8%22E/@49.2084449,31.8698653,19z/data=!3m1!4b1!4m13!1m8!3m7!1s0x40d140616c4c4401:0x87baa02ce135bf2c!2z0KHQvNC10LvQsCwg0KfQtdGA0LrQsNGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0LjQvdCwLCAyMDcwMA!3b1!8m2!3d49.227717!4d31.8522329!16zL20vMGJtNmNq!3m3!8m2!3d49.208444!4d31.870509?entry=ttu"
              className="footer__list__link"
            >
              Знайти нас на карті
            </a>
          </ul>
        </div>
      </div>
      <div className="footer__divider"></div>
      <p className="footer__copyright">ⒸStock 2023</p>
    </footer>
  );
}
