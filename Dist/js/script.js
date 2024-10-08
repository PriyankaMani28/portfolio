'use strict';
// ----- Mobile navigation -----

const mobileIcon = document.querySelector(".mobileIcon");
const header = document.querySelector("header");
const lists = document.querySelectorAll("ul li a")

lists.forEach((list) => {
    list.addEventListener("click", () => {
        header.classList.remove("active");
        document.querySelector("body").style.overflow = "visible";
    })
})

mobileIcon.addEventListener("click", () => {
    header.classList.toggle("active");

    if (header.classList.contains("active")) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "visible";
    }
});

// ----- Resume Section -----

const resBtn = document.querySelectorAll('.resBtn');
const content = document.querySelectorAll('.content');

resBtn.forEach(function (button) {

    button.addEventListener('click', function () {

        resBtn.forEach(function (btns) {
            btns.classList.remove('active');
        })

        content.forEach(function (sections) {
            sections.style.display = 'none';
        })

        button.classList.add("active");

        document.getElementById(button.id + '-content').style.display = 'grid';
    })
})

resBtn[0].classList.add('active');
content[0].style.display = 'grid';

