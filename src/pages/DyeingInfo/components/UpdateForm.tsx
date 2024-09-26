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
} & Partial<API.DyeListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<API.DyeListItem>;
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
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.basicConfig',
          defaultMessage: '基本信息',
        })}
      >
        <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'pages.searchTable.dyeingName',
            defaultMessage: '染料、助剂名称',
          })}
          width="md"

          // rules={[
          //   {
          //     required: true,
          //     message: (
          //       <FormattedMessage
          //         id="pages.searchTable.updateForm.ruleName.nameRules"
          //         defaultMessage="请输入规则名称！"
          //       />
          //     ),
          //   },
          // ]}
        />
        <ProFormDigit
          name="total_amount"
          width="md"
          label={intl.formatMessage({
            id: 'pages.searchTable.updateForm.creaseAmount',
            defaultMessage: '新增数量',
          })}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          company: props.values.company,
          desc: props.values.company,
          address: props.values.address,
          phone: props.values.phone,
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.companyConfig',
          defaultMessage: '公司信息',
        })}
      >
        <ProFormText
          name="company"
          label={intl.formatMessage({
            id: 'pages.yarnDyeing.input.customer',
            defaultMessage: '客户名',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.updateForm.company.nameRules"
                  defaultMessage="请输入公司名称！并大于1个字符!"
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
                  id="pages.searchTable.updateForm.company.addressRules"
                  defaultMessage="请输入公司地址！并大于1个字符!"
                />
              ),
              min: 1,
            },
          ]}
        />
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
                  id="pages.searchTable.updateForm.company.phoneRules"
                  defaultMessage="请输入公司联系方式！并大于1个字符!"
                />
              ),
              min: 1,
            },
          ]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
