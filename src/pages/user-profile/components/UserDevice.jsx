import React from "react";

const UserDevice = () => {
  const deviceSessions = [
    // Mac Computer Sessions
    {
      id: 1,
      type: "computer",
      sessions: 4,
      deviceName: "Mac Computer",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=60&fit=crop&crop=center",
      entries: [
        {
          os: "Mac OS",
          location: "Raipur, Chhattisgarh, India",
          browser: "Safari Browser",
          date: "March 4, 2024 • 12:00 PM"
        },
        {
          os: "Mac OS",
          location: "Raipur, Chhattisgarh, India",
          browser: "Safari Browser",
          date: "March 3, 2024 • 07:20 AM"
        },
        {
          os: "Mac OS",
          location: "Raipur, Chhattisgarh, India",
          browser: "Safari Browser",
          date: "March 2, 2024 • 09:00 AM"
        },
        {
          os: "Mac OS",
          location: "Raipur, Chhattisgarh, India",
          browser: "Safari Browser",
          date: "March 1, 2024 • 11:00 AM"
        }
      ]
    },
    // Android Devices Sessions
    {
      id: 2,
      type: "mobile",
      sessions: 15,
      deviceName: "Android Devices",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop&crop=center",
      entries: [
        {
          os: "Redmi One",
          location: "Raipur, Chhattisgarh, India",
          browser: "eMilo App",
          date: "March 4, 2024 • 12:00 PM"
        },
        {
          os: "Google Pixel 6a",
          location: "Raipur, Chhattisgarh, India",
          browser: "eMilo App",
          date: "March 3, 2024 • 07:20 AM"
        },
        {
          os: "Samsung Galaxy Fold 2",
          location: "Raipur, Chhattisgarh, India",
          browser: "Chrome Browser",
          date: "March 2, 2024 • 09:00 AM"
        },
        {
          os: "Samsung Galaxy S23 Ultra",
          location: "Raipur, Chhattisgarh, India",
          browser: "eMilo App",
          date: "March 1, 2024 • 11:00 AM"
        }
      ]
    },
    // iPhone Sessions
    {
      id: 3,
      type: "mobile",
      sessions: 12,
      deviceName: "iPhone",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=100&h=100&fit=crop&crop=center",
      entries: [
        {
          os: "iPhone 12",
          location: "Raipur, Chhattisgarh, India",
          browser: "Safari Browser",
          date: "March 4, 2024 • 12:00 PM"
        },
        {
          os: "iPhone 15 Pro",
          location: "Raipur, Chhattisgarh, India",
          browser: "eMilo App",
          date: "March 3, 2024 • 07:20 AM"
        },
        {
          os: "iPhone 15 Pro",
          location: "Raipur, Chhattisgarh, India",
          browser: "Chrome Browser",
          date: "March 2, 2024 • 09:00 AM"
        },
        {
          os: "iPhone 12",
          location: "Raipur, Chhattisgarh, India",
          browser: "Safari Browser",
          date: "March 1, 2024 • 11:00 AM"
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Device Info</h2>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat
      </p>

      <div className="space-y-0">
        {deviceSessions.map((deviceGroup, groupIndex) => (
          <div key={deviceGroup.id}>
            {/* Device Header Row */}
            <div className={`border-b border-gray-100 ${groupIndex === 0 ? 'pb-6' : 'py-6'}`}>
              <div className="grid grid-cols-12 gap-4 items-start">
                {/* Device Image and Info - 40% */}
                <div className="col-span-5 flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <img 
                      src={deviceGroup.image} 
                      alt={deviceGroup.deviceName}
                      className="w-14 h-10 object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {deviceGroup.sessions} Sessions
                    </p>
                    <p className="text-gray-900 font-medium text-base">
                      {deviceGroup.deviceName}
                    </p>
                  </div>
                </div>
                
                {/* First Device Entry - 30% */}
                <div className="col-span-4">
                  <p className="text-gray-900 font-medium text-sm mb-1">{deviceGroup.entries[0].os}</p>
                  <p className="text-gray-500 text-sm">{deviceGroup.entries[0].location}</p>
                </div>
                
                {/* Browser and Date - 30% */}
                <div className="col-span-3 text-right">
                  <p className="text-gray-500 text-sm mb-1">{deviceGroup.entries[0].browser}</p>
                  <p className="text-gray-500 text-sm">{deviceGroup.entries[0].date}</p>
                </div>
              </div>
            </div>
            
            {/* Remaining Device Sessions */}
            {deviceGroup.entries.slice(1).map((entry, index) => (
              <div key={index} className="border-b border-gray-100 py-6">
                <div className="grid grid-cols-12 gap-4 items-start">
                  {/* Empty space for alignment - 40% */}
                  <div className="col-span-5"></div>
                  
                  {/* Device Entry - 30% */}
                  <div className="col-span-4">
                    <p className="text-gray-900 font-medium text-sm mb-1">{entry.os}</p>
                    <p className="text-gray-500 text-sm">{entry.location}</p>
                  </div>
                  
                  {/* Browser and Date - 30% */}
                  <div className="col-span-3 text-right">
                    <p className="text-gray-500 text-sm mb-1">{entry.browser}</p>
                    <p className="text-gray-500 text-sm">{entry.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDevice;