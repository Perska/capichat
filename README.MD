# capichat

really bad "everything in one place" frontend for contentapi (qcs)

it's really bad

## usage

1. login with your username and password (email not yet supported)
2. you can now send messages. by default you send to off topic
3. to change where your send your messages, change the first input on the bottom of the page to the desired id. alternatively, click on a page name on any of the messages
4. if you wsnt to change your used avatar, change the second input on the page bottom to your desired image hash.
5. nicknames your fancy? the third input has your attention. type something in there.
6. wanna edit a message? click on the edit button displayed on a message, and make your changes in the textbox. changed your mind? you'll want to change the fourth input to 0, otherwise you'll end up accidentally editing the message.
7. messages in need of being deleted? click the DELETE button. then, click REALLY DELETE. had second thoughts? click DON'T DELETE instead to spare the poor message.
8. had enough? Logout.
9. you can resize the chatview by dragging on the handle in the bottom-right corner. why is that there? it's still a work in progress, sorry.
10. need to access the test API? stick `?useTestAPI` at the end of the URL... your login there is separate from the main API.

TODO:

- [ ] Using a non-hacky method for receiving your first messages
- [ ] Message inserting
- [ ] Category navigation
- [ ] User friendliness
- [x] User maliciousness
- [ ] Declaring user statuses
- [ ] Image uploading
- [ ] Tabbed view, for your "everything in not-one place" chatting experience
- [ ] Populating the sidebar with activity and stuff
- [ ] Move JS and CSS to their own files?
- [ ] General code cleanup
- [ ] Update markup and api files (submodules for markup?)
