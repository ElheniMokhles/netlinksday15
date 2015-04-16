
animateLoad = function(f){
    f();
}

$.get( "HtmlPage.html", function( data ) {
  injection(data);
});

injection = function (data) {



    animateLoad(function () {

        document.getElementById("holderAll").innerHTML += data;

        $(window).load(function() {
            firstFnct();
        });

        var videoInput = document.getElementById('inputVideo');
        var canvasInput = document.getElementById('inputCanvas');

        var initx = (($("body").width() / 2) - 100);
        document.getElementById("x").style.left = initx + "px";

        //Time to NetlinksDay
        var target = new Date("Apr 13,2014").getTime();
        var days, heures, minutes;

        timeCounter = function () {
            var current_date = new Date().getTime();
            var seconds_left = (target - current_date) / 1000;
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;

            heures = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;

            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);
            $("#timeLast").html(days + "D," + (heures > 10 ? heures : "0" + heures) + "H," + (minutes > 10 ? minutes : "0" + minutes) + "M," + (seconds > 10 ? seconds : "0" + seconds) + "S");

        }

        timeCounter();
        timelast = setInterval(timeCounter, 1000)

        document.getElementById("timeLast").onmouseout = function () {
            timeCounter();
            timelast = setInterval(timeCounter, 1000)
        }

        canvas = document.getElementById("projects");

        var etape = -1;
        test = 0;
        test2 = 0;
        slide = 0;
        etape = 0;
        d = 0;
        slideTest = false;

        oldTextR = $("#firstTitleRight").text();

        var cameraTest = false;


        WIDTH = $("body").width();
        HEIGHT = $("#big").height();
        respTest = false;
        menuTest = false;
        //init slide
        resp = function () {
            if(!respTest || WIDTH != $("body").width() || HEIGHT != $("#big").height()){
            
                WIDTH = $("body").width();
                HEIGHT = $("#big").height();
                respTest = true;

                $("#layer1").css("margin-top", -HEIGHT + "px");
                $("#layer2").css("margin-top", -HEIGHT + "px");
                $("#layer3").css("margin-top", -HEIGHT + 100 + "px");

                $("#layerLeft2").css("margin-top", -HEIGHT + "px");
                $("#layerLeft3").css("margin-top", -HEIGHT + "px");
                $("#layerLeft4").css("margin-top", -HEIGHT + "px");
                $("#layerLeft5").css("margin-top", -HEIGHT + "px");
                $("#layerLeft6").css("margin-top", -HEIGHT + "px");
                $("#layerLeft7").css("margin-top", -HEIGHT + "px");

                $("#layerLeft1").css("height", HEIGHT + "px");
                $("#layerLeft2").css("height", HEIGHT + "px");
                $("#layerLeft3").css("height", HEIGHT + "px");
                $("#layerLeft4").css("height", HEIGHT + "px");
                $("#layerLeft5").css("height", HEIGHT + "px");
                $("#layerLeft6").css("height", HEIGHT + "px");
                $("#layerLeft7").css("height", HEIGHT + "px");
                $("#layerLeft8").css("height", HEIGHT + "px");

                $("#conf").css("height", HEIGHT + "px");

                $(".ahalf").each(function () {
                    $(this).css("height", HEIGHT + HEIGHT * 0.5 + "px");
                });

                $("#theEnd").height(HEIGHT + "px");
                $(".holder").each(function () {
                    var thisWIDTH = n * WIDTH;
                    $(this).css("width", thisWIDTH + "px");
                    $this = $(this);
                    $(this).children().each(function () {
                        $(this).css("width", (thisWIDTH / n) + "px");
                        $(this).css("height", HEIGHT + "px");
                    });
                });
            
            }
            window.requestAnimationFrame(resp);
        }

        n = $(".holder").children().length / 2 - 1;


        video = function () {
            hideMenu();
            $(".titleFirst").fadeToggle();
        }

        window.requestAnimFrame = function () {
            return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
        }
        window.requestAnimationFrame(resp);

        //resploop = setInterval(resp);

        var time = 0;
        cameraTest = false;


        timeFirsth = Date.now();

        var htracker = new headtrackr.Tracker();
        htracker.init(videoInput, canvasInput);
        htracker.start();
        loop = setInterval(function () {
            if (false) {
                clearInterval(loop);
                resp();
            }else
                if (htracker.status == "tracking") {
                    resp();
                    cameraTest = true;
                    zFirst = 0;
                    clearInterval(loop);
                    document.addEventListener("headtrackingEvent", function (e) {
                        if (zFirst == 0) zFirst = e.z;
                        xNow = (($("body").width() / 2 + (70 * e.x)) - 100);
                        yNow = ($("#big").height() - (70 * e.y)) - 10;
                        document.getElementById("x").style.left = xNow + "px";

                        whiteSlide(xNow);
                        blackSlide(xNow);
                        glassMove(xNow + 200, yNow + 100);

                    });
                }
        });

        //google glass
        glassMove = function (x, y) {
            y = -y;
            if (y > 0) y = 0;
            if (y < -$("#big").height()) y = -$("#big").height();

            x = -x;
            if (x > 0) x = 0;
            if (x < -$("#big").width()) x = -$("#big").width();

            document.getElementById("slideRight1").style.backgroundPositionX = x + "px";
            document.getElementById("slideRight1").style.backgroundPositionY = y + "px";
        }

        //Left or Right
        displayBlocs = function () {
            setTimeout(function () {
                $("#hldrRL").show();
            }, 1000);
        }

        hideBloc = function () {
            $("#hldrRL").hide();
        }


            a1 = new Audio();
            a1.src = "audio/1.m4a";
            a1.load();

        home = function () {

            if(testPlay){
                a1.play();
            }

            $("#first").fadeIn();

            setTimeout(function () {
                $("#firstTitleRight").html("Why don't you <br /> try something <br /> you have already dismissed");
                $("#firstTitleRight").html("Why don't you <br /> try something <br /> you have already dismissed");
            }, 2000);


            $("#left").css("margin-left", "-1.6%");
            $("#right").css("margin-left", "-3px");

            if (homeTest) setTimeout(function () {
                $("#home2").fadeIn(1000);
                changeSlide(0, 1);
                changeSlide(0, 2);
            }, 1000);

            etape = 0;
            hideBloc();
            hideMenu();
            homeTest = false;

            $(".social").css("margin-bottom", 0);

        }

        initGoBack = function () {
            $("#firstTitleRight").text(oldTextR);
            dontGoBack = false;
        }



        a7 = new Audio();
        a7.src = "audio/7.m4a";
        a7.load();

        a11 = new Audio();
        a11.src = "audio/11.m4a";
        a11.load();

        a12 = new Audio();
        a12.src = "audio/12.m4a";
        a12.load();
        ll = false;

        changeWorld = function (e) {
            
            a3.pause();
            a4.pause();
            a8.pause();
            a9.pause();
            a5.pause();
            a10.pause();
            a1.pause();

            slideTest = !slideTest;

            if (!dontGoBack || e) {
                a7.play();

                setTimeout(function () {
                    $("#firstTitleRight").html("Isn't this <br /> the World <br />you always loved!");
                    $("#firstTitleLeft").html("Isn't this <br /> the World <br />you always loved!");
                }, 2000);

                $("#choixLeft").fadeToggle(2000);
                $("#choixRight").fadeToggle(2000);
                $("#theEnd").fadeOut();

                if (d == 1) d = 2;
                else d = 1;
                etape = 1;
                if (e) slide = n - 1; else slide = 0;
            } else {
                ll = true;
                a11.play();
                la12 = setInterval(function(){
                    if(a11.ended){
                        a12.play();
                        clearInterval(la12);
                    }

                })
                $("#choixLeft").fadeOut(2000);
                $("#choixRight").fadeOut(2000);
                $("#theEnd").fadeIn(2000,function(){
                    changeSlide(0, 1);
                    changeSlide(0, 2);
                });
                etape = 2;
                hideBloc();
            }
            if (e) dontGoBack = false; else dontGoBack = true;
            
        }

        animateFirst = function (f) {
            $("#forBetter").fadeOut(300);
            $("#home2").fadeOut(300, function () {
                f();
                $("#left").css("margin-left", -(WIDTH * 0.6));
                $("#right").css("margin-left", (WIDTH * 1.2));
                setTimeout(function () { $("#first").hide(); }, 1000);
            });
        }


        choiseRight = function () {

            a1.pause();
            a3.pause();
            a4.pause();
            a8.pause();
            a9.pause();
            a5.pause();
            a10.pause();
            a1.pause();

            a2.play();
            animateFirst(function () {
                $("#choixLeft").hide();
                $("#choixRight").show();
                initGoBack();
                d = 1;
                slide = 0;
                etape = 1;
                displayBlocs();
                hideMenu();
            });
            $(".social").css("margin-bottom", -$(".social").height());
            homeTest = true;
            $("#home2").fadeOut();
            

        }

        choiseLeft = function () {

            a3.pause();
            a4.pause();
            a8.pause();
            a9.pause();
            a5.pause();
            a10.pause();
            a1.pause();
            
            a2.play();
            animateFirst(function () {
                $("#choixRight").hide();
                $("#choixLeft").show();
                initGoBack();
                d = 2;
                slide = 0;
                etape = 1;
                displayBlocs();
                hideMenu();
            });
            homeTest = true;
            $("#home2").fadeOut();
            $(".social").css("margin-bottom", -$(".social").height());
            
        }

        changeSlide = function (e, d) {
            if (d == 1) {
                $("#holderRight").css("margin-left", (-e * WIDTH) + "px");
            } else {
                $("#holderLeft").css("margin-left", (-e * WIDTH) + "px");
            }
            sound();
        }

        $("#leftWorld").click(function () {
            choiseRight();
        });

        $("#rightWorld").click(function () {
            choiseLeft();
        });

        $("#layer1").click(function () {
            slide++; if (slide >= n) slide = n - 1;
            changeSlide(slide, d);
        });

        $("#leftBloc").click(function () {
            if (slide == 0 && slideTest) {
                changeWorld(true);
            } else {
                slide--; if (slide < 0) slide = 0;
                changeSlide(slide, d);
            }
        });

        $("#rightBloc").click(function () {
            if (slide == n - 1) {
                changeWorld();
            } else {
                slide++; if (slide >= n) slide = n - 1;
                changeSlide(slide, d);
            }
        });

        document.onkeydown = function (e) {
            if (e.keyCode == 39){
                if(!homeTest){
                    choiseRight();
                }
                else{
                    $("#rightBloc").click();
                }
            }else if (e.keyCode == 37) {
                if(!homeTest){
                    choiseLeft();
                }else{
                    $("#leftBloc").click();
                }
            }else if (e.keyCode == 40){
                if(!homeTest){
                     $("#first").click();   
                }
            }
        }

        hideMenu = function () {
            $("#menu").fadeOut(300);
            $("body").css("margin-left", "0");
        }

        menuHandler = function () {
            if (!menuTest) {
                menuTest = true;
            } else {
                menuTest = false;
            }

            $("#menu").fadeToggle(300);
            if (parseInt($("body").css("margin-left")) >= $(".sidebar").width()) {
                //$("body").css("margin-left", "0");
                if (etape != 0 && etape != 2) displayBlocs();
            }
            else {
                //$("body").css("margin-left", $(".sidebar").width() + "px");
              
            }
            if (etape > 0)
                $(".social").css("margin-bottom", (parseInt($(".social").css("margin-bottom")) == 0) ? -$(".social").height() : 0 + "px");
            else $(".social").css("margin-bottom", 0);
        }
        $("#showBtn").click(menuHandler);


        //WhiteSlide1
        whiteSlide = function (x) {
            $("#layer3").css("background-position", +x / 50 + "px 0px");
            $("#layer2").css("background-position", -x / 50 + "px 0px");
            $("#layer1").css("background-position", +x / 70 + "px 0px");
        }

        blackSlide = function (x) {
            $("#layerLeft7").css("background-position", +x / 70 + "px 0px");
            $("#layerLeft6").css("background-position", -x / 70 + "px 0px");
            $("#layerLeft5").css("background-position", -x / 70 + "px 0px");
            $("#layerLeft4").css("background-position", -x / 70 + "px -70px");
            $("#layerLeft3").css("background-position", +x / 70 + "px -70px");
            $("#layerLeft2").css("background-position", +x / 70 + "px -70px");
        }



        testPlay = false;

        loadEnd = true;
        $("#first").click(function () {
            $("#home1").css("margin-top", "-1%");
            $("#home1").css("opacity", "0");
            $("#home2").css("display", "block");
            $("#home2").css("opacity", "0");
            if(!testPlay){
                a1.play();
                testPlay = true;
            }
            setTimeout(function () {
                $("#home2").css("opacity", "1");
                $("#forBetter").fadeIn(1000);
            }, 1000);

            setTimeout(function () {
                //$("#home2").css("-webkit-animation", "myfirst 3s infinite alternate");
            }, 2000);

            (etape == -1) ? 0 : 0;
        });





        window.fbAsyncInit = function () {
            FB.init({
                appId: '487218088065671',
                status: true, // check login status
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true  // parse XFBML
            });

            // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
            // for any authentication related change, such as login, logout or session refresh. This means that
            // whenever someone who was previously logged out tries to log in again, the correct case below 
            // will be handled. 
            FB.Event.subscribe('auth.authResponseChange', function (response) {
                // Here we specify what we do with the response anytime this event occurs. 
                if (response.status === 'connected') {
                    // The response object is returned with a status field that lets the app know the current
                    // login status of the person. In this case, we're handling the situation where they 
                    // have logged in to the app.
                    
                } else if (response.status === 'not_authorized') {
                    // In this case, the person is logged into Facebook, but not into the app, so we call
                    // FB.login() to prompt them to do so. 
                    // In real-life usage, you wouldn't want to immediately prompt someone to login 
                    // like this, for two reasons:
                    // (1) JavaScript created popup windows are blocked by most browsers unless they 
                    // result from direct interaction from people using the app (such as a mouse click)
                    // (2) it is a bad experience to be continually prompted to login upon page load.
                    FB.login();
                } else {
                    // In this case, the person is not logged into Facebook, so we call the login() 
                    // function to prompt them to do so. Note that at this stage there is no indication
                    // of whether they are logged into the app. If they aren't then they'll see the Login
                    // dialog right after they log in to Facebook. 
                    // The same caveats as above apply to the FB.login() call here.
                    FB.login();
                }
            });
        };



        var connectedToFacebook = false;
        // Here we run a very simple test of the Graph API after login is successful. 
        // This testAPI() function is only called in those cases. 
        function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                 facebookInfos=response;

                $("#signout").fadeIn();
                $("#signin").fadeOut();
                connectedToFacebook = true;
                console.log('Good to see you, ' + response.name + '.');
                console.log('Good to see you, ' + response.email + '.');
            });
        }

        function disconnect() {
            FB.logout(function (response) {
                // Person is now logged out
                connectedToFacebook = false;
                $("#signout").fadeOut();
                $("#signin").fadeIn();
            });
        }

        facebook = function () {
            $(".facebookHolder").fadeOut();
        }

        showFacebook = function () {
            $(".facebookHolder").fadeIn();
        }

        fbHandler = function () {
            FB.login(function(response){
                console.log(response);
                FB.api('/me', function (response) {
                    facebookInfos=response;
                    $("#signout").fadeIn();
                    $("#signin").fadeOut();
                    connectedToFacebook = true;
                    document.getElementById("facebookName").innerHTML = response.name;
                    $("#friends").html("Let your friends from "+ response.education[response.education.length-1].school.name +" know");
                });
            });
        }



        conf = function (name, societe, discreption, image) {
            this.name = name;
            this.societe = societe;
            this.discreption = discreption;
            this.image = image;
            this.render = function () {
                html = "";
                html += "<div class='confr'>" +
                            "<img src='" + this.image + "'><br>" +
                            "<span class='nameConf'>" + this.name + "</span><br>" +
                            "<span class='titleConf'>" + this.societe + "</span>" +
                            "<p>" + this.discreption + "</p>" +
                        "</div>";
                $("#conh").append(html);
            }
        }



        speakers = [
            new conf("Mehdi<br>Njim", "Tunisie", "Web apps Vs Native Apps<br><br>", "http://imagesup.org/images12/1396983580-mehdi-njim.jpg"),
            new conf("Houssem eddine<br>Lassoued", "Tunisie", "Applications payantes Vs gratuites<br><br>", "http://imagesup.org/images12/1396983538-houssem-eddine-lass.jpg"),
            new conf("Dominique<br>Touel", "Tunisie", "Futur technologique<br><br>", "http://imagesup.org/images12/1396983512-dominique-touel.jpg"),
            new conf("Christophe<br>Batier", "Lyon", "Les nouvelles technologies <br> du e-learning", "http://imagesup.org/images12/1396983453-christophe-batier.jpg"),
            new conf("Med Elyes<br>Chate", "Tunisie", "Société Awax<br><br>", "http://imagesup.org/images12/1396983560-med-elyes-chater.png"),
            //new conf("Maxime<br>Verner", "France", "L'innovation est un combat<br><br>", "images/tofs/Maxime Verner.jpg"),
            new conf("Salah<br>Amer", "France", "Smart Robots Vs Human Robots<br><br>", "http://imagesup.org/images12/1396983606-salah-amer.jpg"),
            ];


        speakers.forEach(function (e) { e.render() });


        xm = 0;
        testm = false;
        speakers = function () {
            xm += parseInt($(".confr").height()) + 100;
            if (xm > (parseInt($(".confr").height()) + 100) * $(".confr").length / parseInt(parseInt($("#conf").width()) / parseInt($(".confr").width() + 100))) {
                xm -= parseInt($(".confr").height()) + 100;
                $("#btnmore").hide();
                $("#btnless").show();
            }
            $("#conh").css("margin-top", -(xm) + "px");
        }

        speakersl = function () {
            xm -= parseInt($(".confr").height()) + 100;
            if (xm < 0) {
                xm += parseInt($(".confr").height()) + 100;
                $("#btnmore").show();
                $("#btnless").hide();
            }
            $("#conh").css("margin-top", -(xm) + "px");
        }


        document.getElementById("btnmore").onclick = function () {
            speakers();
        }


        document.getElementById("btnless").onclick = function () {
            speakersl();
        }

        ttt1 = ttt2 = true;

                a3 = new Audio();
                a3.src = "audio/3.m4a";
                a3.load();


                a8 = new Audio();
                a8.src = "audio/8.m4a";
                a8.load();


                a9 = new Audio();
                a9.src = "audio/9.m4a";
                a9.load();


                a4 = new Audio();
                a4.src = "audio/4.m4a";
                a4.load();



                a10 = new Audio();
                a10.src = "audio/10.m4a";
                a10.load();



                a5 = new Audio();
                a5.src = "audio/5.m4a";
                a5.load();


                a2 = new Audio();
                a2.src = "audio/2.m4a";
                a2.load();

        sound = function () {
            if(slide == 2 && d == 1 && $("#radh").height() < 600){
                document.getElementById("radh").style.overflow = "scroll";
                ttt1 = false;
            }else if(!ttt1){
                document.getElementById("radh").style.overflow = "initial";
            }

            if(slide == 3 && d == 1 && $("#wks").height() < 750){
                document.getElementById("wks").style.overflow = "scroll";
                ttt2 = false;
            }else if(!ttt2){
                document.getElementById("wks").style.overflow = "initial";
            }

            a3.pause();
            a4.pause();
            a8.pause();
            a9.pause();
            a5.pause();
            a10.pause();
            a1.pause();

            if(slide == 1 && d == 1){
                a3.play();
            }

            if(slide ==2 && d==1){
                a8.play();
            }

            if(slide ==3 && d==1 && !ll){
                a9.play();
            }

            if(slide==1 && d==2){
                a4.play();
            }

            if(slide == 2 && d==2){
                a10.play();
            }


            if(slide == 3 && d==2 && !ll){
                a5.play();
            }

        }

        fb = function(){
            FB.login(function(){
                FB.api('/me/feed', 'post', {message: 'I\'m going to NetlinksDay 2014, join me www.netlinksday.com!'});
            }, {scope: 'publish_actions'});
        }



        homeTest = false;
        $("#left").css("margin-left", -(WIDTH * 0.6));
        $("#right").css("margin-left", (WIDTH * 1.2));
        $("#home1").css("display","none");
        $("#home1").css("visibility","visible");
        $("#first").hide();
        


            a0 = new Audio();
            a0.src = "audio/0.m4a";
            a0.load();

        firstFnct = function () {
            a0.play();

            home();
            setTimeout(function () {
                $("#home1").fadeIn(300);
                $("#forBetter").fadeIn(300);
                $(".load").hide();
                $("#choixLeft").css("visibility", "visible");
                $("#choixRight").css("visibility", "visible");
                $("#theEnd").css("visibility", "visible");
                $("header#main").fadeIn();
                $(".social").fadeIn();

                // Load the SDK asynchronously
                (function (d) {
                    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                    if (d.getElementById(id)) { return; }
                    js = d.createElement('script'); js.id = id; js.async = true;
                    js.src = "//connect.facebook.net/en_US/all.js";
                    ref.parentNode.insertBefore(js, ref);
                }(document));

            }, 1100)
        }

        

    });

}          		