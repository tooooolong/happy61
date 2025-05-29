function createElements(tagName, count, containerId) {
  const container = document.getElementById(containerId);

  for (let i = 0; i < count; i++) {
    const element = document.createElement(tagName);
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.animationDelay = Math.random() * 2 + "s";
    element.style.backgroundColor = getRandomColor();
    container.appendChild(element);
  }
}

function getRandomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// 创建彩带
const ribbonCount = 50;
createElementsWithClass("div", ribbonCount, "celebration", "ribbon");

// 创建气球
const balloonCount = 30;
createElementsWithClass("div", balloonCount, "celebration", "balloon");

function createElementsWithClass(tagName, count, containerId, className) {
  const container = document.getElementById(containerId);

  for (let i = 0; i < count; i++) {
    const element = document.createElement(tagName);
    element.className = className;
    element.style.left = Math.random() * window.innerWidth + "px";
    element.style.animationDelay = Math.random() * 2 + "s";
    if (className === "balloon") {
      element.style.background = `linear-gradient(to top, ${getRandomColor()}, ${getRandomColor()})`;
    } else {
      element.style.backgroundColor = getRandomColor();
    }
    container.appendChild(element);
  }
}