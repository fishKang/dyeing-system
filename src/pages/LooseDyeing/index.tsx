import { PageContainer } from '@ant-design/pro-components';
import { Button, Col, Form, Grid, Input, Row, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

export type EduRecordType = {
  id?: string;//主键"json:"id"`
  recordid?: string;//主键"json:"id"`
  recordtype?: string;//记录类型"json:"record_type"`
  studentid?: string;//学生ID"json:"student_id"`
  studentname?: string;//学生姓名"json:"student_name"`
  studentsex?: string;//学生性别"json:"student_sex"`
  wearingstyle?: string;//助听设备佩戴方式"json:"wearing_style"`
  physiologicalage?: string;//生理年龄"json:"physiological_age"`
  hearingage?: string;//听觉年龄"json:"hearing_age"`
  normalcontent?: string;//常规内容"json:"normal_content"`
  normalremark?: string;//常规设备/玩具/图书/备注"json:"normal_remark"`
  hearingcontent?: string;//听能发展内容"json:"hearing_content"`
  hearingremark?: string;//听能发展设备/玩具/图书/备注"json:"hearing_remark"`
  spokencontent?: string;//言语内容"json:"spoken_content"`
  spokenremark?: string;//言语设备/玩具/图书/备注"json:"spoken_remark"`
  languagecontent?: string;//语言内容"json:"language_content"`
  languageremark?: string;//语言设备/玩具/图书/备注"json:"language_remark"`
  cognitioncontent?: string;//认知内容"json:"cognition_content"`
  cognitionremark?: string;//认知设备/玩具/图书/备注"json:"cognition_remark"`
  communicatecontent?: string;//沟通技能内容"json:"communicate_content"`
  communicateremark?: string;//沟通技能设备/玩具/图书/备注"json:"communicate_remark"`
  familyperformance?: string;//家长表现"json:"family_performance"`
  familyadvice?: string;//家庭康复建议"json:"family_advice"`
  familyrecord?: string;//家庭康复记录"json:"family_record"`
  schoolday?: string;//授课日期"json:"school_day"`
  teachername?: string;//授课教师"json:"teacher_name"`
  teacherid?: string;//授课教师ID"json:"teacher_id"`
  status?: string;//状态1-正常，2-注销"json:"status"`
  bak?: string;//备注"json:"bak"`
};


const QueryDyeList: React.FC<EduRecordType> = (props) => {
  return (
    <>
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
            <Col span={7}>
              <Form.Item<EduRecordType>
                label="RecordId"
                name="recordid"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item<EduRecordType>
                label="SchoolDay"
                name="schoolday"
                rules={[{ required: true, message: 'Please input your SchoolDay!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item<EduRecordType>
                label="TeacherName"
                name="teachername"
                rules={[{ required: true, message: 'Please input your TeacherName!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col offset={1} span={2}>
              <Button key="queryDetail" type="default">
                查询
              </Button>
            </Col>

          </Row>
          <Row>
            <Col span={8}>
              <Form.Item<EduRecordType>
                label="StudentName"
                name="studentname"
                rules={[{ required: true, message: 'Input your password!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item<EduRecordType>
                label="StudentSex"
                name="studentsex"
                rules={[{ required: true, message: 'Input your age!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item<EduRecordType>
                label="WearingsTyle"
                name="wearingstyle"
                rules={[{ required: true, message: 'Input your Sex!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="PhysiologicalAge"
                name="physiologicalage"
                rules={[{ required: true, message: 'Input your password!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="HearingAge"
                name="hearingage"
                rules={[{ required: true, message: 'Input your age!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="NormalContent"
                name="normalcontent"
                rules={[{ required: true, message: 'Input your NormalContent!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="NormalRemark"
                name="normalremark"
                rules={[{ required: true, message: 'Input your NormalRemark!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="HearingContent"
                name="hearingcontent"
                rules={[{ required: true, message: 'Input your HearingContent!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="HearingRemark"
                name="hearingremark"
                rules={[{ required: true, message: 'Input your HearingRemark!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="SpokenContent"
                name="spokencontent"
                rules={[{ required: true, message: 'Input your SpokenContent!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="SpokenRemark"
                name="spokenremark"
                rules={[{ required: true, message: 'Input your SpokenRemark!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="LanguageContent"
                name="languagecontent"
                rules={[{ required: true, message: 'Input your LanguageContent!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="LanguageRemark"
                name="languageremark"
                rules={[{ required: true, message: 'Input your LanguageRemark!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="CognitionContent"
                name="cognitioncontent"
                rules={[{ required: true, message: 'Input your CognitionContent!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="CognitionRemark"
                name="cognitionremark"
                rules={[{ required: true, message: 'Input your CognitionRemark!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="CommunicateContent"
                name="communicatecontent"
                rules={[{ required: true, message: 'Input your CommunicateContent!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<EduRecordType>
                label="CommunicateRemark"
                name="communicateremark"
                rules={[{ required: true, message: 'Input your CommunicateRemark!' }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item<EduRecordType>
                label="FamilyPerformance"
                name="familyperformance"
                rules={[{ required: true, message: 'Input your FamilyPerformance!' }]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item<EduRecordType>
                label="FamilyAdvice"
                name="familyadvice"
                rules={[{ required: true, message: 'Input your FamilyAdvice!' }]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item<EduRecordType>
                label="FamilyRecord"
                name="familyrecord"
                rules={[{ required: true, message: 'Input your FamilyRecord!' }]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </PageContainer>
    </>
  );
};

export default QueryDyeList;
