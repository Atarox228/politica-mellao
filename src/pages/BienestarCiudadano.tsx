import PageLayout from '../components/PageLayout';
import { BIENESTAR } from '../content';

export default function BienestarCiudadano() {
  return (
    <PageLayout title={BIENESTAR.pageTitle} label={BIENESTAR.pageLabel}>
      <div style={{ fontFamily: 'var(--font-body)' }}>
        <p className="text-xl text-gray-700 leading-relaxed mb-14">
          {BIENESTAR.intro}
        </p>

        <div className="border border-gray-200">
          {BIENESTAR.pillars.map(({ num, title, paragraphs }) => (
            <div key={num} className="grid md:grid-cols-[80px_1fr] border-b border-gray-200 last:border-b-0">
              <div className="bg-[#1a5f5f] flex items-start justify-center pt-8 px-4">
                <span className="text-[#c8a96e] text-sm font-bold tracking-widest">{num}</span>
              </div>
              <div className="p-8">
                <h2
                  className="text-2xl font-bold text-[#1a5f5f] mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {title}
                </h2>
                {paragraphs.map((p, i) => (
                  <p key={i} className={`text-gray-700 leading-relaxed ${i < paragraphs.length - 1 ? 'mb-4' : ''}`}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
