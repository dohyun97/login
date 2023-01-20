<template>
  
    <router-link :to="{name: 'Signin'}">
    <button 
    :style="{ background, color}"
    :disabled="disable" >{{buttonName}}</button>
    </router-link>  
   
    
    </template>
    
    <script>
    
    export default {
      name: 'MyButton',
      components: {
      },
      props: {
        background: {
            type: String,
        },
        color: {
            type: String,
        },
        disable: {
            type: Boolean,
        },
        buttonName:{
            type:String
        },
        routName:{
            type:String
        }
      }
    }
    </script>
    
    <style>
    button:disabled {
        opacity:0.5
    }
    button{
        cursor: pointer;
    } 
    </style>