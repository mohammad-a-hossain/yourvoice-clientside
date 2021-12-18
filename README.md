***yarn dev *** run command -development
***yarn start ***  run for server start
use manual next.js setting 
---yarn add next react react-dom---
- using next.js document and import custom document code that will override the default document provided by the next.js
- make _document file for custom docs

usin twitter bootstrap

---link="https://cdnjs.com/libraries/twitter-bootstrap"
cdn link
---link='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'

- use reactbootstrap for navigation in header
-install (npm install --save reactstrap react react-dom)

-then config app name by configuration file
- then signup.js in pages folder
- make signupcomponent page and grab data values 
- install (yarn add isomorphic-fetch)
- use app.use(cors()); in server js file 
- signup action display in front end and alert
- set signin page and redirect to home page
- now set some helper method like setCookie,setLocalStorage in auth file
- then set it in siginincomponent and redirect
- need install js-cookie yarn add js-cookie
- set get cookies and localstorage in sign in and up page
- set redirect browser if logged in page work is done in signin signup component
***backend work**
### authentication and admin middleweares
- all description is set to serverside .md file
- set user and admin page and header for dashboard redirection in frontend
- this is the end of user admin dashboard navigation with authentication
*** NProgress set to frontend ***// escaped this module 
- it will show the progress in frontend 
- install yarn add nprogress
- css link (https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css) use in _docx file
- use ZEIT@ yarn add @zeit/next-css for progess bar
- // escaped this module 

*** frontend work on displaying tags and category ***
- now go to admin -> index pages and set category li and links
- then make a admin -> crud folder -> category-tag page to managing pages
- then make a category component to display
- then set all crud method in action-> category.js frontend and component ->crud -> category.js
--- same as tag pages---
- set the tag page link -> index ->category-tag page
*** after backend blog module ***
- now create page -> index to set blog link
- create blog.js in action folder
- then create  blog layout in page-admin-crud = blog.js
- then make blog component -crud = createBlog
1. install REACT QUILL - API driven Rich Text Editor. ... 
yarn add react-quill
2. use JSON.stringify(router) for not losing page if the page unless sent the data to db
- bring the category and tags in create blog page 
3. file upload module set in same page 
- then worked with error in blog
- then got to backend for gettitng all blog and single blog
*** after  backend photo blog module ***
- now worked with display the blogs in frontend
- now go to action and create blog list action 
- install   MOMENT.JS   for use in real time in display
{yarn add moment}
- install renderHtml{npm i react-native-render-html}
- make separate component CARD for rendering 

*** now load more blog ***
- worked with load more page which is hard to solve bugg
- then worked with single page blog
- create a single page blog in action page 
- then create a file inside pages inside blog -[slug].js
- then create a single page in display 
- now goto backend and make router and controller for related blog
*** now frontend SEO escaped or postponed for next work ***
- 
 *** after worked with related blog now worked for admin delete blog update ***
 - now go to action page and make blog list and remove and update for manageing blog page
 - then updatablog page is done
 *** now get and display all cat and tag wise blogs ***
 - now create a foleder in page category and inside make a sulg.js file to show dynamic show
 - then make a function component for in slug.js for display
- then make correction in server side category controller in    READ logic change to read category wise blog and import Blog model for query
-then same as tags wise blog implement 
 *** now implement serach ***
 - first go to backend make search route and controller in blog.js (controllers)
 - now install query-string to generate a query string frontend
 - then in action blog page make a search list api for frontend
 - also import query string
 *** now implement user frontend ***
 - make a profile folder in pages 
 - then make a slug.js file and import a action from user action page
 - then populate all information of user
 - then correction postedBy name to username of single blog and blog slug page for showing all postedby user 
 1. now time to show user profile update
 - after backend update profile make a end path in action for user update and get profile
 - go to pages user index.js 
 - after user update 
 - go to a action auth page and implement userUpdate function and then implement it in profileupdate component
 - userprofile update end
 *** separate authentication user ***
  - role
  1. if the user is authenticated 
  - go to component header page and implement the logic ( href="/user/crud/create") make a crud folder in pages user -> crud -> blog.js
  - go to backend blogroute  and make another route create reade and update for auth user
  - then go to action in frontend page and implement a simple logic for create blog
  2. now delete and update authenticate bloger
  - first get all the blog created user
  - then go to backend router and make listBlog route for user (/:username/blogs)
- make controller for listBlogByUser then make an authentication for the user canUpdateAndDelete() in authController.js
- then go to frontend pages/user/crud/blogs 
- then set the username in componet ->crud ->ManageBlogReads.js 
- then goto action blog.js to blogsListForAdmin endpoint 
- then implement all blog list of user in index.js in user fetch all blogs
- now delete and update implement 
- for update need to make a page in slug.js in user crud

*** token expiary ***
1. role
*  if the token has expired then we delete the cookies and redirect them to login page and gave a message for resign in
- first create a response in client side action page in auth.js
- the handleResponse will work for expiratein
- then make the handler function use to blog in action page
- for discuss section i signed in Disqus web site with abusen50


*** email sender ***
1. send grid is a third party email provider best
pass:A-Ha-h()
abusen50
- set in API key in .env
- goto backend validator page create a form.js in validator
- implement form.js
- then go to route folder in backend and implement a form route 
- end point is contact
- then import or set up in server.js as formRoute
- then install backend a package yarn add @sendgrid/mail
(just skip the sendgrid process and uninstall from package.json)
- trying to go with nodemailer
*** i solved the issue of email send ***
- i single make a single sender mail and get a api key from email api intregation guide 
- i have re install sendgrid
- then i get a new api key and input it as a sendgrid api key 
- then i tested it from postman 
- the body from post man it sould be the eamil i varified abusen50
then it will send any email to this account

- unfortunately i deleted abusen50 from sendgrid it will work till december 1, 2021
- after i need to create another account
this video link is worthy ( https://youtu.be/tPyrzqOtcLk)
--- i got this job done ---
now go to backend for rest work
--- after backend ruter and controller ---
*** contact form ***
- goto front end in action page make form.js file 
- then set the logic for email 
- then make a contact Form page in component folder
- then make a contact page in Page folder
- then implement contact in navber 
- then i finished contactForm in components form

*** now from blog form blogger ***
- go to profile in pages folder
- import contactForm and send a props to contactForm
--- end of email ---
*** forgot password and reset password ***
- first goto backend and make a validator
*** after backend  now make frontend from for forget and reset pass ***
- go to action in auth file and make two end point 
 1 forget password 2 resetpassword
 - then make a folder in pages folder name AUTH -> forget.js
 - then make a presignup for sent a link and make it after geting link
 - go to backend and make a presingnup router and controller 
 --- end of passwrod reset ---
 *** email activation ***
 ### role
 - to user will send a token for account activation
 - to avoid fake account 
 - token will be send to backend 
 - then it will exract user from jwt and create user and save
 ----
 1. first make route name preSignin and controller in backend
 2. then go to action in frontend in auth make a endpoint for preSignin
 3. install jsonwebtoken in frontend
 4. make folder in account/activate folder in pages then create a id.js for activate link 
 5. then make web base token signup controller in backend 
 *** signin by GOOGLE ***
 1. first go to google authentication  for making project signin
 https://console.cloud.google.com/home/dashboard?project=yourvoice-local 
 2. then get credintial from api and service
 3. then register and go to Create OAuth client ID and set localhost and app name then create a api
 4. this api key  will use in front end and backend
 5.  KEEP  it in .env backend and config.js in frontend as GOOGLE_CLIENT_ID 
 6. then go to backend and make a route for googlesing and controller 
 





