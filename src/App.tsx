import { useEffect, useState } from 'react'
import './App.css'

import product1kg from '@/imports/3nd7mbr-11134207-7r98o-md3eywosg75e04.jpg'
import product2kg from '@/imports/v9uprbr-11134207-7r98o-md52drmhppmpee.jpg'
import vslVideo from '@/imports/br-11110105-6v6x7-mq89yser864gc5.16000081783119571.mp4'

const AFFILIATE = 'https://s.shopee.com.br/9fJt1Vt0GZ'

const reviews = [
  {
    name: 'Fernanda O.',
    city: 'BH, MG',
    stars: 5,
    text: 'Meu marido não acreditou! A camisa branca dele que estava amarelada voltou do jeito que era.',
    photo:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop',
  },
  {
    name: 'Rosana M.',
    city: 'Curitiba, PR',
    stars: 5,
    text: 'Usei nas roupinhas do meu bebê manchadas de comida. Ficaram como novas, sem cheiro forte!',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  },
  {
    name: 'Marcia T.',
    city: 'Porto Alegre, RS',
    stars: 5,
    text: 'Tirou manchas das toalhas de cozinha em 30 minutos. Tinha tentado de tudo antes!',
    photo:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Carla V.',
    city: 'Salvador, BA',
    stars: 5,
    text: 'Muito melhor que o cloro. Não estraga o tecido e deixa tudo branquinho. Compra certinha!',
    photo:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop',
  },
]

const offers = [
  {
    id: 0,
    size: '500g',
    label: '1 Unidade',
    price: 'R$ 20,99',
    installment: '3x R$ 6,99',
    pricePerKg: 'R$ 41,98/kg',
    saving: null,
    img: product1kg,
    badge: null,
  },
  {
    id: 1,
    size: '1kg',
    label: '1 Unidade',
    price: 'R$ 32,99',
    installment: '6x R$ 5,49',
    pricePerKg: 'R$ 32,99/kg',
    saving: '22% mais barato/kg',
    img: product1kg,
    badge: null,
  },
  {
    id: 2,
    size: '2kg',
    label: '2 Unidades',
    price: 'R$ 55,99',
    installment: '12x R$ 4,66',
    pricePerKg: 'R$ 28,00/kg',
    saving: '33% mais barato/kg',
    img: product2kg,
    badge: '🏆 MAIS POPULAR',
  },
  {
    id: 3,
    size: '3kg',
    label: '3 Unidades',
    price: 'R$ 79,90',
    installment: '12x R$ 6,65',
    pricePerKg: 'R$ 26,63/kg',
    saving: '37% mais barato/kg',
    img: product2kg,
    badge: '💰 MELHOR VALOR',
  },
]

const faqs = [
  {
    q: 'Serve para roupas coloridas?',
    a: 'Sim! Use em água morna e no tempo indicado. Para cores muito vibrantes, faça um teste em uma área pequena primeiro.',
  },
  {
    q: 'Pode usar na máquina de lavar?',
    a: 'Pode! Siga as instruções da embalagem para a quantidade adequada e o modo de utilização.',
  },
  {
    q: 'Tem cheiro forte?',
    a: 'Não. O produto não possui o cheiro agressivo característico do cloro.',
  },
  {
    q: 'Como utilizar?',
    a: 'Dissolva em água morna, deixe as peças de molho pelo tempo recomendado e depois lave normalmente.',
  },
]

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedOffer, setSelectedOffer] = useState(2)

  const [countdown, setCountdown] = useState({
    h: 3,
    m: 47,
    s: 13,
  })

  const [exitPopup, setExitPopup] = useState(false)
  const [exitDone, setExitDone] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((current) => {
        let { h, m, s } = current

        s--

        if (s < 0) {
          s = 59
          m--
        }

        if (m < 0) {
          m = 59
          h--
        }

        if (h < 0) {
          return {
            h: 0,
            m: 0,
            s: 0,
          }
        }

        return { h, m, s }
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (event.clientY <= 5 && !exitDone) {
        setExitPopup(true)
      }
    }

    document.addEventListener('mouseleave', handler)

    return () => {
      document.removeEventListener('mouseleave', handler)
    }
  }, [exitDone])

  const pad = (n: number) => String(n).padStart(2, '0')

  const selected =
    offers.find((offer) => offer.id === selectedOffer) || offers[2]

  return (
    <div className="page">

      {/* ======================================================
          BARRA SUPERIOR ANIMADA
      ====================================================== */}

      <div className="top-bar">
        <div className="top-bar-track">

          <div className="top-bar-item">
            🚚 Frete Grátis com cupom
            <span>•</span>
            💳 Parcele em até 12x
            <span>•</span>
            🔒 Compra Segura Shopee
            <span>•</span>
          </div>

          <div className="top-bar-item">
            🚚 Frete Grátis com cupom
            <span>•</span>
            💳 Parcele em até 12x
            <span>•</span>
            🔒 Compra Segura Shopee
            <span>•</span>
          </div>

          <div className="top-bar-item">
            🚚 Frete Grátis com cupom
            <span>•</span>
            💳 Parcele em até 12x
            <span>•</span>
            🔒 Compra Segura Shopee
            <span>•</span>
          </div>

        </div>
      </div>

      {/* ======================================================
          EXIT POPUP
      ====================================================== */}

      {exitPopup && (
        <div
          className="popup-overlay"
          onClick={() => {
            setExitPopup(false)
            setExitDone(true)
          }}
        >
          <div
            className="exit-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup-close"
              onClick={() => {
                setExitPopup(false)
                setExitDone(true)
              }}
            >
              ×
            </button>

            <div className="popup-icon">⏳</div>

            <h3>Espera! Antes de sair…</h3>

            <p>
              Você ainda tem a oferta disponível. Kit 2 unidades com{' '}
              <strong>Frete Grátis</strong> e parcelamento em até 12x.
            </p>

            <img
              src={product2kg}
              alt="Kit 2 unidades"
              className="popup-product"
            />

            <div className="popup-price">
              R$ 55,99
            </div>

            <div className="popup-installment">
              ou 12x R$ 4,66 sem juros · 🚚 Frete Grátis
            </div>

            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer"
              className="main-button"
            >
              🛒 Sim, quero aproveitar!
            </a>

            <button
              className="popup-no"
              onClick={() => {
                setExitPopup(false)
                setExitDone(true)
              }}
            >
              Não, prefiro continuar com roupas manchadas
            </button>
          </div>
        </div>
      )}

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="hero">
        <div className="container">

          <div className="brand-pill">
            <img
              src={product1kg}
              alt="Calisul"
            />

            <strong>CALISUL</strong>

            <span>PERCARBONATO DE SÓDIO</span>
          </div>

          <h1>
            A Solução que Está Devolvendo a Vida às Roupas Manchadas —{' '}
            <span>Sem Cloro e Sem Esfregar.</span>
          </h1>

          <p className="hero-description">
            O <strong>Percarbonato de Sódio Calisul</strong> usa
            oxigênio ativo para ajudar a remover manchas de café,
            suor, comida e muito mais — em roupas brancas e coloridas.
          </p>

          <div className="hero-info">
            <span>
              ⭐⭐⭐⭐⭐ <strong>4.9</strong> na Shopee
            </span>

            <i>|</i>

            <span>🏆 Mais Vendido em Percarbonato</span>

            <i>|</i>

            <span>🚚 Frete Grátis</span>
          </div>

          {/* VÍDEO — MANTIDO */}
          <div className="video-box">

            <div className="video-label">
              ▶ ASSISTA ANTES DE COMPRAR
            </div>

            <video
              src={vslVideo}
              controls
              playsInline
              preload="metadata"
              poster={product1kg}
            />

          </div>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="main-button"
          >
            🛒 Quero Comprar na Shopee
          </a>

          <div className="trust-pills">
            <span>🔒 Compra Segura</span>
            <span>🚚 Frete Grátis</span>
            <span>💳 12x sem juros</span>
            <span>📱 Pix com desconto</span>
          </div>

        </div>
      </section>

      {/* ======================================================
          BENEFÍCIOS
      ====================================================== */}

      <section className="section white-section">
        <div className="container">

          <h2>
            Por que o <span>Calisul</span> funciona?
          </h2>

          <div className="benefits-grid">

            {[
              {
                icon: '💪',
                title: 'Remove manchas difíceis',
                desc: 'Café, vinho, suor, comida — o oxigênio ativo age direto na mancha.',
              },
              {
                icon: '🌿',
                title: 'Sem cloro',
                desc: 'Uma alternativa ao uso de produtos à base de cloro para a rotina de lavagem.',
              },
              {
                icon: '👃',
                title: 'Sem cheiro forte',
                desc: 'Não possui o odor agressivo característico do cloro.',
              },
              {
                icon: '🔄',
                title: 'Multiuso',
                desc: 'Roupas, toalhas, lençóis, tênis, panos de prato e muito mais.',
              },
            ].map((benefit) => (
              <div
                className="benefit-card"
                key={benefit.title}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <strong>{benefit.title}</strong>

                <p>{benefit.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          COMO USAR
      ====================================================== */}

      <section className="how-section">
        <div className="container">

          <h2>
            Como usar em <span>3 passos</span>
          </h2>

          <div className="steps-grid">

            {[
              {
                n: '1',
                icon: '💧',
                title: 'Dissolva',
                desc: 'Em água morna',
              },
              {
                n: '2',
                icon: '⏱️',
                title: 'Aguarde',
                desc: '30 min a 2h',
              },
              {
                n: '3',
                icon: '✨',
                title: 'Lave',
                desc: 'Normalmente',
              },
            ].map((step) => (
              <div
                className="step-card"
                key={step.n}
              >
                <div className="step-number">
                  {step.n}
                </div>

                <div className="step-icon">
                  {step.icon}
                </div>

                <strong>{step.title}</strong>

                <span>{step.desc}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          AVALIAÇÕES
      ====================================================== */}

      <section className="section white-section">
        <div className="container">

          <h2>
            Quem Testou, <span>Aprovou</span>
          </h2>

          <p className="section-subtitle">
            ⭐⭐⭐⭐⭐ Avaliação 4.9 na Shopee
          </p>

          <div className="reviews-grid">

            {reviews.map((review) => (
              <div
                className="review-card"
                key={review.name}
              >

                <div className="review-header">

                  <img
                    src={review.photo}
                    alt={review.name}
                  />

                  <div>
                    <strong>{review.name}</strong>

                    <small>{review.city}</small>

                    <div>
                      {'⭐'.repeat(review.stars)}
                    </div>
                  </div>

                </div>

                <p>
                  "{review.text}"
                </p>

                <span className="verified">
                  ✅ Compra verificada
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ======================================================
          OFERTAS
      ====================================================== */}

      <section
        id="oferta"
        className="offer-section"
      >
        <div className="container">

          <div className="offer-label">
            ⚡ OFERTA RELÂMPAGO
          </div>

          <h2>
            Escolha o kit ideal para suas{' '}
            <span>roupas</span>
          </h2>

          <p className="offer-subtitle">
            Quanto maior o kit, menor o preço por kg.
          </p>

          {/* CONTADOR */}

          <div className="countdown">

            {[
              {
                v: pad(countdown.h),
                l: 'h',
              },
              {
                v: pad(countdown.m),
                l: 'min',
              },
              {
                v: pad(countdown.s),
                l: 'seg',
              },
            ].map((time, index) => (
              <div
                className="time-group"
                key={time.l}
              >

                <div>
                  <div className="time-number">
                    {time.v}
                  </div>

                  <small>{time.l}</small>
                </div>

                {index < 2 && (
                  <b>:</b>
                )}

              </div>
            ))}

          </div>

          {/* CARDS */}

          <div className="offers-grid">

            {offers.map((offer) => {

              const active =
                selectedOffer === offer.id

              return (
                <div
                  key={offer.id}
                  className={`offer-card ${
                    active ? 'active' : ''
                  }`}
                  onClick={() =>
                    setSelectedOffer(offer.id)
                  }
                >

                  {offer.badge && (
                    <div
                      className={`offer-badge ${
                        offer.id === 3
                          ? 'gold'
                          : ''
                      }`}
                    >
                      {offer.badge}
                    </div>
                  )}

                  <div className="offer-image">
                    <img
                      src={offer.img}
                      alt={`Calisul ${offer.size}`}
                    />
                  </div>

                  <small>
                    {offer.label}
                  </small>

                  <strong className="offer-size">
                    {offer.size}
                  </strong>

                  <div className="offer-price">
                    {offer.price}
                  </div>

                  <span className="kg-price">
                    {offer.pricePerKg}
                  </span>

                  {offer.saving && (
                    <div className="saving">
                      ✓ {offer.saving}
                    </div>
                  )}

                  <small className="installment">
                    ou {offer.installment} sem juros
                  </small>

                  <div className="shipping">
                    🚚 Frete Grátis
                  </div>

                  <div
                    className={`radio ${
                      active ? 'selected' : ''
                    }`}
                  />

                </div>
              )
            })}

          </div>

          <div className="selected-summary">
            Você selecionou:{' '}
            <strong>
              Kit {selected.size}
            </strong>{' '}
            <span>
              · {selected.price}
            </span>
          </div>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="main-button offer-button"
          >
            🛒 Comprar Kit {selected.size} na Shopee
          </a>

          <p className="secure-text">
            🔒 Você será redirecionado para a Shopee ·
            Pagamento seguro
          </p>

          <div className="payment-methods">
            <span>💳 Cartão 12x</span>
            <span>📱 Pix c/ desconto</span>
            <span>🏦 Boleto</span>
          </div>

        </div>
      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section className="section white-section">
        <div className="container">

          <h2>
            Perguntas <span>Frequentes</span>
          </h2>

          <div className="faq-list">

            {faqs.map((faq, index) => {

              const isOpen =
                openFaq === index

              return (
                <div
                  className="faq-item"
                  key={faq.q}
                >

                  <button
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                  >
                    {faq.q}

                    <span>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* ======================================================
          CTA FINAL
      ====================================================== */}

      <section className="final-cta">
        <div className="final-container">

          <img
            src={product1kg}
            alt="Calisul"
          />

          <h2>
            Suas Roupas Merecem Uma Segunda Chance
          </h2>

          <p>
            Clique abaixo e compre com segurança
            direto na Shopee.
          </p>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="final-button"
          >
            🛒 Quero Comprar Agora
          </a>

          <small>
            🔒 Shopee · Frete Grátis · Parcele em até 12x
          </small>

        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer>
        <p>
          Página de afiliado independente — produto vendido
          pela Calisul na Shopee.
        </p>

        <p>
          Este site contém links de afiliado. Ao comprar você
          apoia este projeto sem custo adicional.
        </p>
      </footer>

      {/* ======================================================
          CTA MOBILE
      ====================================================== */}

      <div className="mobile-cta">
        <a
          href={AFFILIATE}
          target="_blank"
          rel="noopener noreferrer"
        >
          🛒 Comprar na Shopee
        </a>
      </div>

    </div>
  )
}