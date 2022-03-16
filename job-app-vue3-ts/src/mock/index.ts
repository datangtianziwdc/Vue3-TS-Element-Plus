import Mock from "mockjs"
Mock.mock("/JobList", "get", {
    code:200,
    data: [{
        "name": "工作",
        "city": "大连"
    }]
})