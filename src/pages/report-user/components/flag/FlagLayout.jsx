import React from "react";
import { X } from "lucide-react";

const FlagLayout = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center showFooter">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black-200 bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Card */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full p-5 z-50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-600 p-1 bg-gray-200 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Post Image */}
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src={post.postImage}
            alt={post.name}
            className="w-full h-40 sm:h-60 object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex items-center justify-between mt-4 bg-gray-50 border border-gray-300 p-2 rounded-2xl">
          <div className="flex items-center gap-3">
            <img
              src={post.avatar}
              alt={post.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{post.name}</h3>
              <p className="text-sm text-blue-500">{post.username}</p>
            </div>
          </div>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            View Profile
          </button>
        </div>

        {/* Details Box */}
        <div className="mt-4 bg-gray-50 border border-gray-300 rounded-xl p-4 text-sm space-y-2">
          <p>
            <span className="font-medium text-gray-700">Time:</span>{" "}
            <span className="text-gray-900">{post.createdAt}</span>
          </p>
          <p>
            <span className="font-medium text-gray-700">Tracked IP:</span>{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              {post.trackedIp || "N/A"}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-700">Post Link:</span>{" "}
            <a
              href={post.postLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {post.postLink || "N/A"}
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-700">AI Flagged Probability:</span>{" "}
            <span className="text-blue-600 font-semibold">
              {post.aiProbability ? `${post.aiProbability}%` : "N/A"}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
            Pass & Skip
          </button>
          <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">
            Remove Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlagLayout;
