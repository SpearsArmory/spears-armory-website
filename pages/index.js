import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spears Armory</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Spears Armory</h1>
        <p style={{ fontStyle: 'italic', color: '#ccc' }}>Precision. Privacy. Power.</p>
        <p style={{ maxWidth: '600px', marginTop: '1rem' }}>
          Welcome to Spears Armory — your private FFL dealer offering concierge firearm sourcing,
          secure transfers, and elite-level service without public walk-ins.
        </p>
        <ul style={{ marginTop: '2rem' }}>
          <li>✔️ Licensed FFL Transfers ($35–$50)</li>
          <li>✔️ Custom Gun Orders & Collector Firearms</li>
          <li>✔️ Accessories & Ammo Bundles</li>
          <li>✔️ No walk-ins. Private appointments only.</li>
        </ul>
        <a href="mailto:contact@spearsarmory.com" style={{ marginTop: '2rem', display: 'inline-block', backgroundColor: '#444', color: '#fff', padding: '0.75rem 1.25rem', textDecoration: 'none', borderRadius: '5px' }}>
          Request Appointment
        </a>
      </main>
    </>
  );
}
