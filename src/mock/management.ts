// mock/user.ts

const getInfoMsg = () => {
  return {
    "scs|1-999999": 1,
    "scsj|1-999999": 1,
    "bzscx|1-200.1-10": 1,
    "sjscx|1-200.1-10": 1,
    "nla|1-200.1-10": 1,
    "nlb|1-200.1-10": 1,
    "chs|1-999999": 1,
    "bls|0-999": 1,
    "blv|0-100.1-10": 1,
    "bljz|0-100": 1,
    "bllx|0-100": 1,
  };
};
export default [
  // 左侧数据
  {
    url: "/api/getInfoMsg",
    method: "get",
    response: ({ body }: any) => {
      const dataMsg = getInfoMsg();
      // 没有用户则返回失败信息
      if (!dataMsg) {
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
        data: dataMsg,
      };
    },
  },
  // 图表数据
  {
    url: "/api/getEchartsData",
    method: "get",
    response: ({ body }: any) => {
      const dataMsg = {
        charts1: {
          yData: [
            {
              name: "标准生产性",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
            {
              name: "实际生产性",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
          ],
        },
        charts2: {
          yData: [
            {
              name: "能率A",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
            {
              name: "能率B",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
          ],
        },
        charts3: {
          yData: [
            {
              name: "生产数",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
            {
              name: "生产总时间",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
          ],
        },
        charts4: {
          yData: [
            {
              name: "出货数",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
            {
              name: "不良率",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
          ],
        },
        charts5: {
          yData: [
            {
              name: "不良数",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
            {
              name: "不良率",
              "data|30": [
                {
                  "date|+1": 1,
                  value: "@integer(0,500)",
                },
              ],
            },
          ],
        },
        chartsPie: {
          'data|5-10': [
            {
              name: "@name",
              value: "@integer(0,2000)"
            },
          ],
        },
      };
      // 没有用户则返回失败信息
      if (!dataMsg) {
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
        data: dataMsg,
      };
    },
  },
];
