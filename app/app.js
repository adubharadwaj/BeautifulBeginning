var myApp = angular.module('beautifulbeginning', ['ngAnimate', 'ngSanitize','ui.bootstrap', 'ui.router', 'ui.navbar']);

myApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/hometmpl.html"
        })
          
        .state('silver', {
            url: "/silver",
            templateUrl: "views/silver.html"
        }) 

        .state('all_christening',{
          url: "/all_christening",
          templateUrl:"views/all_christening.html"
        })         

});

myApp.controller('NavigationController', function($scope) {

	 $scope.tree2 =[{
  	name: "SILVER",
  	link: "silver"
  },{
  	name: "ALL CHRISTENING",
  	link: "all_christening"
  }]; 
});

myApp.controller('CarouselDemoCtrl', function($scope){	

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 1100 + slides.length + 1;    
    slides.push({
                text: 'Bedding!', 
                image: '/Images/Layer328.png'
              });
    slides.push({
                text: 'Comforter!',
                image: '/Images/Layer345.jpg'
              });
  };  

  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }

  
});

myApp.controller('ImageCtrl', function($http){
    var self = this;
    $http.get('images.json').then(function(response){
        self.images = response.data;
      });
});

myApp.controller('abtrepeatctrl', function($scope){
  $scope.aboutusmenus = ['OUR STORY','BABY REGISTRY','STORE LOCATION','TESTIMONIALS'];
  $scope.servicemenus = ['CONTACT US', 'ORDER STATUS','FAQ','SHIPPING POLICY', 'RETURN POLICY','NEWSLETTER','MYACCOUNT','LIVE CHAT'];
  $scope.shopmenus = ['BABY APPAREL', 'BABY GIFTS','CHRISTENING','FURNITURE', 'BEDDING','DECOR','LIGHTENING','SALE','BRANDS'];
  $scope.contactusmenus_1 = ['BEAUTIFUL BEGINNINGS ','4472 Lawn Avenue ','Western Springs, IL, 60558']; 
  $scope.contactusmenus_2 = ['708-246-1212']; 
  $scope.contactusmenus_3 = ['STORE HOURS','Monday-Friday 10am - 5.30pm','Saturday - 10am - 5pm', 'Sunday - Closed'];
  $scope.message ="Get the latest promotions and special offers delivered directly to your inbox!";
  $scope.images = [{
    src: 'Images/Facebook.png',
    description: 'Facebook'
  },{
    src: 'Images/Twitter.png',
    description: 'Twitter'
  },{
    src: 'Images/Pinterest.png',
    description:'Pinterest'
  },{
    src:'Images/Youtube.png',
    description: 'youtube'
  },{
    src: 'Images/google+.png',
    description:'google'
  }];

});


myApp.controller('wlbCtrl', function($scope){
  $scope.message = "Beautiful Beginnings offers finely crafter baby cribs as well as complete suitesof nursery furniture, from traditional to contemporary. All of the finest names in crib bedding and baby blankets are featured with thousands of fabrics available to customise your baby crib. We Offer everything you need to personalize your baby nursery with one of a kind nursery decor from distinctive lamps, clocks, wall hangings, picture frames and other decorative items.";
  $scope.message2 = "To receive a gift from Beautiful Beginnings is a new mom's biggest wish. There are so many unique and beautiful baby gifts to select from including baby burp cloths, designer  diaper bags, baby clothes and many baby toys. Whether you are looking for Christening gifts, a baby shower gift, a newborn gift or even a gift for a Child's third birthday, we have many baby gifts to choose from. And to add to the pleasure, Beautiful Beginnings offers complimentary gift wrap in their "+'"exclusive"'+"gift wrap and daily shipping of gifts via UPS. One stop shopping for all family and friends."    
});


