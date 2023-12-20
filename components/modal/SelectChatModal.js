import React, { useState } from "react";
import { Input, Form, Space } from 'antd';
import { CommentOutlined, CloseSquareOutlined } from '@ant-design/icons';

export default function SelectChatModal({
    children,
    setShowSelectChatModal,
    showSelectChatModal,
    onSelectFinish
}) {
  return (
      <>
      {showSelectChatModal ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">Please choose a chat option below.</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowSelectChatModal(false)}
                  >
                    <span className="text-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <CloseSquareOutlined />
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                      <div className="flex w-95 justify-around items-center gap-8">

                            <button
                                onClick={() => { onSelectFinish('member') }} className="p-2 w-72 border rounded-none bg-blue-500 uppercase text-lg text-white hover:bg-yellow-500">
                                <Space size="middle" className="border border-dotted px-3 py-2">
                                    <CommentOutlined className="animate-pulse text-5xl" />Chat as Member
                                </Space>
                            </button>

                            <button
                                onClick={() => { onSelectFinish('guest') }} className="p-2 w-72 border rounded-none bg-green-500 uppercase text-lg text-white hover:bg-yellow-500">
                                <Space size="middle" className="border border-dotted px-3 py-2">
                                    <CommentOutlined className="animate-pulse text-5xl" />Chat as Guest
                                </Space>
                            </button>

                      </div>
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

