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
        redirect_uri : ""
    });
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
window.onload = function ( ) {
    var status = PlanetX.getLoginStatus();
    $("#status1").html("Login Status : " + status );
};
function cyworld() {
    PlanetX.api( "get", "https://apis.skplanetx.com/cyworld/minihome/me", "JSON", { "version" : 1 },  cyworld_callback );
}
function cyworld_callback ( data ) {
    var titleEl,
        $targetEl;
    titleEl = "<h2> cyworld success </h2>" ;
    $targetEl = $("#cyworld");
    for ( var i in data.miniHome ) {
        titleEl +=  (i + " : " + data.miniHome[i] + "<br>") ;
    }
    $targetEl.html( titleEl );
}
function photoView ( ) {
    PlanetX.api( "get", "https://apis.skplanetx.com/cyworld/minihome/me/albums/0/items","JSON",{
        "version": 1
    }, photoView_callback  );
}
function photoView_callback ( data ) {
    var imgElement1 = document.createElement( "img" ),
        imgElement2 = document.createElement( "img" );
    imgElement1.src = data.items.item[0].photoVmUrl;
    imgElement1.width = 400;
    imgElement2.src = data.items.item[1].photoVmUrl;
    imgElement2.width = 400;
    $("#photo1").html( "Date: "+ data.items.item[0].writeDate + "<br>" );
    $("#photo1").append( imgElement1 );
    $("#photo2").html( "Date: "+ data.items.item[1].writeDate + "<br>");
    $("#photo2").append( imgElement2 );
}
function sendmail() {
    var formEl = document.getElementById( "email" ),
        email = formEl.email.value,
        to = formEl.to.value,
        cc = formEl.cc.value,
        bcc = formEl.bcc.value,
        subject = formEl.subject.value,
        body = formEl.content.value;
    var data = {
        "email" : email,
        "to" : to,
        "cc" : cc,
        "bcc" : bcc,
        "subject" : subject,
        "body" : body
    };
    PlanetX.api( "post", "https://apis.skplanetx.com/nate/mail", "JSON", data, mail_callback );
}
function mail_callback () {
    var today = new Date();
    $("#mail").html( ": <h2> mail success... </h2>" + today.toUTCString() );
}
function nateon() {
    PlanetX.api( "get", "https://apis.skplanetx.com/nateon/profile", "JSON", { "version" : 1 }, nateon_callback );
}
function nateon_callback ( data ) {
    var titleEl,
        $targetEl;
    titleEl = "<h2> cyworld success </h2>" ;
    $targetEl = $("#nateon");
    for ( var i in data.profile ) {
        titleEl +=  (i + " : " + data.profile[i] + "<br>") ;
    }
    $targetEl.html( titleEl );
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