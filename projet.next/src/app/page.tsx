import SecretButton from "./SecretButton";

export default function Home() {
  const secret = process.env.MON_TEXTE_SECRET || "";

  return (
    <main style={{ 
      backgroundColor: '#E53E3E', // Beautiful red color
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: 'white', marginBottom: '3rem', fontSize: '3rem', textAlign: 'center' }}>
        Secret Zone
      </h1>
      <SecretButton secret={secret} />
    </main>
  );
}
