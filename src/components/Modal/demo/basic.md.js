webpackJsonp([84,194],{452:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Modal/demo/basic.md",id:"src-components-Modal-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"show = true"</span><span class="token operator">></span>\n  \u663e\u793a\u5f39\u7a97\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modal</span> <span class="token attr-name">:show</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dialog<span class="token punctuation">"</span></span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>show</span> <span class="token attr-value"><span class="token punctuation">=</span> false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-body<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>atui-modal-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-select</span> <span class="token attr-name">dropdown-class-name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>aaaaa<span class="token punctuation">"</span></span> <span class="token attr-name">:dropdown-z-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>9898<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name">  <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span><span class="token number">200</span>px</span><span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u82f9\u679c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Banana<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Banana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Cherry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Orange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>OrangeText<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Grape<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Grape<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chestnut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6817\u5b50<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pear<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u68a8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cantaloupe<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u54c8\u5bc6\u74dc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>peaches<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6c34\u871c\u6843<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cherry2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Cherry2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Orange2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>OrangeText2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Grape2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Grape2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chestnut2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6817\u5b50<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pear2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u68a8<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cantaloupe2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u54c8\u5bc6\u74dc<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>peaches2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u6c34\u871c\u6843<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modal</span><span class="token punctuation">></span></span>'}],preview:'<v-button @click.native="show = true">\n  \u663e\u793a\u5f39\u7a97\n</v-button>\n<modal :show="show" ref="dialog" @close="show = false">\n  <div slot="modal-body" class="atui-modal-body">\n    <textarea></textarea>\n    <v-select dropdown-class-name="aaaaa" :dropdown-z-index="9898"  style="width:200px" width="200px">\n      <v-option value="Apple">\u82f9\u679c</v-option>\n      <v-option value="Banana" disabled>Banana</v-option>\n      <v-option value="10">Cherry</v-option>\n      <v-option value="Orange">OrangeText</v-option>\n      <v-option value="Grape">Grape</v-option>\n      <v-option value="chestnut">\u6817\u5b50</v-option>\n      <v-option value="pear">\u68a8</v-option>\n      <v-option value="cantaloupe">\u54c8\u5bc6\u74dc</v-option>\n      <v-option value="peaches">\u6c34\u871c\u6843</v-option>\n      <v-option value="Cherry2">Cherry2</v-option>\n      <v-option value="Orange2">OrangeText2</v-option>\n      <v-option value="Grape2">Grape2</v-option>\n      <v-option value="chestnut2">\u6817\u5b502</v-option>\n      <v-option value="pear2">\u68a82</v-option>\n      <v-option value="cantaloupe2">\u54c8\u5bc6\u74dc2</v-option>\n      <v-option value="peaches2">\u6c34\u871c\u68432</v-option>\n    </v-select>\n  </div>\n</modal>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    modal: atui.Modal,\n    vButton: atui.Button,\n    vSelect: atui.Select,\n    vOption: atui.Select.Option\n  },\n  data: function() {\n    return {\n      show: false\n    }\n  },\n  methods: {\n    showModel: function () {\n      this.show = true\n    }\n  }\n})"}}});