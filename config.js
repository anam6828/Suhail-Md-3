const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923497749223";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923497749223";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_09_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieDNHeDllZk04UWZQT2wybUszdWFodWovUytZRExXZHQvY0QrRGFocUtMZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWWpnLWlSRVZSSjJxREdkaWFxd1Fyd1wiLFxuICBcInBob25lSWRcIjogXCI4MGIwZmZhZC1mYjU1LTQxZDQtYjFkMy01NjIzYzI1Y2ExMjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTY3LFxuICAgICAgMTcyLFxuICAgICAgODksXG4gICAgICA0MyxcbiAgICAgIDIwMixcbiAgICAgIDExMyxcbiAgICAgIDMsXG4gICAgICAxMDUsXG4gICAgICA1OSxcbiAgICAgIDkxLFxuICAgICAgMTE2LFxuICAgICAgMTExLFxuICAgICAgMTIzLFxuICAgICAgMjMyLFxuICAgICAgMjUsXG4gICAgICAxMyxcbiAgICAgIDk3LFxuICAgICAgMjQzLFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDEyNCxcbiAgICAgIDE1MSxcbiAgICAgIDE3OCxcbiAgICAgIDY2LFxuICAgICAgMTUzLFxuICAgICAgODUsXG4gICAgICAyNDAsXG4gICAgICAxNDMsXG4gICAgICAyMzgsXG4gICAgICAyMDEsXG4gICAgICAxMjQsXG4gICAgICAyMixcbiAgICAgIDE0OSxcbiAgICAgIDE3OCxcbiAgICAgIDQ0LFxuICAgICAgMjAsXG4gICAgICAyMjQsXG4gICAgICAzMyxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUdkaWVFR0VKSGVxY0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1VGJNOWdOWEh5aVQrc1BUTU5xTWUwWnc5eWFnbkwxcjZQYXVOU3pseDNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjQrdkZabDJISjBCdmdOa2NjOTdwUUZNWXRIeE1JWWNNMitBTzduM1I3Vmw5eVovenIrZ2R2SWQxeXB5ZUxnSjlHMlptVTA2UHN2N01kNU5WTmFTR0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpaZHlSSWVUMHBoRTlJRFlYVlMrcDZCaFZNZEl0aDZsNTBscHBwNUQxTC9SR0VOWHNmL2JQQ3FORzJxTlZWaHVEbnRmV1NQdkJCRVM5amFMTE95R2pnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk3NzQ5MjIzOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDM2MjA4Njc1NDMxMDI6NzRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTc3NDkyMjM6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5NzA4NTY1XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Asad",
  packname: process.env.PACK_NAME || "ASAD 💗",
  botname : process.env.BOT_NAME  || "ASAD-MD",
  ownername:process.env.OWNER_NAME|| "ASAD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ASAD MALIK"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
