

window.addEventListener("resize", function()
{
    var screenHeight = document.documentElement.clientHeight;
    var screenWidth = document.documentElement.clientWidth;
    var profileContainer = document.getElementById("profile-container");

    if (screenHeight <= 990 && screenWidth >= 600 && screenWidth <= 1000)
        profileContainer.style.marginTop = (980 - screenHeight).toString() + 'px';
    else
        profileContainer.style.marginTop = '0px';
});