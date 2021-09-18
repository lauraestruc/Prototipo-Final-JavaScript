$("#theme").on("click", () => {
    if (localStorage.getItem("theme") == "dark") {
        lightTheme()
    } else {
        darkTheme()
    }
})


const darkTheme = () => {

    $("nav").css("background-color", "rgb(246, 239, 233)")
    $("footer").css({
        "background-color": "rgb(246, 239, 233)",
        "color": "#252424"
    })
    $("h1").css("color", "rgb(246, 239, 233)")
    $("p").css("color", "rgb(246, 239, 233)")
    $("body").css("background-color", "#252424")
    $("#productImage").css("background-color","#252424")
    $("#product").css("background-color","#252424")
    
    localStorage.setItem("theme", "dark")
}

const lightTheme = () => {

    $("nav").css("background-color", "#252424")
    $("a").css("color", "rgb(211, 198, 187)")
    $("footer").css({
        "background-color": "#252424",
        "color": "rgb(246, 239, 233)"
    })
    $("h1").css("color", "#252424")
    $("p").css("color", "#252424")
    $("body").css("background-color", "rgb(246, 239, 233)")
    $("#productImage").css("background-color","rgb(211, 198, 187)")
    $("#product").css("background-color","rgb(211, 198, 187)")
    localStorage.setItem("theme", "light")
}