import React, { useState } from 'react';
import { 
  LayoutGrid, 
  Scissors, 
  Sparkles, 
  Hand, 
  Droplet, 
  User, 
  Flower2, 
  Star, 
  Users
} from 'lucide-react';
import './FilterSection.css';

const categories = [
  { id: 'all', name: 'All Services', icon: null },
  { id: 'haircuts', name: 'Haircuts', icon: Scissors },
  { id: 'spa', name: 'Spa', icon: Sparkles },
  { id: 'massage', name: 'Massage', icon: Hand },
  { id: 'nails', name: 'Nails', icon: Droplet },
  { id: 'barber', name: 'Barber', icon: Users },
  { id: 'facial', name: 'Facial', icon: Droplet },
];

const ratings = [
  { id: 4.5, label: '4.5+ Stars' },
  { id: 4, label: '4+ Stars' },
  { id: 3.5, label: '3.5+ Stars' },
  { id: 3, label: '3+ Stars' },
  { id: 'all', label: 'All Ratings' },
];

const FilterSection = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedRating, setSelectedRating] = useState('all');
  const [showAvailable, setShowAvailable] = useState(false);

  const handlePriceChange = (e, index) => {
    const newValue = parseInt(e.target.value) || 0;
    const newRange = [...priceRange];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  return (
    <div className="filter-section-container animate-fade-in">
      {/* Category Section */}
      <div className="filter-group mb-4">
        <h6 className="filter-label mb-3">Category</h6>
        <div className="category-scroll-wrapper">
          <div className="category-list">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.icon && <cat.icon size={18} className="category-icon" />}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Price Range Section */}
        <div className="col-12 col-md-4">
          <div className="filter-group">
            <h6 className="filter-label mb-3">Price Range</h6>
            <div className="price-display d-flex justify-content-between mb-2">
              <span>$0</span>
              <span>$500</span>
            </div>
            <div className="price-slider-wrapper mb-3">
              <input 
                type="range" 
                className="form-range custom-range" 
                min="0" 
                max="500" 
                value={priceRange[1]} 
                onChange={(e) => handlePriceChange(e, 1)}
              />
            </div>
            <div className="price-inputs d-flex gap-2">
              <div className="price-input-box">
                <input 
                  type="number" 
                  value={priceRange[0]} 
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="price-control"
                />
              </div>
              <div className="price-input-box">
                <input 
                  type="number" 
                  value={priceRange[1]} 
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="price-control"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimum Rating Section */}
        <div className="col-12 col-md-4">
          <div className="filter-group">
            <h6 className="filter-label mb-3">Minimum Rating</h6>
            <div className="rating-list">
              {ratings.map((rate) => (
                <button
                  key={rate.id}
                  className={`rating-item ${selectedRating === rate.id ? 'active' : ''}`}
                  onClick={() => setSelectedRating(rate.id)}
                >
                  <Star 
                    size={16} 
                    fill={selectedRating === rate.id ? "currentColor" : "none"} 
                    className="star-icon" 
                  />
                  <span>{rate.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="col-12 col-md-4">
          <div className="filter-group">
            <h6 className="filter-label mb-3">Availability</h6>
            <div 
              className={`availability-card ${showAvailable ? 'active' : ''}`}
              onClick={() => setShowAvailable(!showAvailable)}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className={`custom-checkbox ${showAvailable ? 'checked' : ''}`}>
                  {showAvailable && <div className="check-inner" />}
                </div>
                <span className="availability-text">Show Available Only</span>
              </div>
              <p className="availability-subtext">
                Filter by services with immediate availability for booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
