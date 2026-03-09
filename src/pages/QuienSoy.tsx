import PageLayout from '../components/PageLayout';
import { QUIEN_SOY } from '../content';

export default function QuienSoy() {
  return (
    <PageLayout title={QUIEN_SOY.pageTitle} label={QUIEN_SOY.pageLabel}>
      <div className="space-y-12" style={{ fontFamily: 'var(--font-body)' }}>
        {QUIEN_SOY.sections.map(({ title, paragraphs }, i) => (
          <section key={title}>
            {i > 0 && <div className="w-full h-px bg-gray-200 mb-12" />}
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1a5f5f] mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>
            {paragraphs.map((p, j) => (
              <p key={j} className="text-gray-700 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
