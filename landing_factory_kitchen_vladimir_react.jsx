export default function FactoryKitchenLanding() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              Производство готовой еды полного цикла
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Современная фабрика-кухня и крупнейшее производство готовой еды во Владимирской области
            </h1>

            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
              Более 10 лет производим качественную готовую еду, кулинарию,
              выпечку и кондитерские изделия для домохозяйств, retail-сетей,
              кафе и корпоративных клиентов.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-8 py-4 text-black font-semibold shadow-2xl hover:scale-105 transition"
              >
                Связаться с нами
              </a>

              <a
                href="#about"
                className="rounded-2xl border border-white/30 px-8 py-4 font-semibold hover:bg-white/10 transition"
              >
                О производстве
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ['7000+', 'Домохозяйств ежедневно'],
            ['3500 кг', 'Продукции ежедневно'],
            ['250', 'Сотрудников в команде'],
            ['24', 'Фирменных кафе-кулинарии'],
          ].map(([value, label]) => (
            <div
              key={value}
              className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-200"
            >
              <div className="text-3xl font-bold mb-2">{value}</div>
              <div className="text-neutral-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
              alt="Производство готовой еды"
              className="rounded-3xl shadow-2xl object-cover h-full"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block rounded-full bg-black text-white px-4 py-2 text-sm">
              О производстве
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Собственное производство площадью 1200 м²
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Мы используем современные технологии производства готовой еды,
              инновационную упаковку в газовой среде и тщательно контролируем
              качество на каждом этапе производства.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              На нашем производстве не используются антибиотики, а вся
              продукция доставляется собственным транспортом с
              рефрижераторами, проходящими регулярную санитарную обработку.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                'Готовые обеды',
                'Кулинария',
                'Выпечка',
                'Кондитерские изделия',
                'Начинки',
                'Более 100 SKU',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-4 shadow border border-neutral-200 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COOPERATION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <div className="inline-block rounded-full bg-neutral-100 px-4 py-2 text-sm mb-5">
              Сотрудничество
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Приглашаем к сотрудничеству организации и retail-партнеров
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Мы работаем с компаниями, которым требуется организация питания
              сотрудников, поставки корпоративных обедов и готовой еды для
              персонала.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Корпоративное питание',
                text: 'Организация питания сотрудников и поставки готовых обедов для предприятий.',
              },
              {
                title: 'Retail и магазины',
                text: 'Поставки готовой еды и кулинарии для дальнейшей реализации.',
              },
              {
                title: 'Кафе и кофейни',
                text: 'Надежный поставщик выпечки, кулинарии и готовых блюд.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition bg-neutral-50"
              >
                <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-black text-white rounded-[32px] p-10 md:p-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm">
              Наши ценности
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Добро — основа нашей философии
            </h2>

            <p className="text-lg text-neutral-300 leading-relaxed">
              Мы являемся меценатами, благотворителями и многократными
              победителями различных выставок и профессиональных конкурсов.
              Для нас производство готовой еды — это ответственность перед
              людьми, которых мы кормим каждый день.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-neutral-900 text-white py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm">
            Связаться с нами
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Обсудим сотрудничество и поставки готовой еды
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Оставьте заявку — мы подготовим предложение под ваши задачи,
            объемы и формат поставок.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="tel:+79999999999"
              className="rounded-2xl bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition"
            >
              Позвонить
            </a>

            <a
              href="mailto:info@company.ru"
              className="rounded-2xl border border-white/20 px-8 py-4 font-semibold hover:bg-white/10 transition"
            >
              Написать на почту
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
