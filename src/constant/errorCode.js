// const ERROR_TYPE = {
//   login: 1,
// };

export default {
    /* 登陆相关
   */
    0: {
        'none': '未知错误！'
    },
    1: {
        'invalid password': '密码错误！',
        'login failed': '登陆失败！',
        'user not found': '该用户不存在！',
    },
    17: {
        'duplicate_unique_property_exists': 'id已存在！',
        'resource_limited': '注册已达上限请开通企业版！',
        'unauthorized': '未开放授权注册！',
        'resource_not_found': '账号不存在！',
    },
    28: {
        'appkey or token error': '未登录！',
    },
    101: {
        'file exceeding maximum limit': '文件大小超出限制（默认10M）！',
        'none': '文件相关未知错误！'
    },
    217: {
        'the user was kicked by other device': '其他端踢出了该账号！',
    },
    /* 群组相关 */
    602: {
        'not in group or chatroom': '已不再该群组中！',
    },
    605: {
        'The chat room dose not exist.': '此群不存在！',
    },
    /* 消息相关 */
    221: {
        'not contact': '非好友关系,不可发送消息！',
    },
    400: {
        'UserId password error.': '用户密码错误！',
        'UserId hfp already exists.': '用户已注册！',
    },
    603: {
        'blocked': '对方已将您加入黑名单！',
        'blacklist': '已在该群黑名单当中！无法加入该群。',
        'already': '已加入该群！'
    },
    504: {
        'exceed recall time limit': '消息超过可撤回时间！',
    },
    507: {
        'muted': '已被禁言！'
    },
    508: {
        'moderation': '内容审核不通过！请检查发送内容。'
    }
    // e.type === '603' 被拉黑
    // e.type === '605' 群组不存在
    // e.type === '602' 不在群组或聊天室中
    // e.type === '504' 撤回消息时超出撤回时间
    // e.type === '505' 未开通消息撤回
    // e.type === '506' 没有在群组或聊天室白名单
    // e.type === '501' 消息包含敏感词
    // e.type === '502' 被设置的自定义拦截捕获
    // e.type === '503' 未知错误
}
