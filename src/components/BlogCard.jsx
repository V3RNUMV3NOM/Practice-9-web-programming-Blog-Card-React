// 1. Імпортуємо наш CSS
import '../Card.css';

// 2. Оголошуємо компонент, який приймає props
export default function BlogCard({ cardData }) {
  return (
    <article className="blog-card">
     
      <img src={cardData.imageSrc} alt={cardData.imageAlt} className="card-image" />

      <div className="card-content">
        <span className="category">{cardData.category}</span>
        <span className="date">{cardData.date}</span>

        <h2 className="card-title">{cardData.title}</h2>

        <p className="card-description">
          {cardData.description}
        </p>

        <div className="author">
          <img src={cardData.authorAvatar} alt="Аватар автора" className="author-avatar" />
          <span className="author-name">{cardData.authorName}</span>
        </div>
      </div>
    </article>
  );
}