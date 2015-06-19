[2015-06-11 11:00] DF
*Comments copied from initial github repo review
for angular app:
1. remove unused vars, comments
2. use promise chain in PhoneListCtrl
3. move viewing last phones logic in separate service
4. create directive for last viewed phones presentation
5. use angular $window wrapper to work with local storage

[2015-06-12 12:00] DF
for angular app:
1. done
3. done

[2015-06-15 23:00] DF
for backbone app:
1. defect: "Employee list" menu isn't sown as selected when click on it after first page load
2. defect: employee list is overlapped by menu
3. remove unused commented code in EmployeeCatalogView
4. make employee collection fetching without redundant name search term (app.js:87)
5. why you setting employee catalog page content 2 times? (app.js:93 and app.js:98)

[2015-06-15 23:15] DF
for flux-react app:
1. make task date position not to be related on task name length (put in new line?)

[2015-06-15 23:45] PS
for flux-react app:
1. fixed

[2015-06-16 00:30] PS
for backbone app:
1. fixed
2. fixed
3. deleted

[2015-06-18 15:44] PS
for angular app:
2. getPhones function from PhoneListCtrl now use promise
4. directive for last viewed phones was created
5. local storage was changed to $window wrapper

[2015-06-15 23:15] DF
angular app:
4. you really don't pass lastPhones value to directive (attributes is redundant): use isolated scope in directive (need to be fixed)
5. ok
6. by promises chain in PhoneListCtrl I meant usage of "Phone.query({}).$promise.then" but not wrapping the result into promise (need to be fixed)
7. why you renamed get phones method to "setPhoneToScope"? You've broken your pagination by this. Use refactoring tools of your IDE to do such kind of things and recheck functionality afterwards. Need to be fixed ASAP
8. please fix all of the remarks which are in metor.md file or at least answer on each of them
