import RightArrow from "../../assets/RightArrow.png";
import LeftArrow from "../../assets/LeftArrow.png";
import Avatar from "../../assets/Avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { months_name } from "../Calendar/Constants";
import { nextWeek, prevWeek } from "../../store/slices/DateSlice";

export const Header = () => {

  const curSunday = useSelector((state) => state.dateReducer.curSunday);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-header_bg py-6 px-12
    border-b-2 border-header_border">
      <h2 className="text-bold text-booked_clicked">BUSY TUTOR</h2>
      <div className="flex justify-between items-center">
        <img onClick={() => {dispatch(prevWeek())}} className="hover:cursor-pointer" src={LeftArrow}  alt="left arrow" />
        <h1 className="px-6 text-xl">{months_name[curSunday[1]]} {curSunday[2]}</h1>
        <img onClick={() => {dispatch(nextWeek())}} className="hover:cursor-pointer" src={RightArrow} alt="right arrow" />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="pr-6 text-booked_clicked">AS TUTOR</h1>
        <img src={Avatar} alt="avatar" />
        <h3 className="pl-4">Logout</h3>
        </div>
    </div>
  );
}
