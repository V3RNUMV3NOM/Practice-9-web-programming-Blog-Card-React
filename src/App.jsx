// 1. Імпортуємо наш компонент
import BlogCard from './components/BlogCard';

// 2. ІМПОРТУЄМО ЗОБРАЖЕННЯ
import blogImage from './assets/blog-header.png';
import authorAvatar from './assets/avatar_male.png';

function App() {
  // 3. Створюємо об'єкт з даними для нашої картки
  const blogPost = {
    // 4. Використовуємо змінні замість рядків
    imageSrc: blogImage,
    imageAlt: 'Ілюстрація блогу',
    category: 'Навчання',
    date: 'Опубліковано 22 Вересня 2025',
    title: 'HTML & CSS foundations',
    description: 'Ці мови є основою всіх веб-сайтів, визначаючи структуру, вміст та презентацію.',
    // 5. Використовуємо змінні замість рядків
    authorAvatar: authorAvatar,
    authorName: 'Крилов Павло'
  };

  return (
    <BlogCard cardData={blogPost} />
  );
}

export default App;