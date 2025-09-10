// components/KpiCards.jsx
import React from 'react';
import {
  TrendingUp,
  Eye,
  Users,
  DollarSign,
  CreditCard,
} from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  Eye: Eye,
  Users: Users,
  DollarSign: DollarSign,
  CreditCard: CreditCard,
};

const KpiCards = ({ kpiCards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 mt-6">
      {kpiCards.map((card, index) => {
        const IconComponent = iconMap[card.icon];
        return (
          <div
            key={index}
            className={`p-4 rounded-lg border shadow ${
              card.highlighted ? 'border-blue-300 bg-blue-50' : 'bg-white border-gray-200'
            }`}

          >
            <div className="flex items-center gap-3">
              <div className={`p-4 rounded-lg ${card.bgColor}`}>
                <div className={card.iconColor}>
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-lg font-semibold text-gray-900 truncate">{card.title}</div>
                <div className="text-sm text-gray-600">{card.subtitle}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KpiCards;