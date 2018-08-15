# Spam Phone Reporter

spam-phone-reporter is a simple command line to submit and report unhealth and spam call number via [12321.cn](https://12321.cn/)(网络不良与垃圾信息举报受理中心).

![screenshot](https://raw.githubusercontent.com/genru/spam-phone-reporter/master/screenshot.png)
## How to Build

### 0) prerequirement

this is a node CLI project, so we need install nodejs in system, and make sure `node` and `npm` commands avaliable. And project written with `typescript` language, so we need install `typescript` globally
```
npm i typescript -g
```
### 1) prepare dependencies

go to root of dir.
```
npm i
```

### 2) build

```
tsc
```

## Link CLI

```
npm link
```
to link command `rep` to system bin dir.

## How to Use
when we done all of above, we can use `rep` command in your terminal like
```
rep
```
then you just need follow the instruction step by step until report complete. *Enjoy!*

Please [fire a bug report](https://github.com/genru/spam-phone-reporter/issues/new) if you meet any problem.

## About Publish
I dont think this simple tool is useful for all users in this world(this is a special and narrow usage tool for China mainland people), actually it's more like personal tool. it's not worth to upload and publish to npm repo. So let's keep it personal.