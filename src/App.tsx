import resources from './data/resources.json';
export function App() {
  return <main className="page">
    <header><p className="eyebrow">AI-DLC • CONSTRUCTION DEMO</p><h1>Infrastructure Health Monitoring</h1><p className="muted">Starter application — health classification and dashboard visualization are intentionally pending.</p></header>
    <section className="hero"><div><small>Resources discovered</small><strong>{resources.length}</strong></div><div><small>Health evaluation</small><strong className="pending">Pending construction</strong></div></section>
    <section><h2>Infrastructure Inventory</h2><p className="muted">Health badges, summary cards, filters and metric visualization will be implemented by the engineer using AI-DLC.</p>
      <table><thead><tr><th>Resource</th><th>Service</th><th>CPU</th><th>Latency</th><th>Status</th></tr></thead><tbody>{resources.map(r=><tr key={r.id}><td>{r.name}</td><td>{r.type}</td><td>{r.cpuPercent===null?'N/A':`${r.cpuPercent}%`}</td><td>{r.responseTimeMs===null?'N/A':`${r.responseTimeMs} ms`}</td><td className="pending">Not evaluated</td></tr>)}</tbody></table>
    </section><footer>Local mock data only · No AWS account or CloudWatch integration</footer>
  </main>;
}
