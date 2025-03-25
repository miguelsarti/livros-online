import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Section from "./components/section";
import Featured from "./components/featured";


export default function Home() {
  // Dados que seriam obtidos de uma API
  <div>
  <featuredBooks />

  <newReleases />  
  </div>

  const categories = [
    { id: 1, name: "Ficção Científica", icon: "🚀" },
    { id: 2, name: "Romance", icon: "❤️" },
    { id: 3, name: "Biografia", icon: "👤" },
    { id: 4, name: "Tecnologia", icon: "💻" },
    { id: 5, name: "Fantasia", icon: "🔮" },
    { id: 6, name: "História", icon: "📜" },
    { id: 7, name: "Autoajuda", icon: "🌱" },
    { id: 8, name: "Mistério", icon: "🔍" },
  ];

  // Carrinho simulado
  const cartItems = [   
    { id: 2, title: "Conexões Invisíveis", quantity: 1, price: 39.9 },
    { id: 5, title: "A Linguagem Secreta", quantity: 1, price: 42.9 },
  ];

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Função para renderizar estrelas com base na avaliação
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className={styles.star}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className={styles.starEmpty}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={styles.bookstoreContainer}>
    
      {/* Header */ }

         <Header />

      {/* Section */ }

        <Section />

      {/* FOOTER */}

        <Footer/>

      {/* OVERLAY */}
      <div className={styles.overlay}></div>

      {/* SCROLL TO TOP BUTTON */}
      <button className={styles.scrollTop}>↑</button>
    </div>
  );
}
