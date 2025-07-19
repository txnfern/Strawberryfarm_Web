import React, { useState } from "react";
import { Search, ShoppingCart, Star, Heart } from "lucide-react";

function Products() {
  
  const allItems = [
    { name: "Fresh Strawberries", price: "$5/kg", category: "Fresh", rating: 4.8, image: "🍓" },
    { name: "Strawberry Jam", price: "$8", category: "Preserve", rating: 4.9, image: "🫙" },
    { name: "Strawberry Juice", price: "$4", category: "Beverage", rating: 4.7, image: "🥤" },
    { name: "Strawberry Cake", price: "$12", category: "Dessert", rating: 4.9, image: "🍰" },
    { name: "Strawberry Ice Cream", price: "$6", category: "Dessert", rating: 4.8, image: "🍦" },
    { name: "Strawberry Pie", price: "$10", category: "Dessert", rating: 4.7, image: "🥧" },
    { name: "Strawberry Yogurt", price: "$7", category: "Dairy", rating: 4.6, image: "🥛" },
    { name: "Strawberry Smoothie", price: "$5", category: "Beverage", rating: 4.8, image: "🥤" },
    { name: "Dried Strawberries", price: "$9", category: "Snack", rating: 4.5, image: "🍓" },
    { name: "Strawberry Muffin", price: "$4", category: "Bakery", rating: 4.6, image: "🧁" },
    { name: "Strawberry Candy", price: "$3", category: "Snack", rating: 4.4, image: "🍬" },
    { name: "Strawberry Sauce", price: "$6", category: "Condiment", rating: 4.7, image: "🍯" },
    { name: "Strawberry Cookies", price: "$5", category: "Bakery", rating: 4.5, image: "🍪" },
    { name: "Strawberry Milk", price: "$4", category: "Beverage", rating: 4.6, image: "🥛" },
    { name: "Strawberry Soap", price: "$3", category: "Beauty", rating: 4.3, image: "🧼" },
    { name: "Strawberry Lip Balm", price: "$4", category: "Beauty", rating: 4.4, image: "💄" },
    { name: "Strawberry Perfume", price: "$15", category: "Beauty", rating: 4.6, image: "🌸" },
    { name: "Strawberry Tea", price: "$5", category: "Beverage", rating: 4.5, image: "🍵" }
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState(new Set());

  const categories = ["All", ...new Set(allItems.map(item => item.category))];

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (index) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4 animate-pulse">🍓 Our Products 🍓</h1>
            <p className="text-xl opacity-90">Fresh & Delicious Strawberry Products</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for delicious strawberry products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-pink-100 overflow-hidden group"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                </div>
                <button
                  onClick={() => toggleFavorite(index)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.has(index)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  />
                </button>
                <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {item.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{item.price}</span>
                  <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-4xl font-bold">🍓 Strawberry Farm</h2>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg mb-2">📍 123/4 Somewhere Bldg., Street Name, District Name, Province, 10400</p>
              <p className="text-lg">📞 012 345 6789 | ✉️ info@mail.com</p>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>&copy; 2025 Strawberry Farm. Made with ❤️ and lots of strawberries!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Products;