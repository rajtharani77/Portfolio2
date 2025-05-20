import React from 'react';

const ArticlesPage = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      title: "10 Tips for Better Productivity",
      description: "Learn how to boost your productivity with these simple tips.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence",
      description: "Explore the latest trends and advancements in AI.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "Healthy Eating Habits for a Better Life",
      description: "Discover the benefits of healthy eating and how to get started.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 4,
      title: "Mastering React in 2023",
      description: "A comprehensive guide to mastering React for modern web development.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 5,
      title: "Traveling on a Budget",
      description: "Tips and tricks for traveling the world without breaking the bank.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 6,
      title: "The Art of Public Speaking",
      description: "Improve your public speaking skills with these expert tips.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">My Blog</div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Blog</a>
              <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Articles Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlesPage;