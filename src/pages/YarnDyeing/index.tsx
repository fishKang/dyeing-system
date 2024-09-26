import { EditableProTable, PageContainer, ProCard, ProColumns, ProForm, ProFormDigit, ProFormText } from "@ant-design/pro-components";
import { Col, Row } from "antd";
import { FormattedMessage, useIntl } from "@umijs/max";
import { useState } from "react";
import { getNowDate } from "@/services/ant-design-pro/api";

const columns: ProColumns<DYEING.MaterialsDetail>[] = [
  {
    title: '染料、助剂名称',
    dataIndex: 'dye_name',
    width: '30%',
  },
  {
    title: '%用量',
    dataIndex: 'rate',
  },
  {
    title: '磅出量（克）',
    dataIndex: 'amount',
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

const defaultData: DYEING.MaterialsDetail[] = [

];


const QueryYarnList: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id).filter((id): id is number => id !== undefined),

  );
  const [materialsDetail, setMaterialsDetail] = useState<React.Key[]>();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const intl = useIntl();
  return (
    <PageContainer
    // content="欢迎使用 ProLayout 组件"
    // footer={[
    //   <Button key="rest">重置</Button>,
    //   <Button key="submit" type="primary">
    //     提交
    //   </Button>,
    // ]}
    >
      <ProCard bordered >

        <ProForm layout='horizontal'>
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                name="id"
                label="编号"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                readonly>
                Y0000000015
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="date"
                label="日期"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                readonly>
                {getNowDate()}
              </ProFormText>
            </Col>
            <Col span={8}>
              <div>
                散染
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                name="customer"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.customer',
                  defaultMessage: '公司名称',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormDigit
                name="total_amount"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.totalAmount',
                  defaultMessage: '投缸量KG',
                })}
                width="md"
                fieldProps={{ defaultValue: 0 ,
                  onChange: (value) => {
                    if (value !== null) {
                      setTotalAmount(value);
                    }
                    
                  },
                }}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                  },
                ]}
                
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="color_name"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.colorName',
                  defaultMessage: '色名',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                name="color_no"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.colorNo',
                  defaultMessage: '色号',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="machine_no"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.machineNo',
                  defaultMessage: '缸号',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="plan_no"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.planNo',
                  defaultMessage: '计划号',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                name="materials"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.materials',
                  defaultMessage: '原料品种',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="explain"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.explain',
                  defaultMessage: '工艺及说明',
                })}
                width="md"
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.common.input.notEmpty.Rules"
                        defaultMessage="该字段不能为空!"
                      />
                    ),
                    min: 1,
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              <ProFormText
                name="make_table"
                label={intl.formatMessage({
                  id: 'pages.yarnDyeing.input.makeTable',
                  defaultMessage: '制表',
                })}
                width="md"
              />
            </Col>
          </Row>

          <ProForm.Item
            // label="数组数据"
            name="dataSource"
            initialValue={defaultData}
            trigger="onValuesChange"
          >
            <EditableProTable<DYEING.MaterialsDetail>
              rowKey="id"
              toolBarRender={false}
              columns={columns}
              recordCreatorProps={{
                newRecordType: 'dataSource',
                position: 'bottom',
                record: () => ({
                  id: Date.now(),
                  rate: 0,
                  amount: 0,
                }),
              }}
              editable={{
                type: 'multiple',
                editableKeys,
                onChange: setEditableRowKeys,
                actionRender: (row, _, dom) => {
                  if (row.rate !== undefined && row.rate !== 0) {
                    setRate(row.rate)
                    setAmount(row.rate*totalAmount*1000)
                    row.amount=row.rate*totalAmount*1000
                  }
                  return [dom.delete];
                },
              }}
            />
          </ProForm.Item>
        </ProForm>
      </ProCard>

    </PageContainer>
  );
};

export default QueryYarnList;