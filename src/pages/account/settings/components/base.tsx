import { UploadOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormDependency,
  ProFormFieldSet,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useModel, useRequest } from '@umijs/max';
import { Button, Input, message, Upload } from 'antd';
import React from 'react';
import { queryCity, queryCurrent, queryProvince } from '../service';
import useStyles from './index.style';
import { updateUserDetail } from '@/services/ant-design-pro/api';
import Password from 'antd/es/input/Password';
import form from 'antd/es/form';

const validatorPhone = (rule: any, value: string[], callback: (message?: string) => void) => {
  if (!value[0]) {
    callback('Please input your area code!');
  }
  if (!value[1]) {
    callback('Please input your phone number!');
  }
  callback();
};

const BaseView: React.FC = () => {
  const { initialState } = useModel("@@initialState");
  const { styles } = useStyles();

  const checkConfirm = (password: string, confirm: string) => {
    const promise = Promise;
    if (password !== confirm) {
      return promise.reject('两次输入的密码不匹配!');
    }
    return promise.resolve();
  };

  // 头像组件 方便以后独立，增加裁剪之类的功能
  const AvatarView = ({ avatar }: { avatar: string }) => (
    <>
      <div className={styles.avatar_title}>头像</div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className={styles.button_view}>
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </div>
      </Upload>
    </>
  );
  // const { data: currentUser, loading } = useRequest(() => {
  //   return initialState?.user;
  // });
  let currentUser = initialState?.user;
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };
  const handleFinish = async (values: DYEING.User) => {
    if (values.password !== values.confirm) {
      message.error('两次输入的密码不匹配!');
    } else {
      const msg = await updateUserDetail(values);
      if (msg.returncode != '0000') {
        message.error('更新基本信息失败');
      }
      message.success('更新基本信息成功');
    }
  };
  return (
    <div className={styles.baseView}>
      {false ? null : (
        <>
          <div className={styles.left}>
            <ProForm
              layout="vertical"
              onFinish={handleFinish}
              submitter={{
                searchConfig: {
                  submitText: '更新基本信息',
                },
                render: (_, dom) => dom[1],
              }}
              initialValues={{
                ...currentUser,
                phone: currentUser?.phone,
                name: currentUser?.name,
                password: currentUser?.password,
                email: currentUser?.email,
                address: currentUser?.address,
              }}
              hideRequiredMark
            >
              <ProFormText
                width="md"
                name="name"
                label="用户名"

                rules={[
                  {
                    required: true,
                    message: '请输入您的昵称!',
                  },
                ]}
                disabled />
              <ProFormText
                width="md"
                name="password"
                label="密码"

                rules={[
                  {
                    required: true,
                    message: '请输入您的密码!',
                  },
                ]}
              >
                <Input type="password" placeholder="请输入密码"></Input>
              </ProFormText>
              <ProFormText
                width="md"
                name="confirm"
                label="确认密码"

                rules={[
                  {
                    required: true,
                    message: '请输入您的确认密码!',
                  },
                ]}
              >
                <Input type="password" placeholder="请输入确认密码"></Input>
              </ProFormText>
              <ProFormText
                name="phone"
                label="联系电话"
                rules={[
                  {
                    required: true,
                    message: '请输入手机号!',
                  },
                  {
                    pattern: /^\d{11}$/,
                    message: '手机号格式错误!',
                  },
                ]}
              >
              </ProFormText>
              <ProFormText
                width="md"
                name="email"
                label="邮箱"
                rules={[
                  {
                    required: true,
                    message: '请输入您的邮箱!',
                  },
                ]}
              />
              <ProFormText
                width="md"
                name="address"
                label="联系地址"
                rules={[
                  {
                    required: true,
                    message: '请输入您的联系地址!',
                  },
                ]}
              >
              </ProFormText>
            </ProForm>
          </div>
          <div className={styles.right}>
            <AvatarView avatar={getAvatarURL()} />
          </div>
        </>
      )}
    </div>
  );
};
export default BaseView;
