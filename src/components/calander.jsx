
export default function Calander(){

  const weekdays = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة','سبت'];
  const selectedMonth = 11
  const monthDays = getMonthDays(2024, selectedMonth -1);
  let selected = [1,4,7,10]
  const selectedPostion = selected.map
  (element => element + monthDays.filter(day => day === null).length)
  
  return (
    <div dir='rtl' className="z-30 flex justify-center">
      <div className="w-[340px] flex flex-wrap gap-[5px]">
        {weekdays.map((weekday, index) => (
          <div key={index} 
            className="size-[40px] flex justify-center items-center text-[10px] font-bold border rounded-[10px] border-[#7164FA] border-dashed">
            {weekday}
          </div>
        ))}
        {monthDays.map((day, index) => (
          <div key={index} 
            className={`${selectedPostion.includes(index+1)? 'bg-[#7164FA] border-0 text-white' : 'bg-[#EAEAFE]' } ${day || 'invisible'}
            size-[40px] text-center flex items-center justify-center text-[10px] font-medium border rounded-[10px] border-[#7164FA] border-dashed`}>
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

const getMonthDays = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const monthDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    monthDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    monthDays.push(day);
  }

  return monthDays;
};