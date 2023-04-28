import classNames from "classnames";

const ECard = (props: {
  eva: {
    name: string;
    desc: string;
    text: string;
    img: string;
  };
}) => {
  const { eva } = props;
  return (
    <div
      style={{
        background: "h-full linear-gradient(180deg, #FFFBFB 0%, #FFFFFF 100%)",
      }}
      className={classNames("  rounded-[8px] px-6 py-6")}
    >
      {/* 第一层 */}
      <div className={classNames("flex")}>
        <div>
          <img src={eva.img} alt="" />
        </div>
        <div className={classNames("flex flex-col justify-around pl-[30px]")}>
          <div className={classNames("text-[24px] leading-[44px] text-[#333]")}>
            {eva.name}
          </div>
          <div className={classNames("text-[20px] leading-[44px] text-[#999]")}>
            {eva.desc}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          `min-h-[112px] max-w-[473px] pt-7 text-[20px] font-[400] leading-7 text-[#333]`
        )}
      >
        {eva.text}
      </div>
    </div>
  );
};

export { ECard };
