import React from "react";
import VideoSvg from '/video.svg';
import ImageSvg from '/Group 21611.svg';
import PostSvg from '/Post.svg';
import flixSvg from '/Group 21614.svg';
import ReelSvg from '/Group 21586.svg';

const UserPhotos = () => {
  // Sample data with different categories using reliable placeholder images
  const mediaItems = [
    {
      id: 1,
      type: "image",
      category: "photo",
      src: "https://picsum.photos/300/300?random=1",
      categoryIcon: "image"
    },
    {
      id: 2,
      type: "video", 
      category: "flix",
      src: "https://picsum.photos/300/300?random=2",
      categoryIcon: "video"
    },
    {
      id: 3,
      type: "image",
      category: "social",
      src: "https://picsum.photos/300/300?random=3",
      categoryIcon: "post"
    },
    {
      id: 4,
      type: "image",
      category: "travel",
      src: "https://picsum.photos/300/300?random=4",
      categoryIcon: "reel"
    },
    {
      id: 5,
      type: "image",
      category: "lifestyle",
      src: "https://picsum.photos/300/300?random=5",
      categoryIcon: "image"
    },
    {
      id: 6,
      type: "image",
      category: "work",
      src: "https://picsum.photos/300/300?random=6",
      categoryIcon: "flix"
    },
    {
      id: 7,
      type: "image",
      category: "workspace",
      src: "https://picsum.photos/300/300?random=7",
      categoryIcon: "image"
    },
    {
      id: 8,
      type: "image",
      category: "food",
      src: "https://picsum.photos/300/300?random=8",
      categoryIcon: "post"
    },
    {
      id: 9,
      type: "video",
      category: "cooking",
      src: "https://picsum.photos/300/300?random=9",
      categoryIcon: "video"
    },
    {
      id: 10,
      type: "image",
      category: "food",
      src: "https://picsum.photos/300/300?random=10",
      categoryIcon: "reel"
    },
    {
      id: 11,
      type: "video",
      category: "meme",
      src: "https://picsum.photos/300/300?random=11",
      categoryIcon: "flix"
    },
    {
      id: 12,
      type: "image",
      category: "sports",
      src: "https://picsum.photos/300/300?random=12",
      categoryIcon: "image"
    },
    {
      id: 13,
      type: "video",
      category: "flix",
      src: "https://picsum.photos/300/300?random=13",
      categoryIcon: "video"
    },
    {
      id: 14,
      type: "image",
      category: "drinks",
      src: "https://picsum.photos/300/300?random=14",
      categoryIcon: "post"
    },
    {
      id: 15,
      type: "image",
      category: "abstract",
      src: "https://picsum.photos/300/300?random=15",
      categoryIcon: "reel"
    },
    {
      id: 16,
      type: "image",
      category: "portrait",
      src: "https://picsum.photos/300/300?random=16",
      categoryIcon: "image"
    },
    {
      id: 17,
      type: "image",
      category: "lifestyle",
      src: "https://picsum.photos/300/300?random=17",
      categoryIcon: "flix"
    },
    {
      id: 18,
      type: "image",
      category: "food",
      src: "https://picsum.photos/300/300?random=18",
      categoryIcon: "post"
    },
    {
      id: 19,
      type: "image",
      category: "baking",
      src: "https://picsum.photos/300/300?random=19",
      categoryIcon: "reel"
    },
    {
      id: 20,
      type: "image",
      category: "meat",
      src: "https://picsum.photos/300/300?random=20",
      categoryIcon: "image"
    },
    {
      id: 21,
      type: "image",
      category: "food",
      src: "https://picsum.photos/300/300?random=21",
      categoryIcon: "post"
    },
    {
      id: 22,
      type: "image",
      category: "art",
      src: "https://picsum.photos/300/300?random=22",
      categoryIcon: "reel"
    },
    {
      id: 23,
      type: "image",
      category: "lifestyle",
      src: "https://picsum.photos/300/300?random=23",
      categoryIcon: "flix"
    },
    {
      id: 24,
      type: "video",
      category: "flix",
      src: "https://picsum.photos/300/300?random=24",
      categoryIcon: "video"
    },
    {
      id: 25,
      type: "image",
      category: "sports",
      src: "https://picsum.photos/300/300?random=25",
      categoryIcon: "image"
    },
    {
      id: 26,
      type: "video",
      category: "meme",
      src: "https://picsum.photos/300/300?random=26",
      categoryIcon: "flix"
    },
    {
      id: 27,
      type: "image",
      category: "drinks",
      src: "https://picsum.photos/300/300?random=27",
      categoryIcon: "post"
    },
    {
      id: 28,
      type: "image",
      category: "abstract",
      src: "https://picsum.photos/300/300?random=28",
      categoryIcon: "reel"
    }
  ];

  const getCategoryIcon = (iconType) => {
    const iconProps = {
      className: "w-4 h-4",
      alt: iconType
    };

    switch (iconType) {
      case "video":
        return <img src={VideoSvg} {...iconProps} />;
      case "post":
        return <img src={PostSvg} {...iconProps} />;
      case "reel":
        return <img src={ReelSvg} {...iconProps} />;
      case "flix":
        return <img src={flixSvg} {...iconProps} />;
      default:
        return <img src={ImageSvg} {...iconProps} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      {/* <h2 className="text-lg font-semibold text-gray-900 mb-4">Photos & Videos</h2> */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-shadow duration-200"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={`Media ${item.id}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
            
            {/* Category Icon */}
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center bg-black/40  shadow-lg">
              {getCategoryIcon(item.categoryIcon)}
            </div>

            {/* Video Play Overlay */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-whit bg-opacity-90 rounded-full flex items-center justify-center">
                  <img src={VideoSvg} className="w-6 h-6 ml-0.5" alt="play" />
                </div>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPhotos;