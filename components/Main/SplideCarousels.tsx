import React from "react";
import {  Box,  Heading,  Image,   Text, } from "@chakra-ui/react";
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';

// splideデフォルトのテーマ
import '@splidejs/react-splide/css';

import type {Menu} from "../types/menu"

type Props = {
  title:string; 
  menus:Array<Menu>;
}

// splideオプション
const options = {
    type         : 'fade',
    gap          : '1rem',
    autoplay     : true,  //自動再生
    pauseOnHover : true, //ホバーしたら自動再生が止まる
    resetProgress: false, //自動再生が中断されたのち再開する際、それまでの経過時間を維持するか破棄するかを決定
    interval:10000, //スライドが変わる時間  
    rewind:true, //繰り返し
    speed:1000  //何秒かけてスライドが変わるか
};


const Carousels = ({title,menus}:Props) => {


    return (
        <>
        <Heading>{title}</Heading>
        <Box w={{base:'100%',lg:'100vh'}}>

        <Splide
        options={ options }
        aria-labelledby={title}
        hasTrack={ false }
        >
        <div style={ { position: 'relative' } }>
          <SplideTrack>
          {menus.map((menu) => {
          return (
            <React.Fragment key={menu.name}>
              
            <SplideSlide key={menu.name}>
            <Image src={menu.src} w='100%' h={{base:'300',md:'600'}} alt={menu.alt}></Image>
            <Text>{menu.discription}</Text>
            </SplideSlide>

            </React.Fragment>
          )
          })}
          </SplideTrack>
        </div>


        {/* <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}


      </Splide>
    </Box>
       

   
        </>
       
    
    );
}

export default Carousels;