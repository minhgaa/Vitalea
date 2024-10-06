import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const DropdownCheckbox = ({ label, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    setCheckboxes(data);
  }, [data]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };

  return (
    <div className="mb-3 w-full">
      <button
        id="dropdownCheckboxButton"
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center py-2 border-b border-gray-300 font-light text-sm text-gray-900"
        type="button"
      >
        <span>{label}</span>
        {isOpen ? <FaAngleUp className="text-gray-600" /> : <FaAngleDown className="text-gray-600" />}
      </button>

      {isOpen && (
        <div className="mt-3">
          <ul className="mt-2 space-y-3 text-sm text-gray-700">
            {checkboxes.map((checkbox) => (
              <li key={checkbox.id}>
                <div className="mt-5 flex items-center">
                  <input
                    id={checkbox.id}
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.id)}
                    className="w-5 h-5 text-black bg-gray-100 border-gray-300 rounded focus:ring-black"
                  />
                  <label
                    htmlFor={checkbox.id}
                    className="ml-2 text-sm font-light text-gray-900"
                  >
                    {checkbox.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckbox;
