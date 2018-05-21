/* exported JudgeDisplay */
/* globals */

'use strict';

const judgeDisplayTemplate = document.getElementById('judge-display-template');

class JudgeDisplay {
    constructor() {

    }

    render() {
        const dom = judgeDisplayTemplate.content;
        
        return dom;
    }
}