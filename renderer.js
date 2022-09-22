// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const ele = document.createElement('div')
ele.textContent = 'sjh electron app'
ele.className = 'dynamic'

document.querySelector('body').append(ele)