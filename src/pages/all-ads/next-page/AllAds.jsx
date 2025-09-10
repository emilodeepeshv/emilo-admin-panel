import React, { useState } from 'react';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import Tabs from './components/Tabs';
import ActionBar from './components/ActionBar';
import AdsTable from './components/AdsTable';

// Mock data for demonstration
const mockAdsData = [
  {
    id: 1,
    userName: 'Praveen Dubey',
    userId: '1245847367837852',
    campaignName: 'Lead generation campaign',
    campaignType: 'Awareness',
    delivery: 'Active',
    budget: 600.00,
    budgetType: 'Daily',
    reach: 152230,
    impressions: 452003,
    status: 'Pending Review',
    selected: false,
    dateCreated: 'July 27, 2024',
    category: 'Automobile',
    result: 1600,
    resultType: 'Website Visit',
    reason: 'Lorem Epsom donor set met'
  },
  {
    id: 2,
    userName: 'Saleem Javed',
    userId: '1245847367837852',
    campaignName: 'Leads Leap',
    campaignType: 'Post Engagement',
    delivery: 'Not Delivering',
    deliveryNote: 'Ad set Inactive',
    budget: 270.00,
    budgetType: 'Daily',
    reach: 73010,
    impressions: 124489,
    status: 'Pending Review',
    selected: false,
    dateCreated: 'July 27, 2024',
    category: 'Fashion',
    result: 810,
    resultType: 'Link Clicks',
    reason: 'Lorem Epsom donor set met'
  },
  {
    id: 3,
    userName: 'Abhishek Gupta',
    userId: '1245847367837852',
    campaignName: 'Product Launches',
    campaignType: 'Post Engagement',
    delivery: 'Completed',
    budget: 350.00,
    budgetType: 'Daily',
    reach: 10340,
    impressions: 45731,
    status: 'Pending Review',
    selected: false,
    dateCreated: 'July 27, 2024',
    category: 'Health',
    result: 3200,
    resultType: 'Post Engagement',
    reason: 'Lorem Epsom donor set met'
  }
];

const tabCounts = {
  all: 24,
  pendingReview: 12,
  approved: 8,
  rejected: 4
};

const AllAds = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAds, setSelectedAds] = useState([]);
  const [adsData, setAdsData] = useState(mockAdsData);
  const [selectAll, setSelectAll] = useState(false);

  const tabs = [
    { key: 'all', label: 'All Ads', count: tabCounts.all },
    { key: 'pendingReview', label: 'Pending Review', count: tabCounts.pendingReview },
    { key: 'approved', label: 'Approved', count: tabCounts.approved },
    { key: 'rejected', label: 'Rejected', count: tabCounts.rejected }
  ];

  // Utility functions
  const getDeliveryStatusColor = (delivery) => {
    switch (delivery) {
      case 'Active':
        return 'text-green-600';
      case 'Not Delivering':
        return 'text-gray-500';
      case 'Completed':
        return 'text-gray-600';
      case 'Inactive':
        return 'text-gray-500';
      case 'Ad Set Off':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getDeliveryStatusDot = (delivery) => {
    switch (delivery) {
      case 'Active':
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending Review':
        return 'bg-orange-100 text-orange-800';
      case 'Approved':
        return 'bg-blue-100 text-blue-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount) => {
    return `₹ ${amount.toFixed(2)}`;
  };

  const getTableColumns = (activeTab) => {
    const baseColumns = [
      { key: 'select', label: '', width: 'w-12' },
    ];

    switch (activeTab) {
      case 'pendingReview':
        return [
          ...baseColumns,
          { key: 'dateCreated', label: 'Date Created' },
          { key: 'userInfo', label: 'User Name/ID' },
          { key: 'campaignInfo', label: 'Campaign Name' },
          { key: 'budget', label: 'Budget' },
          { key: 'reach', label: 'Reach', subLabel: 'Estimated' },
          { key: 'impressions', label: 'Impressions', subLabel: 'Estimated' },
          { key: 'category', label: 'Category' },
          { key: 'action', label: 'Action' }
        ];
      case 'approved':
        return [
          ...baseColumns,
          { key: 'userInfo', label: 'User Name/ID' },
          { key: 'campaignInfo', label: 'Campaign Name' },
          { key: 'delivery', label: 'Delivery' },
          { key: 'budget', label: 'Budget' },
          { key: 'reach', label: 'Reach' },
          { key: 'impressions', label: 'Impressions' },
          { key: 'result', label: 'Result', subLabel: 'Action Performed' },
          { key: 'action', label: 'Action' }
        ];
      case 'rejected':
        return [
          ...baseColumns,
          { key: 'userInfo', label: 'User Name/ID' },
          { key: 'campaignInfo', label: 'Campaign Name' },
          { key: 'reason', label: 'Reason' },
          { key: 'delivery', label: 'Delivery' },
          { key: 'budget', label: 'Budget' },
          { key: 'reach', label: 'Reach' },
          { key: 'impressions', label: 'Imp' },
          { key: 'action', label: 'Action' }
        ];
      default: // all
        return [
          ...baseColumns,
          { key: 'userInfo', label: 'User Name/ID' },
          { key: 'campaignInfo', label: 'Campaign Name' },
          { key: 'delivery', label: 'Delivery' },
          { key: 'budget', label: 'Budget' },
          { key: 'reach', label: 'Reach' },
          { key: 'impressions', label: 'Impressions' },
          { key: 'status', label: 'Status' },
          { key: 'action', label: 'Action' }
        ];
    }
  };

  // Event handlers
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedAds([]);
      setAdsData(prev => prev.map(ad => ({ ...ad, selected: false })));
    } else {
      setSelectedAds(adsData.map(ad => ad.id));
      setAdsData(prev => prev.map(ad => ({ ...ad, selected: true })));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectAd = (id) => {
    const isSelected = selectedAds.includes(id);
    if (isSelected) {
      setSelectedAds(prev => prev.filter(adId => adId !== id));
    } else {
      setSelectedAds(prev => [...prev, id]);
    }
    
    setAdsData(prev => prev.map(ad => 
      ad.id === id ? { ...ad, selected: !ad.selected } : ad
    ));

    const newSelectedCount = isSelected ? selectedAds.length - 1 : selectedAds.length + 1;
    setSelectAll(newSelectedCount === adsData.length);
  };

  const handleRefresh = () => {
    // Implement refresh logic
    console.log('Refreshing data...');
  };

  const handleExport = () => {
    // Implement export logic
    console.log('Exporting data...');
  };

  const handleCustomizeColumns = () => {
    // Implement customize columns logic
    console.log('Customizing columns...');
  };

  const handleResetColumns = () => {
    // Implement reset columns logic
    console.log('Resetting columns...'); 
  };

  // Filter ads based on active tab and search query
  const filteredAds = adsData.filter(ad => {
    const matchesSearch = ad.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ad.campaignName.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'pendingReview') return matchesSearch && ad.status === 'Pending Review';
    if (activeTab === 'approved') return matchesSearch && ad.status === 'Approved';
    if (activeTab === 'rejected') return matchesSearch && ad.status === 'Rejected';
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen p-4 ">
      <Header onRefresh={handleRefresh} />
      
      <div className="px-4 md:px-6 py-6">
        <SearchFilter 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTab={activeTab}
        />

          <Tabs 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        <div className=" rounded-lg border border-gray-200 overflow-hidden shadow">

          <ActionBar 
            activeTab={activeTab}
            onExport={handleExport}
            onCustomizeColumns={handleCustomizeColumns}
            onResetColumns={handleResetColumns}
          />

          <AdsTable 
            ads={filteredAds}
            activeTab={activeTab}
            selectAll={selectAll}
            onSelectAll={handleSelectAll}
            onSelectAd={handleSelectAd}
            getTableColumns={getTableColumns}
            getDeliveryStatusColor={getDeliveryStatusColor}
            getDeliveryStatusDot={getDeliveryStatusDot}
            getStatusColor={getStatusColor}
            formatCurrency={formatCurrency}
          />
        </div>
      </div>
    </div>
  );
};

export default AllAds;