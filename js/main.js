/* globals GameApp */

'use strict';

const gameApp = new GameApp();
const dom = gameApp.render();
const root = document.getElementById('root');
root.appendChild(dom);