window.addEventListener("DOMContentLoaded",function(){if(kigui.page.header.msg.close.getElement()!==null){kigui.page.header.msg.close.getElement().addEventListener("click",function(){kigui.page.header.msg.hide()})}});var kigui={page:{header:{msg:{text:{element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-h-m-t")}return this.element},setText:function(b){var a=kigui.page.header.msg.text.getElement();if(a!==null){a.innerText=b}}},close:{element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-h-m-c")}return this.element},},code:"",element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-h-m")}return this.element},show:function(){var a=this.getElement();if(a!==null){a.classList.add("kigui-p-h-m_o")}if(kigui.page.header.getElement().classList.contains("kigui-p-h_f")){kigui.page.others.msg.getElement().classList.add("kigui-p-h-m_o")}},hide:function(){var a=this.getElement();if(a!==null){a.classList.remove("kigui-p-h-m_o")}if(kigui.page.header.getElement().classList.contains("kigui-p-h_f")){kigui.page.others.msg.getElement().classList.remove("kigui-p-h-m_o")}if(typeof(Storage)!=="undefined"){localStorage.setItem("msgCode",kigui.page.header.msg.code)}},toggle:function(){var a=this.getElement();if(a!==null){a.classList.toggle("kigui-p-h-m_o")}},setCode:function(a){this.code=a},getCode:function(){return this.code},loadCode:function(){return localStorage.getItem("msgCode")},isNewMsg:function(){return(this.getCode()!==this.loadCode())},init:function(b,a){this.text.setText(b);this.setCode(a)},},element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-h")}return this.element}},sidemenu:{element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-s")}return this.element},show:function(){this.getElement().classList.add("kigui-p-s_o")},hide:function(){this.getElement().classList.remove("kigui-p-s_o")}},others:{msg:{element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-o-m")}return this.element}},element:null,getElement:function(){if(this.element===null){this.element=document.querySelector(".kigui-p-o")}return this.element}},setShadow:function(a){a?this.getElement().classList.add("kigui-p-h_s"):this.get().classList.remove("kigui-p-h_s")},setFixed:function(a){a?this.getElement().classList.add("kigui-p-h_f"):this.get().classList.remove("kigui-p-h_f")}}};