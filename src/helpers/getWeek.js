function getWeek(date = new Date(), firstDayOfWeek = 1) {
 
  const currentDate = new Date(date);
  
  
  const startDate = currentDate.getDate() - currentDate.getDay() + firstDayOfWeek;
  currentDate.setDate(startDate);
  const startOfWeek = new Date(currentDate);  // Ngày bắt đầu tuần

 
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); 

 
  const formatDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; 
    const yyyy = date.getFullYear();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return `${dd}/${mm}/${yyyy}`;
  };

  return {
    start: formatDate(startOfWeek),
    end: formatDate(endOfWeek)
  };
}

export default getWeek
