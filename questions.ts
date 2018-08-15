export const questions = [
    {
        type: 'list',
        name: 'bad_type',
        message: 'Which sort of call you had received?',
        choices: [{name: '淫秽色情', value: 0},
            {name: '发票办证', value: 2},
            {name: '反动谣言', value: 3},
            {name: '房产中介', value: 4},
            {name: '保险推销', value: 5},
            {name: '教育培训', value: 6},
            {name: '贷款理财', value: 7},
            {name: '猎头招聘', value: 8},
            {name: '违规催收', value: 9},
            {name: '卫生保健', value: 10},
            {name: '股票证劵', value: 11},
            {name: '其他骚扰', value: 12},
            {name: '旅游推广', value: 13},
            {name: '食药推销', value: 14}],
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
        message: "Which number reveived call?",
        default: "13813986361",
        validate: (input: string) => {
            if(/^\d{5,11}$/gm.test(input)) {
                return true;
            }
            return 'invalid phone numer (5-11 digit number)'
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