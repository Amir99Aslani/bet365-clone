import {SwiperComponent} from "@/component/uiAssets/SwiperComponent";



export function Banner() {
    return (
        <div className=" bg-neutral-800 rounded p-2 m-3 shadow-md shadow-indigo-500/50">
            <h3 className="bannerTitle font-bold ">Bundesliga</h3>
            <div className="bannerContent w-full h" >
                <SwiperComponent  data={[]} innerComponentType={"img"}/>
            </div>
        </div>
    );
};