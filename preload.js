// const { ipcRenderer } = require('electron');

// window.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("minBtn").addEventListener('click', () => {
//         ipcRenderer.send('minimize-window')
//     });

//     document.getElementById("closeBtn").addEventListener('click', () => {
//         ipcRenderer.send('close-app');
//     });
// });

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  closeApp: () => ipcRenderer.send('close-app'),
//   minimizeApp: () => ipcRenderer.send('minimize-app')  // Fixed channel
});
