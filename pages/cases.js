import { getCases } from '../lib/notion/getCases'

export default function Cases({ cases }) {
  return (
    <div className="cases-page">
      <h1>案例展示</h1>
      <div className="cases-grid">
        {cases.map(c => (
          <div key={c.id} className="case-card">
            <img src={c.cover} alt={c.name} />
            <h2>{c.name}</h2>
            <p>{c.description}</p>
            {c.video && (
              <video src={c.video} controls style={{ width: '100%' }} />
            )}
            <ul>
              {c.techHighlights.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            {c.relatedBlog && (
              <a href={`/post/${c.relatedBlog}`}>查看相关博客</a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const cases = await getCases()
  return { props: { cases } }
}
