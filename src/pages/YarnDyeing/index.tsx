import { PageContainer, ProCard, ProForm, ProFormDatePicker, ProFormDateRangePicker, ProFormDigit, ProFormGroup, ProFormSelect, ProFormSwitch, ProFormText, ProFormTextArea, ProTable } from "@ant-design/pro-components";
import { Button, Col, Form, Input, Row } from "antd";
import ProcardTable from "./components/procardTable";
import EditableTable2 from "./components/editableTable2";

const QueryYarnList: React.FC = () => {
  return (
    <PageContainer
      content="欢迎使用 ProLayout 组件"
      footer={[
        <Button key="rest">重置</Button>,
        <Button key="submit" type="primary">
          提交
        </Button>,
      ]}
    >
      <ProCard
        title="默认尺寸"
        bordered
        tooltip="这是提示"
      >

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
                2024-09-20
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
                label="客户名"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                明昊
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="totalAmount"
                label="投缸量KG"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                30
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="colorName"
                label="色名"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                大红
              </ProFormText>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                name="colorNo"
                label="色号"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                15
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="machineNo"
                label="缸号"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                10
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="planNo"
                label="计划号"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
               SR20-001
              </ProFormText>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <ProFormText
                name="materials"
                label="原料品种"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                15
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="explain"
                label="工艺及说明"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
                10
              </ProFormText>
            </Col>
            <Col span={8}>
              <ProFormText
                name="makeTable"
                label="制表"
                // tooltip="最长为 24 位"
                // placeholder="请输入名称"
                >
               SR20-001
              </ProFormText>
            </Col>
          </Row>
        </ProForm>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard bordered layout="center">
          Auto
        </ProCard>
        <ProCard colSpan="30%" bordered>
          colSpan - 30%
        </ProCard>
      </ProCard>

      <ProcardTable></ProcardTable>
    </PageContainer>
  );
};

export default QueryYarnList;