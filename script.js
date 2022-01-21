const notificationWidget = document.getElementsByClassName("root")[0];
const header = document.getElementsByClassName("notification-header")[0];
const noteBody = document.getElementsByClassName("notification-body")[0];
let notificationList = [
    {
        id: 0,
        img: "img/pic-1.jpg",
        name: "Kenny Jemmy",
        writeUp: {
            head: "Last man standing",
            body: "ill make this one tiny so at least we could see how things are",
            time: "4 dec",
        },
    },

    {
        id: 1,
        img: "img/pic-2.png",
        name: "joseph Jemmy",
        writeUp: {
            head: "Random stuff for you today",
            body: "hope yall are not going to read this sha im just rambling and im tired of lorem write up so i used this instead",
            time: "5 dec",
        },
    },
    {
        id: 2,
        img: "img/pic-3.jpg",
        name: "israel joe",
        writeUp: {
            head: "Another one bites the dust",
            body: "i think it was mj that sang this one im not really sure but al i know is i like it and it keeps playing in my head",
            time: "5 dec",
        },
    },
    {
        id: 3,
        img: "img/pic-4.png",
        name: "samuel anibugu",
        writeUp: {
            head: "Do you actually read this ",
            body: "jus t wanted to tell you that tech isnt always the way ,you also need hoe and cutlass because i'm hungry",
            time: "10 dec",
        },
    },
    {
        id: 4,
        img: "img/pic-5.jpg",
        name: "kene Nwogbo",
        writeUp: {
            head: "A little bit of everything",
            body: "To be or not to be is the question we keep asking each other but i think we all know the answer",
            time: "20 dec",
        },
    },
    {
        id: 5,
        img: "img/pic-6.jpg",
        name: "dorcas michael",
        writeUp: {
            head: "something stupid",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam dignissimos recusandae similique vitae voluptatum praesentium ad natus nisi aut omnis commodi alias, nulla quas distinctio nostrum, excepturi velit? Ut!",
            time: "25 dec",
        },
    },
];

header.children[0].textContent = `Messages (${notificationList.length})`;
header.children[1].addEventListener("click", function () {
    let notes = Array.from(noteBody.childNodes);
    notes.forEach((e) => {
        noteBody.removeChild(e);
    });
    notificationList = [];

    noteBody.append("You have no Pending notifications");
    header.children[0].textContent = `Messages (${notificationList.length})`;
    header.setAttribute("style", "background-color:gray");
});
function createElement(name, className = "") {
    const createdElement = document.createElement(name);
    createdElement.setAttribute("class", className);
    return createdElement;
}
function createNotification({ id, img, name, writeUp: { head, body, time } }) {
    //note item
    const noteItem = createElement("div", "notification-body__item");
    //note item image
    const noteImg = createElement("div", "notification-body__image");
    const image = createElement("img");
    image.setAttribute("src", img);
    noteImg.append(image);

    //note item name
    const fullName = name.split(" ");
    const span = createElement("span");
    span.append(fullName[0]);
    const noteFrom = createElement("h6", "notification-body__name");
    noteFrom.append(span, " " + fullName[1]);

    //note item write up
    const noteWriteUp = createElement("div", "notification-body__write-up");
    const noteWriteUpHead = createElement(
        "h5",
        "notification-body__write-up__head"
    );
    noteWriteUpHead.append(head);
    const noteWriteUpBody = createElement(
        "p",
        "notification-body__write-up__body"
    );
    noteWriteUpBody.append(body);
    const noteWriteUpTime = createElement(
        "div",
        "notification-body__write-up__time"
    );
    noteWriteUpTime.append(time);

    noteWriteUp.append(noteWriteUpHead, noteWriteUpBody, noteWriteUpTime);

    //button
    const noteButton = createElement("button", "notification-body__btn btn");
    noteButton.append("x");
    noteButton.addEventListener("click", function () {
        noteBody.removeChild(this.parentElement);
        let index;
        notificationList.forEach((item, i) => {
            if (item.id === id) index = i;
        });
        if (!(index == null)) {
            notificationList.splice(index, 1);
        }
        header.children[0].textContent = `Messages (${notificationList.length})`;
        if (notificationList.length === 0) {
            header.setAttribute("style", "background-color:gray");
            noteBody.append("You have no Pending notifications");
        }
    });

    //put it all together
    noteItem.append(noteImg, noteFrom, noteWriteUp, noteButton);
    console.log(noteItem);
    return noteItem;
}
notificationList.forEach((note) => {
    noteBody.append(createNotification(note));
});
