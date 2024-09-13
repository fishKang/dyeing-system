declare namespace DYEING {
  type Response = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: API.CurrentUser;
  };
  type Channel = {
    id        ?:string;//`gorm:"primary_key;auto_increment;comment:主键" json:"id"`
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
    avatar?: string;
    password?: string;
    confirm?: string;
    autoLogin?: boolean;
    type?: string;
    phone?: string;
    email?: string;
    address?: string;
    notifyCount?: number;
    unreadCount?: number;
    access?: string;
  };
  type CustomerList = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: CustomerListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
  type CustomerListItem = {
    id        ?:string   ;//`gorm:"primary_key;auto_increment;comment:主键" json:"id"`
    name      ?:string   ;//`gorm:"size:30;not null;comment:客户名称" json:"name"`
    person_name?:string   ;//`gorm:"size:20;not null;comment:联系人姓名" json:"person_name"`
    phone     ?:string   ;//`gorm:"size:15;not null;comment:手机号" json:"phone"`
    email     ?:string   ;//`gorm:"size:30;comment:邮箱地址" json:"email"`
    address   ?:string   ;//`gorm:"size:100;not null;comment:联系住址" json:"address"`
    status    ?:number   ;// `gorm:"not null;comment:状态 1-正常，2-注销" json:"status"`
    bak       ?:string   ;//`gorm:"size:100;comment:备注" json:"bak"`
  }

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
    id?: number;
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
