// @ts-ignore
/* eslint-disable */
// import { request } from '@umijs/max';

import { request } from '@/.umi/plugin-request/request';
import { nanoid } from 'nanoid';

/** 获取当前的用户 GET /api/currentUser */
// export async function currentUser(options?: { [key: string]: any }) {
//   return request<{
//     data: API.CurrentUser;
//   }>('/api/currentUser', {
//     method: 'GET',
//     ...(options || {}),
//   });
// }
/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(body: API.CurrentUser,options?: { [key: string]: any }) {
  return request<API.Response>('/api/user/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "service": "IDmsServiceARS",
        "method": "userLogin",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        body
      }
    },
  });
}
/** 获取当前的用户 GET /api/currentUser */
export async function getUser(body: API.CurrentUser, options?: { [key: string]: any }) {
  return request<API.Response>('/api/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "service": "IDmsServiceARS",
        "method": "userLogin",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "user": {
        body
      }
    },
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.UserLogin, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 登录接口 POST /api/login/account */
export async function userLogin(body: DYEING.User, options?: { [key: string]: any }) {
  return request<API.Response>('/api/user/userLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": body.name,
        "service": "IDmsServiceARS",
        "method": "userLogin",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        ...(body || {}),
      }
    },
  });
}
function getNowDate() {
  const date = new Date();
  let month: string | number = date.getMonth() + 1;
  let strDate: string | number = date.getDate();

  if (month <= 9) {
    month = "0" + month;
  }

  if (strDate <= 9) {
    strDate = "0" + strDate;
  }

  return date.getFullYear() + "-" + month + "-" + strDate;
}
/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    data: {
      method: 'update',
      ...(options || {}),
    },
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    data: {
      method: 'post',
      ...(options || {}),
    },
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'POST',
    data: {
      method: 'delete',
      ...(options || {}),
    },
  });
}
export async function queryDyeList(dye: DYEING.DyeListItem,user:DYEING.User) {
  return request<DYEING.DyeList>('/api/dye/queryDyeList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "queryDyeList",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        "id": dye.id,
        "name": dye.name,
        "phone": dye.phone,
        "address": dye.address,
        "status": dye.status,
      }
    },
  });
}

export async function updateDyeDetail(dye: DYEING.DyeListItem,user:DYEING.User|undefined) {
  return request<DYEING.DyeList>('/api/dye/updateDyeDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "updateDyeDetail",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        "id": dye.id,
        "name": dye.name,
        "total_amount": dye.total_amount,
        "phone": dye.phone,
        "company": dye.company,
        "address": dye.address,
        "status": dye.status,
        // "user":(await getInitialState()).currentUser?.name
      }
    },
  });
}
/** 新建规则 POST /api/rule */
export async function addDyeDetail(dye: API.DyeListItem,user:DYEING.User|undefined) {
  return request<DYEING.DyeList>('/api/dye/addDyeDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "addDyeDetail",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        "name": dye.name,
        "total_amount": dye.total_amount,
        "phone": dye.phone,
        "company": dye.company,
        "address": dye.address,
        "status": dye.status,
      }
    },
  });
}

export async function queryCustomerList(body: DYEING.CustomerListItem,user:DYEING.User) {
  return request<DYEING.CustomerList>('/api/customer/queryCustomerList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user.name,
        "service": "IDmsServiceARS",
        "method": "queryCustomerList",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        "id": body.id,
        "name": body.name,
        "person_name": body.person_name,
        "phone": body.phone,
        "email": body.email,
        "address": body.address,
        "status": body.status,
        // "user":(await getInitialState()).currentUser?.name
      }
    },
  });
}

/** 新建规则 POST /api/rule */
export async function addCustomerDetail(customer: DYEING.CustomerListItem,user:DYEING.User|undefined) {
  return request<DYEING.CustomerList>('/api/customer/addCustomerDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "addCustomerDetail",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
      "data": {
        "name": customer.name,
        "person_name": customer.person_name,
        "phone": customer.phone,
        "email": customer.email,
        "address": customer.address,
        "status": customer.status,
        "bak": customer.bak,
      }
    },
  });
}

export async function updateCustomerDetail(customer: DYEING.CustomerListItem,user:DYEING.User|undefined) {
  return request<DYEING.CustomerList>('/api/customer/updateCustomerDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "updateCustomerDetail",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
     "data": {
        "name": customer.name,
        "person_name": customer.person_name,
        "phone": customer.phone,
        "email": customer.email,
        "address": customer.address,
        "bak": customer.bak,
      }
    },
  });
}

export async function userRegister(user:DYEING.User) {
  return request<DYEING.Response>('/api/user/addUserDetail', {
    method: 'POST',
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "addUserDetail",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
     "data": {
        "name": user.name,
        "password": user.password,
        "phone": user.phone,
        "email": user.email,
      }
    },
  });
}

export async function updateUserDetail(user:DYEING.User) {
  return request<DYEING.Response>('/api/user/updateUserDetail', {
    method: 'POST',
    data: {
      "channel": {
        "serialnum": nanoid(),
        "zoneno": "200",
        "user": user?.name,
        "service": "IDmsServiceARS",
        "method": "addUserDetail",
        "department": "开发",
        "workdate": getNowDate(),
        "worktime": new Date().toTimeString().substring(0, 8)
      },
     "data": {
        "name": user.name,
        "password": user.password,
        "phone": user.phone,
        "email": user.email,
        "address": user.address,
      }
    },
  });
}