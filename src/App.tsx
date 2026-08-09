import { useState, useEffect } from 'react'
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
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=56&h=56&fit=crop',
  },
  {
    name: 'Rosana M.',
    city: 'Curitiba, PR',
    stars: 5,
    text: 'Usei nas roupinhas do meu bebê manchadas de comida. Ficaram como novas, sem cheiro forte!',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=56&h=56&fit=crop',
  },
  {
    name: 'Marcia T.',
    city: 'Porto Alegre, RS',
    stars: 5,
    text: 'Tirou manchas das toalhas de cozinha em 30 minutos. Tinha tentado de tudo antes!',
    photo:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&h=56&fit=crop',
  },
  {
    name: 'Carla V.',
    city: 'Salvador, BA',
    stars: 5,
    text: 'Muito melhor que o cloro. Não estraga o tecido e deixa tudo branquinho. Compra certinha!',
    photo:
      'https://images.unsplash.com/photo-1548142813-c348350df52b?w=56&h=56&fit=crop',
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
    const timer = setInterval(() => {
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

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 8 && !exitDone) {
        setExitPopup(true)
      }
    }

    document.addEventListener('mouseleave', handler)

    return () => {
      document.removeEventListener('mouseleave', handler)
    }
  }, [exitDone])

  const pad = (n: number) => String(n).padStart(2, '0')

  const selected = offers.find((offer) => offer.id === selectedOffer) || offers[2]

  return (
    <div
      style={{
        background: '#fffaf7',
        fontFamily: "'Poppins', sans-serif",
        color: '#1a1a2e',
        minHeight: '100vh',
      }}
    >
      {/* =========================================================
          EXIT INTENT
      ========================================================= */}
      {exitPopup && (
        <div
          onClick={() => {
            setExitPopup(false)
            setExitDone(true)
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.72)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: 24,
              padding: '36px 28px',
              maxWidth: 420,
              width: '100%',
              textAlign: 'center',
              border: '3px solid #e91e8c',
              position: 'relative',
            }}
          >
            <button
              onClick={() => {
                setExitPopup(false)
                setExitDone(true)
              }}
              style={{
                position: 'absolute',
                top: 12,
                right: 16,
                background: 'none',
                border: 'none',
                fontSize: 22,
                cursor: 'pointer',
                color: '#9ca3af',
              }}
            >
              ×
            </button>

            <div
              style={{
                fontSize: 44,
                marginBottom: 12,
              }}
            >
              ⏳
            </div>

            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize: 24,
                color: '#1a1a2e',
                marginBottom: 8,
              }}
            >
              Espera! Antes de sair…
            </h3>

            <p
              style={{
                color: '#6b7280',
                fontSize: 14,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Você ainda tem a oferta disponível. Kit 2 unidades com{' '}
              <strong style={{ color: '#e91e8c' }}>
                Frete Grátis
              </strong>{' '}
              e parcelamento em até 12x.
            </p>

            <img
              src={product2kg}
              alt="Kit 2 unidades"
              style={{
                width: 120,
                objectFit: 'contain',
                marginBottom: 16,
              }}
            />

            <div
              style={{
                marginBottom: 4,
                fontSize: 22,
                fontWeight: 900,
                color: '#e91e8c',
              }}
            >
              R$ 55,99
            </div>

            <div
              style={{
                fontSize: 12,
                color: '#9ca3af',
                marginBottom: 20,
              }}
            >
              ou 12x R$ 4,66 sem juros · 🚚 Frete Grátis
            </div>

            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background:
                  'linear-gradient(135deg,#e91e8c,#c0157a)',
                color: 'white',
                fontWeight: 800,
                fontSize: 16,
                padding: '15px',
                borderRadius: 999,
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              🛒 Sim, quero aproveitar!
            </a>

            <button
              onClick={() => {
                setExitPopup(false)
                setExitDone(true)
              }}
              style={{
                marginTop: 12,
                background: 'none',
                border: 'none',
                fontSize: 12,
                color: '#d1d5db',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Não, prefiro continuar com roupas manchadas
            </button>
          </div>
        </div>
      )}

      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <div className="top-bar">
  <div className="top-bar-track">

    <div className="top-bar-content">
      🚚 Frete Grátis com cupom
      &nbsp; • &nbsp;
      💳 Parcele em até 12x
      &nbsp; • &nbsp;
      🔒 Compra Segura Shopee
      &nbsp; • &nbsp;
    </div>

    <div className="top-bar-content">
      🚚 Frete Grátis com cupom
      &nbsp; • &nbsp;
      💳 Parcele em até 12x
      &nbsp; • &nbsp;
      🔒 Compra Segura Shopee
      &nbsp; • &nbsp;
    </div>

  </div>
</div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        style={{
          background:
            'linear-gradient(160deg, #fde8f4 0%, #dbeafe 100%)',
          padding: '40px 16px 48px',
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'white',
              borderRadius: 999,
              padding: '6px 16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              marginBottom: 24,
            }}
          >
            <img
              src={product1kg}
              alt="Calisul"
              style={{
                width: 28,
                height: 28,
                objectFit: 'contain',
              }}
            />

            <span
              style={{
                fontWeight: 800,
                fontSize: 13,
                color: '#e91e8c',
                letterSpacing: 1,
              }}
            >
              CALISUL
            </span>

            <span
              style={{
                color: '#9ca3af',
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              PERCARBONATO DE SÓDIO
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(26px, 6vw, 44px)',
              fontFamily: "'Fraunces', serif",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 16,
              color: '#1a1a2e',
            }}
          >
            A Solução que Está Devolvendo a Vida às Roupas Manchadas —{' '}
            <span style={{ color: '#e91e8c' }}>
              Sem Cloro e Sem Esfregar.
            </span>
          </h1>

          <p
            style={{
              fontSize: 16,
              color: '#4b5563',
              marginBottom: 12,
              lineHeight: 1.65,
            }}
          >
            O <strong>Percarbonato de Sódio Calisul</strong> usa
            oxigênio ativo para ajudar a remover manchas de café,
            suor, comida e muito mais — em roupas brancas e
            coloridas.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 16,
              marginBottom: 24,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: '#6b7280',
                fontWeight: 600,
              }}
            >
              ⭐⭐⭐⭐⭐{' '}
              <strong style={{ color: '#1a1a2e' }}>4.9</strong> na
              Shopee
            </span>

            <span style={{ color: '#e5e7eb' }}>|</span>

            <span
              style={{
                fontSize: 13,
                color: '#6b7280',
                fontWeight: 600,
              }}
            >
              🏆 Mais Vendido em Percarbonato
            </span>

            <span style={{ color: '#e5e7eb' }}>|</span>

            <span
              style={{
                fontSize: 13,
                color: '#6b7280',
                fontWeight: 600,
              }}
            >
              🚚 Frete Grátis
            </span>
          </div>

          {/* VIDEO */}
          <div
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
              background: '#000',
              marginBottom: 28,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                background: '#e91e8c',
                color: 'white',
                borderRadius: 999,
                padding: '4px 12px',
                fontSize: 11,
                fontWeight: 700,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              ▶ ASSISTA ANTES DE COMPRAR
            </div>

            <video
              src={vslVideo}
              controls
              playsInline
              preload="metadata"
              poster={product1kg}
              style={{
                display: 'block',
                width: '100%',
                maxHeight: 340,
                objectFit: 'cover',
              }}
            />
          </div>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              background:
                'linear-gradient(135deg, #e91e8c, #c0157a)',
              color: 'white',
              fontWeight: 800,
              fontSize: 18,
              padding: '18px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: 1,
              boxShadow: '0 4px 24px rgba(233,30,140,0.45)',
            }}
          >
            🛒 Quero Comprar na Shopee
          </a>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 10,
              marginTop: 16,
            }}
          >
            {[
              '🔒 Compra Segura',
              '🚚 Frete Grátis',
              '💳 12x sem juros',
              '📱 Pix com desconto',
            ].map((text) => (
              <span
                key={text}
                style={{
                  background: 'white',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#4b5563',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================= */}
      <section
        style={{
          padding: '48px 16px',
          background: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(22px, 5vw, 32px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 32,
              color: '#1a1a2e',
            }}
          >
            Por que o{' '}
            <span style={{ color: '#e91e8c' }}>Calisul</span>{' '}
            funciona?
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
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
                key={benefit.title}
                style={{
                  background: '#fffaf7',
                  borderRadius: 16,
                  padding: '20px 16px',
                  textAlign: 'center',
                  border: '1px solid #fde8f4',
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    marginBottom: 8,
                  }}
                >
                  {benefit.icon}
                </div>

                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 6,
                    color: '#1a1a2e',
                  }}
                >
                  {benefit.title}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: '#6b7280',
                    lineHeight: 1.5,
                  }}
                >
                  {benefit.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO USE
      ========================================================= */}
      <section
        style={{
          padding: '48px 16px',
          background: '#1a1a2e',
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(22px, 5vw, 32px)',
              fontWeight: 900,
              color: 'white',
              marginBottom: 32,
            }}
          >
            Como usar em{' '}
            <span style={{ color: '#e91e8c' }}>3 passos</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}
          >
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
                key={step.n}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: 16,
                  padding: '20px 12px',
                  border:
                    '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: '#e91e8c',
                    color: 'white',
                    fontWeight: 900,
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px',
                  }}
                >
                  {step.n}
                </div>

                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 6,
                  }}
                >
                  {step.icon}
                </div>

                <div
                  style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  {step.title}
                </div>

                <div
                  style={{
                    color: '#9ca3af',
                    fontSize: 12,
                  }}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          REVIEWS
      ========================================================= */}
      <section
        style={{
          padding: '48px 16px',
          background: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(22px,5vw,30px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 6,
              color: '#1a1a2e',
            }}
          >
            Quem Testou,{' '}
            <span style={{ color: '#e91e8c' }}>Aprovou</span>
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: 13,
              marginBottom: 28,
            }}
          >
            ⭐⭐⭐⭐⭐ Avaliação 4.9 na Shopee
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 12,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                style={{
                  background: '#fffaf7',
                  borderRadius: 16,
                  padding: '16px',
                  border: '1px solid #fde8f4',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <img
                    src={review.photo}
                    alt={review.name}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                      border: '2px solid #e91e8c',
                    }}
                  />

                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 12,
                        color: '#1a1a2e',
                      }}
                    >
                      {review.name}
                    </div>

                    <div
                      style={{
                        fontSize: 10,
                        color: '#9ca3af',
                      }}
                    >
                      {review.city}
                    </div>

                    <div style={{ fontSize: 11 }}>
                      {'⭐'.repeat(review.stars)}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 12,
                    color: '#4b5563',
                    lineHeight: 1.55,
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  "{review.text}"
                </p>

                <div style={{ marginTop: 8 }}>
                  <span
                    style={{
                      fontSize: 10,
                      background: '#dcfce7',
                      color: '#16a34a',
                      borderRadius: 4,
                      padding: '2px 6px',
                      fontWeight: 700,
                    }}
                  >
                    ✅ Compra verificada
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFER STACK — NOVA VERSÃO
      ========================================================= */}
      <section
        id="oferta"
        style={{
          padding: '52px 16px 56px',
          background:
            'linear-gradient(160deg, #1a1a2e 0%, #2d1b4e 100%)',
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
          }}
        >
          {/* Label */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: '#e91e8c',
              }}
            >
              ⚡ Oferta Relâmpago
            </span>
          </div>

          {/* Título */}
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(22px, 5vw, 32px)',
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
              marginBottom: 6,
            }}
          >
            Escolha o kit ideal para suas{' '}
            <span style={{ color: '#e91e8c' }}>roupas</span>
          </h2>

          <p
            style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: 12,
              margin: '0 0 20px',
            }}
          >
            Quanto maior o kit, menor o preço por kg.
          </p>

          {/* Countdown */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 26,
            }}
          >
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
                key={time.l}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      background: '#e91e8c',
                      color: 'white',
                      fontWeight: 900,
                      fontSize: 26,
                      borderRadius: 10,
                      padding: '6px 14px',
                      minWidth: 52,
                      textAlign: 'center',
                      boxShadow:
                        '0 4px 14px rgba(233,30,140,0.25)',
                    }}
                  >
                    {time.v}
                  </div>

                  <div
                    style={{
                      color: '#9ca3af',
                      fontSize: 10,
                      marginTop: 3,
                    }}
                  >
                    {time.l}
                  </div>
                </div>

                {index < 2 && (
                  <span
                    style={{
                      color: 'white',
                      fontWeight: 900,
                      fontSize: 22,
                      marginBottom: 14,
                    }}
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 12,
              marginBottom: 18,
            }}
          >
            {offers.map((offer) => {
              const active = selectedOffer === offer.id

              return (
                <div
                  key={offer.id}
                  onClick={() => setSelectedOffer(offer.id)}
                  style={{
                    position: 'relative',
                    borderRadius: 20,
                    padding: '20px 12px 18px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: active
                      ? 'linear-gradient(145deg, #fff7fc 0%, #ffffff 100%)'
                      : 'rgba(255,255,255,0.07)',
                    border: active
                      ? '2px solid #e91e8c'
                      : '2px solid rgba(255,255,255,0.1)',
                    transform: active
                      ? 'scale(1.025)'
                      : 'scale(1)',
                    boxShadow: active
                      ? '0 8px 28px rgba(233,30,140,0.25)'
                      : 'none',
                    transition: 'all 0.2s ease',
                    color: active
                      ? '#1a1a2e'
                      : 'white',
                  }}
                >
                  {/* Badge */}
                  {offer.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: -11,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          background:
                            offer.id === 3
                              ? 'linear-gradient(135deg,#f59e0b,#e91e8c)'
                              : '#e91e8c',
                          color: 'white',
                          borderRadius: 999,
                          padding: '4px 11px',
                          fontSize: 10,
                          fontWeight: 900,
                          boxShadow:
                            '0 3px 10px rgba(0,0,0,0.18)',
                        }}
                      >
                        {offer.badge}
                      </span>
                    </div>
                  )}

                  {/* Imagem */}
                  <div
                    style={{
                      height: 82,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 4,
                    }}
                  >
                    <img
                      src={offer.img}
                      alt={`Calisul ${offer.size}`}
                      style={{
                        width: 76,
                        height: 76,
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Unidade */}
                  <div
                    style={{
                      fontSize: 11,
                      color: '#9ca3af',
                      marginBottom: 2,
                    }}
                  >
                    {offer.label}
                  </div>

                  {/* Peso */}
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 21,
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    {offer.size}
                  </div>

                  {/* Preço */}
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 23,
                      lineHeight: 1.1,
                      color: '#e91e8c',
                      marginBottom: 5,
                    }}
                  >
                    {offer.price}
                  </div>

                  {/* Preço por KG */}
                  <div
                    style={{
                      display: 'inline-block',
                      background: active
                        ? '#fde8f4'
                        : 'rgba(233,30,140,0.12)',
                      color: active
                        ? '#c0157a'
                        : '#f472b6',
                      borderRadius: 999,
                      padding: '4px 9px',
                      fontSize: 10,
                      fontWeight: 800,
                      marginBottom: 6,
                    }}
                  >
                    {offer.pricePerKg}
                  </div>

                  {/* Economia */}
                  {offer.saving && (
                    <div
                      style={{
                        fontSize: 10,
                        color: active
                          ? '#16a34a'
                          : '#4ade80',
                        fontWeight: 800,
                        marginBottom: 5,
                      }}
                    >
                      ✓ {offer.saving}
                    </div>
                  )}

                  {/* Parcelamento */}
                  <div
                    style={{
                      fontSize: 10,
                      color: active
                        ? '#6b7280'
                        : '#9ca3af',
                      lineHeight: 1.3,
                    }}
                  >
                    ou {offer.installment} sem juros
                  </div>

                  {/* Frete */}
                  <div
                    style={{
                      fontSize: 11,
                      color: active
                        ? '#2563eb'
                        : '#60a5fa',
                      marginTop: 5,
                      fontWeight: 700,
                    }}
                  >
                    🚚 Frete Grátis
                  </div>

                  {/* Seleção */}
                  <div
                    style={{
                      margin: '10px auto 0',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      border: active
                        ? '5px solid #e91e8c'
                        : '2px solid #6b7280',
                      background: active
                        ? 'white'
                        : 'transparent',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* Resumo da escolha */}
          <div
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 14,
              padding: '12px 14px',
              textAlign: 'center',
              marginBottom: 14,
            }}
          >
            <span
              style={{
                color: '#9ca3af',
                fontSize: 11,
              }}
            >
              Você selecionou:
            </span>{' '}
            <strong
              style={{
                color: 'white',
                fontSize: 13,
              }}
            >
              Kit {selected.size}
            </strong>{' '}
            <span
              style={{
                color: '#e91e8c',
                fontWeight: 800,
                fontSize: 13,
              }}
            >
              · {selected.price}
            </span>
          </div>

          {/* CTA */}
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              background:
                'linear-gradient(135deg, #e91e8c, #c0157a)',
              color: 'white',
              fontWeight: 800,
              fontSize: 18,
              padding: '18px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: 1,
              boxShadow:
                '0 4px 24px rgba(233,30,140,0.45)',
              boxSizing: 'border-box',
            }}
          >
            🛒 Comprar Kit {selected.size} na Shopee
          </a>

          <p
            style={{
              color: '#6b7280',
              fontSize: 12,
              textAlign: 'center',
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            🔒 Você será redirecionado para a Shopee ·
            Pagamento seguro
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 10,
              marginTop: 10,
              flexWrap: 'wrap',
            }}
          >
            {[
              '💳 Cartão 12x',
              '📱 Pix c/ desconto',
              '🏦 Boleto',
            ].map((method) => (
              <span
                key={method}
                style={{
                  background:
                    'rgba(255,255,255,0.08)',
                  color: '#d1d5db',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontSize: 12,
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        style={{
          padding: '48px 16px',
          background: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(22px, 5vw, 30px)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: 24,
              color: '#1a1a2e',
            }}
          >
            Perguntas{' '}
            <span style={{ color: '#e91e8c' }}>
              Frequentes
            </span>
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={index}
                  style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid #fde8f4',
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '16px 20px',
                      fontWeight: 600,
                      fontSize: 14,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: isOpen
                        ? '#fde8f4'
                        : 'white',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#1a1a2e',
                    }}
                  >
                    {faq.q}

                    <span
                      style={{
                        color: '#e91e8c',
                        fontSize: 22,
                        lineHeight: 1,
                        flexShrink: 0,
                        marginLeft: 12,
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '12px 20px',
                        fontSize: 13,
                        color: '#4b5563',
                        lineHeight: 1.6,
                        background: '#fffaf7',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        style={{
          padding: '56px 16px',
          background:
            'linear-gradient(135deg, #e91e8c, #c0157a 50%, #1a6cf0)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          <img
            src={product1kg}
            alt="Calisul"
            style={{
              width: 120,
              height: 120,
              objectFit: 'contain',
              margin: '0 auto 20px',
              filter:
                'drop-shadow(0 8px 24px rgba(0,0,0,0.3))',
            }}
          />

          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(26px, 6vw, 40px)',
              fontWeight: 900,
              color: 'white',
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Suas Roupas Merecem Uma Segunda Chance
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 16,
              marginBottom: 28,
            }}
          >
            Clique abaixo e compre com segurança direto
            na Shopee.
          </p>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: 'white',
              color: '#e91e8c',
              fontWeight: 800,
              fontSize: 18,
              padding: '18px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: 1,
              boxShadow:
                '0 4px 24px rgba(0,0,0,0.2)',
            }}
          >
            🛒 Quero Comprar Agora
          </a>

          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 12,
              marginTop: 14,
            }}
          >
            🔒 Shopee · Frete Grátis · Parcele em até 12x
          </p>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer
        style={{
          background: '#1a1a2e',
          color: '#6b7280',
          textAlign: 'center',
          padding: '24px 16px',
          fontSize: 12,
        }}
      >
        <p>
          Página de afiliado independente — produto vendido
          pela Calisul na Shopee.
        </p>

        <p style={{ marginTop: 6 }}>
          Este site contém links de afiliado. Ao comprar você
          apoia este projeto sem custo adicional.
        </p>
      </footer>

      {/* =========================================================
          STICKY MOBILE CTA
      ========================================================= */}
      <div
        className="sticky-cta md:hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '10px 12px',
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 -4px 20px rgba(0,0,0,0.12)',
        }}
      >
        <a
          href={AFFILIATE}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            width: '100%',
            background:
              'linear-gradient(135deg, #e91e8c, #c0157a)',
            color: 'white',
            fontWeight: 800,
            fontSize: 16,
            padding: '14px',
            borderRadius: 999,
            textDecoration: 'none',
            textAlign: 'center',
            textTransform: 'uppercase',
            boxShadow:
              '0 4px 16px rgba(233,30,140,0.3)',
            boxSizing: 'border-box',
          }}
        >
          🛒 Comprar na Shopee
        </a>
      </div>
    </div>
  )
}