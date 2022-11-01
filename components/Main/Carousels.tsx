import React from "react";
import { border, Box, Container, Flex, Heading, HStack, Image, Stack,  StackDivider,  Text, } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore,{ Navigation, Pagination,  } from "swiper";

import s from "../../styles/Home.module.css";
import type {Menu} from "../types/menu"

SwiperCore.use([Pagination, Navigation]) 

 type Props = {
    title:string;
    pb:string;
    menus:Array<Menu>;
    
}

  

const Carousels = ({title,menus}:Props) => {
    return (
        <>
       
        <Heading>{title}</Heading>
      
        <Box w={{base:'100%',lg:'100vh'}}>
        <Swiper
        
        slidesPerView={1} //一度に表示するスライドの数
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${s.custom_bullet}`, //非アクティブなアイコンのクラスを指定
          bulletActiveClass: `swiper-pagination-bullet-active ${s.custom_bullet_active}`, //アクティブなアイコンのクラスを指定
          el:"#pagination"
        
        }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        speed={500}
        effect="fade"
        modules={[Navigation, Pagination]}
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: "#button_prev", 
          nextEl: "#button_next"
        }}
        loop={true}
       >
        
        {/* paginationのcssを変更する為のタグ globalcss参照 */}
        <div id="pagination" className="swiper-pagination"></div> 
        {/* navigationのcssを変更する為のタグ globalcss参照 */}
        <div id="button_prev" className="swiper-button-prev"></div> 
        <div id="button_next" className="swiper-button-next"></div>
        {menus.map((menu,index) => {
        return (
        <>
          <SwiperSlide key={index}>
          <Image src={menu.src} w='100%' h={{base:'300',md:'600'}}  alt={menu.alt}></Image>
          <Text>{menu.discription}</Text>
      

          </SwiperSlide>
     
        </>
      )
    })}

        </Swiper>
        </Box>
        </>
       
    
    );
}

export default Carousels;