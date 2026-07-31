const express = require("express")

const homeData = require('../database/home') 
function getHomeDetails(){
    return homeData
}
module.exports ={
    getHomeDetails
}