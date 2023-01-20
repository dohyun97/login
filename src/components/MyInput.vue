<template>
    <div>
    <label :for="name"> {{ `${name}: `}} </label> <br>
    <input :type="type" :id="name"  v-model="val" :rule="rule"  @input="inputFunction" >
    <div class="error"> {{ error (val)}} </div>
    </div>
    
    </template>
    
 
   <script>
    export default {
      name: 'MyInput',
      data(){
        return{
            val:this.name,
            
        }
      },
      props: {
        name: {
            type: String,
            required: true,
            default: ""
        },
        type: {
            type: String,
            default: ""  
        },
        rule: {
            type: Object
        },
       
      },
      
      components: {
      },
      
      methods : {
        inputFunction() {
            this.$emit('update', {
                name: this.name.toLowerCase(),
                value: this.val,
                error: this.error(this.val)},
                
            )
        },
        error(val) {
            if(this.rule.required && val.length <= 0 ){
                return 'Value is required'
            }else if (this.rule.required && this.rule.min >= val.length){
                return `Value should be minimum ${this.rule.min}`
            }
            return ""
             }
        
      }
    }
    </script>
    
    <style>
    .error {
        color: red
    }
    </style>