import Mock from "mockjs"
Mock.mock("/mock/JobList", "get", {
    code: 200,
    data: [{
        id: 1,
        title: "火锅店服务员短期勿扰",
        area: "中山路",
        salaryStart: 4000,
        salaryEnd: 5000,
        province: "辽宁",
        companyName: "沙河口区雾都隐火锅店",
        companyYear: "2",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "包住", id: 2 }]
    }, {
        id: 2,
        title: "快递员6k上不封顶",
        area: "站北",
        salaryStart: 4000,
        salaryEnd: 5000,
        province: "辽宁",
        companyName: "沙河口区雾都隐火锅店",
        companyYear: "3",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "1-2年",
        tag: [{ name: "话补", id: 3 }, { name: "包住", id: 2 }]
    },
    {
        id: 3,
        title: "包吃住聘服装厂缝纫工7千+",
        area: "辛寨子",
        salaryStart: 7000,
        salaryEnd: 8000,
        province: "辽宁",
        companyName: "大连红日服装有限公司",
        companyYear: "2",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "包住", id: 2 }]
    },
    {
        id: 4,
        title: "有经验广告销售高提成",
        area: "民主广场",
        salaryStart: 4000,
        salaryEnd: 5000,
        province: "辽宁",
        companyName: "沙河口区雾都隐火锅店",
        companyYear: "2",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "包住", id: 2 }]
    },
    {
        id: 5,
        title: "专家骨雕师傅",
        area: "港湾广场",
        salaryStart: 10000,
        salaryEnd: 20000,
        province: "辽宁",
        companyName: "大连津利流体设备开发有限公司",
        companyYear: "1",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "美容导师", id: 1 }, { name: "技术专员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包住", id: 2 }]
    },
    {
        id: 6,
        title: "质量部负责人",
        area: "湾里",
        salaryStart: 5000,
        salaryEnd: 8000,
        province: "辽宁",
        companyName: "上海谦鸿毅餐饮管理有限公司",
        companyYear: "3",
        authentication: 1,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "五险一金", id: 4 }]
    },
    {
        id: 7,
        title: "急需名字叫金鑫鑫的演员，待遇丰厚",
        area: "成都",
        salaryStart: 20000,
        salaryEnd: 30000,
        province: "四川",
        companyName: "成都紫韵汇演公司",
        companyYear: "3",
        authentication: 1,
        city: "成都",
        workTag: [{ name: "演员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "六险一金", id: 4 }]
    },
    ]
})
Mock.mock("/mock/RecommendList", "get", {
    code: 200,
    data: [{
        id: 1,
        title: "火锅店服务员短期勿扰",
        area: "中山路",
        salaryStart: 4000,
        salaryEnd: 5000,
        province: "辽宁",
        companyName: "沙河口区雾都隐火锅店",
        companyYear: "2",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "包住", id: 2 }]
    }, {
        id: 2,
        title: "快递员6k上不封顶",
        area: "站北",
        salaryStart: 4000,
        salaryEnd: 5000,
        province: "辽宁",
        companyName: "沙河口区雾都隐火锅店",
        companyYear: "3",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "1-2年",
        tag: [{ name: "话补", id: 3 }, { name: "包住", id: 2 }]
    },
    {
        id: 3,
        title: "包吃住聘服装厂缝纫工7千+",
        area: "辛寨子",
        salaryStart: 7000,
        salaryEnd: 8000,
        province: "辽宁",
        companyName: "大连红日服装有限公司",
        companyYear: "2",
        authentication: 0,
        city: "大连",
        workTag: [{ name: "服务员", id: 1 }],
        ageLimit: "不限",
        yearLimit: "不限",
        tag: [{ name: "包吃", id: 1 }, { name: "包住", id: 2 }]
    },
    ]
})