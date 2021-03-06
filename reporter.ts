#!/usr/bin/env node
import "./polyfill";
import * as inquirer from "inquirer";
import { questions, config } from "./questions";
import axios  from "axios";
import chalk from 'chalk'
import * as ora from 'ora'
import * as figlet from "figlet";

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

figlet('Stop Spam', (err, data) => {

    console.info(chalk.cyan(data as string))
    inquirer.prompt(questions).then((answer: any) => {

        const d = new Date(answer.called_time);
        const datetime = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
        answer.called_time = datetime

        if (answer.save_default_phone) {
            config.set('def_received_phone', answer.phone);
        }

        try {
            const form = new URLSearchParams();
            form.set('code', 'ewsh');
            form.set('type', answer.type);
            form.set('bad_type', answer.bad_type);
            form.set('phone', answer.phone);
            form.set('sms_phone', answer.sms_phone);
            form.set('sms_content', answer.sms_content);
            form.set('called_time', answer.called_time);
            form.set('duration_time', '0');
            const url = 'https://12321.cn/Com-update?strName=jb_tel';
            (async () => {
                try {
                    const spinner = ora('processing ...').start();
                    const response = await axios.post(`${url}`,form)
                    console.info(response.status);
                    spinner.stop()
                    console.log(chalk.magentaBright('report...successful'))
                } catch (error) {
                    console.log(error)
                }
            })()
        }catch(e) {
            console.log(e)
        }
    });
})
