const axios = require('axios')

const credentials = {
  username: process.env.BS_USER,
  password: process.env.BS_KEY
}

async function getSessionStatus (session) {
  return (await getSessionData(session)).data.automation_session.status
}

async function setSessionName (session, sessionName) {
  return await putSessionData(session, { name: sessionName })
}

async function setSessionFailed (session,error,result) {
  return await putSessionData(session, { status: 'failed',reason: [error,result] })
}

async function setSessionPassed (session) {
  return await putSessionData(session, { status: 'passed' })
}

async function getSessionData (session, auth = credentials) {
  return await axios.get(
    `https://api.browserstack.com/automate/sessions/${session}.json`,
    { auth })
}

async function putSessionData (session, data, auth = credentials) {
  return await axios.put(
    `https://api.browserstack.com/automate/sessions/${session}.json`,
    data,
    {
      auth,
      headers: { 'Content-Type': 'application/json' }
    })
}

module.exports = {
  setSessionFailed,
  setSessionPassed,
  setSessionName,
  getSessionStatus
}