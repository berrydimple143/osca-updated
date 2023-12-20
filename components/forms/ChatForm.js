import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { SendOutlined, CommentOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import $ from 'jquery';
import { Input, Form, message } from 'antd';

const suffix = (
  <CommentOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const ChatForm = ({ setShowChat, setShowLoginModal, getChats, onSend, chatMessages }) =>
{
    const initChat = () =>
    {
        const token = Cookies.get('token');
        const options = {
          broadcaster: 'pusher',
          key: process.env.NEXT_PUBLIC_PUSHER_KEY,
          cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
          authEndpoint: `${process.env.NEXT_PUBLIC_API}/broadcasting/auth`,
          forceTLS: true,
          encrypted: false,
          auth: {
              headers: {
                  Authorization: "Bearer " + token,
                  Accept: "application/json"
              }
          }
        }

        window.Echo = new Echo({
            ...options,
            client: new Pusher(options.key, options)
        });

        window.Echo.private('chat').listen('MessageSent', (e) => {
          getChats();
        });
    }

    useEffect(() => {
        $(document).ready(function() {
            $('#message-input').keyup(function (e) {
                if(e.keyCode === 13) {
                   $(this).val("");
                }
            });
        });
        if(Cookies.get('loggedIn'))
        {
          setShowLoginModal(false);
          setShowChat(true);
          initChat();
        } else
        {
          setShowChat(false);
          setShowLoginModal(true);
        }
    }, []);
    return (
        <div className="w-full flex flex-col h-200 bg-white">
            <div className="hidden sm:block sticky top-0 z-10">
              <div className="border-b border-gray-200 dark:border-gray-600">
                 <nav className="-mb-px flex bg-white dark:bg-gray-900" aria-label="Tabs"><a
                    onClick={() => setShowChat(false) } className="flex justify-between bg-indigo-800 text-gray-50 w-full py-4 px-3 text-center border-b-2 dark:text-gray-50  dark:border-gray-600 font-medium text-sm" aria-current="page">AltusTech IT Solutions Corp <CloseCircleOutlined style={{ fontSize: 22 }} /></a>
                 </nav>
              </div>
           </div>
           <section className="w-full flex scrollbar-thin hover:scrollbar-thumb-indigo-700 dark:hover:scrollbar-thumb-indigo-700 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-400 scrollbar-track-gray-50 overflow-y-scroll">
              <ul className="divide-y dark:divide-gray-700 divide-dotted divide-gray-200 w-full">
                { chatMessages && chatMessages.map((item, index) =>

                <li className="bg-gray-300 py-2 px-3" key={index}>
                    <div className="flex space-x-3">
                       <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt=""/>
                       <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                             <h3 className="text-sm font-medium">{`${item.usr?.first_name} ${item.usr?.last_name}`}</h3>
                             <p className="text-sm text-gray-500 dark:text-gray-200">
                              { item.cdate }
                             </p>
                          </div>
                          <div className="flex items-center justify-between">
                             <p className="text-sm text-gray-500">{item?.msg}</p>
                             <p className="text-sm bg-blue-500 p-1 rounded text-gray-50">public</p>
                          </div>
                       </div>
                    </div>
                 </li>

                )}

              </ul>
           </section>
           <section aria-labelledby="chat-footer" className="h-auto w-full sticky shadow-2xl bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-900 border-l dark:border-gray-800 border-gray-200 bottom-0 min-w-full flex-1 flex flex-col lg:order-last">
              <div>
                 <div className="px-3 py-3 h-full mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                          <Input maxLength={191} id="message-input" placeholder="Type your message here and press enter ..." size="large" suffix={suffix} onPressEnter={onSend} />
                      </div>
                 </div>
              </div>
           </section>
        </div>

    )
}

export default ChatForm;

