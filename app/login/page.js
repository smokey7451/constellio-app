export default function LoginPage() {
  return (
    <div style={{ backgroundColor: '#000', color: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #333', padding: '40px', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
        <h2 style={{ letterSpacing: '2px' }}>CONSTELLIO LOGIN</h2>
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#111', color: 'white' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#111', color: 'white' }} />
        <a href="/upload" style={{ display: 'block', width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', textDecoration: 'none', borderRadius: '5px' }}>
          SIGN IN
        </a>
      </div>
    </div>
  )
}
