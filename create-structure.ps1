$folders = @(
"Assets/Images",
"Assets/Screenshots",
"Assets/Diagrams",
"Assets/Certificates",

"Daily-Learning/2026/June",
"Daily-Learning/2026/July",
"Daily-Learning/2026/August",

"Interview-Preparation/Company-Questions",

"01-HTML/Notes",
"01-HTML/Examples",
"01-HTML/Practice",
"01-HTML/Assignments",
"01-HTML/Mini-Projects",
"01-HTML/Screenshots",

"02-CSS/Notes",
"02-CSS/Examples",
"02-CSS/Practice",
"02-CSS/Assignments",
"02-CSS/Mini-Projects",
"02-CSS/Screenshots",

"03-JavaScript/Notes",
"03-JavaScript/Examples",
"03-JavaScript/Practice",
"03-JavaScript/Assignments",
"03-JavaScript/Mini-Projects",
"03-JavaScript/Screenshots",

"04-React/Notes",
"04-React/Examples",
"04-React/Projects",
"04-React/Screenshots",

"05-Core-Java/01-Basics",
"05-Core-Java/02-Variables",
"05-Core-Java/03-Operators",
"05-Core-Java/04-Control-Statements",
"05-Core-Java/05-Arrays",
"05-Core-Java/06-Methods",
"05-Core-Java/07-OOP",
"05-Core-Java/08-Strings",
"05-Core-Java/09-Exception-Handling",
"05-Core-Java/10-Collections",
"05-Core-Java/11-Multithreading",
"05-Core-Java/12-File-Handling",
"05-Core-Java/13-Java8",
"05-Core-Java/Programs",
"05-Core-Java/Practice",

"06-Advanced-Java/JDBC",
"06-Advanced-Java/Servlet",
"06-Advanced-Java/JSP",
"06-Advanced-Java/Maven",
"06-Advanced-Java/Projects",

"07-SQL/Notes",
"07-SQL/Queries",
"07-SQL/Practice",

"08-Hibernate/Notes",
"08-Hibernate/Examples",
"08-Hibernate/Projects",

"09-Spring/Spring-Core",
"09-Spring/Spring-MVC",
"09-Spring/Spring-Security",
"09-Spring/Examples",

"10-Spring-Boot/REST-API",
"10-Spring-Boot/JPA",
"10-Spring-Boot/Validation",
"10-Spring-Boot/Security",
"10-Spring-Boot/Microservices",
"10-Spring-Boot/Projects",

"11-DSA/Arrays",
"11-DSA/Strings",
"11-DSA/Recursion",
"11-DSA/Sorting",
"11-DSA/Searching",
"11-DSA/LinkedList",
"11-DSA/Stack",
"11-DSA/Queue",
"11-DSA/Trees",
"11-DSA/Graph",
"11-DSA/Dynamic-Programming",
"11-DSA/Leetcode",

"12-System-Design/HLD",
"12-System-Design/LLD",
"12-System-Design/Case-Studies",
"12-System-Design/Notes",

"Projects/Portfolio-Website",
"Projects/Calculator",
"Projects/Todo-App",
"Projects/Weather-App",
"Projects/Food-Order-Management-System",
"Projects/Student-Management-System",
"Projects/Book-Exchange-Platform",

"Templates"
)

$files = @(
"README.md",
"ROADMAP.md",
"LEARNING_LOG.md",
"RESOURCES.md",
"CONTRIBUTING.md",
".gitignore",
".gitattributes",
".editorconfig",

"01-HTML/README.md",
"01-HTML/Cheat-Sheet.md",
"01-HTML/Interview-Questions.md",

"02-CSS/README.md",
"02-CSS/Cheat-Sheet.md",
"02-CSS/Interview-Questions.md",

"03-JavaScript/README.md",
"03-JavaScript/Cheat-Sheet.md",
"03-JavaScript/Interview-Questions.md",

"04-React/README.md",
"04-React/Cheat-Sheet.md",
"04-React/Interview-Questions.md",

"05-Core-Java/README.md",
"05-Core-Java/Cheat-Sheet.md",
"05-Core-Java/Interview-Questions.md",

"07-SQL/README.md",
"07-SQL/Cheat-Sheet.md",
"07-SQL/Interview-Questions.md",

"08-Hibernate/Interview-Questions.md",

"09-Spring/Interview-Questions.md",

"10-Spring-Boot/Interview-Questions.md",

"11-DSA/Interview-Questions.md",

"Interview-Preparation/HR-Questions.md",
"Interview-Preparation/Aptitude.md",
"Interview-Preparation/DSA-Questions.md",
"Interview-Preparation/Java-Interview.md",
"Interview-Preparation/SQL-Interview.md",
"Interview-Preparation/Spring-Interview.md",
"Interview-Preparation/Projects-Explanation.md",

"Templates/Topic-Template.md",
"Templates/Project-Template.md",
"Templates/Interview-Template.md",
"Templates/Daily-Learning-Template.md"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

foreach ($file in $files) {
    New-Item -ItemType File -Path $file -Force | Out-Null
}

Write-Host "Repository structure created successfully!"