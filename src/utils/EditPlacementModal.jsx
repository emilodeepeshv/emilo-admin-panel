import React, { useState } from 'react';
import { X, ChevronLeft, Info } from 'lucide-react';

const EditPlacementModal = ({ isOpen, onClose, selectedRows, adData }) => {
  const [selectedPlacement, setSelectedPlacement] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');

  if (!isOpen) return null;

  const handleApplyChanges = () => {
    console.log('Applying changes:', {
      placement: selectedPlacement,
      frequency: selectedFrequency,
      selectedRows: selectedRows
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center showFooter__">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden mx-4">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">Edit Placement</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        <div className='border m-4 p-4 bg-gray-100 rounded-xl border-gray-200 shadow'>
          {/* Main Content */}
        <div className="flex">
          {/* Left Panel - Ad Placements */}
          <div className="w-1/2 p-6 border-r border-gray-200 bg-white rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Ad Placements</h3>
            
            {/* Post and Videos Feed Section */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-900 mb-4">Post and Videos Feed</h4>
              
              {/* Ad Preview Card and Selection */}
              <div className="flex gap-8 mb-6">
                {/* Small Ad Preview */}
                <div className="flex-shrink-0">
                  <div className="border border-gray-300 rounded-lg p-3 bg-white w-48">
                    <div className="flex items-start space-x-2">
                      {/* Profile Icon */}
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-medium">IF</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="font-medium text-xs text-gray-900 truncate">
                            Interesting Facts
                          </span>
                          <span className="text-xs text-gray-500 flex-shrink-0">Sponsored</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                          Lorem Ipsum is simply dummy text of the printing & typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s.
                        </p>

                        {/* Ad Image */}
                        <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded h-20 flex items-center justify-center mb-2 relative">
                          <div className="text-center text-white">
                            <div className="text-xs font-bold">SHOES CRAZE</div>
                            <div className="text-sm font-bold">SALE</div>
                            <div className="text-xs">UP TO 80% OFF</div>
                          </div>
                          <div className="absolute top-1 right-1 bg-orange-500 text-white px-1 py-0.5 rounded text-xs">
                            SHOP NOW!
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600 truncate">www.example.com</span>
                          <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs flex-shrink-0">
                            VISIT US
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selection Area */}
                <div className="flex-1">
                  {/* Radio Button */}
                  <div className="mb-3">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="adPlacement"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        defaultChecked
                      />
                      <span className="text-sm font-medium text-gray-900">Post Ads</span>
                    </label>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>
              </div>

              {/* Placement Dropdown */}
              <div className="mb-4">
                <label className="flex items-center space-x-1 text-sm font-medium text-gray-700 mb-2">
                  <span>Placement</span>
                  <Info size={14} className="text-gray-400" />
                </label>
                <select 
                  value={selectedPlacement}
                  onChange={(e) => setSelectedPlacement(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-600"
                >
                  <option value="">Select where you want to appear this ad</option>
                  <option value="1st Position">1st Position</option>
                  <option value="2nd Position">2nd Position</option>
                  <option value="3rd Position">3rd Position</option>
                  <option value="4th Position">4th Position</option>
                  <option value="5th Position">5th Position</option>
                </select>
              </div>

              {/* Frequency Dropdown */}
              <div className="mb-4">
                <label className="flex items-center space-x-1 text-sm font-medium text-gray-700 mb-2">
                  <span>Frequency</span>
                  <Info size={14} className="text-gray-400" />
                </label>
                <select 
                  value={selectedFrequency}
                  onChange={(e) => setSelectedFrequency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-600"
                >
                  <option value="">Select Frequency of the ad</option>
                  <option value="1x">1x per day</option>
                  <option value="2x">2x per day</option>
                  <option value="3x">3x per day</option>
                  <option value="5x">5x per day</option>
                  <option value="10x">10x per day</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="w-1/2 p-4 bg-gray-white">
            
            {/* Preview Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Preview</h3>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">IF</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-gray-900">Interesting Facts</span>
                    <span className="text-xs text-blue-600 font-medium">Sponsored</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been industry's standard dummy text.
                  </p>
                  
                  {/* Large Preview Ad */}
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute top-3 right-3">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Special Offer</span>
                    </div>
                    <div className="text-center text-white relative">
                      <div className="text-3xl font-bold mb-1">SHOES CRAZE</div>
                      <div className="text-4xl font-bold mb-2">SALE</div>
                      <div className="text-sm mb-3">UP TO 80% OFF</div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded text-sm font-medium">
                        SHOP NOW!
                      </button>
                    </div>
                    <div className="absolute bottom-3 right-3 text-white text-xs">
                      www.yourstore.com/shop
                    </div>
                    {/* Shoe images */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80">
                      <div className="w-16 h-12 bg-black/20 rounded transform -rotate-12"></div>
                    </div>
                    <div className="absolute right-20 bottom-8 opacity-60">
                      <div className="w-12 h-8 bg-white/30 rounded transform rotate-12"></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="font-medium text-gray-900 text-sm">www.example.com</div>
                    <div className="text-sm text-gray-600">Lorem Ipsum is simply dummy text.</div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium">
                    Visit Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end space-x-3 p-4 border-t border-gray-200 bg-white">
          <button 
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleApplyChanges}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlacementModal;