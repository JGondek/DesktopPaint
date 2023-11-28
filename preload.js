const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('exit-button').addEventListener('click', () => {
      ipcRenderer.invoke('quit-app');
  });
});