import React, { useState, useEffect, useCallback, useMemo } from 'react';
import FlagLayout from "./FlagLayout.jsx";   // 👈 Import new popup
import { Search, Calendar, ChevronLeft, ChevronRight, ChevronDown, ChevronsLeft, ChevronsRight, Image as ImageIcon } from 'lucide-react';
import exportSvg from '/export-bold-svgrepo-com.svg';

const Ads = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [flaggedPosts, setFlaggedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [selectedPost, setSelectedPost] = useState(null);


  // Mock data with reliable image sources
  const generateMockData = useCallback(() => {
    return [
      {
        id: 1,
        name: "Laurel Hughes",
        username: "@laurelhughes",
        postImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=50&h=50&fit=crop&crop=face",
        flagCount: 3,
        postType: "image",
        createdAt: "2024-04-15"
      },
      {
        id: 2,
        name: "Sam Josh", 
        username: "@samjosh",
        postImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        flagCount: 5,
        postType: "image",
        createdAt: "2024-04-14"
      },
      {
        id: 3,
        name: "Emma Woodkin",
        username: "@emmawoodkin", 
        postImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        flagCount: 2,
        postType: "image",
        createdAt: "2024-04-13"
      },
      {
        id: 4,
        name: "Amina Dee",
        username: "@aminadee",
        postImage: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=50&h=50&fit=crop&crop=face",
        flagCount: 7,
        postType: "image",
        createdAt: "2024-04-12"
      },
      {
        id: 5,
        name: "Claudia",
        username: "@claudia",
        postImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face", 
        flagCount: 1,
        postType: "image",
        createdAt: "2024-04-11"
      },
      {
        id: 6,
        name: "Ron Wilson",
        username: "@ronwilson",
        postImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        flagCount: 4,
        postType: "image",
        createdAt: "2024-04-10"
      },
      {
        id: 7,
        name: "Grayson Mcmillan",
        username: "@graysonmcmillan",
        postImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
        flagCount: 6,
        postType: "image",
        createdAt: "2024-04-09"
      },
      {
        id: 8,
        name: "Jimmy Sullivan",
        username: "@jimmysullivan",
        postImage: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face",
        flagCount: 2,
        postType: "image",
        createdAt: "2024-04-08"
      },
      {
        id: 9,
        name: "Wilma Welch",
        username: "@wilmawelch", 
        postImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=face",
        flagCount: 3,
        postType: "image",
        createdAt: "2024-04-07"
      },
      {
        id: 10,
        name: "Sandra Montes",
        username: "@sandramontes",
        postImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=50&h=50&fit=crop&crop=face",
        flagCount: 1,
        postType: "image",
        createdAt: "2024-04-06"
      },
      {
        id: 11,
        name: "Noah York",
        username: "@noahyork", 
        postImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=face",
        flagCount: 8,
        postType: "image",
        createdAt: "2024-04-05"
      },
      {
        id: 12,
        name: "Oscar Becker",
        username: "@oscarbecker",
        postImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=50&h=50&fit=crop&crop=face", 
        flagCount: 5,
        postType: "image",
        createdAt: "2024-04-04"
      },
      {
        id: 13,
        name: "Rhys Dunn",
        username: "@rhysdunn",
        postImage: "https://images.unsplash.com/photo-1502767089025-6572583495b9?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b9?w=50&h=50&fit=crop&crop=face",
        flagCount: 2,
        postType: "image",
        createdAt: "2024-04-03"
      },
      {
        id: 14,
        name: "Louise Stuart",
        username: "@louisestuart",
        postImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=50&h=50&fit=crop&crop=face", 
        flagCount: 4,
        postType: "image",
        createdAt: "2024-04-02"
      },
      {
        id: 15,
        name: "Iris Fowler",
        username: "@irisfowler",
        postImage: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=50&h=50&fit=crop&crop=face", 
        flagCount: 3,
        postType: "image",
        createdAt: "2024-04-01"
      },
      {
        id: 16,
        name: "Kyle Morgan",
        username: "@kylemorgan",
        postImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop&crop=face", 
        flagCount: 6,
        postType: "image",
        createdAt: "2024-03-31"
      },
      {
        id: 17,
        name: "Laurel Hughes",
        username: "@laurelhughes2",
        postImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&h=50&fit=crop&crop=face", 
        flagCount: 2,
        postType: "image",
        createdAt: "2024-03-30"
      },
      {
        id: 18,
        name: "Alex Johnson",
        username: "@alexjohnson",
        postImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face", 
        flagCount: 7,
        postType: "image",
        createdAt: "2024-03-29"
      }
    ];
  }, []);

  // Initialize data
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setFlaggedPosts(generateMockData());
      setLoading(false);
    }, 100);
  }, [generateMockData]);

  // Memoized filtered posts for performance
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return flaggedPosts;
    
    return flaggedPosts.filter(post =>
      post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [flaggedPosts, searchTerm]);

  // Memoized pagination calculations
  const paginationData = useMemo(() => {
    const totalItems = filteredPosts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      totalItems,
      totalPages,
      startIndex,
      endIndex,
      currentPosts
    };
  }, [filteredPosts, currentPage, itemsPerPage]);

  // Handle image errors
  const handleImageError = useCallback((imageId, type = 'post') => {
    setImageErrors(prev => new Set([...prev, `${imageId}-${type}`]));
  }, []);

  // Handle checkbox selection with proper state management
  const handleSelectUser = useCallback((userId) => {
    setSelectedUsers(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(userId)) {
        newSelected.delete(userId);
      } else {
        newSelected.add(userId);
      }
      return newSelected;
    });
  }, []);

  // Handle search with debouncing effect
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
    setSelectedUsers(new Set()); // Clear selections on search
  }, []);

  // Pagination handlers with proper bounds checking
  const goToPage = useCallback((page) => {
    const validPage = Math.max(1, Math.min(page, paginationData.totalPages));
    if (validPage !== currentPage) {
      setCurrentPage(validPage);
      setSelectedUsers(new Set()); // Clear selections when changing pages
    }
  }, [currentPage, paginationData.totalPages]);

  const handleItemsPerPageChange = useCallback((value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
    setSelectedUsers(new Set());
  }, []);

  // Generate page numbers for pagination
  const getPageNumbers = useMemo(() => {
    const { totalPages } = paginationData;
    const maxVisible = 5;
    const pages = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) pages.push('...');
      if (totalPages > 1) pages.push(totalPages);
    }
    
    return pages;
  }, [currentPage, paginationData.totalPages]);

  // Custom Image component with error handling
  const PostImage = ({ src, alt, className, fallback, onError, ...props }) => {
    const [hasError, setHasError] = useState(false);
    
    const handleError = () => {
      setHasError(true);
      onError && onError();
    };

    if (hasError) {
      return (
        <div className={`${className} bg-gray-100 flex items-center justify-center`} {...props}>
          {fallback || <ImageIcon className="w-8 h-8 text-gray-400" />}
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading flagged posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 ">
      <div className="max-w-full mx-auto ">
        <div className='shadow-lg border border-gray-200 rounded-2xl p-6 mb-6'>
          {/* Header - Responsive */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search User Name/ID"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-full text-sm"
              />
            </div>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 flex-shrink-0">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm w-full sm:w-auto">
              <Calendar className='w-5 h-4.5 text-blue-500'/>
              <span className="text-gray-700 whitespace-nowrap font-medium">April 1, 2024 - April 18, 2024</span>
            </div>
            <button className="flex  font-medium border border-gray-300 items-center gap-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors text-sm w-full sm:w-auto justify-center">
              <img src={exportSvg} alt="ex" className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Posts Grid - Fully Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 mb-6">
  {paginationData.currentPosts.map((post) => (
    <div
      key={`post-${post.id}`}
      onClick={() => setSelectedPost(post)}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden relative hover:shadow-lg transition-shadow duration-200 aspect-square flex flex-col"
    >
      {/* Checkbox */}
      <div className="absolute top-2 left-2 z-20">
        <input
          type="checkbox"
          checked={selectedUsers.has(post.id)}
          onChange={() => handleSelectUser(post.id)}
          className="w-4 h-4 text-blue-600 bg-white border-2 border-white rounded focus:ring-blue-500 shadow-sm cursor-pointer"
        />
      </div>

      

      {/* Post content indicator */}
      <div className="absolute top-2 right-2 z-20">
        <div className="w-5 h-5 bg-black bg-opacity-60 rounded flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Post Image */}
      <div className="flex-1 relative overflow-hidden group">
        <PostImage
          src={post.postImage}
          alt={`Post by ${post.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          onError={() => handleImageError(post.id, "post")}
          fallback={
            <div className="flex flex-col items-center justify-center text-gray-400">
              <ImageIcon className="w-8 h-8 mb-2" />
              <span className="text-xs">No Image</span>
            </div>
          }
        />
      </div>

      {/* User Info */}
      <div className="p-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
            <PostImage
              src={post.avatar}
              alt={post.name}
              className="w-full h-full object-cover"
              onError={() => handleImageError(post.id, "avatar")}
              fallback={
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-medium">
                  {post.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              }
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs font-medium text-gray-900 truncate">
              {post.name}
            </h3>
            <p className="text-xs text-blue-500 truncate">{post.username}</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>

        {/* No Results */}
        {paginationData.currentPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No flagged posts found</h3>
            <p className="text-gray-500">
              {searchTerm ? `No posts match "${searchTerm}"` : "No flagged posts available"}
            </p>
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        )}

        {/* Pagination - Responsive */}
        {paginationData.totalPages > 1 && (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4  p-4 rounded-lg ">
            <div className="flex items-center gap-2">
              <select
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value={6}>6</option>
                <option value={12}>12</option>
                <option value={18}>18</option>
                <option value={24}>24</option>
                <option value={30}>30</option>
              </select>
              <span className="text-sm text-gray-600 whitespace-nowrap">Items Per Page</span>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              {/* First page */}
              <button
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                title="First page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Previous page */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                title="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers.map((page, index) => (
                  <button
                    key={`page-${index}`}
                    onClick={() => typeof page === 'number' ? goToPage(page) : null}
                    disabled={page === '...'}
                    className={`px-3 py-2 text-sm border rounded flex-shrink-0 min-w-[40px] ${
                      page === currentPage
                        ? 'bg-blue-600 text-white border-blue-600'
                        : page === '...'
                        ? 'border-gray-300 cursor-default text-gray-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next page */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === paginationData.totalPages}
                className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                title="Next page"
              >
                <ChevronRight className="w-4 h-4 text-blue-500" />
              </button>

              {/* Last page */}
              <button
                onClick={() => goToPage(paginationData.totalPages)}
                disabled={currentPage === paginationData.totalPages}
                className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                title="Last page"
              >
                <ChevronsRight className="w-4 h-4 text-blue-500" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 whitespace-nowrap">Jump To Page</span>
              <select
                value={currentPage}
                onChange={(e) => goToPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 min-w-[60px]"
              >
                {Array.from({ length: paginationData.totalPages }, (_, i) => i + 1).map(page => (
                  <option key={page} value={page}>{page}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Bulk Actions - Show when items are selected */}
        {selectedUsers.size > 0 && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-blue-800 font-medium">
                  {selectedUsers.size} post{selectedUsers.size > 1 ? 's' : ''} selected
                </span>
                <button
                  onClick={() => setSelectedUsers(new Set())}
                  className="text-xs text-blue-600 hover:text-blue-700 underline"
                >
                  Clear selection
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors">
                  Remove Selected
                </button>
                <button className="px-4 py-2 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition-colors">
                  Review Selected
                </button>
                <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                  Approve Selected
                </button>
              </div>
            </div>
          </div>
        )}
        {selectedPost && (
          <FlagLayout
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Ads;