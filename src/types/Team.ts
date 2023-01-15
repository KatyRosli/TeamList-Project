export interface ITeam {
    team: string[]
}

export interface ITeamDetails {
    team: ITeam,
    updateTeam: (data: string[]) => Promise<void>
    signUp: (data: string[]) => Promise<void>
}