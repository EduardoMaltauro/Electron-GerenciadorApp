const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    Minimizar: function () {
        ipcRenderer.send("Minimizar")
    },

    Maximizar: function() {
        ipcRenderer.send("Maximizar")
    },

    Fechar: function() {
        ipcRenderer.send("Fechar")
    }
})