const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvMzNjNmJJSDhqVVVTU2NNYzd2VEpueEw0Y09RWW5VYTlmSTNaamVvcmo0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJraE96LXE1SVNkdTgxbVNSVlZ0bVJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkOWIyNTg0LWQ5NDctNDJkOS1hMGY4LThlMGQyNDJlMTY4MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAxNjYsXG4gICAgICAyOCxcbiAgICAgIDEyOCxcbiAgICAgIDMyLFxuICAgICAgNjcsXG4gICAgICA3NyxcbiAgICAgIDE1MSxcbiAgICAgIDYyLFxuICAgICAgMTE5LFxuICAgICAgMTYsXG4gICAgICAzMixcbiAgICAgIDQ0LFxuICAgICAgNyxcbiAgICAgIDE3MSxcbiAgICAgIDIwOCxcbiAgICAgIDcyLFxuICAgICAgMTIyLFxuICAgICAgMTU1LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOSxcbiAgICAgIDE5MSxcbiAgICAgIDEzNyxcbiAgICAgIDgwLFxuICAgICAgMjE0LFxuICAgICAgMTEzLFxuICAgICAgMjQ0LFxuICAgICAgMTExLFxuICAgICAgMjI0LFxuICAgICAgMTE4LFxuICAgICAgNixcbiAgICAgIDE1NCxcbiAgICAgIDE0NCxcbiAgICAgIDIwNyxcbiAgICAgIDE1NSxcbiAgICAgIDI0NCxcbiAgICAgIDIzMixcbiAgICAgIDUyLFxuICAgICAgMTgzLFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjkzNkZHU1RWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzQxNjQzOTM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvo798fF9TYXZhZ2VffHzvo79cIixcbiAgICBcImxpZFwiOiBcIjE5NDIzMTYyNDgyNjk1MTozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbW54TUlMRVAvc2c3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInl1MThYLy9sSFJQRDd6ZzRJM1FFV2UyNFg4Q2JGVFlmL3VBb00vdGRybGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTWtuVnFqMXJlT2lxdUxZU0JuSitkTHVsMFJITWRWNGVzMEdxMklseklNYjNIbUJITEJBaUgyYjk3M2Z3Nk9jT3RlWTdGc1dJMTdOZUZjdjhXdGEvakE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic3p1YkVBVjFWZFMwOUVaelM3ZmZ1ak15K2g4QlNOK0pVcG1OTkpON3ljcS9nY1YrVjB5eDNiencweXRaSGJYTVhCeGFqcmQvY0VvWFFZcVg4N3RraHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM0MTY0MzkzOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgyNDg5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt4QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3hBLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHlORzd3UDh3d09hUmhZQXpHM1BiNGtXQTlRYjNDZmJKaFpQVDFOVFMzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDkyMzIxMjU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4MjI0NDg5NjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
