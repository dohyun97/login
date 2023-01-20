<template>
  <div id="signon">
    <form @submit.prevent=submit >
      
  
  
        <MyInput
            type="text" 
            :name="id_label" 
            :value="id.value" 
            :error="id.error"
            :rule="{ required: true, min: 5 }" 
            @update="update"
        />
        
        <MyInput 
            type="password" 
            :name="pw_label" 
            :value="password.value" 
            :error="password.error"
            :rule="{ required: true, min: 8}" 
            @update="update"
        />
        
        <div id="b1">
        <LogInButton 
            :buttonName="login"
            background="pink"
            color="white"
          
            :disable="!valid" 
        /> 
      </div>
      <div id="b2">
        <SignInButton 
           :buttonName="sign_in"
            background="pink"
            color="white"
           
            :disable=false 
        /> 
    </div>
    </form>
    <div v-html="status" />
    </div>
    </template>
    
    <script>
    import LogInButton from '../components/LogInButton.vue';
    import SignInButton from '../components/SignInButton.vue';
    import MyInput from '../components/MyInput.vue';
    import axios from "axios";

    
    export default {
      name: 'SignOnPage',
      data() {
        return {
            login: "Log in",
            sign_in:"Sign in",
            id_label: "Id",
            pw_label: "Password",
            id: {
                value: '',
                error: 'd'
            },
            password: {
                value: '',
                error: 'd'
            },
            status: "",
            users: []
        }
      },
      components: {
        MyInput,
        LogInButton,
        SignInButton
      },
      created(){
        axios.get("/api/user").then(res => {
          this.users =res.data
          
        })
        .catch(error => {
        console.log(error)
      })
        },
      computed : {
        valid() {
          
            return !this.id.error & !this.password.error
            
         },
      },
      methods : {
        update({name, value,error}){
            this[name].value = value
            this[name].error = error
             
         },
         submit() {
        let user = this.users .find((u) => this.id.value === u.id && this.password.value === u.password)
        console.log(user)
        if(user == undefined){
          this.status = "Please Sign in"
          this.id.error = "No Exist"
        }else{
        this.status = `Hi ${user.name}(${this.id.value}), You're login now!`
        }
        }
      }
    }
    </script>
    
    <style>
    #signon{
      border-style: solid;
      border-color: green;
      width:20%;
      padding-top: 20px;
      padding-left: 50px;
      padding-right: 0px;
      padding-bottom:50px;
      margin:auto;
      text-align: left;
    }
   #b1 , #b2{
     
      border: none;
      margin: 4px 2px;
      
      display: inline-block;
      font-size: 16px;
      
      
      
    }
     
    </style>