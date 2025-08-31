// noinspection JSAnnotator

import React from 'react';
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation';

import 'swiper/css';
import {MatchCard} from "@/component/uiAssets/MatchCard";
import {Navigation} from 'swiper/modules';
import {Match} from "@/features/matches/MatchesManager";
import Link from "next/link";

interface Props {
    data: Match[],
    innerComponentType: string
};

export function SwiperComponent({data, innerComponentType}: Props) {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                autoplay={true}
                spaceBetween={30}
                breakpoints={{
                    10: {slidesPerView: 1},
                    800: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                }}
                className="mySwiper w-full h-full"
                navigation={true}
                modules={[Navigation]}
                loop={innerComponentType === "img"}
            >
                {innerComponentType === "MatchCard" ?
                    data.map(dataItem => (
                        <SwiperSlide key={dataItem?.id}
                                     className="text-center text-lg flex justify-center items-center">
                            <MatchCard key={dataItem?.id} match={dataItem}/>
                        </SwiperSlide>
                    ))
                    :
                    innerComponentType === "img" ?
                        <>
                            <SwiperSlide className="text-center text-lg flex justify-center items-center">
                                <Link href="">
                                    <Image width={1200}
                                           height={400}
                                           className="object-cover w-full h-auto"
                                           alt={"banner image"}
                                           src={"/03ff6e003c7e4ebc91e30cf718838e07.jpeg"}/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="text-center text-lg flex justify-center items-center">
                                <Link href="">
                                    <Image
                                        width={1200}
                                        height={400}
                                        className="object-cover w-full h-auto"
                                        alt={"banner image"} src={"/6b4df5098d164ddbaa1acf71d997e13b.jpeg"}/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="text-center text-lg flex justify-center items-center">
                                <Link href="">
                                    <Image
                                        width={1200}
                                        height={400}
                                        className="object-cover w-full h-auto"
                                        alt={"banner image"} src={"/8a6da04049164d93ad470842a8e1e81f.webp"}/>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="text-center text-lg flex justify-center items-center">
                                <Link href="">
                                    <Image
                                        width={1200}
                                        height={400}
                                        className="object-cover w-full h-auto"
                                        alt={"banner image"} src={"/7652277c0a254665a4828979fd2864d2.jpeg"}/>
                                </Link>
                            </SwiperSlide>
                        </>
                        :
                        <>

                        </>
                }

            </Swiper>
        </>
    );
};