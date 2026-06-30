import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Policies() {
  const { policyId } = useParams();

  const policies = [
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'terms', title: 'Terms of Service' },
    { id: 'refunds', title: 'Refund & Cancellation' },
  ];

  // Default to privacy if not found
  if (!policyId || !policies.find(p => p.id === policyId)) {
    return <Navigate to="/policies/privacy" replace />;
  }

  const renderContent = () => {
    switch (policyId) {
      case 'privacy':
        return (
          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <h2 className="text-2xl font-heading font-medium text-gray-900">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you register for a class, create an account, or communicate with us. This may include your name, email address, phone number, and payment information.</p>
            
            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send administrative messages, and communicate with you about classes, events, and promotions.</p>
            
            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">3. Information Sharing</h2>
            <p>We do not share your personal information with third parties except as described in this policy, such as with service providers who assist us in operating our studio and website (e.g., payment processors).</p>

            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">4. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at info@nkdstudios.com.</p>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <h2 className="text-2xl font-heading font-medium text-gray-900">1. Acceptance of Terms</h2>
            <p>By accessing or using NKD Studios services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>

            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">2. Studio Rules & Etiquette</h2>
            <p>All students must adhere to studio rules. This includes arriving on time, wearing appropriate attire, and maintaining a respectful environment for all participants and instructors.</p>

            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">3. Bookings and Payments</h2>
            <p>All classes and packages must be paid for in advance. Prices are subject to change without notice. We reserve the right to refuse service to anyone for any reason at any time.</p>

            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">4. Health and Safety</h2>
            <p>Dance and fitness activities involve inherent risks. By participating, you acknowledge these risks and agree that NKD Studios is not liable for any injuries sustained during classes.</p>
            
            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">5. Modifications to Service</h2>
            <p>NKD Studios reserves the right to modify or discontinue, temporarily or permanently, any class or service with or without notice.</p>
          </div>
        );
      case 'refunds':
        return (
          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <h2 className="text-2xl font-heading font-medium text-gray-900">1. Class Cancellations</h2>
            <p>Cancellations must be made at least 12 hours before the scheduled class time to receive a class credit. Late cancellations or no-shows will result in the loss of the class pass.</p>
            
            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">2. Refunds</h2>
            <p>All sales are final. We do not offer refunds for class packages, drop-ins, workshops, or merchandise unless specifically mandated by local law or in the case of a medical emergency (with a doctor's note).</p>
            
            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">3. Package Expirations</h2>
            <p>Class packages are valid for a specific duration from the date of purchase (e.g., 30 days, 3 months). Unused classes after the expiration date will be forfeited and cannot be rolled over.</p>

            <h2 className="text-2xl font-heading font-medium text-gray-900 mt-8">4. Studio Cancellations</h2>
            <p>In the rare event that NKD Studios cancels a class due to instructor illness or an emergency, affected students will receive their class credit back or be offered a full refund for that specific class.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const activePolicyTitle = policies.find(p => p.id === policyId)?.title;

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-100 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-light text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="font-medium text-nkd-purple">Policies</span>
          </motion.h1>
          <p className="mt-4 text-gray-500 font-light max-w-xl">
            Please read these documents carefully to understand your rights and responsibilities when using our services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <div className="md:w-1/4 shrink-0">
          <div className="sticky top-32 flex flex-col gap-2">
            {policies.map((policy) => (
              <Link 
                key={policy.id}
                to={`/policies/${policy.id}`}
                className={`py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                  policyId === policy.id 
                    ? 'bg-nkd-purple/10 text-nkd-purple' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {policy.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="md:w-3/4">
          <motion.div
            key={policyId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl md:p-8"
          >
            <h1 className="text-3xl font-heading font-medium text-gray-900 mb-8">{activePolicyTitle}</h1>
            <div className="prose prose-lg prose-gray max-w-none">
              {renderContent()}
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-400 font-light">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
