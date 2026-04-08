import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  User,
  Calendar,
  CreditCard,
  Star,
  ArrowLeft,
  RefreshCw
} from "lucide-react";

function OrderStatus() {
  
  // สถานะการจัดส่ง
  const [currentStatus, setCurrentStatus] = useState(0);
  const [orderData] = useState({
    orderNumber: "ORD-2025-001234",
    orderDate: "27 กรกฎาคม 2025",
    estimatedDelivery: "30 กรกฎาคม 2025",
    totalAmount: 272.00,
    shippingMethod: "จัดส่งมาตรฐาน",
    shippingCost: 50,
    paymentMethod: "บัตรเครดิต",
    trackingNumber: "TH123456789TH",
    customerInfo: {
      name: "สมชาย ตัวอย่าง",
      phone: "081-234-5678",
      email: "somchai@example.com",
      address: "123/4 อาคารตัวอย่าง ถนนแห่งหนึ่ง เขตบางรัก กรุงเทพฯ 10400"
    },
    items: [
      { name: "สตรอว์เบอร์รี่สด", quantity: 2, price: 5, unit: "กก.", image: "🍓" },
      { name: "แยมสตรอว์เบอร์รี่", quantity: 1, price: 8, unit: "กระปุก", image: "🫙" },
      { name: "เค้กสตรอว์เบอร์รี่", quantity: 1, price: 12, unit: "ชิ้น", image: "🍰" }
    ]
  });

  // ขั้นตอนการจัดส่ง
  const shippingSteps = [
    {
      id: 0,
      title: "ได้รับคำสั่งซื้อ",
      description: "เราได้รับคำสั่งซื้อของคุณแล้ว",
      icon: <CheckCircle className="w-6 h-6" />,
      time: "27 ก.ค. 2025 - 14:30",
      completed: true
    },
    {
      id: 1,
      title: "กำลังเตรียมสินค้า",
      description: "กำลังจัดเตรียมและตรวจสอบสินค้า",
      icon: <Package className="w-6 h-6" />,
      time: "27 ก.ค. 2025 - 15:45",
      completed: true
    },
    {
      id: 2,
      title: "ส่งออกจากศูนย์กระจายสินค้า",
      description: "สินค้าออกจากคลังและส่งมอบให้บริษัทขนส่ง",
      icon: <Truck className="w-6 h-6" />,
      time: "28 ก.ค. 2025 - 09:15",
      completed: currentStatus >= 2
    },
    {
      id: 3,
      title: "กำลังจัดส่ง",
      description: "สินค้าอยู่ระหว่างการขนส่งถึงคุณ",
      icon: <Truck className="w-6 h-6" />,
      time: "29 ก.ค. 2025 - 08:00",
      completed: currentStatus >= 3
    },
    {
      id: 4,
      title: "จัดส่งสำเร็จ",
      description: "สินค้าถึงมือคุณเรียบร้อยแล้ว",
      icon: <CheckCircle className="w-6 h-6" />,
      time: currentStatus >= 4 ? "30 ก.ค. 2025 - 16:20" : "คาดว่า 30 ก.ค. 2025",
      completed: currentStatus >= 4
    }
  ];

  // จำลองการอัพเดทสถานะอัตโนมัติ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus(prev => {
        if (prev < 4) {
          return prev + 1;
        }
        return prev;
      });
    }, 8000); // อัพเดททุก 8 วินาที

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (stepId) => {
    if (stepId <= currentStatus) {
      return "text-green-600 bg-green-100 border-green-300";
    } else if (stepId === currentStatus + 1) {
      return "text-yellow-600 bg-yellow-100 border-yellow-300";
    }
    return "text-gray-400 bg-gray-100 border-gray-200";
  };

  const getCurrentStatusText = () => {
    switch (currentStatus) {
      case 0: return "✅ ได้รับคำสั่งซื้อ";
      case 1: return "📦 กำลังเตรียมสินค้า";
      case 2: return "🚛 ออกจากศูนย์กระจายสินค้า";
      case 3: return "🚚 กำลังจัดส่ง";
      case 4: return "🎉 จัดส่งสำเร็จ";
      default: return "กำลังดำเนินการ";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => alert('กลับไปหน้าตะกร้า')}
              className="flex items-center text-white hover:text-pink-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              กลับไปตะกร้า
            </button>
            <div className="text-center">
              <h1 className="text-4xl font-bold">📦 สถานะการสั่งซื้อ</h1>
              <p className="text-lg opacity-90 mt-2">ติดตามการจัดส่งสินค้าของคุณ</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Order Summary Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  คำสั่งซื้อ #{orderData.orderNumber}
                </h2>
                <p className="text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  สั่งซื้อเมื่อ: {orderData.orderDate}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  currentStatus >= 4 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {getCurrentStatusText()}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center text-pink-600 mb-2">
                  <Package className="w-5 h-5 mr-2" />
                  <span className="font-semibold">รหัสติดตาม</span>
                </div>
                <p className="font-mono text-lg">{orderData.trackingNumber}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <Truck className="w-5 h-5 mr-2" />
                  <span className="font-semibold">การจัดส่ง</span>
                </div>
                <p>{orderData.shippingMethod}</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center text-green-600 mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">คาดว่าถึง</span>
                </div>
                <p>{orderData.estimatedDelivery}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Shipping Status Timeline */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">🚚 สถานะการจัดส่ง</h3>
                <button 
                  onClick={() => window.location.reload()}
                  className="p-2 text-pink-600 hover:bg-pink-50 rounded-full transition-colors"
                  title="รีเฟรชสถานะ"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-6">
                {shippingSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${getStatusColor(step.id)}`}>
                      {step.completed ? step.icon : <Clock className="w-6 h-6" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-semibold ${step.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                          {step.title}
                        </h4>
                        <span className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {step.time}
                        </span>
                      </div>
                      <p className={`text-sm mt-1 ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                        {step.description}
                      </p>
                      
                      {step.id === currentStatus && currentStatus < 4 && (
                        <div className="mt-2">
                          <div className="flex items-center text-yellow-600 text-sm">
                            <div className="animate-spin rounded-full h-3 w-3 border-2 border-yellow-600 border-t-transparent mr-2"></div>
                            กำลังดำเนินการ...
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {currentStatus >= 4 && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-800 mb-2">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold">ให้คะแนนการบริการ</span>
                  </div>
                  <p className="text-green-700 text-sm mb-3">
                    พอใจกับสินค้าและการบริการหรือไม่? กรุณาให้คะแนนเรา
                  </p>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(star => (
                      <button key={star} className="text-yellow-400 hover:text-yellow-500 text-xl">
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Details */}
            <div className="space-y-6">
              
              {/* Customer Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-pink-500" />
                  ข้อมูลการจัดส่ง
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <User className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{orderData.customerInfo.name}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{orderData.customerInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{orderData.customerInfo.email}</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="w-4 h-4 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                    <span>{orderData.customerInfo.address}</span>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  🛍️ รายการสินค้า ({orderData.items.length} รายการ)
                </h3>
                
                <div className="space-y-3">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{item.image}</div>
                        <div>
                          <div className="font-medium text-gray-800">{item.name}</div>
                          <div className="text-sm text-gray-600">
                            ฿{item.price}/{item.unit} × {item.quantity}
                          </div>
                        </div>
                      </div>
                      <div className="font-bold text-pink-600">
                        ฿{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>ราคารวมสินค้า</span>
                    <span>฿{(orderData.totalAmount - orderData.shippingCost).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>ค่าจัดส่ง</span>
                    <span>฿{orderData.shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t">
                    <span>ยอดรวมทั้งหมด</span>
                    <span className="text-pink-600">฿{orderData.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-pink-500" />
                  ข้อมูลการชำระเงิน
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">วิธีการชำระเงิน</span>
                  <span className="font-semibold text-gray-800">{orderData.paymentMethod}</span>
                </div>
                
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="font-medium">ชำระเงินสำเร็จแล้ว</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    ได้รับเงินเรียบร้อยเมื่อ {orderData.orderDate}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => alert('ไปหน้าสินค้า')}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  ช้อปต่อ
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex-1 border-2 border-pink-500 text-pink-500 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
                >
                  พิมพ์ใบเสร็จ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl font-bold">🍓 ฟาร์มสตรอว์เบอร์รี่</h2>
          </div>
          <p className="opacity-75">&copy; 2025 ฟาร์มสตรอว์เบอร์รี่. ขอบคุณที่ใช้บริการ!</p>
          <div className="mt-4 space-x-4">
            <span className="text-sm">📞 โทร: 02-123-4567</span>
            <span className="text-sm">📧 อีเมล: support@strawberryfarm.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OrderStatus;
