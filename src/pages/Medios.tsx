import { Newspaper, Video, Radio } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { MEDIOS, PRESS } from '../content';

const mediaTypes = [
  { icon: Newspaper, title: 'Prensa Escrita', description: 'Artículos y entrevistas en medios gráficos' },
  { icon: Video,     title: 'Televisión',    description: 'Participación en programas y noticieros' },
  { icon: Radio,     title: 'Radio',         description: 'Entrevistas y columnas radiales' },
];

export default function Medios() {
  return (
    <PageLayout title={MEDIOS.pageTitle} label={MEDIOS.pageLabel}>
      <div style={{ fontFamily: 'var(--font-body)' }}>
        <p className="text-xl text-gray-700 leading-relaxed mb-14">{MEDIOS.intro}</p>

        {/* Media type cards */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 mb-14">
          {mediaTypes.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-[#fafaf8] p-8 flex flex-col items-center text-center gap-4">
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
          ))}
        </div>

        {/* Appearances list — populated from content.ts */}
        <section>
          <h2
            className="text-2xl font-bold text-[#1a5f5f] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Últimas apariciones
          </h2>

          {MEDIOS.appearances.length > 0 ? (
            <ul className="divide-y divide-gray-200 border border-gray-200">
              {MEDIOS.appearances.map(({ date, outlet, title, url }) => (
                <li key={`${date}-${title}`} className="p-6 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-xs text-gray-400 sm:w-28 flex-shrink-0">{date}</span>
                  <span className="text-xs font-semibold text-[#c8a96e] sm:w-36 flex-shrink-0 uppercase tracking-wide">
                    {outlet}
                  </span>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a5f5f] hover:underline font-medium"
                    >
                      {title}
                    </a>
                  ) : (
                    <span className="text-gray-700 font-medium">{title}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mb-8">
              Próximamente se publicarán las últimas apariciones. Seguí las redes para actualizaciones.
            </p>
          )}
        </section>

        {/* Press contact note */}
        <div className="mt-10 border-l-4 border-[#c8a96e] pl-6 py-2 bg-[#fffdf7]">
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong className="text-[#1a5f5f]">{PRESS.label}:</strong>{' '}
            {MEDIOS.pressNote}{' '}
            <a
              href={PRESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a5f5f] underline hover:no-underline"
            >
              {PRESS.displayNumber}
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
