import React from "react";
import { User, Calendar, Heart, UserX } from "lucide-react";

const UserDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Profile Details Section */}
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Details</h2>
        
        {/* Basic Profile */}
        <div className="flex items-start mb-6 pb-6 border-b border-gray-100">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-gray-500 text-sm mb-1">Name</p>
              <p className="text-gray-900 font-medium">Sarah Tanner</p>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-500 text-sm mb-1">Username</p>
              <p className="text-gray-900">Sarahtanner</p>
            </div>
            
            <div>
              <p className="text-gray-500 text-sm mb-1">Bio</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="flex items-start">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-medium mb-4">Personal Information</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Mobile Number</p>
                <p className="text-gray-900">+91 12345 12345</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Email Id</p>
                <p className="text-gray-900">sarahtanner@example.com</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Gender</p>
                <p className="text-gray-900">Female</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Date of birth</p>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <p className="text-gray-900">Aug 8, 1992</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Friends Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-medium mb-1">Close Friends</p>
            <p className="text-gray-500 text-sm">Effortlessly add or remove friends from your close friends list</p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <Heart className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-medium mb-1">Favorites</p>
            <p className="text-gray-500 text-sm">Manage your Favorites list to see your favorites posts, & updates on priority</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 mt-1">
            <UserX className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 font-medium mb-1">Block</p>
            <p className="text-gray-500 text-sm">Add people to block list or manage people you blocked before</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;