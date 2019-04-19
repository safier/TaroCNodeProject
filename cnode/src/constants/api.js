const rootPath='https://cnodejs.org/api/v1';
const apiObject={
    gettopics:rootPath+'/topics',//获取话题列表‘
    gettopicinfo:rootPath + '/toppic',//获取话题详情
    checkusertoken:rootPath+'/accesstoken',//验证用户Token
    getuserinfo:rootPath + '/user/' ,//获取影虎信息
    createtopic:rootPath + '/topics',//新建话题
    replaytopic:rootPath + '/topic',//回复话题信息
    upreply:rootPath + "reply",//点赞
}

export default apiObject;