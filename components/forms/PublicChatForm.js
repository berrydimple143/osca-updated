import React, { useEffect } from "react";

const PublicChatForm = () =>
{
    const setChatBox = () =>
    {
      let chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "102999182729258");
        chatbox.setAttribute("attribution", "biz_inbox");
	chatbox.setAttribute("theme_color", "#b88917");
    }

    useEffect(() =>{

        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v16.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          //js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          js.src = 'https://connect.facebook.net/en/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        setChatBox();
    }, []);
    return (
        <>
          <div id="fb-root"></div>
          <div id="fb-customer-chat" class="fb-customerchat"></div>
        </>
    )
}

export default PublicChatForm;

