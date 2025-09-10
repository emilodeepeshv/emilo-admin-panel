// === DASHBOARD (already added earlier) ===
// ... keep your existing exports

// === REPORTS (screenshot #2) ===
export const reportsTop = [
  { label: "Posts", value: 3800, icon: "post" },
  { label: "Comments", value: 9830, icon: "comments" },
  { label: "Profiles", value: 756, icon: "profiles" },
  { label: "Messages", value: 5600, icon: "messages" },
  { label: "Flag", value: 139, icon: "flag" },
]

export const categoryWise = [
  { name: "Posts", value: 3800 },
  { name: "Comments", value: 9830 },
  { name: "Profiles", value: 756 },
  { name: "Messages", value: 5600 },
  { name: "Others", value: 7800 },
]

export const topicWise = [
  { name: "Content", value: 2100 },
  { name: "Others", value: 1430 },
  { name: "Harassment", value: 850 },
  { name: "Hate Speech", value: 460 },
  { name: "Fake Accounts", value: 362 },
]

export const reportsStatus = [
  { name: "Posts", completed: 3180, pending: 620 },
  { name: "Comments", completed: 9020, pending: 810 },
  { name: "Profiles", completed: 453, pending: 303 },
  { name: "Messages", completed: 4240, pending: 1360 },
  { name: "Others", completed: 5990, pending: 1810 },
]

export const monthlyReports = [
  { month: "AUG", value: 28500 },
  { month: "SEP", value: 57894 },
  { month: "OCT", value: 42000 },
  { month: "NOV", value: 37218 },
]

export const usersStats = [
  {
    title: "All Users",
    value: "28,753,637",
    change: "18%",
    trend: "up",
    period: "vs previous 1 month",
  },
  {
    title: "Active User",
    value: "11,533,409",
    change: "7%",
    trend: "up",
    period: "vs previous 1 month",
  },
  {
    title: "New Users",
    value: "1,139,772",
    change: "19%",
    trend: "up",
    period: "vs previous 1 month",
  },
  {
    title: "Account Closed",
    value: "9,428",
    change: "7%",
    trend: "down",
    period: "vs previous 1 month",
  },
]

export const lineData = [
  { day: 1, value: 1800 },
  { day: 5, value: 1700 },
  { day: 10, value: 2800 },
  { day: 15, value: 3400 },
  { day: 20, value: 2200 },
  { day: 25, value: 2000 },
  { day: 30, value: 3860 },
]

export const adsData = {
  activeAds: "15.84k",
  change: "14%",
  trend: "up",
  period: "vs previous 7 days",
}

export const contentsData = [
  { name: "Post", value: 300 },
  { name: "Flix", value: 220 },
  { name: "Videos", value: 100 },
  { name: "Memes", value: 130 },
  { name: "Stories", value: 190 },
  { name: "GIFs", value: 150 },
  { name: "Best Clips", value: 140 },
]

// === INSIGHTS (screenshot #4) ===
export const insightsCards = {
  reportsReceived: 280210,
  actionsTaken: 280210,
  pendingActions: 1240,
  breakdown: [
    { label: "Blocked", value: 3637 },
    { label: "Muted", value: 1637 },
    { label: "Warnings", value: 2452 },
    { label: "Freezed", value: 2452 },
  ],
}

export const transparency = [
  { name: "Posts", received: 2034, taken: 1934 },
  { name: "Comments", received: 3755, taken: 3755 },
  { name: "Profiles", received: 1253, taken: 1003 },
  { name: "Messages", received: 3289, taken: 3289 },
  { name: "Events", received: 1504, taken: 1370 },
  { name: "Ads", received: 2500, taken: 2500 },
  { name: "Others", received: 1257, taken: 1257 },
]

export const transparencySummary = {
  received: 15592,
  taken: 15108,
  actionRate: 96,
  change: 6,
}

// City coords for India map (approx)
export const cityPoints = [
  { city: "Mumbai", count: 872, coord: [72.8777, 19.076] },
  { city: "Delhi", count: 823, coord: [77.1025, 28.7041] },
  { city: "Pune", count: 822, coord: [73.8567, 18.5204] },
  { city: "Sikkim", count: 762, coord: [88.5122, 27.533] },
  { city: "Hyderabad", count: 748, coord: [78.4867, 17.385] },
  { city: "Raipur", count: 658, coord: [81.6296, 21.2514] },
  { city: "Assam", count: 634, coord: [91.7362, 26.2006] },
  { city: "Jammu", count: 559, coord: [74.7973, 34.0837] },
  { city: "Kashmir", count: 548, coord: [75.3412, 33.7782] },
  { city: "Patna", count: 748, coord: [85.1376, 25.5941] },
  { city: "Chennai", count: 658, coord: [80.2707, 13.0827] },
  { city: "Indore", count: 634, coord: [75.8577, 22.7196] },
]

 export const mediaItems = [
    {
      id: 1,
      type: "image",
      category: "photo",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 2,
      type: "video", 
      category: "flix",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      categoryIcon: "play"
    },
    {
      id: 3,
      type: "image",
      category: "social",
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=300&h=300&fit=crop",
      categoryIcon: "heart"
    },
    {
      id: 4,
      type: "image",
      category: "travel",
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=300&h=300&fit=crop",
      categoryIcon: "star"
    },
    {
      id: 5,
      type: "image",
      category: "lifestyle",
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 6,
      type: "image",
      category: "work",
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
      categoryIcon: "zap"
    },
    {
      id: 7,
      type: "image",
      category: "workspace",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 8,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      categoryIcon: "heart"
    },
    {
      id: 9,
      type: "video",
      category: "cooking",
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      categoryIcon: "play"
    },
    {
      id: 10,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop",
      categoryIcon: "star"
    },
    {
      id: 11,
      type: "video",
      category: "meme",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      categoryIcon: "zap"
    },
    {
      id: 12,
      type: "image",
      category: "sports",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 13,
      type: "video",
      category: "flix",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      categoryIcon: "play"
    },
    {
      id: 14,
      type: "image",
      category: "drinks",
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=300&fit=crop",
      categoryIcon: "heart"
    },
    {
      id: 15,
      type: "image",
      category: "abstract",
      src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=300&h=300&fit=crop",
      categoryIcon: "star"
    },
    {
      id: 16,
      type: "image",
      category: "portrait",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 17,
      type: "image",
      category: "lifestyle",
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
      categoryIcon: "zap"
    },
    {
      id: 18,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      categoryIcon: "heart"
    },
    {
      id: 19,
      type: "image",
      category: "baking",
      src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=300&fit=crop",
      categoryIcon: "star"
    },
    {
      id: 20,
      type: "image",
      category: "meat",
      src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 21,
      type: "image",
      category: "food",
      src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=300&fit=crop",
      categoryIcon: "heart"
    },
    {
      id: 22,
      type: "image",
      category: "art",
      src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      categoryIcon: "star"
    },
    {
      id: 23,
      type: "image",
      category: "lifestyle",
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
      categoryIcon: "zap"
    },
    {
      id: 24,
      type: "video",
      category: "flix",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      categoryIcon: "play"
    },
    {
      id: 25,
      type: "image",
      category: "sports",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      categoryIcon: "image"
    },
    {
      id: 26,
      type: "video",
      category: "meme",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=300&fit=crop",
      categoryIcon: "zap"
    },
    {
      id: 27,
      type: "image",
      category: "drinks",
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=300&h=300&fit=crop",
      categoryIcon: "heart"
    },
    {
      id: 28,
      type: "image",
      category: "abstract",
      src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=300&h=300&fit=crop",
      categoryIcon: "star"
    }
  ];