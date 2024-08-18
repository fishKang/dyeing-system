declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
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

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type UserLogin = {
    name?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type Response = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: API.CurrentUser;
  };

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type ruleParams = {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  };
  type DyeResponse = {
    returncode?: string;
    returnmsg?: string;
    returninfo?: string;
    data?: API.DyeList;
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
}
