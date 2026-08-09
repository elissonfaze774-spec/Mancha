import { useState, useEffect } from 'react'
import product1kg from '@/imports/3nd7mbr-11134207-7r98o-md3eywosg75e04.jpg'
import product2kg from '@/imports/v9uprbr-11134207-7r98o-md52drmhppmpee.jpg'
import vslVideo from '@/imports/br-11110105-6v6x7-mq89yser864gc5.16000081783119571.mp4'

const AFFILIATE = 'https://s.shopee.com.br/9fJt1Vt0GZ'

const reviews = [
  { name: 'Fernanda O.', city: 'BH, MG', stars: 5, text: 'Meu marido não acreditou! A camisa branca dele que estava amarelada voltou do jeito que era.', photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=56&h=56&fit=crop' },
  { name: 'Rosana M.', city: 'Curitiba, PR', stars: 5, text: 'Usei nas roupinhas do meu bebê manchadas de comida. Ficaram como novas, sem cheiro forte!', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=56&h=56&fit=crop' },
  { name: 'Marcia T.', city: 'Porto Alegre, RS', stars: 5, text: 'Tirou manchas das toalhas de cozinha em 30 minutos. Tinha tentado de tudo antes!', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&h=56&fit=crop' },
  { name: 'Carla V.', city: 'Salvador, BA', stars: 5, text: 'Muito melhor que o cloro. Não estraga o tecido e deixa tudo branquinho. Compra certinha!', photo: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=56&h=56&fit=crop' },
]

const offers = [
  { id: 0, size: '500g', label: '1 Unidade', price: 'R$ 20,99', installment: '3x R$ 6,99', img: product1kg, badge: null },
  { id: 1, size: '1kg',  label: '1 Unidade', price: 'R$ 32,99', installment: '6x R$ 5,49',  img: product1kg, badge: null },
  { id: 2, size: '2kg',  label: '2 Unidades', price: 'R$ 55,99', installment: '12x R$ 4,66', img: product2kg, badge: '🏆 MAIS POPULAR' },
  { id: 3, size: '3kg',  label: '3 Unidades', price: 'R$ 79,90', installment: '12x R$ 6,65', img: product2kg, badge: '💰 MELHOR VALOR' },
]

const faqs = [
  { q: 'Serve para roupas coloridas?', a: 'Sim! Use em água morna e no tempo certo. Para cores muito vibrantes, teste numa área pequena primeiro.' },
  { q: 'Pode usar na máquina de lavar?', a: 'Pode! Adicione direto no tambor ou na gaveta de aditivos.' },
  { q: 'Tem cheiro forte?', a: 'Não. Sem cheiro agressivo — bem diferente do cloro.' },
  { q: 'Como utilizar?', a: 'Dissolva em água morna, mergulhe as peças por 30 min a 2h, depois lave normalmente.' },
]

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedOffer, setSelectedOffer] = useState(2)
  const [countdown, setCountdown] = useState({ h: 3, m: 47, s: 13 })
  const [exitPopup, setExitPopup] = useState(false)
  const [exitDone, setExitDone] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown((c) => {
        let { h, m, s } = c
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { return { h: 0, m: 0, s: 0 } }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 8 && !exitDone) setExitPopup(true)
    }
    document.addEventListener('mouseleave', handler)
    return () => document.removeEventListener('mouseleave', handler)
  }, [exitDone])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{ background: '#fffaf7', fontFamily: "'Poppins', sans-serif", color: '#1a1a2e' }}>

      {/* ── Exit intent popup ── */}
      {exitPopup && (
        <div
          onClick={() => { setExitPopup(false); setExitDone(true) }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: 'white', borderRadius: 24, padding: '36px 28px', maxWidth: 420, width: '100%', textAlign: 'center', border: '3px solid #e91e8c', position: 'relative' }}
          >
            <button
              onClick={() => { setExitPopup(false); setExitDone(true) }}
              style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#9ca3af' }}
            >×</button>
            <div style={{ fontSize: 44, marginBottom: 12 }}>⏳</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 24, color: '#1a1a2e', marginBottom: 8 }}>
              Espera! Antes de sair…
            </h3>
            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
              Você ainda tem a oferta relâmpago disponível. Kit 2 unidades com <strong style={{ color: '#e91e8c' }}>Frete Grátis</strong> e <strong>parcelado em até 12x.</strong>
            </p>
            <img src={product2kg} alt="Kit 2 unidades" style={{ width: 120, objectFit: 'contain', marginBottom: 16 }} />
            <div style={{ marginBottom: 4, fontSize: 22, fontWeight: 900, color: '#e91e8c' }}>R$ 55,99</div>
            <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>ou 12x R$ 4,66 sem juros · 🚚 Frete Grátis</div>
            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', background: 'linear-gradient(135deg,#e91e8c,#c0157a)', color: 'white', fontWeight: 800, fontSize: 16, padding: '15px', borderRadius: 999, textDecoration: 'none', textTransform: 'uppercase' }}
            >
              🛒 Sim, quero aproveitar!
            </a>
            <button
              onClick={() => { setExitPopup(false); setExitDone(true) }}
              style={{ marginTop: 12, background: 'none', border: 'none', fontSize: 12, color: '#d1d5db', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Não, prefiro continuar com roupas manchadas
            </button>
          </div>
        </div>
      )}

      {/* ── Top bar ── */}
      <div style={{ background: '#e91e8c', color: 'white', textAlign: 'center', padding: '8px 16px', fontSize: 13, fontWeight: 600 }}>
        🚚 Frete Grátis com cupom &nbsp;•&nbsp; 💳 Parcele em até 12x &nbsp;•&nbsp; 🔒 Compra Segura Shopee
      </div>

      {/* ══════════════════════════════
          HERO — VSL + CTA
      ══════════════════════════════ */}
      <section style={{ background: 'linear-gradient(160deg, #fde8f4 0%, #dbeafe 100%)', padding: '40px 16px 48px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>

          {/* Brand */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', borderRadius: 999, padding: '6px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: 24 }}>
            <img src={product1kg} alt="Calisul" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: 13, color: '#e91e8c', letterSpacing: 1 }}>CALISUL</span>
            <span style={{ color: '#9ca3af', fontSize: 11, fontWeight: 600 }}>PERCARBONATO DE SÓDIO</span>
          </div>

          <h1 style={{ fontSize: 'clamp(26px, 6vw, 44px)', fontFamily: "'Fraunces', serif", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: '#1a1a2e' }}>
            A Solução que Está Devolvendo a Vida às Roupas Manchadas —{' '}
            <span style={{ color: '#e91e8c' }}>Sem Cloro e Sem Esfregar.</span>
          </h1>

          <p style={{ fontSize: 16, color: '#4b5563', marginBottom: 12, lineHeight: 1.65 }}>
            O <strong>Percarbonato de Sódio Calisul</strong> usa oxigênio ativo para tirar manchas de café, suor, comida e muito mais — em roupas brancas e coloridas.
          </p>

          {/* Credibility strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 600 }}>⭐⭐⭐⭐⭐ <strong style={{ color: '#1a1a2e' }}>4.9</strong> na Shopee</span>
            <span style={{ color: '#e5e7eb' }}>|</span>
            <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 600 }}>🏆 Mais Vendido em Percarbonato</span>
            <span style={{ color: '#e5e7eb' }}>|</span>
            <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 600 }}>🚚 Frete Grátis</span>
          </div>

          {/* VSL Video */}
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.18)', background: '#000', marginBottom: 28, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 10, left: 10, background: '#e91e8c', color: 'white', borderRadius: 999, padding: '4px 12px', fontSize: 11, fontWeight: 700, zIndex: 1, pointerEvents: 'none' }}>
              ▶ ASSISTA ANTES DE COMPRAR
            </div>
            <video
              src={vslVideo}
              controls
              playsInline
              preload="metadata"
              poster={product1kg}
              style={{ display: 'block', width: '100%', maxHeight: 340, objectFit: 'cover' }}
            />
          </div>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block', width: '100%', background: 'linear-gradient(135deg, #e91e8c, #c0157a)',
              color: 'white', fontWeight: 800, fontSize: 18, padding: '18px 24px', borderRadius: 999,
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1,
              boxShadow: '0 4px 24px rgba(233,30,140,0.45)',
            }}
          >
            🛒 Quero Comprar na Shopee
          </a>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 16 }}>
            {['🔒 Compra Segura', '🚚 Frete Grátis', '💳 12x sem juros', '📱 Pix com desconto'].map(t => (
              <span key={t} style={{ background: 'white', borderRadius: 999, padding: '5px 12px', fontSize: 12, fontWeight: 600, color: '#4b5563', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BENEFITS — 4 icons, clean
      ══════════════════════════════ */}
      <section style={{ padding: '48px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 900, textAlign: 'center', marginBottom: 32, color: '#1a1a2e' }}>
            Por que o <span style={{ color: '#e91e8c' }}>Calisul</span> funciona?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              { icon: '💪', title: 'Remove manchas difíceis', desc: 'Café, vinho, suor, comida — o oxigênio ativo age direto na mancha.' },
              { icon: '🌿', title: 'Sem cloro', desc: 'Não agride o tecido nem sua pele. Mais seguro para toda a família.' },
              { icon: '👃', title: 'Sem cheiro forte', desc: 'Diferente do cloro, pode usar sem se incomodar com o odor.' },
              { icon: '🔄', title: 'Multiuso', desc: 'Roupas, toalhas, lençóis, tênis, panos de prato e muito mais.' },
            ].map(b => (
              <div key={b.title} style={{ background: '#fffaf7', borderRadius: 16, padding: '20px 16px', textAlign: 'center', border: '1px solid #fde8f4' }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{b.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: '#1a1a2e' }}>{b.title}</div>
                <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HOW TO USE — 3 steps
      ══════════════════════════════ */}
      <section style={{ padding: '48px 16px', background: '#1a1a2e' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 900, color: 'white', marginBottom: 32 }}>
            Como usar em <span style={{ color: '#e91e8c' }}>3 passos</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { n: '1', icon: '💧', title: 'Dissolva', desc: 'Em água morna' },
              { n: '2', icon: '⏱️', title: 'Aguarde', desc: '30 min a 2h' },
              { n: '3', icon: '✨', title: 'Lave', desc: 'Normalmente' },
            ].map(s => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '20px 12px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e91e8c', color: 'white', fontWeight: 900, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>{s.n}</div>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{s.title}</div>
                <div style={{ color: '#9ca3af', fontSize: 12 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SOCIAL PROOF — 4 reviews
      ══════════════════════════════ */}
      <section style={{ padding: '48px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px,5vw,30px)', fontWeight: 900, textAlign: 'center', marginBottom: 6, color: '#1a1a2e' }}>
            Quem Testou, <span style={{ color: '#e91e8c' }}>Aprovou</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 13, marginBottom: 28 }}>⭐⭐⭐⭐⭐ Avaliação 4.9 na Shopee</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: '#fffaf7', borderRadius: 16, padding: '16px', border: '1px solid #fde8f4' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <img src={r.photo} alt={r.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid #e91e8c' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12, color: '#1a1a2e' }}>{r.name}</div>
                    <div style={{ fontSize: 10, color: '#9ca3af' }}>{r.city}</div>
                    <div style={{ fontSize: 11 }}>{'⭐'.repeat(r.stars)}</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>"{r.text}"</p>
                <div style={{ marginTop: 8 }}>
                  <span style={{ fontSize: 10, background: '#dcfce7', color: '#16a34a', borderRadius: 4, padding: '2px 6px', fontWeight: 700 }}>✅ Compra verificada</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          OFFER STACK
      ══════════════════════════════ */}
      <section id="oferta" style={{ padding: '48px 16px', background: 'linear-gradient(160deg, #1a1a2e 0%, #2d1b4e 100%)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#e91e8c' }}>⚡ Oferta Relâmpago</span>
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 900, color: 'white', textAlign: 'center', marginBottom: 8 }}>
            Escolha seu <span style={{ color: '#e91e8c' }}>kit</span>
          </h2>

          {/* Countdown */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
            {[{ v: pad(countdown.h), l: 'h' }, { v: pad(countdown.m), l: 'min' }, { v: pad(countdown.s), l: 'seg' }].map((t, i) => (
              <div key={t.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ background: '#e91e8c', color: 'white', fontWeight: 900, fontSize: 26, borderRadius: 10, padding: '6px 14px', minWidth: 52, textAlign: 'center' }}>{t.v}</div>
                  <div style={{ color: '#9ca3af', fontSize: 10, marginTop: 3 }}>{t.l}</div>
                </div>
                {i < 2 && <span style={{ color: 'white', fontWeight: 900, fontSize: 22, marginBottom: 14 }}>:</span>}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 20 }}>
            {offers.map(o => {
              const active = selectedOffer === o.id
              return (
                <div
                  key={o.id}
                  onClick={() => setSelectedOffer(o.id)}
                  style={{
                    borderRadius: 20, padding: '16px 12px', textAlign: 'center', cursor: 'pointer',
                    background: active ? 'linear-gradient(135deg, #fde8f4, #fff)' : 'rgba(255,255,255,0.07)',
                    border: active ? '2px solid #e91e8c' : '2px solid rgba(255,255,255,0.1)',
                    transform: active ? 'scale(1.03)' : 'scale(1)',
                    boxShadow: active ? '0 6px 24px rgba(233,30,140,0.2)' : 'none',
                    transition: 'all 0.2s ease',
                    color: active ? '#1a1a2e' : 'white',
                  }}
                >
                  {o.badge && (
                    <div style={{ marginBottom: 6 }}>
                      <span style={{ background: '#e91e8c', color: 'white', borderRadius: 999, padding: '2px 10px', fontSize: 10, fontWeight: 800 }}>{o.badge}</span>
                    </div>
                  )}
                  <img src={o.img} alt={o.size} style={{ width: 70, height: 70, objectFit: 'contain', marginBottom: 6 }} />
                  <div style={{ fontSize: 11, color: active ? '#9ca3af' : '#9ca3af', marginBottom: 2 }}>{o.label}</div>
                  <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 2 }}>{o.size}</div>
                  <div style={{ fontWeight: 900, fontSize: 22, color: '#e91e8c', marginBottom: 2 }}>{o.price}</div>
                  <div style={{ fontSize: 11, color: active ? '#6b7280' : '#9ca3af' }}>ou {o.installment} sem juros</div>
                  <div style={{ fontSize: 11, color: '#60a5fa', marginTop: 4, fontWeight: 600 }}>🚚 Frete Grátis</div>
                </div>
              )
            })}
          </div>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block', width: '100%', background: 'linear-gradient(135deg, #e91e8c, #c0157a)',
              color: 'white', fontWeight: 800, fontSize: 18, padding: '18px 24px', borderRadius: 999,
              textDecoration: 'none', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 1,
              boxShadow: '0 4px 24px rgba(233,30,140,0.45)',
            }}
          >
            🛒 Comprar Agora na Shopee
          </a>

          <p style={{ color: '#6b7280', fontSize: 12, textAlign: 'center', marginTop: 12 }}>
            🔒 Você será redirecionado para a Shopee · Pagamento 100% seguro
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
            {['💳 Cartão 12x', '📱 Pix c/ desconto', '🏦 Boleto'].map(m => (
              <span key={m} style={{ background: 'rgba(255,255,255,0.08)', color: '#d1d5db', borderRadius: 999, padding: '5px 12px', fontSize: 12 }}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FAQ
      ══════════════════════════════ */}
      <section style={{ padding: '48px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(22px, 5vw, 30px)', fontWeight: 900, textAlign: 'center', marginBottom: 24, color: '#1a1a2e' }}>
            Perguntas <span style={{ color: '#e91e8c' }}>Frequentes</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid #fde8f4' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '16px 20px', fontWeight: 600, fontSize: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: openFaq === i ? '#fde8f4' : 'white', border: 'none', cursor: 'pointer', color: '#1a1a2e' }}
                >
                  {f.q}
                  <span style={{ color: '#e91e8c', fontSize: 22, lineHeight: 1, flexShrink: 0, marginLeft: 12 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <div style={{ padding: '12px 20px', fontSize: 13, color: '#4b5563', lineHeight: 1.6, background: '#fffaf7' }}>{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
      <section style={{ padding: '56px 16px', background: 'linear-gradient(135deg, #e91e8c, #c0157a 50%, #1a6cf0)', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <img src={product1kg} alt="Calisul" style={{ width: 120, height: 120, objectFit: 'contain', margin: '0 auto 20px', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.3))' }} />
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(26px, 6vw, 40px)', fontWeight: 900, color: 'white', marginBottom: 12, lineHeight: 1.2 }}>
            Suas Roupas Merecem Uma Segunda Chance
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 28 }}>
            Clique abaixo e compre com segurança direto na Shopee.
          </p>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block', background: 'white', color: '#e91e8c', fontWeight: 800, fontSize: 18,
              padding: '18px 24px', borderRadius: 999, textDecoration: 'none', textTransform: 'uppercase',
              letterSpacing: 1, boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            }}
          >
            🛒 Quero Comprar Agora
          </a>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 14 }}>
            🔒 Shopee · Frete Grátis · Parcele em até 12x
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1a1a2e', color: '#6b7280', textAlign: 'center', padding: '24px 16px', fontSize: 12 }}>
        <p>Página de afiliado independente — produto vendido pela Calisul na Shopee.</p>
        <p style={{ marginTop: 6 }}>Este site contém links de afiliado. Ao comprar você apoia este projeto sem custo adicional.</p>
      </footer>


      {/* Sticky mobile CTA */}
      <div className="sticky-cta md:hidden">
        <a
          href={AFFILIATE}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block', width: '100%', background: 'linear-gradient(135deg, #e91e8c, #c0157a)',
            color: 'white', fontWeight: 800, fontSize: 16, padding: '14px', borderRadius: 999,
            textDecoration: 'none', textAlign: 'center', textTransform: 'uppercase',
          }}
        >
          🛒 Comprar na Shopee
        </a>
      </div>

    </div>
  )
}
