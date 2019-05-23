# MovieApp
## Steps to run the app

### BackEnd
1) Open BackEnd/demo in any IDE
2) Change the database connection properties such as url, username, password etc. in application.properties file (path- /demo/src/main/resources)
3) Currently this app is using mysql. Create the database first and change the 'spring.datasource.url' property in application.properties accordingly.
4) Change spring.jpa.hibernate.ddl-auto to 'create' when you run the application for first time (Make sure mysql is running on your machine before starting the application).

### FrontEnd

1) Install node.js, angular-cli on your machine
2) Then open frontendMusic folder in any IDE and run command 'npm --install' 
3) This installs node modules specifies in package.json
4) After installing, run the command ng serve --open
5) This will open http://localhost:4200/ on your browser
