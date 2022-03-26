// 类型断言练习！重要
export interface selectInter {
    WorkingYears: string[],
    Welfares: string[],
    PayMonths: string[],
    PayFilter: string[],
    // [key:string]:any // 定义一个any类型可以随意向改map中增加key
}
export interface selectTypeInter {
    jobName: string,
    payArea: string,
    // [key:string]:any // 定义一个any类型可以随意向改map中增加key
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
    code: number,
    data: Array<jobListInter>
}

export interface checkedList {
    label: string,
    id: number,
    value: boolean
}

export class dataInter {
    positionIndex = 1;
    addressIndex = 1;
    position: Array<checkedList> = [{
        label: "全部",
        id: 1,
        value: true,
    },
    {
        label: "销售",
        id: 2,
        value: false,
    },
    {
        label: "客服",
        id: 3,
        value: false,
    },
    {
        label: "人事/行政/后勤",
        id: 4,
        value: false,
    },
    {
        label: "餐饮",
        id: 5,
        value: false,
    },
    {
        label: "旅游",
        id: 6,
        value: false,
    },
    {
        label: "酒店",
        id: 7,
        value: false,
    },
    {
        label: "超市/百货/零售",
        id: 8,
        value: false,
    },
    {
        label: "美容/美发",
        id: 9,
        value: false,
    }
    ];
    addressList: Array<checkedList> = [{
        label: "全大连",
        id: 1,
        value: true,
    },
    {
        label: "甘井子",
        id: 2,
        value: false,
    },
    {
        label: "开发区",
        id: 3,
        value: false,
    },
    {
        label: "沙河口",
        id: 4,
        value: false,
    },
    {
        label: "中山",
        id: 5,
        value: false,
    },
    {
        label: "金州",
        id: 6,
        value: false,
    },
    {
        label: "西岗",
        id: 7,
        value: false,
    },
    {
        label: "高新园区",
        id: 8,
        value: false,
    },
    {
        label: "旅顺口",
        id: 9,
        value: false,
    }];
    selectList:Array<selectInter> = [];// 练习
    selectType:selectTypeInter = {
        jobName: "",
        payArea: ""
    };// 练习
    input = "";// 搜索
    selectValue = "";// 筛选
    createTime = "";// 发布时间
    range = "";// 薪资范围
    nature = "";// 公司性质
    checkedList: Array<checkedList> = [{
        label: "营业执照已验证",
        id: 1,
        value: false
    },
    {
        label: "查看本地工作",
        id: 2,
        value: false
    }];
    jobList: Array<jobListInter> = [];
    recommendList: Array<jobListInter> = [];
}