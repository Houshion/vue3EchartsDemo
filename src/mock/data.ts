// mock/user.ts

const getDataList = () => {
  return [
    {
      "list|4": [
        {
          //生成工位
          "gw|1": ["排出", "瓶颈1", "投入", "瓶颈2"],
          // 随机生成id号
          'num|0-200': 1,
          // 随机生成中文姓名
          name: "@cname",
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "id|+1": 1,
          // 随机生成ip地址
          ip: "@ip",
          // 随机生成省市区地址
          address: "@county(true)",
          // 随机生成邮政编码
          zip: "@zip",
          "fastSpeed|1-300": 20,
          // 随机生成日期
          date: '@date("yyyy-MM-dd")',
          // 随机生成头像
          avatar: "@image('200x200')",
        },
      ],
    },
  ];
};
export default [
  // 用户登录接口
  {
    url: "/api/getData",
    method: "post",
    response: ({ body }: any) => {
      const dataList = getDataList();
      // 没有用户则返回失败信息
      if (!dataList) {
        return {
          code: 201,
          data: {
            message: "账号或者密码不正确",
          },
        };
      }
      // 如果有返回成功信息
      return {
        code: 200,
        data: dataList[0],
      };
    },
  },
];
