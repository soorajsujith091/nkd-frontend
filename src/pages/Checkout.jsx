import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, CreditCard, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function Checkout() {
  const { classId } = useParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock data mapping based on ID
  const mockDb = {
    1: { name: "Bollywood Basics", instructor: "Instructor 1", price: "75", day: "Monday", time: "6:00 PM", type: "in-person" },
    17: { name: "Online Bollywood", instructor: "Instructor 1", price: "60", day: "Sunday", time: "6:00 PM", type: "online" }
  };
  
  // Default fallback if ID not found in mock
  const classDetails = mockDb[classId] || { name: "Dance Masterclass", instructor: "Nidhi", price: "80", day: "Saturday", time: "2:00 PM", type: "in-person" };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Mock payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-nkd-dark min-h-screen text-nkd-white flex items-center justify-center pt-[80px] pb-24 section-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-nkd-offwhite p-8 md:p-12 rounded-3xl border border-gray-200 max-w-2xl w-full text-center shadow-lg"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-lg font-heading font-bold uppercase mb-4 text-nkd-white">Booking Confirmed!</h2>
          <p className="text-gray-600 text-lg mb-8">
            Thank you for booking <span className="text-nkd-purple font-bold">{classDetails?.name}</span>. Your receipt has been sent to your email.
          </p>

          {classDetails?.type === 'online' && (
            <div className="bg-[#ffffff] p-6 rounded-2xl mb-8 border border-nkd-purple/30 shadow-sm">
              <h3 className="font-bold text-nkd-purple mb-2 uppercase tracking-wider">Your Zoom Link</h3>
              <a href="#" className="text-nkd-white underline break-all hover:text-nkd-purple transition-colors">
                https://zoom.us/j/1234567890?pwd=mockpassword
              </a>
              <p className="text-sm text-gray-500 mt-4">Please join 5 minutes before the class starts.</p>
            </div>
          )}

          {classDetails?.type === 'in-person' && (
            <div className="bg-[#ffffff] p-6 rounded-2xl mb-8 border border-gray-200 text-left flex items-start gap-4 justify-center shadow-sm">
               <MapPin className="text-nkd-purple shrink-0 mt-1" />
               <div>
                 <h3 className="font-bold uppercase tracking-wider text-nkd-white mb-1">Studio Location</h3>
                 <p className="text-gray-600">Mandarin Building, Office 118, Oud Metha, Dubai</p>
               </div>
            </div>
          )}

          <Link to="/classes" className="inline-block bg-nkd-purple hover:bg-nkd-deep text-[#ffffff] px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors w-full md:w-auto shadow-md">
            Book Another Class
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-nkd-dark min-h-screen text-nkd-white pt-20 pb-24">
      
      {/* Header */}
      <section className="bg-nkd-dark py-8 section-container border-b border-gray-200 text-center">
        <h1 className="text-lg md:text-3xl font-heading font-bold uppercase mb-2">Secure <span className="text-nkd-purple">Checkout</span></h1>
      </section>

      <section className="max-w-6xl mx-auto section-container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Student Details & Payment */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Student Details Form */}
            <div className="bg-nkd-offwhite p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-heading font-bold uppercase mb-6 text-nkd-white border-b border-gray-200 pb-4">Student Details</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500">First Name</label>
                    <input type="text" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500">Last Name</label>
                    <input type="text" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Phone Number</label>
                  <input type="tel" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                </div>
              </form>
            </div>

            {/* Mock Payment UI */}
            <div className="bg-nkd-offwhite p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-lg font-heading font-bold uppercase text-nkd-white">Payment Method</h3>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center"><span className="text-[10px] font-bold text-black">VISA</span></div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center"><span className="text-[10px] font-bold text-black">MC</span></div>
                </div>
              </div>
              
              {/* // TODO: Integrate Telr/PayTabs payment gateway */}
              <div className="p-4 bg-nkd-purple/10 border border-nkd-purple/30 rounded-xl mb-6 text-sm text-nkd-purple flex items-start gap-3">
                <Lock className="w-5 h-5 shrink-0 mt-0.5" />
                <p>This is a secure 128-bit SSL encrypted payment. Your card details are not stored on our servers.</p>
              </div>

              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Card Number</label>
                  <div className="relative">
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 pl-10 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                    <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-gray-500">CVC</label>
                    <input type="text" placeholder="123" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-gray-500">Name on Card</label>
                  <input type="text" className="w-full bg-[#ffffff] border border-gray-300 rounded-xl px-4 py-3 text-nkd-white focus:outline-none focus:border-nkd-purple shadow-sm" required />
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-nkd-purple hover:bg-nkd-deep disabled:opacity-70 text-[#ffffff] py-4 rounded-xl font-bold uppercase tracking-wider transition-colors mt-8 flex justify-center items-center gap-2 shadow-md"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    `Pay ${classDetails?.price || '0'} AED`
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-nkd-offwhite p-6 md:p-8 rounded-3xl border border-gray-200 sticky top-24 shadow-sm">
              <h3 className="text-lg font-heading font-bold uppercase mb-6 text-nkd-white border-b border-gray-200 pb-4">Order Summary</h3>
              
              {classDetails && (
                <div className="mb-6 flex gap-4 border-b border-gray-200 pb-6">
                  <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=200&q=80" alt={classDetails.name} className="w-24 h-24 object-cover rounded-xl shadow-sm" />
                  <div>
                    <h4 className="font-bold text-lg text-nkd-white">{classDetails.name}</h4>
                    <p className="text-gray-500 text-sm mb-2">By {classDetails.instructor}</p>
                    <span className="bg-[#ffffff] text-nkd-purple text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-gray-200">
                      {classDetails.type === 'online' ? 'Online Class' : 'Studio Class'}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-4 mb-6 text-sm border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-gray-400 shrink-0" />
                  <span>{classDetails?.day}, Upcoming Date</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                  <span>{classDetails?.time}</span>
                </div>
                {classDetails?.type === 'in-person' && (
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span>NKD Studios, Oud Metha</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>{classDetails?.price} AED</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax (5%)</span>
                  <span>{classDetails?.price ? (parseFloat(classDetails.price) * 0.05).toFixed(2) : '0'} AED</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-200 pt-6">
                <span className="text-xl font-bold font-heading uppercase text-nkd-white">Total</span>
                <span className="text-2xl font-bold text-nkd-purple">
                  {classDetails?.price ? (parseFloat(classDetails.price) * 1.05).toFixed(2) : '0'} AED
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
