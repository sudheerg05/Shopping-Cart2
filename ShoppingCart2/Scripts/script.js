/// <reference path="angular.js" />


var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
    $scope.quantity = 1;
    $scope.quantity2 = 1;
    var products = [
             {
                 name: "Must-Have Crew T-Shirt",
                 url: "/Images/image1.jpg",
                 desc: "A comfortable tee that's good for layering, featuring supersoft fabric, crewneck, interior neck taping and contrast icon at left chest, Slim Fit, Imported",
                 Price: 10,
                 gender: "Male"
             },
             {
                 name: "Camo Crew Sweatshirt",
                 url: "/Images/image2.jpg",
                 desc: "A cozy crewneck sweatshirt featuring supersoft fleece fabric, allover camo print and side hem slits, Slim Fit, Imported",
                 Price: 25,
                 gender: "Male"
             },
             {
                 name: "Must Have Crew T-Shirt",
                 url: "/Images/image3.jpg",
                 desc: "This season's essential tee, featuring allover camo print, crew neckline, icon at left chest and interior neck taping, Slim Fit, Imported",
                 Price: 15,
                 gender: "Male"
             },
             {
                 name: "Quilted Softshell Bomber Jacket",
                 url: "/Images/image4.jpg",
                 desc: "A comfortable bomber jacket featuring smooth softshell fabric, quilting, a zip pocket at left arm, icon at left chest and ribbed trim, Classic Fit, Imported",
                 Price: 90,
                 gender: "Male"
             },
             {
                 name: "Layered Distressed Pocket T-Shirt",
                 url: "/Images/image5.jpg",
                 desc: "A cool, distressed tee with a layering effect, featuring a pocket and icon at left chest, crew neckline and raw-cut edges, Easy Fit, Imported",
                 Price: 15,
                 gender: "Male"
             },
             {
                 name: "Nylon Bomber Jacket",
                 url: "/Images/image6.jpg",
                 desc: "Wear this everywhere. Featuring water and wind resistant nylon fabric, ribbed trim, full-zip closure, utility pockets at left arm, welt pockets and interior pockets, Classic Fit, Imported",
                 Price: 60,
                 gender: "Male"
             },
            {
                name: "Logo Graphic Tee",
                url: "/Images/image7.jpg",
                desc: "A supersoft crewneck tee with contrast trim and logo graphic print, Imported",
                Price: 22,
                gender: "Female"
            },
            {
                name: "Logo Graphic Tees",
                url: "/Images/image8.jpg",
                desc: "A supersoft crewneck tee with contrast trim and logo graphic print, Imported",
                Price: 20,
                gender: "Female"
            },
            {
                name: "Graphic Tee",
                url: "/Images/image9.jpg",
                desc: "A supersoft crewneck tee with contrast trim and logo graphic print, Imported",
                Price: 15,
                gender: "Female"
            },
            {
                name: "Logo-Graphic Tee",
                url: "/Images/image10.jpg",
                desc: "A supersoft crewneck tee with contrast trim and logo graphic print, Imported",
                Price: 10,
                gender: "Female"
            },
            {
                name: "Colorblock Logo Graphic Tee",
                url: "/Images/image11.jpg",
                desc: "A cute crewneck tee featuring raglan sleeves, colorblocking, logo graphic print and curved hem, Imported",
                Price: 20,
                gender: "Female"
            },
            {
                name: "Color block Logo Graphic Tee",
                url: "/Images/image12.jpg",
                desc: "A cute crewneck tee featuring raglan sleeves, colorblocking, logo graphic print and curved hem, Imported",
                Price: 25,
                gender: "Female"
            }
        ];
    $scope.products = products;

    $scope.theFilter = {};
    $scope.showGender = function (gender) {
        if ($scope.theFilter.gender === gender) {
            $scope.theFilter = {};
        }
        else {
            $scope.theFilter.gender = gender;
        }
    };
    $scope.shop = true;

    
    var cartCount = 0;
    var cartTotal = 0;
    $scope.cartTotal = cartTotal;


    var cartItems = [];

    //console.log(products[0].Price * 10);
    $scope.addFunction = function (index, name, price, num) {
        cartCount += num;
        $scope.cartCount = cartCount;
        $scope.cartTotal += price * num;
        //  alert($scope.button_value);
        if (cartCount == 1) {
            $scope.itemsInCart = cartCount + " item";
        } else if (cartCount > 1) {
            $scope.itemsInCart = cartCount + " items";
        }
        var cartObject = {};
        cartObject.quant = num;
        cartObject.nam = name;
        cartObject.pric = price;
        cartObject.subtotal = price * num;
        cartObject.index = index;
        cartItems.push(cartObject);
        $scope.cartItems = cartItems;

        $scope.button_value(index);
        
    }
    $scope.removeFunction = function (index, name, price, num) {
        cartCount -= num;
        $scope.cartCount = cartCount;
        $scope.cartTotal -= price * num;
        if (cartCount == 0) {
            $scope.itemsInCart = "";
        } else if (cartCount == 1) {
            $scope.itemsInCart = cartCount + " item";
        } else if (cartCount > 1) {
            $scope.itemsInCart = cartCount + " items";
        }
        var ind = -1;
        for (var i in $scope.cartItems) {
            if ($scope.cartItems[i].nam == name) {
                ind = i;
            }
        }
        $scope.cartItems.splice(ind, 1);
        
        $scope.button_value(index);
        
    }
    $scope.removeFromCart = function (index) {
        for (var i in $scope.products) {
            if ($scope.products[i].name == $scope.cartItems[index].nam) {
                ind = i
            }
        }
        $scope.removeFunction(ind, cartItems[index].nam, cartItems[index].pric, cartItems[index].quant);
    }

    $scope.button_value = function (index) {

        //alert("inside sub function      " + index +"------------"+ $scope.hiddenbtn[index]);
        if (angular.isUndefined($scope.button_value[index])) {
            $scope.button_value[index] = true;
        }
        else if (angular.equals($scope.button_value[index], false)) {
            $scope.button_value[index] = true;
        }
        else if (angular.equals($scope.button_value[index], true)) {
            $scope.button_value[index] = false;
        }
        else {
            $scope.button_value[index] = false;
        }
        //  alert("outside sub function      " + index + "------------" + $scope.hiddenbtn[index]);

    };

});