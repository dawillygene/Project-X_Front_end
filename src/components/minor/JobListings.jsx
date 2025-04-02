// src/components/JobListings.jsx
import React, { useState } from 'react';
import { jobCategories, educationLevels, jobListings, sidebarContent } from '../../constants/JobListingsContants';
import { FiChevronDown, FiChevronUp, FiPlus , FiChevronRight } from 'react-icons/fi';

const JobListings = () => {
  const [activeFilters, setActiveFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [showMore, setShowMore] = useState(false);

  const toggleFilter = (filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const toggleCheckbox = (category, item) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (!newFilters[category]) {
        newFilters[category] = {};
      }
      newFilters[category][item.id] = !newFilters[category][item.id];
      return newFilters;
    });
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-orange-50 min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-neutral-500 text-white p-4 space-y-4">
          {sidebarContent.categories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter(category.name)}>
                <span>{category.name}</span>
                <button>
                  {activeFilters[category.name] ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              </div>
              {activeFilters[category.name] && (
                <div className="mt-2 space-y-2">
                  {category.items && category.items.map(item => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${category.name}-${item.id}`}
                        className="mr-2"
                        onChange={() => toggleCheckbox(category.name, item)}
                      />
                      <label htmlFor={`${category.name}-${item.id}`}>
                        {item.name} ({item.count})
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Job Categories */}
          <div className="mt-8 flex flex-wrap gap-2">
            {sidebarContent.jobCounts.categories.map((category, index) => (
              <button 
                key={index} 
                className="bg-neutral-600 px-4 py-1 rounded-full text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-3/4 p-4">
          {/* Job Count */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-600">
              {sidebarContent.jobCounts.allJobs} Job ads found
            </h2>
            
            {/* Pagination */}
            <div className="flex items-center space-x-2">
              <span>Page:</span>
              {[1, 2, 3].map(page => (
                <button 
                  key={page} 
                  className={`px-2 py-1 rounded ${
                    page === sidebarContent.pagination.currentPage ? 'bg-neutral-500 text-white' : 'text-gray-500'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="text-neutral-600">
                <FiChevronRight />
              </button>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="space-y-6">
            {jobListings.map(job => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <a href="#" className="text-neutral-600 hover:text-neutral-800 font-medium">
                      {job.company}
                    </a>
                    <p className="text-gray-600 mt-2">
                      {job.description}
                      <a href="#" className="text-neutral-600 hover:text-neutral-800 font-medium">
                        <FiPlus className="inline" />
                        plus
                      </a>
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <img src={job.logo} alt={job.company} className="w-24 h-24 rounded" />
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Education level:</strong> {job.education}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Experience level:</strong> {job.experience}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Proposed contract:</strong> {job.contract}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Region of:</strong> {job.region}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Key Skills:</strong> {job.skills}
                    </p>
                  </div>
                  <div className="flex justify-end items-end">
                    <p className="text-sm text-gray-500">
                      {job.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;