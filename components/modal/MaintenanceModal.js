import React, { useState } from "react";
import { Input, Form, Space } from 'antd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function MaintenanceModal({
    children,
    setShowMedicineModal,
    showMedicineModal,
    onAddMedicineFinish,
    maintenanceForm,
    maintenanceEdit,
    clearForm,
    EditRoundedIcon
}) {
  return (
      <>
      {showMedicineModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-1 border-b border-solid border-slate-200 rounded-none bg-tertiary">
                  <h3 className="text-base text-white font-bold">* * * * * * Add Maintenance * * * * * *</h3>
                </div>
                <div className="relative p-6 flex-auto">
                    <Form
                        form={maintenanceForm}
                        layout="vertical"
                        onFinish={onAddMedicineFinish}
                    >
                        <div className="flex flex-wrap w-95 justify-left items-center">
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Medicine Name" name="medicine" rules={[{ required: true, message: 'Medicine Name is required.' }]}>
                                    <Input size="large" className="w-full" placeholder="Type a medicine name here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Dosage" name="dosage" rules={[{ required: false }]}>
                                    <Input size="large" className="w-full" placeholder="Type a dosage here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Quantity" name="quantity" rules={[{ required: false }]}>
                                    <Input size="large" className="w-full" placeholder="Type a quantity here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item>
                                    <Space>
                                        { !maintenanceEdit && (
                                        <button className="px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                            <AddCircleOutlineIcon /> ADD
                                        </button>
                                        )}
                                        { maintenanceEdit && (
                                        <button className="px-4 py-1 w-24 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                            <EditRoundedIcon /> EDIT
                                        </button>
                                        )}
                                        <button
                                            onClick={() => {
                                                setShowMedicineModal(false);
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

