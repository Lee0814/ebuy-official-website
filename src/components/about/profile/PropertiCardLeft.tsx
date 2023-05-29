import { useResponsive,windowSizeRange } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import leftStyle from "./leftStyle.module.scss"

export const PropertyCardLeft = (props: {
  descData: {
    title: string;
    text: string;
    img: { m: Array<any>; d: Array<any> };
    text2: string;
  };
  width?: string;
  type?:any
}) => {
  const { md } = useResponsive();
  const { descData, width,type} = props;

  const windowSize=windowSizeRange()
  const middleWindow=windowSize>=768.9&&windowSize<=1024.9
  const showImg1=()=>{
    if(!md){
      if(middleWindow){
        return descData.img.m[0] 
      }else{
        return descData.img.d[0] 
      }
    }else{
      return descData.img.m[0] 
    }
  }
  const showImg2=(num:number)=>{
    if(!md){
      if(middleWindow){
        return descData.img.m[num] 
      }else{
        return descData.img.d[num] 
      }
    }else{
      return descData.img.m[num] 
    }
  }
 
  const images = (
    <div className={classNames(leftStyle.left_images_contanier)}>
      <Image
        className={classNames(leftStyle.left_img1, width,{
          ["!w-[327px] !h-[327px] mr-[32px]"]:windowSize<=768&&type==='left1'
        })}
        // src={md ? descData.img.m[0] : descData.img.d[0]}
        src={showImg2(0)}
        alt=""
      />
      <Image
        className={classNames(leftStyle.left_img2, width,{
          ["!w-[327px] !h-[327px]"]:windowSize<=768&&type==='left1',
        })}
        src={showImg2(1)}
        alt=""
      />
    </div>
  );

  const image = (
    <div
      className={classNames(leftStyle.left_img_contanier,{
        ["md:!pl-0"]:middleWindow&&type
      })}>
      <Image
        className={classNames(leftStyle.left_img, width,{
          ["md:!w-full"]:middleWindow&&type==='left3'||type==='left2'
          // ["md:!w-full"]:middleWindow&&type==='left2'
        })}
        // src={md ? descData.img.m[0] : descData.img.d[0]}
        src={showImg1()}
        alt=""
      />
    </div>
  );

  const nowImg=()=>{
    if(!md){
      if(descData.img.m.length == 2 ){
        if(middleWindow){
          return images
        }
        return images
      }else{
        return image
      }
    }else{
      return images
    }
  }
  return (
    <div className={classNames(leftStyle.left_contanier,{
    })}>
      {/* 左侧文字 */}
      <div className={classNames(leftStyle.left_content,{
        ['mt-[30px]']:middleWindow&&type==='left1'
      })}>
        
        <div className={classNames(leftStyle.left_title,{
          ["mb-[30px]"]:middleWindow&&type==='left3'
        })}>
          {descData.title}
        </div>

        <div className={classNames(leftStyle.left_text,{
          ["!mb-[36px] !mt-[35px]"]:middleWindow&&type==='left2',
          ["!mb-[22px]"]:middleWindow&&type==='left3'
        })}>
          {descData.text}
        </div>
        
        <div className={classNames(leftStyle.left_text2)}>
          {descData.text2}
        </div>
      </div>
      {/* 右侧图片 */}
      {/* {md && descData.img.m.length == 2 ? images : image} */}
      {nowImg()}
    </div>
  );
};
