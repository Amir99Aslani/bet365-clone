import {Match} from "@/features/matches/MatchesManager";
import {useI18n} from "@/app/ProviderComponent";

interface Props {
    match: Match;
}

export const MatchCard = ({match}: Props) => {

    const { dict, locale } = useI18n();

    return (
        <div className="border rounded p-4 m-3 shadow hover:shadow-md transition ">
            <div className="flex justify-between items-center mb-2">
                <span className="w-2/5 text-center">{match.homeTeam}</span>
                <span className="w-1/5 text-center">vs</span>
                <span className="w-2/5 text-center">{match.awayTeam}</span>
            </div>
            <div className="flex justify-between">
                <span className="capitalize w-2/5 text-center">{dict.time}: {match.time}</span>
                <span className="capitalize w-2/5 text-center">
          {dict.odds}: {match.odds.home} | {match.odds.draw} | {match.odds.away}
        </span>
            </div>
        </div>
    );
};