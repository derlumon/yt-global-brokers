import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WeChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
import { languages } from "../Languages/languages";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
const actions = [
  {
    icon: <WeChatIcon />,
    name: "WeChat(Espanol)",
    link: "https://u.wechat.com/MEGrx3B1puu_dHtFWvYfb8Y=wc",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    link: "mailto:contacto@yt-global-brokers.com",
  },
  {
    icon: <WeChatIcon />,
    name: "WeChat(Chino)",
    link: "https://u.wechat.com/MEGrx3B1puu_dHtFWvYfb8Y=wc",
  },
  { icon: <CallIcon />, name: "Telefono", link: "tel:+5255641240055" },
  {
    icon: <WhatsAppIcon />,
    name: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=+525569857670&text=Hola%2C+Buenas+Tardes",
  },
];

export default function ButtonDial() {
  const { currentLanguage } = useContext(LanguageContext);
  const actions = [
    {
      icon: <WeChatIcon />,
      name: languages[currentLanguage].buttonDial.wechatC,
      link: "https://u.wechat.com/MEGrx3B1puu_dHtFWvYfb8Y=wc",
    },
    {
      icon: <EmailIcon />,
      name: languages[currentLanguage].buttonDial.email,
      link: "mailto:contacto@yt-global-brokers.com",
    },
    {
      icon: <WeChatIcon />,
      name: languages[currentLanguage].buttonDial.wechatE,
      link: "https://u.wechat.com/MEGrx3B1puu_dHtFWvYfb8Y=wc",
    },
    {
      icon: <CallIcon />,
      name: languages[currentLanguage].buttonDial.telefono,
      link: "tel:+5255641240055",
    },
    {
      icon: <WhatsAppIcon />,
      name: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=+525569857670&text=Hola%2C+Buenas+Tardes",
    },
  ];
  return (
    <div style={{ position: "fixed", bottom: 16, right: 16 }}>
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          FabProps={{ style: { backgroundColor: "green" } }}
          icon={<MessageIcon />}
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              style={{ backgroundColor: "green" }}
              onClick={() => (window.location.href = action.link)}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
