import React, { useState, useEffect } from "react";
import { Search, Plus, Clock, MapPin, SquarePen, X } from "lucide-react";

const Services = () => {
  // Initial services matching the screenshot details
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Signature Swedish Massage",
      category: "Massage",
      subcategory: "Swedish",
      description: "A classic full-body massage using long, flowing strokes.",
      duration: 60,
      location: "Indore",
      price: 499,
      status: true, // true = Active, false = Inactive
    },
    {
      id: 2,
      title: "Deep Tissue Recovery",
      category: "Massage",
      subcategory: "Deep Tissue",
      description: "Focused on the deepest layers of muscle tissue,",
      duration: 60,
      location: "Indore",
      price: 499,
      status: true,
    },
    {
      id: 3,
      title: "Hydrating Rose FacialMassage",
      category: "Facial",
      subcategory: "Hydrating",
      description: "Intensely moisturizing facial utilizing pure rose extracts.",
      duration: 60,
      location: "Indore",
      price: 499,
      status: true,
    },
    {
      id: 4,
      title: "Luxury Gel Manicure",
      category: "Nails",
      subcategory: "Gel",
      description: "Premium nail care with long-lasting gel polish finish.",
      duration: 60,
      location: "Indore",
      price: 499,
      status: true,
    },
    {
      id: 5,
      title: "Couples Spa Retreat",
      category: "Spa",
      subcategory: "Couples",
      description: "Premium nail care with long-lasting gel polish finish.",
      duration: 60,
      location: "Indore",
      price: 499,
      status: true,
    },
  ]);

  // Categories list based on filters in screenshot
  const categories = ["All", "Massage", "Facial", "Nails", "Hair", "Spa"];
  const locations = ["All", "Indore", "Mumbai"];
  
  const categoriesList = ["Massage", "Spa", "Facial", "Nails", "Hair"];
  const locationsList = ["Indore", "Mumbai"];

  // UI filter and search state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Drawer / sliding panel state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState("add"); // "add" or "edit"
  const [editingServiceId, setEditingServiceId] = useState(null);

  // Form state
  const [formValues, setFormValues] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: "",
    duration: 60,
    location: "",
    price: "",
    status: true,
  });

  // Dropdown states
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  // Close dropdowns on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".category-select-wrapper")) {
        setIsCategoryOpen(false);
      }
      if (!event.target.closest(".location-select-wrapper")) {
        setIsLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Handle service status switch toggle
  const handleToggleStatus = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, status: !service.status } : service
      )
    );
  };

  // Open drawer for adding service
  const handleOpenAddDrawer = () => {
    setFormValues({
      title: "",
      category: "",
      subcategory: "",
      description: "",
      duration: 60,
      location: "",
      price: "",
      status: true,
    });
    setDrawerMode("add");
    setIsDrawerOpen(true);
  };

  // Open drawer for editing service
  const handleOpenEditDrawer = (service) => {
    setFormValues({
      title: service.title,
      category: service.category,
      subcategory: service.subcategory,
      description: service.description,
      duration: service.duration,
      location: service.location,
      price: service.price,
      status: service.status,
    });
    setEditingServiceId(service.id);
    setDrawerMode("edit");
    setIsDrawerOpen(true);
  };

  // Close drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setEditingServiceId(null);
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formValues.title.trim() || !formValues.price) {
      alert("Please fill out the Title and Price fields.");
      return;
    }

    if (drawerMode === "add") {
      const newService = {
        id: Date.now(),
        title: formValues.title,
        category: formValues.category,
        subcategory: formValues.subcategory || "General",
        description: formValues.description,
        duration: parseInt(formValues.duration) || 60,
        location: formValues.location || "Indore",
        price: parseFloat(formValues.price),
        status: formValues.status,
      };
      setServices((prev) => [...prev, newService]);
    } else {
      setServices((prev) =>
        prev.map((service) =>
          service.id === editingServiceId
            ? {
              ...service,
              title: formValues.title,
              category: formValues.category,
              subcategory: formValues.subcategory || "General",
              description: formValues.description,
              duration: parseInt(formValues.duration) || 60,
              location: formValues.location || "Indore",
              price: parseFloat(formValues.price),
              status: formValues.status,
            }
            : service
        )
      );
    }

    handleCloseDrawer();
  };

  // Filter services based on category and search query
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" ||
      service.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="services-container">
      {/* Title & Add Service Header Row */}
      <div className="services-header-row">
        <div className="services-header-info">
          <h1 className="services-header-title">Services</h1>
          <p className="services-header-subtitle">Update your services here.</p>
        </div>
        <button className="btn-add-service" onClick={handleOpenAddDrawer}>
          <Plus size={18} />
          <span>Add Services</span>
        </button>
      </div>

      {/* Filter Category pills & Search box */}
      <div className="services-filters-row">
        <div className="services-filter-group">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`services-filter-pill ${selectedCategory === cat ? "active" : ""
                }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="services-search-wrapper">
          <Search size={16} className="services-search-icon" />
          <input
            type="text"
            className="services-search-input"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="services-grid">
        {filteredServices.map((service) => (
          <div key={service.id} className="service-card">
            {/* Left Edge color border indicator */}
            <div className="service-card-left-border"></div>

            {/* Header: Category Badge and Edit Button */}
            <div className="service-card-header">
              <span className="service-category-badge">
                {service.category} • {service.subcategory}
              </span>
              <button
                className="service-edit-btn"
                onClick={() => handleOpenEditDrawer(service)}
                title="Edit Service"
              >
                {/* <SquarePen size={18} /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke="#505050" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.0304 2.26495L6.1204 8.17494C5.8954 8.39994 5.6704 8.84244 5.6254 9.16494L5.3029 11.4224C5.1829 12.2399 5.7604 12.8099 6.5779 12.6974L8.8354 12.3749C9.1504 12.3299 9.5929 12.1049 9.8254 11.8799L15.7354 5.96995C16.7554 4.94995 17.2354 3.76495 15.7354 2.26495C14.2354 0.764945 13.0504 1.24495 12.0304 2.26495Z" stroke="#505050" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.1816 3.1123C11.6841 4.9048 13.0866 6.3073 14.8866 6.8173" stroke="#505050" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>

            {/* Title */}
            <h2 className="service-title">{service.title}</h2>

            {/* Description */}
            <p className="service-description">{service.description}</p>

            {/* Meta Info: Time and Location */}
            <div className="service-meta-row">
              <div className="service-meta-item">
                <Clock size={16} />
                <span>{service.duration} min</span>
              </div>
              <div className="service-meta-item">
                <MapPin size={16} />
                <span>{service.location}</span>
              </div>
            </div>

            {/* Price */}
            <h3 className="service-price">₹ {service.price}</h3>

            {/* Footer: Status Toggle */}
            <div className="service-footer">
              <div className="service-status-wrapper">
                <span className="service-status-label">Status</span>
                <span
                  className={`service-status-badge ${service.status ? "active" : "inactive"
                    }`}
                >
                  {service.status ? "Active" : "Inactive"}
                </span>
              </div>
              <div
                className={`service-switch ${service.status ? "active" : ""}`}
                onClick={() => handleToggleStatus(service.id)}
              >
                <div className="service-switch-knob"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Create New Service dotted card */}
        <div className="service-card create-new" onClick={handleOpenAddDrawer}>
          <div className="create-new-plus-circle">
            <Plus size={20} />
          </div>
          <h3 className="create-new-title">Create New Service</h3>
          <p className="create-new-subtitle">
            Add a new offering to your list of services.
          </p>
        </div>
      </div>

      {/* Slide-over Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${isDrawerOpen ? "open" : ""}`}
        onClick={handleCloseDrawer}
      ></div>

      {/* Slide-over Drawer Panel */}
      <div className={`drawer-container ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h2 className="drawer-title">
            {drawerMode === "add" ? "Add New Service" : "Edit Service"}
          </h2>
          <button className="drawer-close-btn" onClick={handleCloseDrawer}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="drawer-body">
          {/* Service Title */}
          <div className="drawer-form-group">
            <label className="drawer-label">Configure service details, pricing, and duration.</label>
            <input
              type="text"
              name="title"
              className="drawer-input"
              placeholder="e.g. Signature Swedish Massage"
              value={formValues.title}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Description */}
          <div className="drawer-form-group">
            <label className="drawer-label">Description</label>
            <textarea
              name="description"
              className="drawer-textarea"
              rows="3"
              placeholder="A short description of the service..."
              value={formValues.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Category & Location Custom Dropdowns Row */}
          <div className="drawer-input-row">
            <div className="drawer-form-group category-select-wrapper">
              <label className="drawer-label">Category</label>
              <div className={`custom-select-container ${isCategoryOpen ? "open" : ""}`}>
                <div 
                  className="custom-select-trigger" 
                  onClick={() => {
                    setIsCategoryOpen(!isCategoryOpen);
                    setIsLocationOpen(false); // Close other dropdown
                  }}
                >
                  <span className={`custom-select-trigger-text ${!formValues.category ? "select-placeholder" : ""}`}>
                    {formValues.category || "Select category"}
                  </span>
                  <div className="custom-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                {isCategoryOpen && (
                  <ul className="custom-select-options">
                    {categoriesList.map((cat) => (
                      <li
                        key={cat}
                        className={`custom-select-option ${formValues.category === cat ? "selected" : ""}`}
                        onClick={() => {
                          setFormValues((prev) => ({ ...prev, category: cat }));
                          setIsCategoryOpen(false);
                        }}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="drawer-form-group location-select-wrapper">
              <label className="drawer-label">Location</label>
              <div className={`custom-select-container ${isLocationOpen ? "open" : ""}`}>
                <div 
                  className="custom-select-trigger" 
                  onClick={() => {
                    setIsLocationOpen(!isLocationOpen);
                    setIsCategoryOpen(false); // Close other dropdown
                  }}
                >
                  <span className={`custom-select-trigger-text ${!formValues.location ? "select-placeholder" : ""}`}>
                    {formValues.location || "Select location"}
                  </span>
                  <div className="custom-select-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                {isLocationOpen && (
                  <ul className="custom-select-options">
                    {locationsList.map((loc) => (
                      <li
                        key={loc}
                        className={`custom-select-option ${formValues.location === loc ? "selected" : ""}`}
                        onClick={() => {
                          setFormValues((prev) => ({ ...prev, location: loc }));
                          setIsLocationOpen(false);
                        }}
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>



          {/* Duration & Location Row */}
          <div className="drawer-input-row">
            <div className="drawer-form-group">
              <label className="drawer-label">Duration (minutes)</label>
              <input
                type="number"
                name="duration"
                className="drawer-input"
                placeholder="e.g. 60"
                value={formValues.duration}
                onChange={handleInputChange}
                min="5"
              />
            </div>
            <div className="drawer-form-group">
              <label className="drawer-label">Price (₹)</label>
              <input
                type="number"
                name="price"
                className="drawer-input"
                placeholder="e.g. 499"
                value={formValues.price}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>
          </div>





          {/* Drawer Footer Actions */}
          <div className="drawer-footer">
            <button
              type="button"
              className="btn-drawer-cancel"
              onClick={handleCloseDrawer}
            >
              Cancel
            </button>
            <button type="submit" className="btn-drawer-submit">
              {drawerMode === "add" ? "Create Service" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Services;
