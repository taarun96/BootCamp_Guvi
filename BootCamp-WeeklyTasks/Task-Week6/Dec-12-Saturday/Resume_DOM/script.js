var header1 = document.createElement("div");
header1.setAttribute("class", "header1");

var img1 = document.createElement("img");
img1.setAttribute("class", "profilepic");
img1.setAttribute("src", "./images/taarun-circle.png");
img1.setAttribute("alt", "dp");
header1.appendChild(img1);

var overlap = document.createElement("div");
overlap.setAttribute("class", "overlap");
header1.appendChild(overlap);

var name1 = document.createElement("div");
name1.setAttribute("class", "name1");

var x = document.createElement("span");
x.setAttribute("class", "sname");
x.innerText = "Taarun Purusothaman";
name1.appendChild(x);
header1.appendChild(name1);

var address = document.createElement("div");
address.setAttribute("class", "address");

var paddress = document.createElement("p");
paddress.setAttribute("class", "paddress");
paddress.innerText =
  "+91-8754307261 | taarun96@gmail.com | Coimbatore,TamilNadu-641025";

address.appendChild(paddress);

// document.body.append(header1, address);

var column = document.createElement("div");
column.setAttribute("class", "column");

var profile = document.createElement("div");
profile.setAttribute("class", "profile");

var fas = document.createElement("i");
fas.setAttribute("class", "fas");
// fas.setAttribute("class", "fa-id-card-alt");
// fas.setAttribute("class", "profile1");
fas.innerText = "⭐Profile";

profile.appendChild(fas);

var content1 = document.createElement("h4");
content1.innerText =
  "Passionate Learner .Excited to be at the new phase of my new career as a web developer. Ambitious and hardworking.";

profile.appendChild(content1);

column.appendChild(profile);

//document.body.append(header1, address, column);

var skills = document.createElement("div");
skills.setAttribute("class", "skills");

var fas1 = document.createElement("i");
fas1.setAttribute("class", "fas");
// fas1.setAttribute("class", "fa-atom");
fas1.innerText = "⭐Skills";

skills.appendChild(fas1);

var table1 = document.createElement("table");
var break1 = document.createElement("br");
table1.appendChild(break1);

var strong1 = document.createElement("strong");
strong1.innerText = "Technical Skills";

table1.appendChild(strong1);
var break2 = document.createElement("br");
table1.appendChild(break2);

var break3 = document.createElement("br");
table1.appendChild(break3);

skills.appendChild(table1);

var tablerow1 = document.createElement("tr");
var tablecolumn1 = document.createElement("td");
tablecolumn1.innerText = "JavaScript";
var tablecolumn2 = document.createElement("td");
var slide1 = document.createElement("input");
slide1.setAttribute("type", "range");
slide1.setAttribute("min", "1");
slide1.setAttribute("max", "100");
slide1.setAttribute("value", "80");
slide1.setAttribute("class", "slider");
slide1.setAttribute("id", "myRange");
slide1.setAttribute("disabled", "");

tablerow1.append(tablecolumn1, tablecolumn2, slide1);
table1.appendChild(tablerow1);

var tablerow2 = document.createElement("tr");
var tablecolumn3 = document.createElement("td");
tablecolumn3.innerText = "HTML";
var tablecolumn4 = document.createElement("td");
var slide2 = document.createElement("input");
slide2.setAttribute("type", "range");
slide2.setAttribute("min", "1");
slide2.setAttribute("max", "100");
slide2.setAttribute("value", "70");
slide2.setAttribute("class", "slider");
slide2.setAttribute("id", "myRange");
slide2.setAttribute("disabled", "");

tablerow2.append(tablecolumn3, tablecolumn4, slide2);
table1.appendChild(tablerow2);

var tablerow3 = document.createElement("tr");
var tablecolumn5 = document.createElement("td");
tablecolumn5.innerText = "CSS";
var tablecolumn6 = document.createElement("td");
var slide3 = document.createElement("input");
slide3.setAttribute("type", "range");
slide3.setAttribute("min", "1");
slide3.setAttribute("max", "100");
slide3.setAttribute("value", "70");
slide3.setAttribute("class", "slider");
slide3.setAttribute("id", "myRange");
slide3.setAttribute("disabled", "");

tablerow3.append(tablecolumn5, tablecolumn6, slide3);
table1.appendChild(tablerow3);

var tablerow4 = document.createElement("tr");
var tablecolumn7 = document.createElement("td");
tablecolumn7.innerText = "React";
var tablecolumn8 = document.createElement("td");
var slide4 = document.createElement("input");
slide4.setAttribute("type", "range");
slide4.setAttribute("min", "1");
slide4.setAttribute("max", "100");
slide4.setAttribute("value", "70");
slide4.setAttribute("class", "slider");
slide4.setAttribute("id", "myRange");
slide4.setAttribute("disabled", "");

tablerow4.append(tablecolumn7, tablecolumn8, slide4);
table1.appendChild(tablerow4);

var tablerow5 = document.createElement("tr");
var tablecolumn9 = document.createElement("td");
tablecolumn9.innerText = "Agile";
var tablecolumn10 = document.createElement("td");
var slide5 = document.createElement("input");
slide5.setAttribute("type", "range");
slide5.setAttribute("min", "1");
slide5.setAttribute("max", "100");
slide5.setAttribute("value", "70");
slide5.setAttribute("class", "slider");
slide5.setAttribute("id", "myRange");
slide5.setAttribute("disabled", "");

tablerow5.append(tablecolumn9, tablecolumn10, slide5);
table1.appendChild(tablerow5);

var tablerow6 = document.createElement("tr");
var tablecolumn11 = document.createElement("td");
tablecolumn11.innerText = "API Testing";
var tablecolumn12 = document.createElement("td");
var slide6 = document.createElement("input");
slide6.setAttribute("type", "range");
slide6.setAttribute("min", "1");
slide6.setAttribute("max", "100");
slide6.setAttribute("value", "70");
slide6.setAttribute("class", "slider");
slide6.setAttribute("id", "myRange");
slide6.setAttribute("disabled", "");

tablerow6.append(tablecolumn11, tablecolumn12, slide6);
table1.appendChild(tablerow6);

skills.appendChild(table1);
column.appendChild(skills);

// document.body.append(header1, address, column);

var workexp = document.createElement("div");
workexp.setAttribute("class", "workexp");

var break15 = document.createElement("br");
workexp.appendChild(break15);

var fas2 = document.createElement("i");
fas2.setAttribute("class", "fas");
// fas2.setAttribute("class", "fa-briefcase");
fas2.innerText = "⭐Work Experience";

workexp.appendChild(fas2);

var break4 = document.createElement("br");
workexp.appendChild(break4);

var break5 = document.createElement("br");
workexp.appendChild(break5);

column.appendChild(workexp);

//document.body.append(header1, address, column);

var workexp_sub = document.createElement("div");
workexp_sub.setAttribute("class", "workexp_sub");

var strong2 = document.createElement("strong");
strong2.innerText =
  "Software Test Engineer ------------------ June 2018-Present";
workexp_sub.appendChild(strong2);

var break6 = document.createElement("br");

workexp_sub.appendChild(break6);

var content3 = document.createElement("h3");
content3.innerText = "TechMahindra";

workexp_sub.appendChild(content3);

// document.body.append(header1, address, column);

var ul1 = document.createElement("ul");
var list1 = document.createElement("li");
list1.innerText =
  "Identified and tracked defects with API testing, SAP tools and supported developers in resolving problems by completing additional tests ";

ul1.appendChild(list1);

var list2 = document.createElement("li");
list2.innerText =
  "Worked in Agile scrum methodology with Rally and JIRA, QTest as project management tools";

ul1.appendChild(list2);

var list3 = document.createElement("li");
list3.innerText =
  " Supported production deployment activities and post production support activities.";

ul1.appendChild(list3);

var list4 = document.createElement("li");
list4.innerText =
  "Worked on automation development using Tosca automation tool for REST API.";

ul1.appendChild(list4);

var list5 = document.createElement("li");
list5.innerText =
  "Worked on testing API for several microservices and testing it end to end.";

ul1.appendChild(list5);
workexp_sub.appendChild(ul1);

workexp.appendChild(workexp_sub);
column.appendChild(workexp);

//document.body.append(header1, address, column);

var projects = document.createElement("div");
projects.setAttribute("class", "projects");

var break13 = document.createElement("br");
var break14 = document.createElement("br");

projects.append(break13, break14);

var fas3 = document.createElement("i");
fas3.setAttribute("class", "fas");
// fas3.setAttribute("class", "fa-project-diagram");
fas3.innerText = "⭐Projects";

projects.appendChild(fas3);

var break7 = document.createElement("br");

projects.appendChild(break7);

var ul2 = document.createElement("ul");
var list6 = document.createElement("li");
var strong3 = document.createElement("strong");
strong3.innerText = "Retail Inventory Serialization";

list6.appendChild(strong3);
ul2.appendChild(list6);
projects.appendChild(ul2);

var ul3 = document.createElement("ul");
ul3.setAttribute("type", "square");
var list7 = document.createElement("li");
list7.innerText =
  "Digital Transformation of SAP based Supply Chain Management system to Java microservices based event driven architecture with Cassandra database.";

ul3.appendChild(list7);
ul2.appendChild(ul3);
projects.appendChild(ul2);

var list8 = document.createElement("li");
list8.innerText =
  "API testing using swagger and effective logging using Splunk and PCF.";

ul3.appendChild(list8);
ul2.appendChild(ul3);

var list9 = document.createElement("li");
list9.innerText =
  "Tested in both SAP systems as well as in API level testing using Postman. ";

ul3.appendChild(list9);

ul2.appendChild(ul3);

var list10 = document.createElement("li");
var strong4 = document.createElement("strong");
strong4.innerText = "Reverse Logistics";

list10.appendChild(strong4);
ul2.appendChild(list10);

var ul4 = document.createElement("ul");
ul4.setAttribute("type", "square");
var list11 = document.createElement("li");
list11.innerText =
  "End to End UI Automation using Tosca for several microservices having REST API";

ul4.appendChild(list11);
ul2.appendChild(ul4);

var list12 = document.createElement("li");
list12.innerText =
  "End to End UI Automation using Tosca for several microservices having REST API";

ul4.appendChild(list12);
ul2.appendChild(ul4);

var list13 = document.createElement("li");
list13.innerText =
  "Achieved 50% time saving via automation and higher utilization of resources ";

ul4.appendChild(list13);
ul2.appendChild(ul4);

var list14 = document.createElement("li");
list14.innerText =
  "Test Data Management Process which have interaction between various SAP and Digital systems. ";

ul4.appendChild(list14);
ul2.appendChild(ul4);

projects.appendChild(ul2);

column.appendChild(projects);

// document.body.append(header1, address, column);

var education = document.createElement("div");
education.setAttribute("class", "education");

var fas4 = document.createElement("i");
fas4.setAttribute("class", "fas");
// fas4.setAttribute("class", "fa-project-diagram");
fas4.innerText = "⭐Education";

education.appendChild(fas4);

var break8 = document.createElement("br");
education.appendChild(break8);

var break9 = document.createElement("br");
education.appendChild(break9);

var strong5 = document.createElement("strong");
strong5.innerText = "B.E- ECE ---------- 2013-2017";
education.appendChild(strong5);

var break10 = document.createElement("br");
education.appendChild(break10);

var p2 = document.createElement("p");
p2.innerText = "Coimbatore Institute of Technology,Coimbatore.";

education.appendChild(p2);

column.appendChild(education);

// document.body(header1, address, column, education);

var language = document.createElement("div");
language.setAttribute("class", "language");

var fas5 = document.createElement("i");
fas5.setAttribute("class", "fas");
// fas5.setAttribute("class", "fa-language");
fas5.innerText = "⭐ Languages Known";
language.appendChild(fas5);
var break11 = document.createElement("br");
language.appendChild(break11);
var break12 = document.createElement("br");
language.appendChild(break12);

var ul5 = document.createElement("ul");
var list15 = document.createElement("li");
list15.innerText = "English";

ul5.appendChild(list15);

var list16 = document.createElement("li");
list16.innerText = "Tamil";

ul5.appendChild(list16);

language.appendChild(ul5);

column.appendChild(language);

var hr1 = document.createElement("hr");
var footer = document.createElement("footer");

footer.setAttribute("class", "footer");
footer.appendChild(hr1);
footer.innerText = "The website developed by Taarun Purusothaman @2020";

document.body.append(header1, address, column, footer);
