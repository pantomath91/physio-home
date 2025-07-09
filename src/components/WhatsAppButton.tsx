'use client';

import React, { useState } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAnalytics } from '@/hooks/useAnalytics';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  isExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  className?: string;
  showQuickMessages?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = "917017421438",
  isExpanded: externalIsExpanded,
  onToggle,
  className = "",
  showQuickMessages = true
}) => {
  const { trackBooking, trackFormInteraction } = useAnalytics();
  const [internalIsExpanded, setIsInternalExpanded] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showQuickMessagesModal, setShowQuickMessagesModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    package: '',
    message: ''
  });

  // Use external state if provided, otherwise use internal state
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;
  const setIsExpanded = onToggle || setIsInternalExpanded;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Check if all required fields are filled
  const isFormValid = bookingData.name.trim() !== '' && 
                     bookingData.phone.trim() !== '' && 
                     bookingData.date !== '' && 
                     bookingData.time !== '' && 
                     bookingData.package !== '';

  const generateWhatsAppMessage = () => {
    const baseMessage = "Hi! I'd like to book a physiotherapy session.";
    let details = [];
    
    if (bookingData.name) details.push(`Name: ${bookingData.name}`);
    if (bookingData.phone) details.push(`Phone: ${bookingData.phone}`);
    if (bookingData.date) details.push(`Date: ${bookingData.date}`);
    if (bookingData.time) details.push(`Time: ${bookingData.time}`);
    if (bookingData.package) details.push(`Package: ${bookingData.package}`);
    if (bookingData.message) details.push(`Additional Info: ${bookingData.message}`);
    
    const detailsText = details.length > 0 ? `\n\nDetails:\n${details.join('\n')}` : '';
    
    return encodeURIComponent(baseMessage + detailsText);
  };

  const handleWhatsAppClick = () => {
    if (!isFormValid) return;
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowBookingForm(false);
    trackBooking({
      source: 'WhatsAppButton',
      name: bookingData.name,
      phone: bookingData.phone,
      packageName: bookingData.package,
      date: bookingData.date,
      time: bookingData.time,
      message: bookingData.message,
    });
    // Reset form
    setBookingData({
      name: '',
      phone: '',
      date: '',
      time: '',
      package: '',
      message: ''
    });
  };

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setShowQuickMessagesModal(false);
    trackBooking({
      source: 'WhatsAppButtonQuickMessage',
      message,
      phone: bookingData.phone,
    });
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const openBookingForm = () => {
    setShowBookingForm(true);
    setShowQuickMessagesModal(false);
  };

  const openQuickMessages = () => {
    setShowQuickMessagesModal(true);
    setShowBookingForm(false);
  };

  return (
    <>
      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-96 max-w-[95vw] max-h-[90vh] overflow-y-auto">
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex justify-between items-center sticky top-0">
              <h3 className="font-semibold text-lg">Book Appointment</h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your phone number"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={bookingData.time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Package Preference *
                </label>
                <select
                  name="package"
                  value={bookingData.package}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Select package</option>
                  <option value="Free Consultation">Free Consultation</option>
                  <option value="Single Session (₹800)">Single Session (₹800)</option>
                  <option value="Weekly Package (₹4000)">Weekly Package (₹4000)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Any specific concerns or requirements..."
                />
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                disabled={!isFormValid}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                  isFormValid 
                    ? 'bg-green-500 text-white hover:bg-green-600 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {isFormValid ? 'Send Booking Request' : 'Fill all required fields'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Quick Message Modal */}
      {showQuickMessagesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-96 max-w-[95vw] max-h-[90vh] overflow-y-auto">
            <div className="bg-blue-500 text-white p-4 rounded-t-2xl flex justify-between items-center sticky top-0">
              <h3 className="font-semibold text-lg">Quick Messages</h3>
              <button
                onClick={() => setShowQuickMessagesModal(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-4 space-y-2">
              <button
                onClick={() => handleQuickMessage("Hi! I'm interested in your free consultation offer.")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                💬 I'm interested in your free consultation
              </button>
              
              <button
                onClick={() => handleQuickMessage("Hi! I'd like to know more about your pricing and packages.")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                💰 Tell me about your pricing
              </button>
              
              <button
                onClick={() => handleQuickMessage("Hi! I have some questions about your physiotherapy services.")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                ❓ I have some questions
              </button>
              
              <button
                onClick={() => handleQuickMessage("Hi! I'd like to book an appointment for physiotherapy.")}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                📅 I want to book an appointment
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Main WhatsApp Button with Options */}
      {externalIsExpanded === undefined && (
        <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
          {isExpanded ? (
            <div className="flex flex-col items-end space-y-3">
              {/* Quick Messages Button */}
              {showQuickMessages && (
                <button
                  onClick={openQuickMessages}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  aria-label="Quick Messages"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </button>
              )}
              
              {/* Booking Form Button */}
              <button
                onClick={openBookingForm}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Book Appointment"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </button>
              
              {/* Main WhatsApp Button */}
              <button
                onClick={toggleExpanded}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Chat on WhatsApp"
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <button
              onClick={toggleExpanded}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              aria-label="Chat on WhatsApp"
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default WhatsAppButton; 