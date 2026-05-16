export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            Производство готовой еды полного цикла
          </div>

          <h1>
            Современная фабрика-кухня и крупнейшее производство готовой еды
          </h1>

          <p className="hero-text">
            Более 10 лет производим качественную готовую еду,
            кулинарию, выпечку и кондитерские изделия
            для retail-сетей, кафе и корпоративных клиентов.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Связаться с нами
            </a>

            <a href="#about" className="secondary-btn">
              О производстве
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="card">
            <h3>7000+</h3>
            <p>Домохозяйств ежедневно</p>
          </div>

          <div className="card">
            <h3>3500 кг</h3>
            <p>Продукции ежедневно</p>
          </div>

          <div className="card">
            <h3>250</h3>
            <p>Сотрудников в команде</p>
          </div>

          <div className="card">
            <h3>24</h3>
            <p>Фирменных кафе-кулинарии</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>О производстве</h2>

          <p>
            Наше предприятие — это современное производство
            площадью 1200 м² и команда из 250 профессионалов.
          </p>

          <p>
            Ежедневно мы производим более 3500 кг качественной продукции:
            готовые обеды, кулинарию, выпечку, кондитерские изделия и начинки.
          </p>

          <div className="features">
            <div className="feature-card">Готовые обеды</div>
            <div className="feature-card">Кулинария</div>
            <div className="feature-card">Выпечка</div>
            <div className="feature-card">Кондитерские изделия</div>
            <div className="feature-card">Начинки</div>
            <div className="feature-card">Более 100 SKU</div>
          </div>
        </div>
      </section>

      <section className="cooperation">
        <div className="container">
          <h2>Сотрудничество</h2>

          <div className="cooperation-grid">
            <div className="card">
              <h3>Корпоративное питание</h3>
              <p>
                Организация питания сотрудников и поставки
                корпоративных обедов.
              </p>
            </div>

            <div className="card">
              <h3>Retail и магазины</h3>
              <p>
                Поставки готовой еды и кулинарии
                для дальнейшей реализации.
              </p>
            </div>

            <div className="card">
              <h3>Кафе и кофейни</h3>
              <p>
                Надежный поставщик выпечки,
                кулинарии и готовых блюд.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Обсудим сотрудничество</h2>

          <p>
            Свяжитесь с нами для обсуждения поставок и организации питания.
          </p>

          <div className="contact-buttons">
            <a href="tel:+79999999999" className="primary-btn">
              Позвонить
            </a>

            <a href="mailto:info@company.ru" className="secondary-btn dark">
              Написать на почту
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
