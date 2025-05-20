import React from 'react';

const HomePageBlog = () => {
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

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl mb-8">
            Discover insightful articles, tutorials, and stories on technology, lifestyle, and more.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Explore Blogs
          </a>
        </div>
      </div>

      {/* Featured Blogs Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Title 1</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the blog post. This is a placeholder text.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Title 2</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the blog post. This is a placeholder text.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Blog Title 3</h3>
              <p className="text-gray-600 mb-4">
                A brief description of the blog post. This is a placeholder text.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
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

export default HomePageBlog;