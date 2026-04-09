import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Truck, CreditCard, Smartphone, Building2, MapPin, User, Phone, Mail, Minus, Plus, Trash2 } from "lucide-react";

function Basket() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State สำหรับควบคุมหน้า
  const [currentView, setCurrentView] = useState('cart'); // 'cart' หรือ 'checkout'
  
  // ข้อมูลสินค้าทั้งหมด
  const allItems = [
    { name: "สตรอว์เบอร์รี่สด", price: "$5/kg", category: "ผลไม้สด", rating: 4.8, image: "🍓" },
    { name: "แยมสตรอว์เบอร์รี่", price: "$8", category: "อาหารแปรรูป", rating: 4.9, image: "🫙" },
    { name: "น้ำสตรอว์เบอร์รี่", price: "$4", category: "เครื่องดื่ม", rating: 4.7, image: "🥤" },
    { name: "เค้กสตรอว์เบอร์รี่", price: "$12", category: "ของหวาน", rating: 4.9, image: "🍰" },
    { name: "ไอศกรีมสตรอว์เบอร์รี่", price: "$6", category: "ของหวาน", rating: 4.8, image: "🍦" },
    { name: "พายสตรอว์เบอร์รี่", price: "$10", category: "ของหวาน", rating: 4.7, image: "🥧" },
    { name: "โยเกิร์ตสตรอว์เบอร์รี่", price: "$7", category: "ผลิตภัณฑ์นม", rating: 4.6, image: "🥛" },
    { name: "สมูทตี้สตรอว์เบอร์รี่", price: "$5", category: "เครื่องดื่ม", rating: 4.8, image: "🥤" },
    { name: "สตรอว์เบอร์รี่อบแห้ง", price: "$9", category: "ขนม", rating: 4.5, image: "🍓" },
    { name: "มัฟฟินสตรอว์เบอร์รี่", price: "$4", category: "เบเกอรี่", rating: 4.6, image: "🧁" },
    { name: "ลูกกวาดสตรอว์เบอร์รี่", price: "$3", category: "ขนม", rating: 4.4, image: "🍬" },
    { name: "ซอสสตรอว์เบอร์รี่", price: "$6", category: "เครื่องปรุง", rating: 4.7, image: "🍯" },
    { name: "คุกกี้สตรอว์เบอร์รี่", price: "$5", category: "เบเกอรี่", rating: 4.5, image: "🍪" },
    { name: "นมสตรอว์เบอร์รี่", price: "$4", category: "เครื่องดื่ม", rating: 4.6, image: "🥛" },
    { name: "สบู่สตรอว์เบอร์รี่", price: "$3", category: "ความงาม", rating: 4.3, image: "🧼" },
    { name: "ลิปบาล์มสตรอว์เบอร์รี่", price: "$4", category: "ความงาม", rating: 4.4, image: "💄" },
    { name: "น้ำหอมสตรอว์เบอร์รี่", price: "$15", category: "ความงาม", rating: 4.6, image: "🌸" },
    { name: "ชาสตรอว์เบอร์รี่", price: "$5", category: "เครื่องดื่ม", rating: 4.5, image: "🍵" }
  ];

  // ฟังก์ชันแปลงราคาจาก string เป็น number
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace('$', '').replace('/kg', ''));
  };

  // ข้อมูลสินค้าในตะกร้า
  const [cartItems, setCartItems] = useState(() => {
    const initialItems = [
      { 
        id: 1, 
        name: allItems[0].name, 
        price: parsePrice(allItems[0].price), 
        quantity: 2, 
        image: allItems[0].image, 
        category: allItems[0].category,
        rating: allItems[0].rating,
        unit: "กก." 
      },
      { 
        id: 2, 
        name: allItems[1].name, 
        price: parsePrice(allItems[1].price), 
        quantity: 1, 
        image: allItems[1].image, 
        category: allItems[1].category,
        rating: allItems[1].rating,
        unit: "กระปุก" 
      },
      { 
        id: 3, 
        name: allItems[3].name, 
        price: parsePrice(allItems[3].price), 
        quantity: 1, 
        image: allItems[3].image, 
        category: allItems[3].category,
        rating: allItems[3].rating,
        unit: "ชิ้น" 
      }
    ];

    // เพิ่มสินค้าที่ส่งมาจากหน้า Products (ถ้ามี)
    if (location.state?.product) {
      initialItems.push({
        id: Date.now(),
        name: location.state.product.name,
        price: parsePrice(location.state.product.price),
        quantity: 1,
        image: location.state.product.image,
        category: location.state.product.category || "สินค้า",
        rating: location.state.product.rating || 4.5,
        unit: "ชิ้น"
      });
    }

    return initialItems;
  });

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    province: "",
    postalCode: ""
  });

  const shippingCosts = {
    standard: 50,
    express: 100,
    overnight: 200
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingCosts[shippingMethod];
  const total = subtotal + shippingCost;

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    navigate('/order-status');
    // ที่นี่สามารถเพิ่มการส่งข้อมูลไปยัง backend ได้
    setCurrentView('cart'); // กลับไปหน้าตะกร้าหลังสั่งซื้อ
  };

  const handleProceedToCheckout = () => {
    setCurrentView('checkout');
  };

  const handleBackToCart = () => {
    setCurrentView('cart');
  };

  // แสดงหน้าตะกร้าสินค้า
  const renderCartView = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            🛍️ สินค้าของคุณ ({cartItems.length} รายการ)
          </h2>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-500 text-lg">ตะกร้าสินค้าของคุณว่างเปล่า</p>
              <button 
                onClick={() => navigate('/products')}
                className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                ช้อปต่อ
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{item.image}</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">฿{item.price}/{item.unit}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            ⭐ {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="text-lg font-bold text-pink-600 ml-4 w-20 text-right">
                        ฿{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="mt-6 border-t pt-6">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold text-gray-800">ยอดรวมสินค้า:</span>
                    <span className="text-2xl font-bold text-pink-600">฿{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={() => navigate('/products')}
                      className="flex-1 border-2 border-pink-500 text-pink-500 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
                    >
                      ช้อปต่อ
                    </button>
                    <button
                      onClick={handleProceedToCheckout}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-bold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      💳 คิดเงิน
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  // แสดงหน้าชำระเงิน
  const renderCheckoutView = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Cart Items & Customer Info */}
        <div className="space-y-6">
          
          {/* Back to Cart Button */}
          <button
            onClick={handleBackToCart}
            className="flex items-center text-pink-600 hover:text-pink-700 font-medium"
          >
            ← กลับไปตะกร้าสินค้า
          </button>

          {/* Mini Cart Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
            <h3 className="text-lg font-bold text-gray-800 mb-3">สินค้าที่สั่งซื้อ</h3>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>฿{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Information Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <User className="w-6 h-6 mr-2 text-pink-500" />
              ข้อมูลลูกค้า
            </h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ชื่อ</label>
                  <input
                    type="text"
                    value={customerInfo.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="สมชาย"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">นามสกุล</label>
                  <input
                    type="text"
                    value={customerInfo.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="ตัวอย่าง"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    อีเมล
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="somchai@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    เบอร์โทรศัพท์
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="081-234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  ที่อยู่
                </label>
                <textarea
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  rows="3"
                  placeholder="123/4 อาคารตัวอย่าง ถนนแห่งหนึ่ง"
                ></textarea>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">เขต/อำเภอ</label>
                  <input
                    type="text"
                    value={customerInfo.district}
                    onChange={(e) => handleInputChange('district', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="เขต/อำเภอ"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">จังหวัด</label>
                  <input
                    type="text"
                    value={customerInfo.province}
                    onChange={(e) => handleInputChange('province', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="กรุงเทพฯ"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">รหัสไปรษณีย์</label>
                  <input
                    type="text"
                    value={customerInfo.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="10400"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Shipping & Payment */}
        <div className="space-y-6">
          
          {/* Shipping Options */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Truck className="w-6 h-6 mr-2 text-pink-500" />
              ตัวเลือกการจัดส่ง
            </h2>
            
            <div className="space-y-3">
              {Object.entries({
                'standard': { name: 'จัดส่งมาตรฐาน', time: '3-5 วัน', cost: 50 },
                'express': { name: 'จัดส่งด่วน', time: '1-2 วัน', cost: 100 },
                'overnight': { name: 'จัดส่งข้ามคืน', time: 'วันถัดไป', cost: 200 }
              }).map(([key, option]) => (
                <div
                  key={key}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    shippingMethod === key
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                  onClick={() => setShippingMethod(key)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-800">{option.name}</div>
                      <div className="text-gray-600 text-sm">{option.time}</div>
                    </div>
                    <div className="text-lg font-bold text-pink-600">฿{option.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-pink-500" />
              วิธีการชำระเงิน
            </h2>
            
            <div className="space-y-3">
              {[
                { id: 'credit-card', name: 'บัตรเครดิต/เดบิต', icon: <CreditCard className="w-5 h-5" /> },
                { id: 'promptpay', name: 'พร้อมเพย์', icon: <Smartphone className="w-5 h-5" /> },
                { id: 'bank-transfer', name: 'โอนเงินผ่านธนาคาร', icon: <Building2 className="w-5 h-5" /> },
                { id: 'cod', name: 'เก็บเงินปลายทาง', icon: <span className="text-lg">💰</span> }
              ].map((method) => (
                <div
                  key={method.id}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all flex items-center ${
                    paymentMethod === method.id
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                  onClick={() => setPaymentMethod(method.id)}
                >
                  <div className="mr-3 text-pink-500">{method.icon}</div>
                  <div className="font-semibold text-gray-800">{method.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 สรุปการสั่งซื้อ</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>ราคารวมสินค้า ({cartItems.length} รายการ)</span>
                <span>฿{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>ค่าจัดส่ง</span>
                <span>฿{shippingCost.toFixed(2)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-xl font-bold text-gray-800">
                <span>ยอดรวมทั้งหมด</span>
                <span className="text-pink-600">฿{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSubmitOrder}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎉 สั่งซื้อ - ฿{total.toFixed(2)}
            </button>
            
            <button
              onClick={handleBackToCart}
              className="w-full mt-3 border-2 border-pink-500 text-pink-500 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              กลับไปตะกร้า
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            {currentView === 'cart' ? '🛒 ตะกร้าสินค้า' : '💳 ชำระเงิน'}
          </h1>
          <p className="text-center text-lg opacity-90 mt-2">
            {currentView === 'cart' ? 'สินค้าที่คุณเลือก' : 'กรอกข้อมูลสำหรับการสั่งซื้อ'}
          </p>
        </div>
      </div>

      {/* แสดงหน้าตามสถานะ */}
      {currentView === 'cart' ? renderCartView() : renderCheckoutView()}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl font-bold">🍓 ฟาร์มสตรอว์เบอร์รี่</h2>
          </div>
          <p className="opacity-75">&copy; 2025 ฟาร์มสตรอว์เบอร์รี่. ช้อปปิ้งปลอดภัยและหวานอร่อย!</p>
        </div>
      </footer>
    </div>
  );
} 

export default Basket;