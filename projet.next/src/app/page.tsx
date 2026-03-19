import SecretButton from "./SecretButton";

export default function Home() {
  const secret = process.env.MON_TEXTE_SECRET || "";

  return (
    <main style={{ 
      background: 'linear-gradient(to bottom, #AA151B 25%, #F1BF00 25%, #F1BF00 75%, #AA151B 75%)', // Spanish flag colors
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.6)', marginBottom: '3rem', fontSize: '3rem', textAlign: 'center' }}>
        Best Tennis player
      </h1>
      <SecretButton secret={secret} />
    </main>
  );
}
