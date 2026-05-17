export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f5f5f5', color: '#111' }}>
      <section
        style={{
          background: '#111',
          color: '#fff',
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Современная фабрика-кухня и производство готовой еды
        </h1>

        <p
          style={{
            maxWidth: '900px',
            margin: '0 auto 40px',
            fontSize: '20px',
            lineHeight: '1.6',
          }}
        >
          Более 10 лет производим качественную готовую еду, кулинарию,
          выпечку и кондитерские изделия для домохозяйств, retail-сетей,
          кафе и корпоративных клиентов.
        </p>

        <a
          href="#contact"
          style={{
            display: 'inline-block',
            background: '#fff',
            color: '#111',
            padding: '16px 32px',
            borderRadius: '12px',
            fontWeight: 'bold',
          }}
        >
          Связаться с нами
        </a>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>
          О производстве
        </h2>

        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
          Наше предприятие — это современное производство площадью 1200 м²,
          24 фирменных кафе-кулинарии и команда из 250 профессионалов.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
          Ежедневно мы производим более 3500 кг качественной продукции:
          готовые обеды, кулинарию, выпечку, кондитерские изделия и начинки.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
          Мы приглашаем к сотрудничеству компании, которым требуется
          организация питания сотрудников, поставки корпоративных обедов и
          готовой еды для retail и дальнейшей реализации.
        </p>
      </section>

      <section
        id="contact"
        style={{
          background: '#111',
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>
          Обсудим сотрудничество
        </h2>

        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
          Свяжитесь с нами для обсуждения поставок и сотрудничества.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:+79999999999"
            style={{
              background: '#fff',
              color: '#111',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: 'bold',
            }}
          >
            Позвонить
          </a>

          <a
            href="mailto:info@company.ru"
            style={{
              border: '1px solid #fff',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: '12px',
              fontWeight: 'bold',
            }}
          >
            Написать на почту
          </a>
        </div>
      </section>
    </div>
  )
}
