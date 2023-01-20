<template>
    <div id="sign">
    <form >
        <MyInput
            type="text" 
            :name="name_label" 
            :value="name.value" 
            error=""
            :rule="{ required: false, min: 0 }" 
            @update="update"
        />
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
        <RegisterButton 
            buttonName="Register"
            background="pink"
            color="white"
            @click = "click"
            :disable="!valid" 
        /> 
       
    </form>
    <div v-html="status" />
</div>
    </template>
    
    <script>
    
    import MyInput from '../components/MyInput.vue'
    import RegisterButton from '../components/RegisterButton.vue'
    import axios from "axios"

    export default {
      name: 'Signin',
      data() {
        return {
            login: "Log in",
            sign_in:"Sign in",
            id_label: "Id",
            pw_label: "Password",
            name_label:"name",
            id: {
                value: '',
                error: 'd'
            },
            password: {
                value: '',
                error: 'd'
            },
            name:{
                value:''
            },
            status: ""
        }
      },
      components: {
        MyInput,
        RegisterButton
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

            axios.get("/api/user").then(res => {
            this.users =res.data})
            .catch(error => {
            console.log(error)
            })
            const user = this.users.find((u) => this.id.value === u.id)

            if(user == undefined){
                this.status=""
            }else{
                this.status= "ID is already exist. Please use other ID"
                this.id.error="Alreday exist"
                
            }
            
        
            
         },
         click(){
            
            const content = {
                name: this.name.value,
                id: this.id.value,
                password: this.password.value
            }
            axios.post("/api/user",content).then(res => {
             this.users =res.data
          
            })
            .catch(error => {
            console.log(error)})
        
            
            }
         },
         
      
      
      
    }
    </script>
    
    <style>
    #sign{
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
    </style> 