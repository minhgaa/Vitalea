/* eslint-disable react/prop-types */
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

const NewsSelect
 = ({category, subCategory, setCategory, setSubCategory}) => {


  // Dữ liệu mẫu cho từng danh mục
  const categories = ['Thuốc', 'Dược liệu', 'Bệnh'];
  const medicines = ['Paracetamol', 'Ibuprofen', 'Aspirin'];
  const herbs = ['Gừng', 'Sả', 'Tía tô'];
  const diseases = ['Cảm cúm', 'Viêm họng', 'Sốt rét'];

  // Xử lý thay đổi chọn danh mục
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSubCategory(''); // Reset subCategory khi thay đổi category
  };

  // Xử lý thay đổi chọn subCategory
  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  // Xác định dữ liệu hiển thị trong select thứ hai
  let subCategoryOptions = [];
  if (category === 'Thuốc') {
    subCategoryOptions = medicines;
  } else if (category === 'Dược liệu') {
    subCategoryOptions = herbs;
  } else if (category === 'Bệnh') {
    subCategoryOptions = diseases;
  }

  return (
    <div>
      {/* Select danh mục */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="category-label">Danh mục</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={handleCategoryChange}
          label="Danh mục"
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        {category === '' && <FormHelperText>Chọn danh mục</FormHelperText>}
      </FormControl>

      {/* Select subCategory tương ứng */}
      {category && (
        <FormControl fullWidth margin="normal">
          <InputLabel id="subcategory-label">{category}</InputLabel>
          <Select
            labelId="subcategory-label"
            value={subCategory}
            onChange={handleSubCategoryChange}
            label={category}
          >
            {subCategoryOptions.length > 0 ? (
              subCategoryOptions.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled value="">
                Chưa có dữ liệu
              </MenuItem>
            )}
          </Select>
          {subCategory === '' && <FormHelperText>Chọn {category}</FormHelperText>}
        </FormControl>
      )}
    </div>
  );
};

export default NewsSelect
;
