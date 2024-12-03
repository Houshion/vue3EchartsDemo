// mock/user.ts

const getLBDataList = () => {
  return [
    {
      "list|4-10": [
        {
          //生成工位
          "lb|1": ["G-1L", "G2L", "G-3L", "G-4L", "G5L"],
          // 随机生成id号
          'total|0-5000': 1,
          // 随机生成中文姓名
          name: "@name",
        },
      ],
    },
  ];
};
export default [
  // 用户登录接口
  {
    url: "/api/getLBData",
    method: "post",
    response: ({ body }: any) => {
      const dataList = getLBDataList();
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
