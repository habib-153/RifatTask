import { Button, Col, Divider, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { useAddAdminMutation } from "../../../redux/features/admin/userManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const userDefaultValues = {
  name: {
    firstName: 'admin',
    middleName: '',
    lastName: '1',
  },
  email: 'abc@gmail.com',
  userId: 'admin002',
  password: 'admin123',
};

const CreateAdmin = () => {
  const [addAdmin] = useAddAdminMutation()

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    const userData = { 
      ...data
    }
    
    const result = await addAdmin(userData)

    if (result?.data?.success) {
      toast.success('Admin Created successfully')
    }else{
      toast.error("Something went wrong")
    }
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={userDefaultValues}>
          <Divider>Personal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="userId" label="UserId" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="password" label="Password" />
            </Col>
          </Row>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
