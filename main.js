// Menu Toggling
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const navMobile = document.getElementById("nav-mobile");
const navMobileRight = document.getElementById("nav-mobile-right");

function toggleMenu() {
  if (navMobile.classList[0] === "w-full") {
    navMobile.classList.value = "hidden";
  } else {
    navMobile.classList.value =
      "w-full h-full z-50 transition fixed top-0 left-0 flex flex-row";
  }
}

menu.addEventListener("click", toggleMenu);

navMobileRight.addEventListener("click", toggleMenu);

function getRandomNumber(min = 1, max = 90) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUsersImages(n = 10) {
  let randomUserImages = [];
  for (let i = 0; i < n; i++) {
    let id = getRandomNumber();
    let gender = getRandomNumber(1, 2);
    let url =
      gender === 1
        ? `https://randomuser.me/api/portraits/men/${id}.jpg`
        : `https://randomuser.me/api/portraits/women/${id}.jpg`;
    randomUserImages.push(url);
  }
  return randomUserImages;
}

// Stories
const stories = document.getElementById("stories-container");
const storiesCount = 15;
for (let i = 0; i < storiesCount; i++) {
  const images = getRandomUsersImages(storiesCount);
  const storyImage = document.createElement("img");
  storyImage.src = images[i];
  storyImage.classList.value = "h-16 rounded-full mr-4  shadow cursor-pointer";
  stories.appendChild(storyImage);
}

// Content
const content = document.getElementById("content-container-left");
let allContent = [];

// Projects
const projects_data = [
  {
    name: "Akul Srivastava",
    username: "akulsr0",
    project_name: "crypto-bot",
    description: "Get cryptocurrency price sms on your phone number.",
    language: "Python",
  },
  {
    name: "Hrishabh Mishra",
    username: "hrishabh-22",
    project_name: "dice_roller",
    description: "A dice Roller App made in React Native",
    language: "Javascript",
  },
];
for (let project of projects_data) {
  const project_div = document.createElement("div");
  project_div.classList.value =
    "flex flex-col w-full lg:w-2/3 mt-4 m-2 shadow-md border border-blue-100";
  project_div.innerHTML = `<div class="flex items-center bg-gray-50 p-1">
    <h5 class="mx-1 text-md font-light text-gray-800">
      ${project.name} added a project
    </h5>
  </div>
  <div class="flex flex-col px-2 pt-1">
    <h2 class="text-xl font-bold">${project.username}/${project.project_name}</h2>
    <h5 class="font-light">
    ${project.description}
    </h5>
    <div class="my-2">
      <span class="bg-blue-100 font-light rounded px-2 p-1"
        >${project.language}</span
      >
    </div>
  </div>
  <div class="flex flex-row justify-between">
    <div
      class="flex-1 text-lg text-center bg-gray-50 rounded m-2 py-2 px-1"
    >
      👍&nbsp;&nbsp;Like
    </div>
    <div
      class="flex-1 text-lg text-center bg-gray-50 rounded m-2 py-2 px-1"
    >
      💬&nbsp;&nbsp;Comment
    </div>
    <div
      class="flex-1 text-lg text-center bg-gray-50 rounded m-2 py-2 px-1"
    >
      🚀&nbsp;&nbsp;Share
    </div>
  </div>
`;
  allContent.push(project_div);
}

// Posts
const postsCount = 5;
for (let i = 0; i < postsCount; i++) {
  const post = document.createElement("div");
  post.classList.value =
    "flex flex-col w-full lg:w-2/3 mt-4 m-2 shadow-md border border-blue-100";
  post.innerHTML = `<div class="flex items-center bg-gray-50 p-2">
      <img
        src="${getRandomUsersImages(1)[0]}"
        alt=""
        class="h-12 rounded-full"
      />
      <h4 class="mx-2 text-lg font-semibold text-gray-800">
        John Doe
      </h4>
    </div>
    <div class="flex flex-col">
      <div class="p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore
      </div>
      <img
        src="https://picsum.photos/id/${getRandomNumber(1, 250)}/300/300"
        alt=""
        class="self-center"
      />
    </div>
    <div class="flex flex-row justify-between">
      <div
        class="flex-1 text-lg text-center bg-gray-50 rounded m-2 py-2 px-1"
      >
        👍&nbsp;&nbsp;Like
      </div>
      <div
        class="flex-1 text-lg text-center bg-gray-50 rounded m-2 py-2 px-1"
      >
        💬&nbsp;&nbsp;Comment
      </div>
      <div
        class="flex-1 text-lg text-center bg-gray-50 rounded m-2 py-2 px-1"
      >
        🚀&nbsp;&nbsp;Share
      </div>
    </div>`;
  allContent.push(post);
}

allContent = _.shuffle(allContent);
for (let c of allContent) {
  content.appendChild(c);
}

// Technologies
const technologies = document.getElementById("technologies-list");
const technologiesData = [
  "Android",
  "Django",
  "Flutter",
  "Node.js",
  "React",
  "React Native",
];
for (let tech of technologiesData) {
  const techListItem = document.createElement("li");
  techListItem.classList.value =
    "inline-block list-none bg-blue-100 cursor-pointer mt-2 mr-2 px-2 p-1 rounded";
  techListItem.innerHTML = tech;
  technologies.appendChild(techListItem);
}
