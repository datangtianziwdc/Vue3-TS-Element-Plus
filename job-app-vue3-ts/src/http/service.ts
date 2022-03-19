import $http from "./request";
export function getJobList(data:any):any{
    return $http({
        url: '/JobList',
        method:'get',
        params:data
    });
}

export function getRecommendList(data:any):any{
    return $http({
        url: '/RecommendList',
        method:'get',
        params:data
    });
}