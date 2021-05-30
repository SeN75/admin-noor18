export interface Login {
    email: string,
    password: string
}


export interface Tournament {
    id?: number;
    guidId?: string;
    name: string;
    description: string;
    permalink: string;
    banner: string;
    logo: string;
    gameId: number;
    numberOfParticipants: number;
    isTeam: boolean;
    startDate: string;
    endDate: string;
    registrationBasedOnDates: boolean;
    startRegistrationDate: string;
    endRegistrationDate: string;
    manuallyParticipantAccreditation: boolean;
    registrationMessage: string;
    approvalMessage: string;
    rejectMessage: string;
    rule: string;
    prizes: string;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
    timeZone: string;
    gameNavigation?: any;
    tournamentRules?: TournamentRules[],
    tournamentParticipants?: any;
    tournamentMatches?: TournamentMatch[],
    tournamentGroups?: TournamentGroup[],
    tournamentRounds?: TournamentRound[]

}


export interface TournamentGroup {
    id?: number;
    guidId?: string;
    tournamentId: number;
    roundId: number;
    name: string;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
}

export interface TournamentMatch {
    id?: number;
    guidId?: string;
    tournamentId: number;
    tournamentGroupId: number;
    tournamentRoundId: number;
    playerIdWinner: number;
    dateTimeOfMatch: string;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
}


export interface TournamentMatchPlayer {
    id?: number;
    guidId?: string;
    name?: string;
    tournamentMatchId: number;
    playerId: number;
    isWin: boolean;
    isDraw: boolean;
    isLoss: boolean;
    forfeit: number;
    scoreFor: number;
    scoreAgainst: number;
    scoreDifference: number;
    points: number;
    score: number;
    createdBy?: number;
    lastModifyDate?: string;
    createdDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
}


export interface TournamentPlayer {
    id?: number;
    guidId?: string;
    tournamentId: number;
    playerId: number;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
    tournamentNavigation?: any;
    playerNavigation?: any;
}

export interface TournamentRound {
    id?: number;
    guidId?: string
    tournamentId: number;
    name: string
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
    tournamentNavigation?: any;
    tournamentRoundGroups?: any;
    tournamentRoundMatches?: any;
}

export interface TournamentRules {
    id?: number;
    guidId?: string
    tournamentId: number;
    tournamentRuleTypeId: number;
    name: string;
    orderItem: number;
    numberOfParticipants: number;
    numberOfGroups: number;
    numberOfParticipantsInGroup: number;
    numberOfWinnerInGroup: number;
    numberOfRounds: number;
    isRoundTrip: boolean;
    isRandomDistribution: boolean;
    calculatePoints: boolean;
    countOfWins: number;
    countOfDraws: number;
    countOflosses: number;
    calculationBasedOnResult: boolean;
    pointBasedOnKill: number;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    tournamentNavigation?: any;
    typeNavigation?: any;
    tournamentWinnerOrder?: any;
    tournamentRuleTiebreakers?: any;
}

export interface TournamentRuleTiebreaker {
    id?: number;
    guidId?: string;
    tournamentRuleId: number;
    tiebreakerId: number;
    orderItem: number;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
    tiebreakerNavigation?: any;
    tournamentRuleNavigation?: any;

}


export interface TournamentRuleWinnerOrder {
    id?: number;
    guidId?: string;
    tournamentRuleId: number;
    name: string;
    countOfPoint: number;
    createdBy: number;
    createdDate: string;
    lastModifyDate: string;
    deletedBy?: number;
    isDeleted?: boolean;
    tournamentRuleNavigation?: any;
}