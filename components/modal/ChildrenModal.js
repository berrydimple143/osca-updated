import React, { useState, useEffect } from "react";
import { Input, Form, Space } from 'antd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function ChildrenModal({
    children,
    childrenForm,
    setShowChildrenModal,
    showChildrenModal,
    onAddChildFinish,
    editChildren,
    clearForm,
    EditRoundedIcon
}) {

  return (
      <>
      {showChildrenModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-1 border-b border-solid border-slate-200 rounded-none bg-tertiary">
                  <h3 className="text-base text-white font-bold">* * * * * * Add Child * * * * * *</h3>
                </div>
                <div className="relative p-6 flex-auto">
                    <Form
                        form={childrenForm}
                        layout="vertical"
                        onFinish={onAddChildFinish}
                    >
                        <div className="flex flex-wrap w-98 justify-left items-center">
                            <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                                <Form.Item label="Full Name" name="full_name" rules={[{ required: true, message: 'Full Name is required.' }]}>
                                    <Input size="large" className="w-full" placeholder="Type a fullname here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                                <Form.Item label="Occupation" name="occupation" rules={[{ required: true, message: 'Occupation is required.' }]}>
                                    <Input size="large" className="w-full" placeholder="Type an occupation here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                                <Form.Item label="Income" name="income" rules={[{ required: true, message: 'Income is required.' }]}>
                                    <Input size="large" className="w-full" placeholder="Type an income here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                                <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Age is required.' }]}>
                                    <Input size="large" type="number" className="w-full" placeholder="Type an age here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                                <Form.Item label="Dependency" name="dependency" rules={[{ required: false }]}>
                                    <Input size="large" className="w-full" placeholder="Type a dependency here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item>
                                    <Space>
                                        { !editChildren && (
                                        <button className="px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                            <AddCircleOutlineIcon /> ADD
                                        </button>
                                        )}
                                        { editChildren && (
                                        <button className="px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                            <EditRoundedIcon /> EDIT
                                        </button>
                                        )}
                                        <button
                                            onClick={() => {
                                                setShowChildrenModal(false);
                                                clearForm();
                                            }} className="px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500">
                                                <CloseIcon />  &nbsp;Close
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

