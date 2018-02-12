
const electron = require('electron');
const {BrowserWindow} = electron;

class MainWindow extends BrowserWindow{
    constructor(){
        super({
            height: 500,
            width: 300,
            frame: false,
            resizable: false,
            show: false
          });
        this.on('blure', this.onBlure.bind(this));
    }
    onBlure(){
        this.hide();
    }
}

module.exports = MainWindow;