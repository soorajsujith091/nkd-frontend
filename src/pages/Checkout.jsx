import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Lock, ArrowLeft } from 'lucide-react';

export default function Checkout() {
  const { classId } = useParams();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Mock class data since we don't have a backend
  const classDetails = {
    id: classId,
    name: classId === "101" ? "Semi Classical" : classId === "102" ? "Hip Hop" : "Lachak Ladies",
    price: classId === "101" ? "75" : classId === "102" ? "60" : "70",
    time: "Next Session",
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6 pt-12">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-heading font-medium text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-500 font-light mb-8">
            You're all set for {classDetails.name}. A confirmation email with your unique Zoom link has been sent.
          </p>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8 text-left">
            <p className="text-sm font-medium text-gray-900 mb-1">Class Details</p>
            <p className="text-sm text-gray-500 font-light">{classDetails.name}</p>
            <p className="text-sm text-gray-500 font-light">AED {classDetails.price}</p>
          </div>
          <Link to="/classes" className="w-full block text-center bg-nkd-purple hover:bg-nkd-deep text-white py-3 rounded-full text-sm font-medium transition-colors">
            Back to Classes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-20 px-6 font-body">
      <div className="max-w-4xl mx-auto">
        <Link to="/classes" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-nkd-purple mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Schedule
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Checkout Form */}
          <div className="w-full md:w-2/3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-heading font-medium text-gray-900 mb-6">Complete Registration</h2>
            
            <form onSubmit={handleCheckout} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" required placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple outline-none" />
                  <input type="text" required placeholder="Last Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple outline-none" />
                </div>
                <input type="email" required placeholder="Email Address (for Zoom Link)" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple outline-none" />
              </div>
              
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide flex items-center justify-between">
                  Payment Details
                  <span className="flex items-center text-xs text-gray-400 font-normal normal-case"><Lock className="w-3 h-3 mr-1" /> Secure Checkout</span>
                </h3>
                {/* Mock Card Input */}
                <div className="relative">
                  <input type="text" required placeholder="Card Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pl-10 text-sm focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple outline-none" />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="MM / YY" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple outline-none" />
                  <input type="text" required placeholder="CVC" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-nkd-purple/20 focus:border-nkd-purple outline-none" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-nkd-purple hover:bg-nkd-deep text-white py-4 rounded-xl text-sm font-medium transition-colors flex justify-center items-center mt-8 disabled:opacity-70"
              >
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : (
                  `Pay AED ${classDetails.price}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-100 p-6 rounded-3xl border border-gray-200 sticky top-24">
              <h3 className="text-lg font-heading font-medium text-gray-900 mb-4">Order Summary</h3>
              
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-900">{classDetails.name}</p>
                  <p className="text-xs text-gray-500 mt-1">Online Class</p>
                </div>
                <p className="font-medium text-gray-900">AED {classDetails.price}</p>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-500 font-light">Subtotal</p>
                <p className="font-medium text-gray-900">AED {classDetails.price}</p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <p className="font-medium text-gray-900">Total</p>
                <p className="text-xl font-semibold text-nkd-purple">AED {classDetails.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
