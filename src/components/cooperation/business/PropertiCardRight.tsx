import { useResponsive } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import {useEffect} from 'react'
import { start } from "repl";

export const PropertyCardRight = (props: {
  descData:  Array<{
    title?: string;
    text: string;
    img: any;
    text2?: string;
    text3?: string;
    button: string;
  }> ;
  width?: string;
  type?:string;
}) => {
  const { md } = useResponsive();
  const { descData, width ,type} = props;
  console.log(descData[0].button);
  
function BtnComponent(){
  useEffect(()=>{
    let myButton =document.getElementsByClassName("btn")
      // console.log(myButton);
      const btns=Array.from(myButton)
      // console.log(btns[0]) 
  })
}
BtnComponent()

 

  // 图片渲染
  const isMd=(num:number)=>{
    if(md){
      return descData[num].img.m[0]
    }else{
      return descData[num].img.d[0]
    }
  }
  const nowPic=(type:any)=>{
      if(type==='right1'){
        return isMd(0)
      }else if(type==='right2'){
        return isMd(1)
      }else if(type==='right3'){
        return isMd(3)
      }
  }

    // title渲染
    const nowTitle=(type:any)=>{
      if(type==='right1'){
        return descData[0].title
      }else if(type==='right2'){
        return descData[1].title
      }else if(type==='right3'){
        return descData[3].title
      }
  }

   // text2渲染
   const nowText2=(type:any)=>{
    if(type==='right1'){
      return descData[0].text2
    }else if(type==='right2'){
      return descData[1].text2
    }else if(type==='right3'){
      return descData[3].text2
    }
}
  // text渲染
  const nowText=(type:any)=>{
    if(type==='right1'){
      return descData[0].text
    }else if(type==='right2'){
      return descData[1].text
    }else if(type==='right3'){
      return descData[3].text
    }
}
  // text3渲染
  const nowText3=(type:any)=>{
    if(type==='right1'){
      return descData[0].text3
    }else if(type==='right2'){
      return descData[1].text3
    }else if(type==='right3'){
      return descData[3].text3
    }
}

  // 按钮渲染
const nowBtn=(type:any)=>{
  switch(type){
    case 'right1':
      return descData[0].button
      break;
    case 'right2':
      return descData[1].button;
       break;
    case 'right3':
      return descData[3].button;
      break
  }
}
  
  return (
    <div
      className={classNames(
        "col-start-1 col-end-25 flex flex-col items-center justify-between  md:flex-row  md:justify-start",
        {}
      )}
    >
      {/* 左侧图片 */}
      <div className={classNames("flex justify-end md:min-w-[342px] ")}>
        <Image
          className={classNames("h-auto  md:w-[340px] mt-[72px] md:mt-0", width,{
            ["md:!w-[446px]"]:type==="right2"
          })}
          src={nowPic(type)}
          alt=""
        />
      </div>
      {/* 右侧文字 */}
      <div
        className={classNames(
          "flex flex-col justify-between pl-[20px] pt-[56px] md:min-h-[289px] md:w-[60%] md:!items-start md:py-[25px] w-full ml-[32px] md:pl-[36px]",
          {
            ["md:!items-start"]:type==='right1',
            ["md:!translate-y-[-11%]"]:type==='right1',
          }
        )}
      >
        <div
          className={classNames(
            "text-[42px] font-[700] leading-[51px] text-[#333] mb-[32px] md:mb-0",
            {
              ["hidden"]: !nowTitle(type),
              ["ml-[34px] md:!mt-[74px] md:!pt-0"]:type==='right2',
            }
          )}
        >
          {nowTitle(type)}
        </div>
        <div  className={classNames({
          ["md:!h-[100%] md:flex md:flex-col md:justify-start"]:type==='right2'
        })}>
          <div
            className={classNames(
              "md:pb-[16px] md:pt-[8px] text-[26px] leading-[44px] text-[#333] md:text-[20px] md:leading-[31px] md:mb-[32px] mb-[68px] md:mt-[90px] md:w-[98%]",
              {
                ["mt-[84px] !mb-[10px] md:!text-start"]:type==='right1',
                // ["md:!mt-[44px] md:!mb-[44px]"]:type==='right2',
                ["md:!mt-[44px] md:!mb-0"]:type==='right2',
              }
              // }
              )}
          >
            {nowText(type)}
          </div>
          <div
            className={classNames(
              "text-[26px] leading-[44px] text-[#333]  md:text-[20px] md:leading-[31px] mb-[72px]",
              {
                ["hidden"]: !nowText2(type),
                ["md:!text-start md:!mb-[120px]"]:type==='right1',
                // ["md:!mb-[70px]"]:type==='right2',
              }
            )}
          >
            {nowText2(type)}
          </div>

          <div
            className={classNames(
              "text-[26px] leading-[44px] text-[#333]  md:text-[20px] md:leading-[31px] mb-[72px]",
              {
                ["hidden"]: !nowText3(type),
                // ["md:!mb-[5px]"]:type==='right2',
              }
            )}
          >
            {nowText3(type)}
          </div>
        </div>
        {/* 按钮 */}
        <Link href='#message' className={classNames("mb-[84px] md:mb-0 btn")}>
          <span 
            className={classNames(
              "md:bg-[#f5f5f5] md:px-[44px] px-[29px] py-[12px] rounded-md md:text-[20px] text-[28px] leading-[24px] text-[#ED3838] bg-white",
              {
                [" !bg-[#F5F5F5]"]:type==='right1', 
                ["hover:!bg-[#ED3838] hover:!text-white"]:type,
                // ["md:!translate-y-[-100px]"]:type==='right2'
              }
            )}
          >
            {nowBtn(type)}
          </span>
        </Link>
      </div>
    </div>
  );
};
