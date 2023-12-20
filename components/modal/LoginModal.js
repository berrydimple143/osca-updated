import React, { useState } from "react";
import { Input, Form, Space } from 'antd';
import { SendOutlined, CloseSquareOutlined } from '@ant-design/icons';

export default function LoginModal({
    children,
    setShowLoginModal,
    showLoginModal,
    onLoginFinish
}) {
  return (
      <>
      {showLoginModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-md font-semibold">Sign in to your account first before you can start to chat.</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowLoginModal(false)}
                  >
                    <span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <CloseSquareOutlined />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                    <Form
                        layout="vertical"
                        onFinish={onLoginFinish}
                    >
                        <div className="flex flex-wrap w-90 justify-left items-center">
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Email is required.' }, { type: 'email', message: 'Invalid email address.' }, { max: 191, message: 'Email must be at most 191 characters long' }]}>
                                    <Input size="large" className="w-full" placeholder="Type your email here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required.' }]}>
                                    <Input.Password
                                      className="w-full"
                                      size="large"
                                      placeholder="Type your password here ..."
                                    />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item>
                                    <Space>
                                        <button className="px-4 py-1 w-32 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                            <Space size="middle"><SendOutlined className="animate-pulse" />Login</Space>
                                        </button>
                                        <button
                                            onClick={() => { setShowLoginModal(false) }} className="px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500">
                                            <Space size="middle">
                                                <CloseSquareOutlined className="animate-pulse" />Close
                                            </Space>
                                        </button>
                                    </Space>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

