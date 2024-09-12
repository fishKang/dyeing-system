import { history, Link, } from '@umijs/max';
import { Button, Form, Input, message, Popover, Progress, Row, Select, Space } from 'antd';
import type { Store } from 'antd/es/form/interface';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import useStyles from './style.style';
import { userRegister } from '@/services/ant-design-pro/api';

const FormItem = Form.Item;
const { Option } = Select;

const passwordProgressMap: {
  ok: 'success';
  pass: 'normal';
  poor: 'exception';
} = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};
const Register: FC = () => {
  const { styles } = useStyles();
  const [count, setCount]: [number, any] = useState(0);
  const [open, setVisible]: [boolean, any] = useState(false);
  const [prefix, setPrefix]: [string, any] = useState('86');
  const [popover, setPopover]: [boolean, any] = useState(false);
  const confirmDirty = false;
  let interval: number | undefined;

  const passwordStatusMap = {
    ok: (
      <div className={styles.success}>
        <span>强度：强</span>
      </div>
    ),
    pass: (
      <div className={styles.warning}>
        <span>强度：中</span>
      </div>
    ),
    poor: (
      <div className={styles.error}>
        <span>强度：太短</span>
      </div>
    ),
  };

  const [form] = Form.useForm();
  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );
  const onGetCaptcha = () => {
    let counts = 59;
    setCount(counts);
    interval = window.setInterval(() => {
      counts -= 1;
      setCount(counts);
      if (counts === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };
  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };
  // const { loading: submitting, run: register } = useRequest<{data: DYEING.Response}>(userRegister, {
  //   manual: true,
  //   onSuccess: (data) => {
  //     if (true) {
  //       message.success('注册成功！');
  //       history.push({
  //         pathname: `/user/register-result?account=${data.data?.name}`,
  //       });
  //     }
  //   },
  // });
  // const { loading: submitting, run: register } = useRequest<{data: DYEING.Response}>(userRegister, {
  //   manual: false,
  //   onSuccess: (data) => {
  //     if (data.returncode === '0000') {
  //       message.success('注册成功！');
  //       history.push({
  //         pathname: `/user/register-result?account=${data.data?.name}`,
  //       });
  //     }
  //   },
  // });
  const onFinish = async (values: Store) => {
    const data= await userRegister(values);
    if (data.returncode === '0000') {
      message.success('注册成功！');
      history.push({
        pathname: `/user/register-result?account=${data.data?.name}`,
      });
    }
  };
  const checkConfirm = (_: any, value: string) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('两次输入的密码不匹配!');
    }
    return promise.resolve();
  };
  const checkPassword = (_: any, value: string) => {
    const promise = Promise;
    // 没有值的情况
    if (!value) {
      setVisible(!!value);
      return promise.reject('请输入密码!');
    }
    // 有值的情况
    if (!open) {
      setVisible(!!value);
    }
    setPopover(!popover);
    if (value.length < 6) {
      return promise.reject('');
    }
    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }
    return promise.resolve();
  };
  const changePrefix = (value: string) => {
    setPrefix(value);
  };
  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();

    if (passwordStatus === 'ok') {
      return (
        <div className='progress-ok'>
          <Progress
            status={passwordProgressMap[passwordStatus]}
            strokeWidth={6}
            percent={value.length * 10 > 100 ? 100 : value.length * 10}
            showInfo={false}
          />
        </div>
      );
    } else if (passwordStatus === 'pass') {
      return (
        <div className='progress-pass'>
          <Progress
            status={passwordProgressMap[passwordStatus]}
            strokeWidth={6}
            percent={value.length * 10 > 100 ? 100 : value.length * 10}
            showInfo={false}
          />
        </div>
      );
    } else if (passwordStatus === 'poor') {
      return (
        <div className='progress-poor'>
          <Progress
            status={passwordProgressMap[passwordStatus]}
            strokeWidth={6}
            percent={value.length * 10 > 100 ? 100 : value.length * 10}
            showInfo={false}
          />
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className={styles.main}>
      <h3>注册</h3>
      <Form form={form} name="UserRegister" onFinish={onFinish}>
        <FormItem
          name="name"
          rules={[
            {
              required: true,
              message: '请输入登录用户名!',
            },
          ]}
        >
          <Input size="large" placeholder="登录用户名" />
        </FormItem>

        <Popover
          getPopupContainer={(node) => {
            if (node && node.parentNode) {
              return node.parentNode as HTMLElement;
            }
            return node;
          }}
          content={
            open && (
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                {passwordStatusMap[getPasswordStatus()]}
                {renderPasswordProgress()}
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  <span>请至少输入 6 个字符。请不要使用容易被猜到的密码。</span>
                </div>
              </div>
            )
          }
          overlayStyle={{
            width: 240,
          }}
          placement="right"
          open={open}
        >
          <FormItem
            name="password"
            className={
              form.getFieldValue('password') &&
              form.getFieldValue('password').length > 0 &&
              styles.password
            }
            rules={[
              {
                validator: checkPassword,
              },
            ]}
          >
            <Input size="large" type="password" placeholder="至少6位密码，区分大小写" />
          </FormItem>
        </Popover>
        <FormItem
          name="confirm"
          rules={[
            {
              required: true,
              message: '确认密码',
            },
            {
              validator: checkConfirm,
            },
          ]}
        >
          <Input size="large" type="password" placeholder="确认密码" />
        </FormItem>
        <FormItem
          name="phone"
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
          <Space.Compact style={{ width: '100%' }}>
            <Select
              size="large"
              value={prefix}
              onChange={changePrefix}
              style={{
                width: '30%',
              }}
            >
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>

            <Input size="large" placeholder="手机号" />
          </Space.Compact>
        </FormItem>
        <FormItem
          name="email"
          rules={[
            {
              required: true,
              
              message: '请输入邮箱地址!',
            },
            {
              type: 'email',
              message: '邮箱地址格式错误!',
            },
          ]}
        >
          <Input size="large" placeholder="邮箱" />
        </FormItem>
        <FormItem>
          <div className={styles.footer}>
            <Button
              size="large"
              // loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              <span>注册</span>
            </Button>
            <Link to="/user/login">
              <span>使用已有账户登录</span>
            </Link>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};
export default Register;
