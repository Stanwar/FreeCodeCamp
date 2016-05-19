// Main Controller for the tribute app. 
angular.module('tributeApp').controller("tributeController",[$scope], 
function($scope){
   
   (function addImages(){
       
       // Add pictures
       for (var index = 0; index < 3; index++) {
           $scope.images.push({
               src : '../TributePage/data/images/RogerFederer' + index + '.jpg', 
               id : index
           });
       }
   })();
    
});