import { ProFormDigit, ProFormText, StepsForm } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<DYEING.CustomerListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<DYEING.CustomerListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.searchTable.updateForm.ruleConfig',
              defaultMessage: '规则配置',
            })}
            open={props.updateModalOpen}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          desc: props.values.name,
          person_name: props.values.person_name,
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.basicConfig',
          defaultMessage: '基本信息',
        })}
      >
       <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'pages.searchTable.customerName',
            defaultMessage: '客户名称',
          })}
          width="md"

          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.customer.nameRules"
                  defaultMessage="客户名称为必填项"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="person_name"
          label={intl.formatMessage({
            id: 'pages.searchTable.personName',
            defaultMessage: '联系人姓名',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.customer.personNameRules"
                  defaultMessage="请输入联系人姓名！并大于1个字符!"
                />
              ),
              min: 1,
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          email: props.values.email,
          bak: props.values.bak,
          address: props.values.address,
          phone: props.values.phone,
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.companyConfig',
          defaultMessage: '公司信息',
        })}
      >
         <ProFormText
          name="phone"
          label={intl.formatMessage({
            id: 'pages.searchTable.phone',
            defaultMessage: '联系方式',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.customer.phoneRules"
                  defaultMessage="请输入公司联系方式！并大于1个字符!"
                />
              ),
              min: 1,
            },
          ]}
        />
         <ProFormText
          name="email"
          label={intl.formatMessage({
            id: 'pages.searchTable.email',
            defaultMessage: '邮箱',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.customer.emailRules"
                  defaultMessage="请输入邮箱！并大于1个字符!"
                />
              ),
              min: 1,
            },
          ]}
        />
        <ProFormText
          name="address"
          label={intl.formatMessage({
            id: 'pages.searchTable.address',
            defaultMessage: '公司地址',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.customer.addressRules"
                  defaultMessage="请输入公司地址！并大于1个字符!"
                />
              ),
              min: 1,
            },
          ]}
        />
         <ProFormText
          name="bak"
          label={intl.formatMessage({
            id: 'pages.searchTable.remark',
            defaultMessage: '备注',
          })}
          width="md"
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
