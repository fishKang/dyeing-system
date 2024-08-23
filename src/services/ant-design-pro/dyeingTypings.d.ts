declare namespace DYEING {
  type Channel = {
    id        ?:number;//`gorm:"primary_key;auto_increment;comment:主键" json:"id"`
    serialnum ?:string;//`gorm:"unique;size:20;not null;comment:请求编号" json:"serialnum"`
    zoneno    ?:string;//`gorm:"size:10;not null;comment:地区号" json:"zoneno"`
    user      ?:string;//`gorm:"size:50;comment:用户名" json:"user"`
    service   ?:string;//`gorm:"size:50;not null;comment:服务名" json:"service"`
    method    ?:string;//`gorm:"size:50;not null;comment:方法名" json:"method"`
    request   ?:string;//`gorm:"size:200;not null;comment:入参" json:"request"`
    response  ?:string;//`gorm:"size:500;not null;comment:出参" json:"response"`
    workdate  ?:string;//`gorm:"size:10;not null;comment:调用日期" json:"workdate"`
    worktime  ?:string;//`gorm:"size:8;not null;comment:调用时间" json:"worktime"`
  }
  type User = {
    id?: string;
    name?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
    phone?: string;
    email?: string;
    address?: string;
    notifyCount?: number;
    unreadCount?: number;
    access?: string;
  };
  type LoginRequest={
    channel?:Channel;
    user?:User;
  }
  type LoginResponse = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: User;
  };

  type DyeList = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: DyeListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type DyeListItem = {
    key?: number;
    name?: string;
    total_amount?: number;
    last_amount?: number;
    phone?: string;
    company?: string;
    address?: string;
    status?: number;
    updatedAt?: string;
    current?: number;
    pageSize?: number;
  };
  type LoginRequest={
    channel?:Channel;
    user?:User;
  }
  type DyeResponse = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: API.DyeList;
  };
  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type getFakeCaptchaParams = {
    /** 手机号 */
    phone?: string;
  };
}
