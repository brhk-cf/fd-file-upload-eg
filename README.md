# W
<!-- ![hercules image](https://fanart.tv/fanart/movies/11970/hdmovieclearart/hercules-560a6c761e19f.png) -->

<!-- Fitness R&D tool for Cult. The tool is used to primarily model
- Fitness Movements
- Workouts
- Workout of the day

It also supports modelling of
- Body Parts
- Body Part Types
- Injuries
- Fitness Goals
- Risks

# Tech Details
Make sure you are in the @curefit npm org. If not, create an account on npmjs.com. Ask @ankitg to add you to the @curefit npm org

Hercules is the first project to follow the new coding guidelines for internal dashboards at curefit. The root directory contains two separate node projects inside client and server. Both are completely independent and can be run independently as well.

### Client
Client is a webpack project written in react. All the client side code is written in typescript / tsx. It uses react-crux internally for all crud operations. -->

### How to run locally
```sh
$ npm login #if not already done - use same creds as npmjs.com
$ git clone --recursive https://github.com/curefit/wooster

# Initialize 
$ cd server
$ yarn

# Build
$ yarn run build

# Run server - will run server after tsc 
$ yarn run server

# Run nodemon server (Ref. nodemon.json)
$ nodemon

# Server starts on port 5000

# To run the client
$ cd ../client
$ yarn
$ yarn run start-dev

# Hit http://localhost:8080/ on your browser :)
```
<!-- 
### How to run on prod
- Login to jenkins
- Go to hercules project
- Build with parameters (stage, <branch that you want>) :)
- Track status of deployment from code deploy


### How to run on prod
- Login to jenkins
- Go to hercules project
- Build with parameters (prod, master) :)
- Track status of deployment from code deploy -->
