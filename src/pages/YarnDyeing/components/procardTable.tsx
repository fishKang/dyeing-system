import { EditableProTable, ProCard, ProForm, ProFormDatePicker, ProFormDateRangePicker, ProFormDigit, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import EditableTable2 from './editableTable2';
import EditableTable1 from './editableTable';
import BaseForm from './baseForm';

const ProcardTable: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(false);
      }}
    >
      <ProCard
        title="复杂切分"
        extra="2019年9月28日"
        bordered
        headerBordered
        split={responsive ? 'horizontal' : 'vertical'}
      >


        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split={responsive ? 'horizontal' : 'vertical'}>
              <ProCard title="昨日全部流量">123</ProCard>
              <ProCard title="本月累计流量">234</ProCard>
              <ProCard title="今年累计流量">345</ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="运行中试验">12/56</ProCard>
              <ProCard title="历史试验总数">134 个</ProCard>
            </ProCard>
          </ProCard>
          <ProCard title="流量趋势">
            <div>图表</div>
            <div>图表</div>
            <div>图表</div>
            <div>图表</div>
            <div>图表</div>
          </ProCard>
        </ProCard>
        <ProCard title="流量占用情况">右侧内容</ProCard>
      </ProCard>

      <ProCard split="vertical" bordered>
        <ProCard >编号:123</ProCard>
        <ProCard >日期:234</ProCard>
        <ProCard >散染</ProCard>
      </ProCard>
      <ProCard split="vertical">
        <ProCard colSpan="20%">
          <BaseForm></BaseForm>
        </ProCard>
        <ProCard colSpan="5%">
          <div>料</div>
          <div>单</div>
          <div>明</div>
          <div>细</div>
        </ProCard>
        <ProCard colSpan="40%">
          {/* <EditableTable1></EditableTable1> */}
          <EditableTable2></EditableTable2>
        </ProCard>
        <ProCard colSpan="35%" split="horizontal">
          <ProCard >日期:234</ProCard>
          <ProCard >散染</ProCard>
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};

export default ProcardTable;