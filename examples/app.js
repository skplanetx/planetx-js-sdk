/**
 * This is necessary for examples file
 * Author: Kwak Nohyun (nhkwak@sk.com) , Junghyun Han (junghyun.han@sk.com)
 * Copyright (c) SK planet
 */

// 해당 변수에 값을 채워 주세요
$(function (){
    PlanetX.init({
        appkey : "",
        client_id : "",
        scope : "",
        redirect_uri : "",
        // if true, token is saved cookie or localstorage
        savingToken : true
    });

    var status = PlanetX.getLoginStatus();
    $("#status1").html("Login Status : " + status );
});

function userProfileCallback( data ) {
    var titleEl,
        $targetEl;
    titleEl = "<h2> userProfile success </h2>" ;
    $targetEl = $("#profile");
    for ( var i in data.profile ) {
        if ( data.profile[i].hasOwnProperty ){
            titleEl += ( i + " : " + data.profile[i] + "<br>" );
        }
    }
    $targetEl.html( titleEl );
}
function userProfile() {
    PlanetX.api( "get", "https://apis.skplanetx.com/users/me/profile", "JSON", { },  userProfileCallback );
}
function loginStatus () {
    var status;
    status = PlanetX.getLoginStatus();
    $("#status2").html( "Login Status :" + status );
}
function tcloud ( ) {
    PlanetX.api( "get", "https://apis.skplanetx.com/tcloud/images","JSON", { "version" :1 }, tcloud_callback );
}
function tcloud_callback ( data ) {
    var imgElement = document.createElement("img");
    imgElement.src = data.meta.images.image[0].thumbnailUrl;
    //imgElement.setAttributeNode( imgAttr );
    $("#tcloud").html( data.meta.images.image[0].name +"<br>");
    $("#tcloud").append(imgElement);
}
function melon () {
    PlanetX.api( "get", "http://apis.skplanetx.com/melon/melondj", "JSON", { "version" : 1 }, melon_callback );
}
function melon_callback ( data ) {
    var titleEl,
        $targetEl,
        playList;
    titleEl = "<h2> melon success </h2>" ;
    $targetEl = $("#melon");
    playList = data.melon.categories.category;
    for ( var i= 0; i < playList.length ; i++  ) {
        titleEl +=  "<img src=\"" + playList[1].categoryImagePath + "\" > " + playList[i].categoryName + "<br>";
    }
    $targetEl.html( titleEl );
}
function search_11st () {
    var keyword = document.getElementById("search11").keyword.value;
    PlanetX.api( "get", "http://apis.skplanetx.com/11st/common/products", "JSON", { "searchKeyword" : keyword }, search_11st_callback );
}
function search_11st_callback ( data ) {
    var titleEl,
        $targetEl;
    titleEl = "<h2> 11st success </h2>" ;
    $targetEl = $("#11st");
    productList = data.ProductSearchResponse.Products.Product;
    for ( var i= 0 ; i < productList.length ; i++  ) {
        titleEl +=  productList[1].ProductCode + " : " + productList[i].ProductName + "<br>";
    }
    $targetEl.html( titleEl );
}
function logout() {
    PlanetX.logout( function() {
        window.location.reload();
    });
}