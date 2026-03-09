import { Users, Heart, Share2, Twitter, Instagram } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { SUMATE, SOCIAL, PRESS } from '../content';

const wayIcons = { participar: Users, colaborar: Heart, difundir: Share2 } as const;

export default function Sumate() {
  return (
    <PageLayout title={SUMATE.pageTitle} label={SUMATE.pageLabel}>
      <div style={{ fontFamily: 'var(--font-body)' }}>
        <p className="text-xl text-gray-700 leading-relaxed mb-14 text-center">{SUMATE.intro}</p>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 mb-14">
          {SUMATE.ways.map(({ key, title, description }) => {
            const Icon = wayIcons[key];
            return (
              <div key={key} className="bg-[#fafaf8] p-8 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-[#1a5f5f]/10 flex items-center justify-center">
                  <Icon className="text-[#1a5f5f]" size={28} />
                </div>
                <h3
                  className="text-lg font-bold text-[#1a5f5f]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            );
          })}
        </div>

        {/* Formas de participar */}
        <section className="mb-14">
          <h2
            className="text-2xl font-bold text-[#1a5f5f] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Formas de participar
          </h2>
          <div className="divide-y divide-gray-200 border border-gray-200">
            {SUMATE.formas.map(({ key, desc }) => (
              <div key={key} className="flex gap-4 p-6">
                <div className="w-2 h-2 rounded-full bg-[#c8a96e] mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[#1a5f5f]">{key}: </span>
                  <span className="text-gray-700">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact box */}
        <section className="bg-[#1a5f5f] p-10">
          <h2
            className="text-2xl font-bold text-white mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contacto
          </h2>
          <div className="h-0.5 w-12 bg-[#c8a96e] mb-6" />
          <p className="text-gray-300 mb-8 leading-relaxed">
            Para sumarte o consultarnos, escribinos a través de nuestras redes sociales:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SOCIAL.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-white text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              <Twitter size={16} />
              {SOCIAL.twitter.handle}
            </a>
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-white text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              <Instagram size={16} />
              {SOCIAL.instagram.handle}
            </a>
            <a
              href={PRESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#25d366]/40 px-6 py-3 text-[#25d366] text-sm tracking-wide hover:bg-[#25d366]/10 transition-colors"
            >
              <span className="font-bold text-xs">WA</span>
              {PRESS.displayNumber}
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
