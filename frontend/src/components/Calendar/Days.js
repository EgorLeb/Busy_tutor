import { days_name } from "./Constants";
import { useSelector } from "react-redux";

export const Days = () => {

  const daysOfWeek = useSelector((state) => state.dateReducer.daysOfWeek);

  return (
    <div className="flex justify-between items-center pr-72 pl-48 pt-6 pb-4">
      {days_name.map((day, index) => {
        return (
          <div key={index} className="flex flex-col justify-between items-center">
            <p>{day}</p>
            <p className="pt-6">{daysOfWeek[index][0]}</p>
          </div>
        );
      })}
    </div>
  );
};