import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import { toast } from "sonner";
import { useAddUserMutation } from "../../../redux/features/admin/userManagement.api";
import PHSelect from "../../../components/form/PHSelect";
import { departmentOptions } from "../../../constant/global";

const userDefaultValues = {
  name: {
    firstName: '',
    lastName: '',
  },
  email: '',
  userId: '',
  password: '',
  dept: "DS"
};

const CreateUser = () => {
  const [addUser] = useAddUserMutation()

  const onSubmit : SubmitHandler<FieldValues> = async (data) => {
    const userData = { 
      ...data
    }

    const result = await addUser(userData)

    if (result?.data?.success) {
      toast.success('User added successfully')
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
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={departmentOptions}
                name="dept"
                label="Department"
              />
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

export default CreateUser;
