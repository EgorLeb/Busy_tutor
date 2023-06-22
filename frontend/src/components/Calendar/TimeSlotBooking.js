import { useEffect, useState } from "react";
export const TimeSlotBooking = () => {
  const slots = ["NO SLOT", "FREE", "BOOKED"];
  const colors = ["bg-slot_no", "bg-slot_free", "bg-booked_normal"];

  var [count, setCount] = useState(0);
  // const [users, setUsers] = useState([])

  const postData = async (url = "", data = {}) => {
    // Формируем запрос
    const response = await fetch(url, {
      // Метод, если не указывать, будет использоваться GET
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "content-type",
      },
      // Данные
      body: JSON.stringify(data),
    });
    return response;
  };
  var fullname = "";

  const get_info = () => {
    // setCount(count + 1);
    const data_student = {
      type: "log",
      mail: "ekjfnvjer",
      password: "123456",
    };
    postData("https://testing.egorleb.repl.co", data_student).then(
      async (data_) => {
        const response = await data_.json();
        fullname = response.fullname;
        console.log(response.fullname);
        return response;
      }
    );
  };
  const sendFreeTime = () => {
    const data = {
      type: "setTime",
      mail: "ekjfnvjer", //видимо будем хранить в локалке данные
      password: "123456",
      freeSlots:
        "[[datetime, datetime], [datetime, datetime], ..., [datetime, datetime]]",
      busySlots:
        "[[datetime, datetime], [datetime, datetime], ..., [datetime, datetime]]",
    };
    postData("https://testing.egorleb.repl.co", data).then(async (data_) => {
      const res = await data_.json();
      console.log("1");
    });
  };

  useEffect(() => {
    if (count > 1) {
      setCount(0);
    }
    if (count === 1) {
      sendFreeTime();
    }
    if (count === 2) {
      get_info();
    }
  }, [count]);

  return (
    <div className="group p-1 border-header_border border-2 relative">
      <div
        onClick={() => {
          setCount(count + 1);
        }}
        className={`pb-20 hover:bg-no_slot_hover hover:cursor-pointer rounded-md  ${colors[count]}`}
      ></div>
      {count === 2 ? (
        <div
          className="flex flex-col justify-center items-center  absolute -top-14 -right-28 group-hover:visible invisible  bg-white border-booked_clicked border-2 py-4 px-10 z-20
      rounded-tl-lg rounded-tr-lg rounded-br-lg text-booked_clicked"
        >
          <p className="z-30">{fullname}</p>
          <p className="z-30">тут мне с сервера пришлют номер телефона</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
