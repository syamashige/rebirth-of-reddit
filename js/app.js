// console.log("Sanity Check Yo Self")

// Server Request
const oReq = new XMLHttpRequest();
const firstUrl = "https://www.reddit.com/r/corgis.json";
const randomUrl = "https://www.reddit.com/r/creepy.json";
// const getAppUrl = "https://www.reddit.com/r/GetMotivated/";

// Request Helper Function
const request = (type, url, method, callback) => {
    oReq.addEventListener(type, callback);
    oReq.open(method, url);
    oReq.send();
};

// Element Helper Function 
function elemHelper(elem, idLabel, classLabel, content) {
    let elemHelpMe = document.createElement(elem);
    elemHelpMe.id = idLabel;
    elemHelpMe.className = classLabel;
    elemHelpMe.innerHTML = content;

    return elemHelpMe;
};      

// Create Header

const logo = elemHelper("img", "logo", null, null);
logo.src = "./assets/logo.svg";
headerContainer.appendChild(logo);

// const header = document.createElement("img");
// header.id = "header";
// header.src = "./assets/header_bg.svg";
// // header.style.display = "block";
// // header.style.margin = "auto"
// // header.style.position = "absolute"
// document.body.appendChild(header)



// Create Navigation Bar
const navDiv = elemHelper("div", "navigation", null, null);
headerContainer.appendChild(navDiv);

// Random Navigation Button
let random = elemHelper("button", "random", null, "RANDOM");
navDiv.appendChild(random);

// My Boards Navigation Button 
let myBoards = elemHelper("button", "myBoards", null, "MY BOARDS");
navDiv.appendChild(myBoards);

// Get The APP Navigation Button
let getTheApp = elemHelper("button", "getApp", null, "GET THE APP");
navDiv.appendChild(getTheApp);

// Get The APP Button Click Event
let getAppButtonEvent = document.getElementById("getApp");
getAppButtonEvent.addEventListener("click", getAppPage);

function getAppPage() {
    window.open("https://www.reddit.com/r/redditmobile/")
}


request("load", firstUrl, "GET", res => {
    const target = JSON.parse(res.currentTarget.response);
    console.log("target", target);
    console.log("target children length", (target.data.children).length)
    for (let i = 0; i < (target.data.children).length; i++) {
        
        // console.log("Is it looping?")
        // Create Input Boxes Wrapper
        let inputBoxes = elemHelper("div", null, "input", null);
        container.appendChild(inputBoxes);

        // Create Wrapper for User Section of Input Boxes
        let userContainer = elemHelper("div", null, "userContainer", null);
        inputBoxes.appendChild(userContainer);

        // Create User Profile Picture in User Section
        let userImage = elemHelper("img", null, "userImg", null);
        userImage.src = target.data.children[i].data.thumbnail;
        userContainer.appendChild(userImage);

        // Create User Name in User Section
        let inputUser = elemHelper("div", null, "user", target.data.children[i].data.author);
        userContainer.appendChild(inputUser);


        // let insertTitle = document.createElement('p');
        // insertTitle.className = "insertTitle";
        // insertTitle.innerHTML = target.data.children[i].data.title;
        // inputBoxes.appendChild(insertTitle);

        // Create Content for Input Box 
        let insertImage = elemHelper("img", null, "thumbnail", null);
        insertImage.src = target.data.children[i].data.thumbnail;
        inputBoxes.appendChild(insertImage);

        // Create Wrapper for Interaction
        let interactContainer = elemHelper("div", null, "interact", null);
        inputBoxes.appendChild(interactContainer);

        // Create Faux Like Button Option
        let iLikeThat = elemHelper("img", null, "likeThat", null);
        iLikeThat.src = "./assets/empty_heart.png";
        interactContainer.appendChild(iLikeThat);

        // Click Event Listener for the Faux Like Button 
        // When the heart is clicked, it changes to red filled heart image
        iLikeThat.addEventListener("click", fullHeart);

        function fullHeart() {
            iLikeThat.src = "./assets/red_heart.png";

            // let unfillHeart = document.querySelectorAll(".likeThat")[0];

            // if (unfillHeart.src = "./assets/empty_heart.png") {
            //     unfillHeart.src = "./assets/red_heart.png";
            //     console.log("I was empty, but now I'm full");
            // }
            // else if (unfillHeart.src = "./assets/red_heart.png") {
            //     unfillHeart.src = "./assets/empty_heart.png"
            //     console.log("I was full, but now I'm empty")
            // }
         }
        
        // Create Faux Comment Button Option
        let leaveComment = elemHelper("img", null, "commentThat", null);
        leaveComment.src = "./assets/comment_icon.png";
        interactContainer.appendChild(leaveComment);

        // Click Event Listener for Faux Comment Button 
        // When clicked, show the text box to leave the comment
        leaveComment.addEventListener("click", comment);

        function comment() {
            let showCommentBox = document.querySelectorAll(".commentHere")[0];
            if (showCommentBox.classList.contains("show") === false) {
                showCommentBox.classList.add("show");
            } 
            else {
                showCommentBox.classList.remove("show");
            }
        }

        // Create Title/Text for the Content
        let insertTitle = elemHelper("div", null, "insertTitle", target.data.children[i].data.title);
        inputBoxes.appendChild(insertTitle);
        
        let commentContainer = document.createElement('div');
        commentContainer.className = "commentContainer";
        inputBoxes.appendChild(commentContainer);

        let commentBox = document.createElement('input');
        commentBox.className = "commentHere";
        commentBox.value = "Leave a comment ...";
        commentContainer.appendChild(commentBox);

        
        // for (let j = 0; j < target.data.children.length; j++) {

        //     console.log("target before if", target)
        //     if (target.data.children[j].data.secure_media.reddit_video.fallback_url) {
        //         (console.log("video exists"))
        //         let insertVideo = document.createElement("video");
        //         insertVideo.className = "insertVideo";
        //         insertVideo.src = target.data.children[j].secure_media.reddit_video.fallback_url;
        //         insertVideo.style.width = "300px";
        //         insertVideo.style.height = "200px";
        //         insertVideo.play();
        //         inputBox.appendChild(insertVideo);
        //     } else if (target.data.children[j].data.secure_media === null) {
        //         let insertImage = document.createElement('img');
        //         insertImage.className = "insertUrl";
        //         insertImage.src = target.data.children[j].data.thumbnail;
        //         inputBoxes.appendChild(insertImage);
        //     } else {
        //         let insertImage = document.createElement('img');
        //         insertImage.className = "insertUrl";
        //         insertImage.src = target.data.children[j].data.thumbnail;
        //         inputBoxes.appendChild(insertImage);
        //     }
        // }
}
    
})

let getMyBoards = document.getElementById("myBoards");
getMyBoards.addEventListener("click", getHomePage);

function getHomePage() {
    let removePrev = document.body;
    let removeThis = document.getElementById("container");
    removePrev.removeChild(removeThis);


    let newContainer = document.createElement("div");
    newContainer.id = "container";
    document.body.appendChild(newContainer);

    request("load", firstUrl, "GET", res => {
        const target = JSON.parse(res.currentTarget.response);
        console.log("target", target);
        console.log("target children length", (target.data.children).length)
        for (let i = 0; i < (target.data.children).length; i++) {
            // console.log("Is it looping?")
            let inputBoxes = document.createElement('div');
            inputBoxes.className = "input";
            container.appendChild(inputBoxes);

            let insertTitle = document.createElement('p');
            insertTitle.className = "insertTitle";
            insertTitle.innerHTML = target.data.children[i].data.title;
            inputBoxes.appendChild(insertTitle);

            let insertImage = document.createElement('img');
            insertImage.className = "insertUrl";
            insertImage.src = target.data.children[i].data.thumbnail;
            inputBoxes.appendChild(insertImage);

        }
    })
}

let randomButtonEvent = document.getElementById("random");
randomButtonEvent.addEventListener("click", randomPage);

function randomPage() {
    // let removePrev = document.getElementsByTagName("body");
    // removePrev.removeChild("container")
    request("load", randomUrl, "GET", res => {
        let removePrev = document.body;
        let removeThis = document.getElementById("container");
        removePrev.removeChild(removeThis);


        let newContainer = document.createElement("div");
        newContainer.id = "container";
        document.body.appendChild(newContainer);
        
        console.log("random nightmares")
        console.log("hello world")
        // homePage = null;
        const target = JSON.parse(res.currentTarget.response);
        console.log("target", target);
        console.log("target children length", (target.data.children).length)
        for (let i = 0; i < (target.data.children).length; i++) {
            // console.log("Is it looping?")
            let inputBoxes = document.createElement('div');
            inputBoxes.className = "input";
            container.appendChild(inputBoxes);

            let insertTitle = document.createElement('p');
            insertTitle.className = "insertTitle";
            insertTitle.innerHTML = target.data.children[i].data.title;
            inputBoxes.appendChild(insertTitle);

            let insertImage = document.createElement('img');
            insertImage.className = "insertUrl";
            insertImage.src = target.data.children[i].data.thumbnail;
            inputBoxes.appendChild(insertImage);

        }
    })
}




