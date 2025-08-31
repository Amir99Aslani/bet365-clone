import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Match {
    id: number;
    homeTeam: string;
    awayTeam: string;
    time: string;
    odds: {
        home: number;
        draw: number;
        away: number;
    };
    sport: "Football" | "Tennis" | "Basketball";
}

export interface MatchesState {
    matches: Match[];
}

const initialState: MatchesState = {
    matches: [
        // --- Football ---
        {
            id: 1,
            homeTeam: "Manchester United",
            awayTeam: "Chelsea",
            time: "18:30",
            odds: { home: 1.9, draw: 3.4, away: 2.8 },
            sport: "Football",
        },
        {
            id: 2,
            homeTeam: "Real Madrid",
            awayTeam: "Barcelona",
            time: "21:00",
            odds: { home: 2.1, draw: 3.2, away: 2.0 },
            sport: "Football",
        },
        {
            id: 3,
            homeTeam: "Liverpool",
            awayTeam: "Arsenal",
            time: "20:45",
            odds: { home: 2.0, draw: 3.5, away: 2.6 },
            sport: "Football",
        },
        {
            id: 4,
            homeTeam: "AC Milan",
            awayTeam: "Inter Milan",
            time: "19:15",
            odds: { home: 2.4, draw: 3.1, away: 2.3 },
            sport: "Football",
        },
        {
            id: 5,
            homeTeam: "PSG",
            awayTeam: "Lyon",
            time: "22:00",
            odds: { home: 1.6, draw: 3.8, away: 4.2 },
            sport: "Football",
        },
        {
            id: 6,
            homeTeam: "Atletico Madrid",
            awayTeam: "Sevilla",
            time: "17:30",
            odds: { home: 1.9, draw: 3.3, away: 3.1 },
            sport: "Football",
        },
        {
            id: 7,
            homeTeam: "Juventus",
            awayTeam: "Napoli",
            time: "20:30",
            odds: { home: 2.2, draw: 3.0, away: 2.4 },
            sport: "Football",
        },
        {
            id: 8,
            homeTeam: "Bayern Munich",
            awayTeam: "Borussia Dortmund",
            time: "21:30",
            odds: { home: 1.7, draw: 3.6, away: 4.0 },
            sport: "Football",
        },
        {
            id: 9,
            homeTeam: "Tottenham",
            awayTeam: "Newcastle",
            time: "18:45",
            odds: { home: 2.0, draw: 3.4, away: 2.7 },
            sport: "Football",
        },
        {
            id: 10,
            homeTeam: "Ajax",
            awayTeam: "Feyenoord",
            time: "19:50",
            odds: { home: 1.8, draw: 3.5, away: 3.0 },
            sport: "Football",
        },

        // --- Tennis ---
        {
            id: 11,
            homeTeam: "Novak Djokovic",
            awayTeam: "Carlos Alcaraz",
            time: "16:00",
            odds: { home: 1.9, draw: 0, away: 1.9 },
            sport: "Tennis",
        },
        {
            id: 12,
            homeTeam: "Rafael Nadal",
            awayTeam: "Daniil Medvedev",
            time: "18:00",
            odds: { home: 2.2, draw: 0, away: 1.7 },
            sport: "Tennis",
        },
        {
            id: 13,
            homeTeam: "Stefanos Tsitsipas",
            awayTeam: "Alexander Zverev",
            time: "20:00",
            odds: { home: 2.0, draw: 0, away: 2.0 },
            sport: "Tennis",
        },
        {
            id: 14,
            homeTeam: "Nick Kyrgios",
            awayTeam: "Jannik Sinner",
            time: "14:30",
            odds: { home: 2.5, draw: 0, away: 1.6 },
            sport: "Tennis",
        },
        {
            id: 15,
            homeTeam: "Andy Murray",
            awayTeam: "Dominic Thiem",
            time: "19:15",
            odds: { home: 1.8, draw: 0, away: 2.1 },
            sport: "Tennis",
        },

        // --- Basketball ---
        {
            id: 16,
            homeTeam: "LA Lakers",
            awayTeam: "Golden State Warriors",
            time: "02:00",
            odds: { home: 2.0, draw: 15.0, away: 1.9 },
            sport: "Basketball",
        },
        {
            id: 17,
            homeTeam: "Chicago Bulls",
            awayTeam: "Boston Celtics",
            time: "01:30",
            odds: { home: 2.3, draw: 15.0, away: 1.7 },
            sport: "Basketball",
        },
        {
            id: 18,
            homeTeam: "Brooklyn Nets",
            awayTeam: "Milwaukee Bucks",
            time: "03:00",
            odds: { home: 2.1, draw: 15.0, away: 1.8 },
            sport: "Basketball",
        },
        {
            id: 19,
            homeTeam: "Phoenix Suns",
            awayTeam: "Dallas Mavericks",
            time: "04:00",
            odds: { home: 1.9, draw: 15.0, away: 2.0 },
            sport: "Basketball",
        },
        {
            id: 20,
            homeTeam: "Miami Heat",
            awayTeam: "Philadelphia 76ers",
            time: "00:45",
            odds: { home: 2.2, draw: 15.0, away: 1.8 },
            sport: "Basketball",
        },
    ],
};

export const matchesSlice = createSlice({
    name: "matches",
    initialState,
    reducers: {
        addMatch: (state, action: PayloadAction<Match>) => {
            state.matches.push(action.payload);
        },
        removeMatch: (state, action: PayloadAction<number>) => {
            state.matches = state.matches.filter(m => m.id !== action.payload);
        },
    },
});

export const { addMatch, removeMatch } = matchesSlice.actions;
export default matchesSlice.reducer;
