import React from 'react';
import { Form,Input,Select,Button, message, notification} from 'antd';
import { useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp_Page = () => {
  let history = useHistory();
  const [form] = Form.useForm();

  async function onFinish(values) {
    console.log('Received values of form: ', values);

    try {
        let res = await axios.get("http://127.0.0.1:8000/locations/2");
        console.log(res.data);
        let dormId = res.data.find(location => location.location_name === values.dorm).location_id;
        console.log(dormId);
        console.log(values.facebook_url);
        if(dormId !== undefined) {
            try {
                let res = await axios.post("http://127.0.0.1:8000/users", {
                    userName: values.username,
                    password: values.password,
                    gender: values.gender,
                    phoneNum: values.phone_number,
                    fbUrl: `https://${values.facebook_url}`,
                    dormID: dormId
                })
                if(res.status === 201) {
                    
                    (() => {
                        notification['success']({
                            message: "Registered Successfully!",
                            description: "You will be redirected to Login Page after 3 sceonds.",
                            placement: "topLeft",
                            duration: 2.2
                        })
                    })()

                    setTimeout(() => {
                        history.push("/login");
                    }, 3000)
                }
                return;
            } catch (error) {
                console.log(error.response.data);
                if(error.response.data.detail === 'User name already exists') message.error("Username already exists")
                return;
            }
        }
        else {
            console.log("Can't find corresponding location!");
            message.error("Can't find corresponding location!");
        }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <>
    <h1 className="signUp_title">Sign Up</h1>
    <div className="signUp_page">
        <Form 
        {...formItemLayout}
        form={form}
        // layout="vertical"
        name="register"
        onFinish={(values) => onFinish(values)}
        scrollToFirstError
        >
            <Form.Item
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password  placeholder="Confirmed Password"/>
            </Form.Item>

            <Form.Item
                name="facebook_url"
                label="Facebook_Url"
                tooltip="Please input valid FB-URL, so that other people can find you!"
                rules={[
                {
                    required: true,
                    message: 'Please input your Fb-url!',
                    whitespace: true,
                },
                ]}
            >
                <Input 
                    addonBefore="https://"
                    placeholder="facebook.com/yourname"
                />
            </Form.Item>


            <Form.Item
                name="phone_number"
                label="Phone Number"
                rules={[
                {
                    required: true,
                    message: 'Please input phone number!',
                },
                ]}
            >
                <Input placeholder="0912345678"/>
            </Form.Item>

            <Form.Item
                name="gender"
                label="Gender"
                rules={[
                {
                    required: true,
                    message: 'Please select gender!',
                },
                ]}
            >
                <Select placeholder="select your gender">
                <Option value="M">Male</Option>
                <Option value="F">Female</Option>
                <Option value="O">Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="dorm"
                label="Dorm"
                rules={[
                {
                    required: true,
                    message: 'Please select dorm!',
                },
                ]}
            >
                <Select placeholder="select your dorm">
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="????????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="????????????????????????">????????????</Option>
                <Option value="????????????????????????">????????????</Option>
                <Option value="maste?????????????????????r_3">?????????</Option>
                <Option value="????????????">????????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                <Option value="?????????">?????????</Option>
                </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className = "wide-form-button">
                    {/* Register */}
                    {/* Todo: ???????????????????????????message */}
                    {/* <Link to="/login">Sign Up</Link> */}
                    Sign Up
                </Button>
                Already have an Account?  <a href="/login">Login</a>
            </Form.Item>
        </Form>
    </div>

    </>
  );
};

export default SignUp_Page;
