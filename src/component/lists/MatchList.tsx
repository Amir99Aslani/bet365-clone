
"use client";
import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxStore";
import { useActive } from "@/app/[locale]/LocaleLayoutClientWrapper";
import {MatchCard} from "@/component/uiAssets/MatchCard";

function MatchList() {

    const matches = useSelector((state: RootState) => state.matches.matches);

    const { active } = useActive();

    const filteredMatches = matches.filter((m) => m.sport === active);

    return (
            <div className="bannerContent p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/*<SwiperComponent data={matches} innerComponentType={"MatchCard"}/>*/}
                {filteredMatches.length > 0 ? (
                filteredMatches.map(matchItem => (
                    <MatchCard key={matchItem?.id} match={matchItem}/>
                )))
                :
                    (
                        <p className="font-bold content-center">No matches available for this sport.</p>
                    )
                }
            </div>
    );
}

export default MatchList;