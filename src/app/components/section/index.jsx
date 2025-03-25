import styles from "./section.module.css"

const Section = () => {
    return (
    <div>
          <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroHeading}>
            Descubra mundos extraordinários
          </h2>
          <p className={styles.heroParagraph}>
            Promoção de lançamentos com até 30% de desconto!
          </p>
          <button className={styles.ctaButton}>Ver ofertas</button>
        </div>
      </section>

      {/* FEATURED BOOKS SECTION */}
      <section className={styles.bookSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
          <a href="/destaques" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {featuredBooks.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookCover}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <button className={styles.quickViewButton}>Visualizar</button>
              </div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>por {book.author}</p>
                <div className={styles.bookRating}>
                  {renderStars(book.rating)}
                  <span className={styles.ratingValue}>({book.rating})</span>
                </div>
                <div className={styles.bookTags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.bookPriceActions}>
                  <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                  </span>
                  <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Categorias Populares</h2>
          <a href="/categorias" className={styles.viewAll}>
            Ver todas
          </a>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categoria/${category.id}`}
              className={styles.categoryCard}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* NEW RELEASES SECTION */}
      <section className={`${styles.bookSection} ${styles.newReleases}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Lançamentos</h2>
          <a href="/lancamentos" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {newReleases.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookCover}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <button className={styles.quickViewButton}>Visualizar</button>
              </div>
              <div className={styles.bookInfo}>
                <span className={styles.newBadge}>Novo</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>por {book.author}</p>
                <div className={styles.bookRating}>
                  {renderStars(book.rating)}
                  <span className={styles.ratingValue}>({book.rating})</span>
                </div>
                <div className={styles.bookTags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.bookPriceActions}>
                  <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                  </span>
                  <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContent}>
          <h2 className={styles.subscriptionHeading}>
            Fique por dentro das novidades!
          </h2>
          <p className={styles.subscriptionText}>
            Assine nossa newsletter e receba atualizações sobre novos
            lançamentos, promoções exclusivas e dicas de leitura.
          </p>
          <div className={styles.subscriptionForm}>
            <input
              type="email"
              className={styles.subscriptionInput}
              placeholder="Seu melhor e-mail"
            />
            <button className={styles.subscribeButton}>Assinar</button>
          </div>
        </div>
      </section>

      {/* SHOPPING CART */}
      <div className={styles.shoppingCart}>
        <div className={styles.cartHeader}>
          <h3 className={styles.cartHeaderTitle}>Seu Carrinho</h3>
          <button className={styles.closeButton}>✕</button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemQuantity}>
                      Qtd: {item.quantity}
                    </span>
                    <span className={styles.itemPrice}>
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className={styles.removeButton}>✕</button>
              </div>
            ))
          ) : (
            <p className={styles.emptyCartMessage}>Seu carrinho está vazio</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalValue}>
                R$ {calculateTotal().toFixed(2)}
              </span>
            </div>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
    );
};

export default Section;