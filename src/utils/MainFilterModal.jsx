import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Search, Grid } from 'lucide-react';

const MainFilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    profileCreatedDate: {
      enabled: true,
      from: '2020-02-16',
      to: '2028-02-16'
    },
    age: {
      enabled: true,
      min: 25,
      max: 50
    },
    gender: {
      enabled: true,
      selected: 'Female'
    },
    maritalStatus: {
      enabled: true,
      selected: 'Single'
    },
    country: {
      enabled: true,
      searchTerm: '',
      selected: ['India', 'Australia', 'Russia', 'Nepal', 'China']
    },
    state: {
      enabled: true,
      searchTerm: '',
      selected: ['Karnataka (India)', 'Hunan (China)', 'Gandaki (Nepal)', 'Victoria (Australia)', 'Gujarat (India)', 'Tatarstan (Russia)', 'Jiangsu (China)', 'Lumbini (Nepal)', 'New South Wales (Australia)', 'Sakhalin (Russia)', 'Tamil Nadu (India)', 'Yunnan (China)']
    },
    city: {
      enabled: false,
      searchTerm: ''
    },
    locality: {
      enabled: false,
      searchTerm: ''
    },
    profession: {
      enabled: true,
      searchTerm: '',
      selected: ['Doctor', 'Teacher', 'Architect', 'Lawyer', 'Engineer']
    },
    language: {
      enabled: false,
      searchTerm: ''
    },
    platform: {
      enabled: true,
      selected: 'App'
    },
    peakDays: {
      enabled: true
    },
    peakHours: {
      enabled: true
    },
    education: {
      enabled: true,
      searchTerm: '',
      selected: ['BCA', 'MBA', 'LLB', 'MBBS']
    },
    skill: {
      enabled: true,
      searchTerm: '',
      selected: ['Communication', 'Leadership']
    },
    hobbies: {
      enabled: true,
      searchTerm: '',
      selected: ['Reading', 'Gardening', 'Photography']
    },
    hangoutPlaces: {
      enabled: true,
      searchTerm: '',
      selected: ['Marine Drive', 'India Gate', 'MG Road']
    },
    region: {
      enabled: true,
      searchTerm: '',
      selected: ['Doctor', 'Teacher', 'Architect']
    }
  });

  const [expandedSections, setExpandedSections] = useState({
    Users: true,
    Content: false,
    Trending: false,
    'Top User & Contents': false,
    Ads: false,
    'Soft Corners': false,
    Gifting: false,
    Pages: false
  });

  const [activeUserMetric, setActiveUserMetric] = useState('No. Of Users');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (filterType, field, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: {
        ...prev[filterType],
        [field]: value
      }
    }));
  };

  const handleCheckboxChange = (filterType) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: {
        ...prev[filterType],
        enabled: !prev[filterType].enabled
      }
    }));
  };

  const handleTagRemove = (filterType, tag) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: {
        ...prev[filterType],
        selected: prev[filterType].selected.filter(item => item !== tag)
      }
    }));
  };

  const handleAgeSliderChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      age: {
        ...prev.age,
        [type]: parseInt(value)
      }
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      profileCreatedDate: { enabled: false, from: '', to: '' },
      age: { enabled: false, min: 18, max: 100 },
      gender: { enabled: false, selected: '' },
      maritalStatus: { enabled: false, selected: '' },
      country: { enabled: false, searchTerm: '', selected: [] },
      state: { enabled: false, searchTerm: '', selected: [] },
      city: { enabled: false, searchTerm: '' },
      locality: { enabled: false, searchTerm: '' },
      profession: { enabled: false, searchTerm: '', selected: [] },
      language: { enabled: false, searchTerm: '' },
      platform: { enabled: false, selected: '' },
      peakDays: { enabled: false },
      peakHours: { enabled: false },
      education: { enabled: false, searchTerm: '', selected: [] },
      skill: { enabled: false, searchTerm: '', selected: [] },
      hobbies: { enabled: false, searchTerm: '', selected: [] },
      hangoutPlaces: { enabled: false, searchTerm: '', selected: [] },
      region: { enabled: false, searchTerm: '', selected: [] }
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  if (!isOpen) return null;

  const SectionHeader = ({ title, isExpanded, onClick }) => (
    <div 
      className={`flex items-center justify-between p-3 rounded cursor-pointer hover:bg-blue-600 transition-colors ${
        isExpanded ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      onClick={onClick}
    >
      <span className="font-medium">{title}</span>
      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </div>
  );

  const CheckboxLabel = ({ checked, onChange, children }) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
      />
      <span className="text-gray-700 font-medium">{children}</span>
    </label>
  );

  const TagList = ({ tags, onRemove, filterType }) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
        >
          {tag}
          <button 
            onClick={() => onRemove(filterType, tag)}
            className="hover:bg-blue-600 rounded-full p-0.5"
          >
            <X size={12} />
          </button>
        </span>
      ))}
    </div>
  );

  const SearchInput = ({ placeholder, value, onChange }) => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Grid className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center showFooter__">
              <div className="bg-white rounded-lg w-full max-w-7xl max-h-[95vh] overflow-hidden flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
            <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[calc(85vh-80px)] scrollbar-thin scrollbar-thumb-gray-300">
            {/* Users Section */}
            <div className="p-4">
              <SectionHeader 
                title="Users" 
                isExpanded={expandedSections.Users}
                onClick={() => toggleSection('Users')}
              />
              
              {expandedSections.Users && (
                <div className="mt-3 space-y-2">
                  {['No. Of Users', 'MAU', 'DAU', 'Time Spent'].map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setActiveUserMetric(metric)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeUserMetric === metric 
                          ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {metric}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other Sections */}
            {Object.keys(expandedSections).filter(key => key !== 'Users').map((section) => (
              <div key={section} className="px-4 pb-4">
                <SectionHeader 
                  title={section}
                  isExpanded={expandedSections[section]}
                  onClick={() => toggleSection(section)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">NUMBER OF USERS</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-gray-600">Select Parameters</span>
                <button 
                  onClick={clearAllFilters}
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Profile Created Date */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.profileCreatedDate.enabled}
                onChange={() => handleCheckboxChange('profileCreatedDate')}
              >
                Profile Created Date
              </CheckboxLabel>
              
              {filters.profileCreatedDate.enabled && (
                <div className="flex items-center gap-4 ml-6">
                  <input
                    type="date"
                    value={filters.profileCreatedDate.from}
                    onChange={(e) => handleFilterChange('profileCreatedDate', 'from', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-500">To</span>
                  <input
                    type="date"
                    value={filters.profileCreatedDate.to}
                    onChange={(e) => handleFilterChange('profileCreatedDate', 'to', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>

            {/* Age */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.age.enabled}
                onChange={() => handleCheckboxChange('age')}
              >
                Age
              </CheckboxLabel>
              
              {filters.age.enabled && (
                <div className="ml-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-600">18</span>
                    <div className="flex-1 relative">
                      <div className="absolute inset-0 bg-gray-200 rounded-full h-2"></div>
                      <div 
                        className="absolute bg-blue-500 rounded-full h-2"
                        style={{
                          left: `${((filters.age.min - 18) / (100 - 18)) * 100}%`,
                          right: `${100 - ((filters.age.max - 18) / (100 - 18)) * 100}%`
                        }}
                      ></div>
                      <input
                        type="range"
                        min="18"
                        max="100"
                        value={filters.age.min}
                        onChange={(e) => handleAgeSliderChange('min', e.target.value)}
                        className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                      />
                      <input
                        type="range"
                        min="18"
                        max="100"
                        value={filters.age.max}
                        onChange={(e) => handleAgeSliderChange('max', e.target.value)}
                        className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                      />
                      <div 
                        className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md transform -translate-y-1"
                        style={{ left: `calc(${((filters.age.min - 18) / (100 - 18)) * 100}% - 8px)` }}
                      >
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                          {filters.age.min}
                        </span>
                      </div>
                      <div 
                        className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md transform -translate-y-1"
                        style={{ left: `calc(${((filters.age.max - 18) / (100 - 18)) * 100}% - 8px)` }}
                      >
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                          {filters.age.max}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">100</span>
                  </div>
                </div>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.gender.enabled}
                onChange={() => handleCheckboxChange('gender')}
              >
                Gender
              </CheckboxLabel>
              
              {filters.gender.enabled && (
                <div className="ml-6 flex gap-3">
                  {['Male', 'Female', 'Other'].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => handleFilterChange('gender', 'selected', gender)}
                      className={`px-4 py-2 rounded-full border transition-colors ${
                        filters.gender.selected === gender
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Marital Status */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.maritalStatus.enabled}
                onChange={() => handleCheckboxChange('maritalStatus')}
              >
                Marital Status
              </CheckboxLabel>
              
              {filters.maritalStatus.enabled && (
                <div className="ml-6 flex gap-3">
                  {['Single', 'Married', 'Divorced'].map((status) => (
                    <button
                      key={status}
                      onClick={() => handleFilterChange('maritalStatus', 'selected', status)}
                      className={`px-4 py-2 rounded-full border transition-colors ${
                        filters.maritalStatus.selected === status
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Country */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.country.enabled}
                onChange={() => handleCheckboxChange('country')}
              >
                Country
              </CheckboxLabel>
              
              {filters.country.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Country Field To Filter"
                    value={filters.country.searchTerm}
                    onChange={(e) => handleFilterChange('country', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.country.selected} 
                    onRemove={handleTagRemove}
                    filterType="country"
                  />
                </div>
              )}
            </div>

            {/* State */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.state.enabled}
                onChange={() => handleCheckboxChange('state')}
              >
                State
              </CheckboxLabel>
              
              {filters.state.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search State Field To Filter"
                    value={filters.state.searchTerm}
                    onChange={(e) => handleFilterChange('state', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.state.selected} 
                    onRemove={handleTagRemove}
                    filterType="state"
                  />
                </div>
              )}
            </div>

            {/* City */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <CheckboxLabel 
                  checked={filters.city.enabled}
                  onChange={() => handleCheckboxChange('city')}
                >
                  City
                </CheckboxLabel>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">All</button>
              </div>
              
              {filters.city.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search City Field To Filter"
                    value={filters.city.searchTerm}
                    onChange={(e) => handleFilterChange('city', 'searchTerm', e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Locality */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <CheckboxLabel 
                  checked={filters.locality.enabled}
                  onChange={() => handleCheckboxChange('locality')}
                >
                  Locality
                </CheckboxLabel>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">All</button>
              </div>
              
              {filters.locality.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Locality Field To Filter"
                    value={filters.locality.searchTerm}
                    onChange={(e) => handleFilterChange('locality', 'searchTerm', e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Profession */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.profession.enabled}
                onChange={() => handleCheckboxChange('profession')}
              >
                Profession
              </CheckboxLabel>
              
              {filters.profession.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Profession To Filter"
                    value={filters.profession.searchTerm}
                    onChange={(e) => handleFilterChange('profession', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.profession.selected} 
                    onRemove={handleTagRemove}
                    filterType="profession"
                  />
                </div>
              )}
            </div>

            {/* Language */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <CheckboxLabel 
                  checked={filters.language.enabled}
                  onChange={() => handleCheckboxChange('language')}
                >
                  Language
                </CheckboxLabel>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">All</button>
              </div>
              
              {filters.language.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Language To Filter"
                    value={filters.language.searchTerm}
                    onChange={(e) => handleFilterChange('language', 'searchTerm', e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Platform */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.platform.enabled}
                onChange={() => handleCheckboxChange('platform')}
              >
                Platform
              </CheckboxLabel>
              
              {filters.platform.enabled && (
                <div className="ml-6 flex gap-3">
                  {['App', 'Website'].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => handleFilterChange('platform', 'selected', platform)}
                      className={`px-4 py-2 rounded-full border transition-colors ${
                        filters.platform.selected === platform
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Peak Days */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.peakDays.enabled}
                onChange={() => handleCheckboxChange('peakDays')}
              >
                Peak Days
              </CheckboxLabel>
            </div>

            {/* Peak Hours */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.peakHours.enabled}
                onChange={() => handleCheckboxChange('peakHours')}
              >
                Peak Hours
              </CheckboxLabel>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.education.enabled}
                onChange={() => handleCheckboxChange('education')}
              >
                Education
              </CheckboxLabel>
              
              {filters.education.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Education Field To Filter"
                    value={filters.education.searchTerm}
                    onChange={(e) => handleFilterChange('education', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.education.selected} 
                    onRemove={handleTagRemove}
                    filterType="education"
                  />
                </div>
              )}
            </div>

            {/* Skill */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.skill.enabled}
                onChange={() => handleCheckboxChange('skill')}
              >
                Skill
              </CheckboxLabel>
              
              {filters.skill.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Skills To Filter"
                    value={filters.skill.searchTerm}
                    onChange={(e) => handleFilterChange('skill', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.skill.selected} 
                    onRemove={handleTagRemove}
                    filterType="skill"
                  />
                </div>
              )}
            </div>

            {/* Hobbies */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.hobbies.enabled}
                onChange={() => handleCheckboxChange('hobbies')}
              >
                Hobbies
              </CheckboxLabel>
              
              {filters.hobbies.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Hobbies To Filter"
                    value={filters.hobbies.searchTerm}
                    onChange={(e) => handleFilterChange('hobbies', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.hobbies.selected} 
                    onRemove={handleTagRemove}
                    filterType="hobbies"
                  />
                </div>
              )}
            </div>

            {/* Hangout Places */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.hangoutPlaces.enabled}
                onChange={() => handleCheckboxChange('hangoutPlaces')}
              >
                Hangout Places
              </CheckboxLabel>
              
              {filters.hangoutPlaces.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Hangout Places To Filter"
                    value={filters.hangoutPlaces.searchTerm}
                    onChange={(e) => handleFilterChange('hangoutPlaces', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.hangoutPlaces.selected} 
                    onRemove={handleTagRemove}
                    filterType="hangoutPlaces"
                  />
                </div>
              )}
            </div>

            {/* Region */}
            <div className="space-y-4">
              <CheckboxLabel 
                checked={filters.region.enabled}
                onChange={() => handleCheckboxChange('region')}
              >
                Region
              </CheckboxLabel>
              
              {filters.region.enabled && (
                <div className="ml-6">
                  <SearchInput 
                    placeholder="Search Regions To Filter"
                    value={filters.region.searchTerm}
                    onChange={(e) => handleFilterChange('region', 'searchTerm', e.target.value)}
                  />
                  <TagList 
                    tags={filters.region.selected} 
                    onRemove={handleTagRemove}
                    filterType="region"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
            <button 
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleApplyFilters}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Show 8,552 Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Open Filter Modal
      </button>
      
      <MainFilterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default App;