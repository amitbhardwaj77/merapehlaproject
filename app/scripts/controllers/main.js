'use strict';

/**
 * @ngdoc function
 * @name ngArchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngArchApp
 */
angular.module('ngArchApp')
  .controller('mainCtrl', function ($scope,$state,commonService) {
  	var self = this;
  	$scope.lastname = 'bundela';
  	self.name=commonService.name;

  	function init(){
  		$scope.companyList = [
	    {
	      companyName: 'Data 1',
	      target: 80,
	      status: 'approved'
	    },
	    {
	      companyName: 'Data 2',
	      target: 200,
	      status: 'researching'
	    },
	    {
	      companyName: 'Data 3',
	      target: 109,
	      status: 'declined'
	    },
	    {
	      companyName: 'Data 4',
	      target: 103,
	      status: 'pending'
	    },
	    {
	      companyName: 'Data 5',
	      target: 100.23,
	      status: 'approval'
	    }
	  ];
	  
	  self.statusList = [{id:1,name:'researching'}, 
	  {id:2,name:'pending'},
	  {id:3,name:'approval'}, 
	  {id:4,name:'approved'},
	  {id:5,name:'declined'}];
  	}


  	self.navigate = function(){
  		$state.go('about');
  	};

  	self.deleteRow = function(index){
  	$scope.companyList.splice(index,1);
  };

   self.createRow = function(){
 	self.showCreate = true;
	self.status = "pending";
 	
  };

  self.addRow = function(){
  	var newRowObj = {};

  	newRowObj.companyName = self.name;
  	newRowObj.target = self.target;
  	newRowObj.status = self.status;

  	$scope.companyList.push(newRowObj);
  	self.showCreate = false;
  	newRowObj = null;
  };

  	init();
   


  });
