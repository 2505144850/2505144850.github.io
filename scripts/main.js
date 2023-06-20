// JavaScript 对大小写敏感
let myHeading = document.querySelector('h1');

//点击更换图片
let myImage = document.querySelector('img');
myImage.onclick = function()
{
    let imgSrc = myImage.getAttribute('src');
    if(imgSrc === "images/firefox-01.png")
    {
        myImage.setAttribute('src','images/R-C.png');
        myHeading.textContent = 'Hello World!' + " : " + localStorage.getItem("name");
    }
    else if(imgSrc === "images/R-C.png")
    {
        myImage.setAttribute("src","images/OIP-C.jpg");
        myHeading.textContent = 'This is Firefox.' + " : " + localStorage.getItem("name");
    }
    else
    {
        myImage.setAttribute('src',"images/firefox-01.png");
        myHeading.textContent = 'Mozilla is cool' + " : " + localStorage.getItem("name");
    }
}

//添加个性化欢迎信息

//定义一个函数记录
function setUserName()
{
    let userName = prompt("请输入你的姓名：");
    if(!userName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name",userName);
        myHeading.textContent = myHeading.textContent + " : " + userName;
    }
}

//设置按钮事件
let myButton = document.querySelector("button");
myButton.onclick = function()
{
    setUserName();
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    myHeading.textContent = myHeading.textContent + " : " + localStorage.getItem("name");
}