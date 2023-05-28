import { useResponsive,windowSizeRange } from "@/hooks";
import classNames from "classnames";
import Image from "next/image";
import rightStyle from "./rightStyle.module.scss";
export const PropertyCardRight = (props: {
  descData: {
    title: string;
    text: string;
    img: { m: Array<any>; d: Array<any> };
    text2: string;
  };
  width?: string;
  type?:any;
}) => {
  const { md } = useResponsive();
  const { descData, width ,type} = props;
  const images = (
    <div
      className={classNames(rightStyle.right_images_contanier)}
    >
      <Image
        className={classNames(rightStyle.right_img1,width)}
        src={md ? descData.img.m[0] : descData.img.d[0]}
        alt=""
      />
      <Image
        className={classNames(rightStyle.right_img2, width)}
        src={md ? descData.img.m[1] : descData.img.d[1]}
        alt=""
      />
    </div>
  );

  const windowSize=windowSizeRange()
  const middleWindow=windowSize>=768.9&&windowSize<=1024.9
  const showImg=()=>{
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
  
  const image = (
    <div className={classNames(rightStyle.right_img_contanier)}>
      <Image
        className={classNames("h-auto  md:w-[340px]", width,{
          ["md:!w-[455px]"]:middleWindow&&type==='right1',
          ["md:!w-full"]:middleWindow&&type==='right2',
          ["md:!w-[410px]"]:middleWindow&&type==='right3'
        })}
        // src={md ? descData.img.m[0] : descData.img.d[0]}
        src={showImg()}
        alt=""
      />
    </div>
  );
  

  return (
    <div className={classNames(rightStyle.right_contanier)}>
      {/* 左侧图片 */}
      {md && descData.img.m.length == 2 ? images : image}

      {/* 右侧文字 */}
      <div className={classNames(rightStyle.right_content,{
        ['mb-[72px]']:middleWindow&&type==='right2'||type==='right1',
      })}>
          <div className={classNames(rightStyle.right_title)}>
            {descData.title}
          </div>

          <div className={classNames(rightStyle.right_text)}>
            {descData.text}
          </div>

          <div className={classNames(rightStyle.right_text2)}>
            {descData.text2}
          </div>
      </div>
    </div>
  );
};
