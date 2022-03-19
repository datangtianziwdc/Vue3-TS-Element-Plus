export interface selectInter {
    WorkingYears: string[],
    Welfares: string[],
    PayMonths: string[],
    PayFilter: string[]
}

export interface selectkeyOptionInter {
    key: string,
    name: string,
    input: string
}

export interface jobListInter {
    id: number,
    title: string,
    area: string,
    salaryStart: number,
    salaryEnd: number,
    province: string,
    companyName: string,
    companyYear: string,
    authentication: number,
    city: string,
    workTag: [{ name: string, id: number }],
    ageLimit: string,
    yearLimit: string,
    tag: [{ name: string, id: number }, { name: string, id: number }]
}

export interface response {
    code:number,
    data: Array<jobListInter>
}

export class dataInter {
    jobList: Array<jobListInter> = [];
    recommendList: Array<jobListInter> = [];
}