export interface optionInter {
    label: string,
    id: number,
}
export interface welfareInter {
    label: string,
    value: boolean,
}

export interface formDataInter {
    name: string,
    education: string,
    experience: string,
    wagesEnd: string,
    wagesStart: string,
    wages: string,
    welfare: string,
    province: string,
    city: string,
    area: string,
    enterprise: string,
}

export class dataInter {
    input="";
    educationList: Array<optionInter> = [
        { label: "中专", id: 1 },
        { label: "大专", id: 2 },
        { label: "本科", id: 3 },
        { label: "研究生", id: 4 },
        { label: "博士", id: 5 },
    ];
    experienceList: Array<optionInter> = [
        { label: "不限", id: 1 },
        { label: "一年", id: 2 },
        { label: "两年", id: 3 },
        { label: "三年", id: 4 },
        { label: "三年以上", id: 5 },
    ];
    provinceList: Array<optionInter> = [
        { label: "黑龙江", id: 1 },
        { label: "吉林", id: 2 },
        { label: "辽宁", id: 3 },
    ];
    cityList: Array<optionInter> = [
        { label: "大连", id: 1 },
        { label: "沈阳", id: 2 },
        { label: "哈尔滨", id: 3 },
    ];
    areaList: Array<optionInter> = [
        { label: "甘井子区", id: 1 },
        { label: "高新园区", id: 2 },
        { label: "中山区", id: 3 },
    ];
    enterpriseList: Array<optionInter> = [
        { label: "阿里巴巴", id: 1 },
        { label: "华为", id: 2 },
        { label: "腾讯", id: 3 },
    ];
    welfareList: Array<welfareInter> = [
        { label: "五险一金", value: false },
        { label: "供吃", value: false },
        { label: "供住", value: false },
    ];
    form: formDataInter = {
        name: "",
        education: "",
        experience: "",
        wagesEnd: "",
        wagesStart: "",
        wages: "",
        welfare: "",
        province: "",
        city: "",
        area: "",
        enterprise: ""
    };
}