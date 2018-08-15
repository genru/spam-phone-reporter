import * as Configstore from 'configstore';
const app = require('./package.json');

export const config = new Configstore(app.name);

export const questions = [
    {
        type: 'list',
        name: 'bad_type',
        message: 'Which sort of call you had received?',
        choices: [{name: '1-淫秽色情', value: 1},
            {name: '2-发票办证', value: 2},
            {name: '3-反动谣言', value: 3},
            {name: '4-房产中介', value: 4},
            {name: '5-保险推销', value: 5},
            {name: '6-教育培训', value: 6},
            {name: '7-贷款理财', value: 7},
            {name: '8-猎头招聘', value: 8},
            {name: '9-违规催收', value: 9},
            {name: '10-卫生保健', value: 10},
            {name: '11-股票证劵', value: 11},
            {name: '12-其他骚扰', value: 12},
            {name: '13-旅游推广', value: 13},
            {name: '14-食药推销', value: 14}],
        default: 3
    },
    {
        type: 'input',
        name: 'sms_phone',
        message: "Which number called you? (number only)",
        validate: (input: string) => {
            if(/^\d{5,11}$/gm.test(input)) {
                return true;
            }
            return 'invalid phone numer (5-11 digit number)'
        }
    },
    {
        type: 'input',
        name: 'phone',
        message: "Which number reveived spam call?",
        default: (param: any) => {
            return config.get('def_received_phone')
        },
        validate: (input: string) => {
            if(/^\d{5,11}$/gm.test(input)) {
                return true;
            }
            return 'invalid phone numer (5-11 digit number)'
        }
    },
    {
        type: 'confirm',
        name: 'save_default_phone',
        when: (param: any) => {
            return config.get('def_received_phone') !== param.phone;
        },
        message: (param: any) => {
            return `Should save ${param.phone} as default phone for next use?`
        }
    },
    {
        type: 'input',
        name: 'sms_content',
        message: "Descript content of call?",
        default: (param: any) => {
            const desc = ['','未经允许的淫秽色情电话',
            '未经允许的发票办证电话',
            '未经允许的反动谣言电话',
            '未经允许的房产中介电话',
            '未经允许的保险推销电话',
            '未经允许的教育培训电话',
            '未经允许的贷款理财电话',
            '未经允许的猎头招聘电话',
            '未经允许的违规催收电话',
            '未经允许的卫生保健电话',
            '未经允许的股票证劵电话',
            '未经允许的其他骚扰电话',
            '未经允许的旅游推广电话',
            '未经允许的食药推销电话'];
            return desc[param.bad_type];
        }
    },
    {
        type: 'datetime',
        name: 'called_time',
        message: "Descript content of call? (yyyy-mm-dd HH:MM)",
        format: ['yyyy','-', 'mm', '-', 'dd', ' ', 'HH', ':', 'MM'],
        initial: new Date()
    }
]