export default function Home() {
  return (
    <div>
      <header style={{background:'#FFFFFF',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Project 1788484015687</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_split" style={{color:'white',textDecoration:'none'}}>hero_split</a>
          <a href="#stats_banner" style={{color:'white',textDecoration:'none'}}>stats_banner</a>
          <a href="#services_cards" style={{color:'white',textDecoration:'none'}}>services_cards</a>
          <a href="#team_cards" style={{color:'white',textDecoration:'none'}}>team_cards</a>
        </nav>
      </header>
      <section style={{background:'#FFFFFF',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Project 1788484015687</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>Sitio web moderno y confiable para Clínica Dental Sonrisa, diseñado para presentar servicios de odontología estética, demostrar credibilidad clínica y convertir visitantes en pacientes mediante reservas de consulta gratuita. La experiencia combina una estética cálida y premium con información clara sobre el equipo, beneficios, testimonios y tratamientos.</p>
        <a href="#contact" style={{background:'#16A8A8',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>hero_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_split offerings.</p>
      </section>
      <section id="stats_banner" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>stats_banner</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our stats_banner offerings.</p>
      </section>
      <section id="services_cards" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>services_cards</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our services_cards offerings.</p>
      </section>
      <section id="team_cards" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#FFFFFF'}}>team_cards</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our team_cards offerings.</p>
      </section>
      <footer style={{background:'#FFFFFF',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Project 1788484015687. All rights reserved.</p>
      </footer>
    </div>
  );
}