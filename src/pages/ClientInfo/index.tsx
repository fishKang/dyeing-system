import { addCustomerDetail, addDyeDetail, addRule, queryCustomerList, queryDyeList2, removeRule, updateCustomerDetail, updateDyeDetail, updateRule } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormDigit,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useModel } from '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (customer: DYEING.CustomerListItem,user:DYEING.User|undefined) => {
  const hide = message.loading('正在添加');
  try {
    const msg = await addCustomerDetail(customer,user);
    hide();
    if (msg.returncode === '0000') {
      message.success('添加成功');
      return true;
    }else{
      message.error('添加失败，请重试!');
      return false;
    }
   
  } catch (error) {
    hide();
    message.error('添加失败，请重试!');
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (customer: DYEING.CustomerListItem, user: DYEING.User) => {
  const hide = message.loading('Configuring');
  try {
    const msg = await updateCustomerDetail(customer,user);
    hide();
    if (msg.returncode === '0000') {
      message.success('修改成功');
      return true;
    }else{
      message.error('修改失败，请重试!');
      return false;
    }
  } catch (error) {
    hide();
    message.error('修改失败，请重试!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: DYEING.CustomerListItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await removeRule({
      key: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<DYEING.CustomerListItem>();
  const [selectedRowsState, setSelectedRows] = useState<DYEING.CustomerListItem[]>([]);
  const { initialState, loading, error, refresh, setInitialState } = useModel("@@initialState");
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<DYEING.CustomerListItem>[] = [
    {
      title: <FormattedMessage id="pages.searchTable.customerName" defaultMessage="客户名称" />,
      dataIndex: 'name',
      // tip: 'The rule name is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="pages.searchTable.personName" defaultMessage="联系人姓名" />,
      dataIndex: 'person_name',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.searchTable.phone" defaultMessage="联系方式" />,
      dataIndex: 'phone',
      sorter: true,
      hideInForm: true,
    },
    {
      title: <FormattedMessage id="pages.searchTable.email" defaultMessage="邮箱" />,
      dataIndex: 'email',
      sorter: true,
      hideInForm: true,
    },
    {
      title: <FormattedMessage id="pages.searchTable.address" defaultMessage="公司地址" />,
      dataIndex: 'address',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.searchTable.status" defaultMessage="状态" />,
      dataIndex: 'status',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        1: {
          text: <FormattedMessage id="pages.searchTable.nameStatus.normal" defaultMessage="正常" />,
          status: 'Processing',
        },
        2: {
          text: <FormattedMessage id="pages.searchTable.nameStatus.cancel" defaultMessage="注销" />,
          status: 'Success',
        },
      },
    },
    {
      title: <FormattedMessage id="pages.searchTable.remark" defaultMessage="备注" />,
      dataIndex: 'bak',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.searchTable.modify" defaultMessage="修改" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.searchTable.modify" defaultMessage="修改" />
        </a>,
      ],
    },
  ];
  
  return (
    <PageContainer>
      <ProTable<DYEING.CustomerListItem, DYEING.User>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={queryCustomerList}
        columns={columns}
        // rowSelection={{
        //   onChange: (_, selectedRows) => {
        //     setSelectedRows(selectedRows);
        //   },
        // }}
      />
      {/* {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
              &nbsp;&nbsp;
              <span>
                <FormattedMessage
                  id="pages.searchTable.totalServiceCalls"
                  defaultMessage="Total number of service calls"
                />{' '}
                {selectedRowsState.reduce((pre, item) => pre + item.key!, 0)}{' '}
                <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万" />
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )} */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.newCustomer',
          defaultMessage: '新增客户信息',
        })}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as DYEING.CustomerListItem,initialState?.user as DYEING.User);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
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
       
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value as DYEING.CustomerListItem,initialState?.user as DYEING.User);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<DYEING.CustomerListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<DYEING.CustomerListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
