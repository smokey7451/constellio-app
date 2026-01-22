export default function Page() {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'Arial, sans-serif',
      margin: 0
    }}>
      <h1 style={{ 
        letterSpacing: '0.8rem', 
        fontSize: '4rem', 
        fontWeight: 'bold',
        margin: 0 
      }}>CONSTELLIO</h1>
      <p style={{ 
        color: '#888', 
        marginTop: '10px',
        letterSpacing: '0.2rem' 
      }}>ENTERPRISE INFORMATION MANAGEMENT</p>
    </div>
  )
}
