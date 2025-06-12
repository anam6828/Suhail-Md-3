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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923275374285";
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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_52_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxd2x6azlRV0t1eWs3RDNtSit4OC9NSEwza0d4M1puWFZab3BibXVMTFBRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQbVhGblJpZ1JZeXA3cm1zSG9JWHZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0YTJiNDI2LTEzMjAtNDZjNi04ZjQxLTYzZjk3ZWViNDhhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAxNTIsXG4gICAgICAxMDksXG4gICAgICAxOSxcbiAgICAgIDE5NixcbiAgICAgIDIzNCxcbiAgICAgIDExNCxcbiAgICAgIDE5MixcbiAgICAgIDE5NCxcbiAgICAgIDE5MixcbiAgICAgIDYxLFxuICAgICAgMjA0LFxuICAgICAgMTI4LFxuICAgICAgMjUzLFxuICAgICAgMTk1LFxuICAgICAgMjUxLFxuICAgICAgOTUsXG4gICAgICAzMyxcbiAgICAgIDE3NCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxNDQsXG4gICAgICAxNSxcbiAgICAgIDgyLFxuICAgICAgODYsXG4gICAgICAzNixcbiAgICAgIDEyMSxcbiAgICAgIDE0NSxcbiAgICAgIDYxLFxuICAgICAgMjU0LFxuICAgICAgMjMzLFxuICAgICAgMjI4LFxuICAgICAgMjMzLFxuICAgICAgMTU3LFxuICAgICAgMjEwLFxuICAgICAgNDIsXG4gICAgICAzNCxcbiAgICAgIDIzLFxuICAgICAgNjMsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDZGllRUdFTjZkcWNJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVRiTTlnTlhIeWlUK3NQVE1OcU1lMFp3OXlhZ25MMXI2UGF1TlN6bHgzUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOYjlpNVpZcFUyelpzRXlxWi9LOC9rR1VlM3kwZTJwU3Z3cHJaeUozTExXYWdCYzhvSElZbXFyVW9hemF3RnNtak5NTmdYdkg1N0xWZTJnYUh3eFRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmYTFISCsvM2RqZGRmWkc0aEU5R3hDUllETU5VaDg4amQvT080eWJpOUZHSWx2QTJPRkdXUElyKyt3WER5ZWtGdzlWTFRqRGtBRDU1ZWdlM3FuenVEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NTM3NDI4NTo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA5MTE0NTAwNTg3ODg6ODlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzUzNzQyODU6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5NzAwMzIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTk9mXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOT2YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuOVA3UTM4VTBwTGxvVm1NUmZpeXZQVWVBWk55ZGRPdCtrUTFKR2ZCV3VVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MTQxODc2NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5PZy5qc29uIjogIntcImtleURhdGFcIjpcIms1UmR3SGErNk9rNFdlU1gyV0UxQXd6ZmR6WUMrNSs5Rk8wTFBmcUNkUGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxNDE4NzY0OCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDk1NTcyNTE4MDNcIn0iCn0="  // PUT your SESSION_ID 


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
