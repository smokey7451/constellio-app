export default function LoginPage() {
  return (
    <div style={{ backgroundColor: '#111', color: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#222', padding: '40px', borderRadius: '10px', width: '300px' }}>
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: 'none' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: 'none' }} />
        <button style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </div>
    </div>
  )
}
