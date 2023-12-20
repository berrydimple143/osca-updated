import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { message } from 'antd';
import Cookies from 'js-cookie';
import Footer from '../front/parts/Footer';
import DirectContact from '../front/parts/DirectContact';
import ChatForm from '../forms/ChatForm';
import PublicChatForm from '../forms/PublicChatForm';
import LoginModal from '../modal/LoginModal';
import SelectChatModal from '../modal/SelectChatModal';
import Navbar from '../front/parts/Navbar';
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons';
import { login } from '../../services/authService';
import { sendMessage, getMessages, getPublicMessages, sendPublicMessage, getAdminToken } from '../../services/chatService';
import { chatDate } from '../../services/helperService';

const SiteLayout = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [showPublicChat, setShowPublicChat] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSelectChatModal, setShowSelectChatModal] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [publicChatMessages, setPublicChatMessages] = useState([]);
  const router = useRouter();

  const onClick = () =>
  {
    setShowChat(false);
    setShowPublicChat(true);
  }

  const onSend = async (event) =>
  {
      try
      {
          const data = await sendMessage(event.target.value);
          if(data.status === "success") {
            message.success("Message sent successfully.");
          }
      } catch (error)
      {
          console.log(error);
          message.error("Something went wrong.");
      }
  }

  const onPublicSend = async (event) =>
  {
      try
      {
          const data = await sendPublicMessage(event.target.value);
          if(data.status === "success") {
            message.success("Message sent successfully.");
          }
      } catch (error)
      {
          console.log(error);
          message.error("Something went wrong.");
      }
  }

  const onLoginFinish = async (values) =>
  {
      props.setLoading(true);
      try
      {
          const { login_status, user_id, user_first_name, user_status, token, role } = await login(values);
          props.setLoading(false);
          if(user_status == 0 || user_status == '0') {
              router.push("/deactivated");
          } else {
              if(login_status == "success") {
                  Cookies.set('loggedIn', true);
                  Cookies.set('token', token);
                  Cookies.set('user_id', user_id);
                  Cookies.set('user_first_name', user_first_name);
                  Cookies.set('user_role', role);
                  router.reload(window.location.pathname);
              } else {
                  setShowChat(false);
                  message.error("Invalid email/password.");
              }
          }
      } catch (error)
      {
          props.setLoading(false);
          message.error("Something went wrong.");
      }
  }
  const onSelectFinish = (opt) =>
  {
      setShowSelectChatModal(false);
      if(opt == "member")
      {
          setShowChat(true);
      } else
      {
          setShowPublicChat(true);
      }
  }

  const getChats = async () =>
  {
      try
      {
          const data = await getMessages({});
          let arr = [];
          for(let i=0; i < data.length; i++)
          {
              let fdate = chatDate(data[i].created_at);
              arr.push({ msg: data[i].message, cdate: fdate, usr: data[i].user });
          }
          setChatMessages(arr);
      } catch (error)
      {
          console.log(error);
          message.error("Something went wrong.");
      }
  }

  const getPublicChats = async () =>
  {
      try
      {
          const data = await getPublicMessages({});
          let arr = [];
          for(let i=0; i < data.length; i++)
          {
              let fdate = chatDate(data[i].created_at);
              arr.push({ msg: data[i].message, cdate: fdate, usr: data[i].user });
          }
          setPublicChatMessages(arr);
      } catch (error)
      {
          console.log(error);
          message.error("Something went wrong.");
      }
  }

  useEffect(() => {
    if(Cookies.get('loggedIn'))
    {
      getChats();
    } else
    {
      getPublicChats();
    }
    /*if(Cookies.get('loggedIn'))
    {
      setShowChat(true);
    }*/
  }, []);
  return (
    <>
      <Head>
          <title>{ props.title }</title>
      </Head>
      <Navbar />
        { props.children }
        { !showChat && (
          <>
            <div className="fixed bottom-0 right-1 z-40">
              <PublicChatForm />
            </div>
            <DirectContact
              btnType="call"
              buttonClass="fixed z-40 bottom-6 right-26 bg-yellow-600 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-yellow-400 hover:drop-shadow-2xl hover:animate-bounce duration-300"
              title="Call Us Now"
              icon={<PhoneOutlined />}
            />
          </>
        )}
      <Footer setLoading={props.setLoading} />
    </>
  )
}

export default SiteLayout;

