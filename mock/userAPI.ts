import Mock from "mockjs";

const list = Mock.mock({
  'users|16': [
    {
      "id": '@guid()',
      "name": '@name()',
      "nickName": '@name()',
      "gender|1": ["男", "女"]
    }
  ]
});

export default {
  "GET /api/v1/getProfile": (req: any, res: any) => {
    res.json({
      success: true,
      data: Mock.mock({
        'id': '@guid()',
        'avatar': '@image(48x48)',
        'name': '我是正经人',
        'mobile': '15468130112',
        'email': '@email()',
        'roleId': '@guid()',
        'roleName': '@ctitle()',
        'nickName|1': [
          'chrome',
          'firfox',
          'edge'
        ],
        'sex|1': [1,2],
        'age|1-100': 100,
        'roles|1-6': [
          {
            'roleId': '@guid()',
            'roleName': '@ctitle()',
          }
        ],
      }),
      errorCode: 0,
    })
  },

  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: list.users },
      errorCode: 0,
    });
  },

  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
