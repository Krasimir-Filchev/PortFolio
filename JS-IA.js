// JavaScript source code

// == hide Registration Form ==


    $(document).ready(function () {
        $('#Jdemo2').click(function () {
            $('.loginC').toggle('show');
            $('.bdrop').toggle('hide');
        });
    });



        $(document).ready(function () {
            $('#Jdemo1').click(function () {
                $('.loginF').toggle('show');
                $('.bdrop').toggle('hide');
            });
        });


//  == show Bubble ==

    $(document).ready(function () {
        $('.button5').click(function () {
            $('.bubble').toggle('show');
        });
    });

// == Checkboxes inside select / dropdown menu == 

  
        var expanded = false;

        function showCheckboxes() {
            var checkboxes = document.getElementById("checkboxes");
            if (!expanded) {
            checkboxes.style.display = "block";
        expanded = true;
            } else {
            checkboxes.style.display = "none";
        expanded = false;
    }
}
 

// == Checkboxes inside select / dropdown menu 2 == 

   
        var expanded2 = false;
    
        function showCheckboxes2() {
            var checkboxes2 = document.getElementById("checkboxes2");
            if (!expanded) {
                checkboxes2.style.display = "block";
            expanded = true;
            } else {
                checkboxes2.style.display = "none";
            expanded = false;
        }
    }


//  == Checkboxes inside select / dropdown menu 3 == 

      
        var expanded3 = false;
        
        function showCheckboxes3() {
            var checkboxes3 = document.getElementById("checkboxes3");
            if (!expanded) {
                    checkboxes3.style.display = "block";
                expanded = true;
            } else {
                    checkboxes3.style.display = "none";
                expanded = false;
            }
        }

        
//  == Checkboxes inside select / dropdown menu 4 ==

             
        var expanded4 = false;
            
        function showCheckboxes4() {
            var checkboxes4 = document.getElementById("checkboxes4");
            if (!expanded) {
                        checkboxes4.style.display = "block";
                    expanded = true;
            } else {
                        checkboxes4.style.display = "none";
                    expanded = false;
                }
            }


//   == Progress Bar 1 ==

             

            function update1() {
            var element = document.getElementById("myprogressBar3");
                        var width = 1;
                        var identity = setInterval(scene7, 10);
            function scene7() {
                if (width >= 10) {
                            clearInterval(identity);
                        } else {
                            width++;
                        element.style.width = width + '%';
                        element.innerHTML = width * 1 + '%';
                    }
                }
            }
    
  

 //   == Progress Bar 2 ==

                    

            function update2() {
            var element = document.getElementById("myprogressBar3");
                            var width = 1;
                            var identity = setInterval(scene7, 10);
            function scene7() {
                if (width >= 20) {
                                clearInterval(identity);
                            } else {
                                width++;
                            element.style.width = width + '%';
                            element.innerHTML = width * 1 + '%';
                        }
                    }
                }
        
   

//     == Progress Bar 3 == 

                         

            function update3() {
            var element = document.getElementById("myprogressBar3");
                                var width = 1;
                                var identity = setInterval(scene7, 10);
            function scene7() {
                if (width >= 30) {
                                    clearInterval(identity);
                                } else {
                                    width++;
                                element.style.width = width + '%';
                                element.innerHTML = width * 1 + '%';
                            }
                        }
                    }
            
   

//    == Progress Bar 4 == 

                            

            function update4() {
            var element = document.getElementById("myprogressBar3");
                                    var width = 1;
                                    var identity = setInterval(scene7, 10);
            function scene7() {
                if (width >= 40) {
                                        clearInterval(identity);
                                    } else {
                                        width++;
                                    element.style.width = width + '%';
                                    element.innerHTML = width * 1 + '%';
                                }
                            }
                        }
                
   

//    == Progress Bar 5 ==

                               

            function update5() {
            var element = document.getElementById("myprogressBar3");
                                        var width = 1;
                                        var identity = setInterval(scene7, 10);
            function scene7() {
                if (width >= 50) {
                                            clearInterval(identity);
                                        } else {
                                            width++;
                                        element.style.width = width + '%';
                                        element.innerHTML = width * 1 + '%';
                                    }
                                }
                            }
                    
 
//    == Progress Bar 6 ==



function update6() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 60) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 7 ==



function update7() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 70) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 8 ==



function update8() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 80) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 9 ==



function update9() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 90) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 10 ==



function update10() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 11 ==



function update11() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 12) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 12 ==



function update12() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 24) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 13 ==



function update13() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 36) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 14 ==



function update14() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 48) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 15 ==



function update15() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 60) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 16 ==



function update16() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 72) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 17 ==



function update17() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 84) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 18 ==



function update18() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 19 ==



function update19() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 14) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 20 ==



function update20() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 28) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 21 ==



function update21() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 42) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 22 ==



function update22() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 56) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 23 ==



function update23() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 70) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 24 ==



function update24() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 84) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}


//    == Progress Bar 25 ==



function update25() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 26 ==



function update26() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 16) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 27 ==



function update27() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 32) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 28 ==



function update28() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 48) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 29 ==



function update29() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 64) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 30 ==



function update30() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 80) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

//    == Progress Bar 31 ==



function update31() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene7, 10);
    function scene7() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
}

