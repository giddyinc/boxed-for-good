'use strict';

function runScript(e) {
    if (e.keyCode == 13) {
      window.location = '/donate';
        return false;
    }
}