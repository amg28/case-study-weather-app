# Master thesis case study - case-study-weather-app

## Micro frontend application structure


+ [case-study-root-config](https://github.com/amg28/case-study-root-config)   
    + [case-study-navbar](https://github.com/amg28/case-study-navbar)
    + **case-study-weather-app(current repository)**
    + [case-study-pollution-app](https://github.com/amg28/case-study-pollution-app)



## Local development

### Prerequisites
To properly install micro frontend application for local development you should start with installation of Application shell project - [case-study-root-config](https://github.com/amg28/case-study-root-config).

Make sure you install and start _`case-study-root-config project`_ before proceeding with this project installation steps.

Please also make sure you have installed [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) already  on your operating system.

Supported Node.js version is v16+.

### Installation 

1. Clone the project using a command:
```sh
git clone https://github.com/amg28/case-study-weather-app.git

or using SSH

git clone git@github.com:amg28/case-study-weather-app.git
```

2. Install required dependencies
```
npm install
```

3. Start the project using a command:
```
npm start
```

### Usage

After starting a project it becomes accesible for a case-study-root-config project on port `8082`.

The case-study-root-config project hosts aplication localy on: http://localhost:9000/


### Error handling

In case of an error: 
> Error: error:0308010C:digital envelope routines::unsupported==

Please use a command in your terminal to set an environment variable before starting a project:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

In case command in not recognized, try to use a [Git Bash command line terminal](https://git-scm.com/downloads).