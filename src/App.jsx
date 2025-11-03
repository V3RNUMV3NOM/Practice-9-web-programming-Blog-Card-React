// 1. Імпортуємо наш новий компонент BlogCard
import BlogCard from './components/BlogCard';

function App() {
  // 2. Створюємо об'єкт з даними для нашої картки
  // (ми беремо ці дані з index.html)
  const blogPost = {
    imageSrc: '/assets/Blog Image.png',
    imageAlt: 'Ілюстрація блогу',
    category: 'Навчання',
    date: 'Опубліковано 22 Вересня 2025',
    title: 'HTML & CSS foundations',
    description: 'Ці мови є основою всіх веб-сайтів, визначаючи структуру, вміст та презентацію.',
    authorAvatar: '/assets/avatar_male.png',
    authorName: 'Крилов Павло'
  };

  // 3. Рендеримо (показуємо) компонент і передаємо йому дані
  return (
    <BlogCard cardData={blogPost} />
  );
}

export default App;