import $http from "./request";

export function getJobList(data:any):any{
    return $http({
        url: '/JobList',
        method:'get',
        params:data
    });
}