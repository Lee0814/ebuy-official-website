import classNames from "classnames";
import Image from "next/image";
import bg from "./images/bg.png";

export const Expore = () => {
  return (
    <div className={classNames("relative w-full")}>
      <Image className={classNames(" w-full")} alt="" src={bg} />
      <div
        className={classNames(
          "absolute top-[31%] flex h-[50%] max-h-[300px] w-full flex-col items-center justify-between"
        )}
      >
        <div className={classNames("text-[42px] font-[600] text-[#fff]")}>
          Cant't find service
        </div>
        <div className={classNames("text-[32px] font-[500] text-[#fff]")}>
          Let's explore more possible ways of cooperation
        </div>
        <div>
          <span
            className={classNames(
              "rounded-lg bg-[#fff] px-[34px] py-[17px] text-[20px]  font-[500] text-[#ed3838]"
            )}
          >
            message us
          </span>
        </div>
      </div>
    </div>
  );
};
