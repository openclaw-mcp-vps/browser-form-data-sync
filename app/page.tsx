export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension + Cloud Sync
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose a Half-Filled Form Again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FormSync automatically saves every form you type into and syncs it across all your devices and browsers — encrypted, real-time, effortless.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Syncing for $6/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Works with Chrome, Firefox, Edge &amp; Safari. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "💾", title: "Auto-Save as You Type", desc: "Every keystroke is captured and stored instantly — no manual saving needed." },
            { icon: "🔄", title: "Real-Time Cross-Device Sync", desc: "Pick up any form on your phone, tablet, or work laptop right where you left off." },
            { icon: "🔒", title: "End-to-End Encrypted", desc: "Your form data is encrypted before it ever leaves your browser. Only you can read it." },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$6</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited form saves",
              "Sync across unlimited devices",
              "End-to-end encryption",
              "Web dashboard to manage forms",
              "All major browsers supported",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which browsers and operating systems are supported?",
              a: "FormSync works with Chrome, Firefox, Edge, and Safari on Windows, macOS, Linux, Android, and iOS.",
            },
            {
              q: "Is my form data safe?",
              a: "Yes. All data is encrypted client-side before syncing. We never have access to your plaintext form data.",
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel with one click from your dashboard. You keep access until the end of your billing period.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} FormSync. All rights reserved.
      </footer>
    </main>
  );
}
