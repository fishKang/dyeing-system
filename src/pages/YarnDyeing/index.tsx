import { PageContainer, ProTable } from "@ant-design/pro-components";
import { Button, Col, Form, Input, Row } from "antd";

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
<Form name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          // style={{ maxWidth: 1000 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          layout="horizontal"
          size="large"

        >
          <Row>
            {/* <Col span={7}>
              <Form.Item<API.AddDyeing>
                label="客户名"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item<API.AddDyeing>
                label="电话"
                name="phone"
                rules={[{ required: true, message: 'Please input your SchoolDay!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item<API.AddDyeing>
                label="公司"
                name="company"
                rules={[{ required: true, message: 'Please input your TeacherName!' }]}
              >
                <Input />
              </Form.Item>
            </Col> */}
            <Col offset={1} span={2}>
              <Button key="queryDetail" type="default">
                查询
              </Button>
            </Col>

          </Row>
          </Form>
    </PageContainer>
  );
};

export default QueryYarnList;