"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{4987:(O,p,_)=>{_.r(p),_.d(p,{LoginPageModule:()=>B});var c=_(6362),a=_(587),g=_(8139),s=_(3926),l=_(1951),n=_(260),m=_(6301);const w=["input_email"],f=["input_new_password"],h=["input_retype_password"],x=["input_old_password"];function Z(t,r){1&t&&(n.ynx(0),n._UZ(1,"ion-icon",6)(2,"ion-icon",7),n.BQk())}function J(t,r){1&t&&n._UZ(0,"ion-spinner",8)}function L(t,r){1&t&&(n.TgZ(0,"ion-thumbnail"),n._UZ(1,"ion-img",9),n.qZA())}function y(t,r){if(1&t&&n._UZ(0,"ion-select-option",25),2&t){const o=r.$implicit,e=n.oxw(3);n.Q6J("value",o)("innerHtml",e.G.S.language_names[o],n.oJD)}}function G(t,r){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ion-item",10)(2,"ion-label",11),n._UZ(3,"h1",12),n.ALo(4,"translate"),n.qZA()(),n.TgZ(5,"ion-item",10)(6,"div",13),n._UZ(7,"img",14),n.qZA()(),n.TgZ(8,"ion-item",10)(9,"p"),n._UZ(10,"br")(11,"br"),n.qZA()(),n.TgZ(12,"ion-item",15),n._UZ(13,"h1",16),n.ALo(14,"translate"),n.qZA(),n.TgZ(15,"form",17)(16,"ion-item")(17,"ion-label",18),n._UZ(18,"ion-icon",19),n._uU(19,"\xa0 "),n._UZ(20,"span",2),n.ALo(21,"translate"),n.qZA(),n.TgZ(22,"ion-select",20,21),n.NdJ("ionChange",function(){return n.CHM(o),n.oxw(2).set_language()}),n.YNc(24,y,1,2,"ion-select-option",22),n.qZA()()(),n.TgZ(25,"ion-item",10)(26,"p"),n._UZ(27,"br"),n.qZA()(),n.TgZ(28,"ion-item",10)(29,"ion-button",23),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).submit_language()}),n._UZ(30,"span",2),n.ALo(31,"translate"),n._uU(32," \xa0"),n._UZ(33,"ion-icon",24),n.qZA()(),n.BQk()}if(2&t){const o=n.oxw(2);n.xp6(3),n.Q6J("innerHtml",n.lcZ(4,7,"login.welcome"),n.oJD),n.xp6(10),n.Q6J("innerHtml",n.lcZ(14,9,"login.ask-language"),n.oJD),n.xp6(2),n.Q6J("formGroup",o.languageFormGroup),n.xp6(5),n.Q6J("innerHtml",n.lcZ(21,11,"language"),n.oJD),n.xp6(4),n.Q6J("ngForOf",o.translate.langs),n.xp6(5),n.Q6J("disabled",!o.languageFormGroup.valid),n.xp6(1),n.Q6J("innerHtml",n.lcZ(31,13,"next"),n.oJD)}}function T(t,r){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ion-item",26),n._UZ(2,"h1",16),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"ion-item",10)(5,"ion-button",27),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).ask_used_before_yes()}),n.ALo(6,"translate"),n.qZA()(),n.TgZ(7,"ion-item",10)(8,"ion-button",27),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).ask_used_before_no()}),n.ALo(9,"translate"),n.qZA()(),n.BQk()}2&t&&(n.xp6(2),n.Q6J("innerHtml",n.lcZ(3,3,"login.ask-used-before"),n.oJD),n.xp6(3),n.Q6J("innerHtml",n.lcZ(6,5,"yes"),n.oJD),n.xp6(3),n.Q6J("innerHtml",n.lcZ(9,7,"no"),n.oJD))}function Q(t,r){if(1&t&&(n._UZ(0,"div",36),n.ALo(1,"translate")),2&t){const o=n.oxw().$implicit;n.Q6J("innerHtml",n.lcZ(1,1,o.message),n.oJD)}}function b(t,r){if(1&t&&(n.ynx(0),n.YNc(1,Q,2,3,"div",35),n.BQk()),2&t){const o=r.$implicit,e=n.oxw(3);n.xp6(1),n.Q6J("ngIf",e.emailFormGroup.get("email").hasError(o.type)&&(e.emailFormGroup.get("email").dirty||e.emailFormGroup.get("email").touched))}}function v(t,r){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ion-item",26),n._UZ(2,"h1",16),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"ion-item",15),n._UZ(5,"p",16),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"form",17)(8,"ion-grid",28)(9,"ion-row",28)(10,"ion-col",28)(11,"ion-item"),n._UZ(12,"ion-label",29),n.ALo(13,"translate"),n.TgZ(14,"ion-input",30,31),n.NdJ("ionChange",function(){return n.CHM(o),n.oxw(2).set_email()})("keydown.enter",function(){return n.CHM(o),n.oxw(2).submit_email()}),n.qZA()()()()(),n.TgZ(16,"div",32),n.YNc(17,b,2,1,"ng-container",33),n.qZA(),n.TgZ(18,"ion-item",10)(19,"ion-button",34),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).submit_email()}),n._UZ(20,"span",2),n.ALo(21,"translate"),n._uU(22," \xa0"),n._UZ(23,"ion-icon",24),n.qZA()()(),n.TgZ(24,"ion-item",26)(25,"small"),n._UZ(26,"p",16),n.ALo(27,"translate"),n.qZA()(),n.BQk()}if(2&t){const o=n.oxw(2);n.xp6(2),n.Q6J("innerHtml",n.lcZ(3,8,"fresh_email"==o.step?"login.ask-fresh-email":"login.ask-old-email"),n.oJD),n.xp6(3),n.Q6J("innerHtml",n.lcZ(6,10,"fresh_email"==o.step?"login.ask-fresh-email-2":"login.ask-old-email-2"),n.oJD),n.xp6(2),n.Q6J("formGroup",o.emailFormGroup),n.xp6(5),n.Q6J("innerHtml",n.lcZ(13,12,"email"),n.oJD),n.xp6(5),n.Q6J("ngForOf",o.G.S.validation_messages.email),n.xp6(2),n.Q6J("disabled",!o.emailFormGroup.valid),n.xp6(1),n.Q6J("innerHtml",n.lcZ(21,14,"next"),n.oJD),n.xp6(6),n.Q6J("innerHtml",n.lcZ(27,16,"login.cookie-banner"),n.oJD)}}function A(t,r){if(1&t&&(n._UZ(0,"div",36),n.ALo(1,"translate")),2&t){const o=n.oxw().$implicit;n.Q6J("innerHtml",n.lcZ(1,1,o.message),n.oJD)}}function P(t,r){if(1&t&&(n.ynx(0),n.YNc(1,A,2,3,"div",35),n.BQk()),2&t){const o=r.$implicit,e=n.oxw(3);n.xp6(1),n.Q6J("ngIf",e.passwordFormGroup.get("pw.password").hasError(o.type)&&(e.passwordFormGroup.get("pw.password").dirty||e.passwordFormGroup.get("pw.password").touched))}}function k(t,r){if(1&t&&(n._UZ(0,"div",36),n.ALo(1,"translate")),2&t){const o=n.oxw().$implicit;n.Q6J("innerHtml",n.lcZ(1,1,o.message),n.oJD)}}function H(t,r){if(1&t&&(n.ynx(0),n.YNc(1,k,2,3,"div",35),n.BQk()),2&t){const o=n.oxw(3);n.xp6(1),n.Q6J("ngIf",o.passwordFormGroup.get("pw").hasError("must_match")&&(o.passwordFormGroup.get("pw.confirm_password").dirty||o.passwordFormGroup.get("pw.confirm_password").touched))}}function U(t,r){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ion-item",26),n._UZ(2,"h1",16),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"ion-item",15),n._UZ(5,"p",16),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"form",17)(8,"div",37)(9,"ion-row",38)(10,"ion-col",28)(11,"ion-item"),n._UZ(12,"ion-label",29),n.ALo(13,"translate"),n.TgZ(14,"ion-input",39,40),n.NdJ("ionChange",function(){return n.CHM(o),n.oxw(2).set_password()})("ionBlur",function(){return n.CHM(o),n.oxw(2).blur_password()}),n.qZA()()(),n.TgZ(16,"ion-button",41),n.NdJ("click",function(){n.CHM(o);const i=n.oxw(2);return i.showing_password=!i.showing_password}),n._UZ(17,"ion-icon",42),n.qZA()(),n.TgZ(18,"div",32),n.YNc(19,P,2,1,"ng-container",33),n.qZA(),n.ynx(20),n.TgZ(21,"ion-item"),n._UZ(22,"ion-label",29),n.ALo(23,"translate"),n.TgZ(24,"ion-input",43,44),n.NdJ("ionChange",function(){return n.CHM(o),n.oxw(2).set_password()})("keydown.enter",function(){return n.CHM(o),n.oxw(2).submit_new_password()}),n.qZA()(),n.TgZ(26,"div",32),n.YNc(27,H,2,1,"ng-container",33),n.qZA(),n.BQk(),n.qZA()(),n.TgZ(28,"ion-item",10)(29,"p"),n._UZ(30,"br")(31,"br"),n.qZA()(),n.TgZ(32,"ion-item",10)(33,"ion-button",23),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).submit_new_password()}),n._UZ(34,"span",2),n.ALo(35,"translate"),n._uU(36," \xa0"),n._UZ(37,"ion-icon",24),n.qZA()(),n.BQk()}if(2&t){const o=n.oxw(2);n.xp6(2),n.Q6J("innerHtml",n.lcZ(3,12,"login.ask-fresh-password"),n.oJD),n.xp6(3),n.Q6J("innerHtml",n.lcZ(6,14,"login.ask-fresh-password-2"),n.oJD),n.xp6(2),n.Q6J("formGroup",o.passwordFormGroup),n.xp6(5),n.Q6J("innerHtml",n.lcZ(13,16,"password"),n.oJD),n.xp6(2),n.Q6J("type",o.showing_password?"text":"password"),n.xp6(3),n.Q6J("name",o.showing_password?"eye-off-outline":"eye-outline"),n.xp6(2),n.Q6J("ngForOf",o.G.S.validation_messages.password),n.xp6(3),n.Q6J("innerHtml",n.lcZ(23,18,"retype-password"),n.oJD),n.xp6(2),n.Q6J("type",o.showing_password?"text":"password"),n.xp6(3),n.Q6J("ngForOf",o.G.S.validation_messages.passwords_match),n.xp6(6),n.Q6J("disabled",!o.passwordFormGroup.get("pw").valid),n.xp6(1),n.Q6J("innerHtml",n.lcZ(35,20,"next"),n.oJD)}}function F(t,r){if(1&t&&(n._UZ(0,"div",36),n.ALo(1,"translate")),2&t){const o=n.oxw().$implicit;n.Q6J("innerHtml",n.lcZ(1,1,o.message),n.oJD)}}function C(t,r){if(1&t&&(n.ynx(0),n.YNc(1,F,2,3,"div",35),n.BQk()),2&t){const o=r.$implicit,e=n.oxw(3);n.xp6(1),n.Q6J("ngIf",e.oldPasswordFormGroup.get("pw.password").hasError(o.type)&&(e.oldPasswordFormGroup.get("pw.password").dirty||e.oldPasswordFormGroup.get("pw.password").touched))}}function D(t,r){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ion-item",26),n._UZ(2,"h1",16),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"form",17)(5,"div",37)(6,"ion-row",28)(7,"ion-col",28)(8,"ion-item"),n._UZ(9,"ion-label",29),n.ALo(10,"translate"),n.TgZ(11,"ion-input",45,46),n.NdJ("ionChange",function(){return n.CHM(o),n.oxw(2).set_old_password()})("keydown.enter",function(){return n.CHM(o),n.oxw(2).submit_old_password()}),n.qZA()()(),n.TgZ(13,"ion-button",41),n.NdJ("click",function(){n.CHM(o);const i=n.oxw(2);return i.showing_password=!i.showing_password}),n._UZ(14,"ion-icon",42),n._uU(15,"\xa0 "),n._UZ(16,"span",2),n.ALo(17,"translate"),n.qZA()(),n.TgZ(18,"div",32),n.YNc(19,C,2,1,"ng-container",33),n.qZA()()(),n.TgZ(20,"ion-item",10)(21,"p"),n._UZ(22,"br")(23,"br")(24,"br"),n.qZA()(),n.TgZ(25,"ion-item",10)(26,"ion-button",23),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).submit_old_password()}),n._UZ(27,"span",2),n.ALo(28,"translate"),n._uU(29," \xa0"),n._UZ(30,"ion-icon",24),n.qZA()(),n.BQk()}if(2&t){const o=n.oxw(2);n.xp6(2),n.Q6J("innerHtml",n.lcZ(3,9,"login.ask-old-password"),n.oJD),n.xp6(2),n.Q6J("formGroup",o.oldPasswordFormGroup),n.xp6(5),n.Q6J("innerHtml",n.lcZ(10,11,"password"),n.oJD),n.xp6(2),n.Q6J("type",o.showing_password?"text":"password"),n.xp6(3),n.Q6J("name",o.showing_password?"eye-off-outline":"eye-outline"),n.xp6(2),n.Q6J("innerHtml",n.lcZ(17,13,o.showing_password?"hide":"show"),n.oJD),n.xp6(3),n.Q6J("ngForOf",o.G.S.validation_messages.password),n.xp6(7),n.Q6J("disabled",!o.oldPasswordFormGroup.valid),n.xp6(1),n.Q6J("innerHtml",n.lcZ(28,15,"next"),n.oJD)}}function N(t,r){1&t&&n._UZ(0,"ion-item")}function I(t,r){if(1&t){const o=n.EpF();n.ynx(0),n.TgZ(1,"ion-item",26)(2,"ion-col"),n._UZ(3,"h1",16),n.ALo(4,"translate"),n._UZ(5,"p",16),n.ALo(6,"translate"),n.qZA()(),n.TgZ(7,"ion-item",10)(8,"p"),n._UZ(9,"br")(10,"br")(11,"br"),n.qZA()(),n.TgZ(12,"ion-item",10)(13,"ion-button",47),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).connected_dismissed()}),n._UZ(14,"span",2),n.ALo(15,"translate"),n._uU(16," \xa0"),n._UZ(17,"ion-icon",24),n.qZA()(),n.YNc(18,N,1,0,"ion-item",4),n.BQk()}if(2&t){const o=n.oxw(2);n.xp6(3),n.Q6J("innerHtml",n.lcZ(4,4,"login.ready-to-start"),n.oJD),n.xp6(2),n.Q6J("innerHtml",n.lcZ(6,6,"login.ready-to-start-detail"),n.oJD),n.xp6(9),n.Q6J("innerHtml",n.lcZ(15,8,"start"),n.oJD),n.xp6(4),n.Q6J("ngIf",o.terms_expanded)}}function q(t,r){if(1&t&&(n.TgZ(0,"ion-content")(1,"ion-grid"),n.YNc(2,G,34,15,"ng-container",4),n.YNc(3,T,10,9,"ng-container",4),n.YNc(4,v,28,18,"ng-container",4),n.YNc(5,U,38,22,"ng-container",4),n.YNc(6,D,31,17,"ng-container",4),n.YNc(7,I,19,10,"ng-container",4),n.qZA()()),2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngIf","language"==o.step||"start"==o.step),n.xp6(1),n.Q6J("ngIf","used_before"==o.step),n.xp6(1),n.Q6J("ngIf","fresh_email"==o.step||"old_email"==o.step),n.xp6(1),n.Q6J("ngIf","fresh_password"==o.step),n.xp6(1),n.Q6J("ngIf","old_password"==o.step),n.xp6(1),n.Q6J("ngIf","connected"==o.step)}}const M=[{path:"",component:(()=>{class t{constructor(o,e,i,E,S){this.router=o,this.route=e,this.formBuilder=i,this.translate=E,this.G=S,this.window=window,this.terms_expanded=!1,this.ready=!1,this.G.L.entry("LoginPage.constructor"),this.route.params.subscribe(u=>{this.then_url=u.then;const d=this.step=u.step||"start";this.G.L.info("LoginPage going to step",d),["start","language","used_before","fresh_email","old_email","fresh_password","old_password","connected"].includes(d)&&(this.ready=!0)})}ngOnInit(){this.G.L.entry("LoginPage.ngOnInit"),this.languageFormGroup=this.formBuilder.group({language:new a.NI("",a.kI.required)}),this.emailFormGroup=this.formBuilder.group({email:new a.NI("",a.kI.compose([a.kI.required,a.kI.email]))}),this.passwordFormGroup=this.formBuilder.group({pw:this.formBuilder.group({password:new a.NI("",a.kI.compose([a.kI.required,a.kI.minLength(8),a.kI.pattern(this.G.S.password_regexp)])),confirm_password:new a.NI("",a.kI.required)},{validators:[this.G.S.passwords_match]})}),this.oldPasswordFormGroup=this.formBuilder.group({pw:this.formBuilder.group({password:new a.NI("",a.kI.compose([a.kI.required,a.kI.minLength(8),a.kI.pattern(this.G.S.password_regexp)]))})})}ionViewWillEnter(){this.G.L.entry("LoginPage.ionViewWillEnter"),this.G.D.page=this,setTimeout(()=>{var o=this.input_email||this.input_new_password||this.input_old_password;o&&o.setFocus()},300)}ionViewDidEnter(){this.G.L.entry("LoginPage.ionViewDidEnter");var o=navigator.language.slice(0,2);this.languageFormGroup.get("language").setValue(this.G.S.language||(this.translate.langs.includes(o)?o:"")),this.set_language(),this.set_email(),this.set_password(),this.set_old_password(),this.G.D.ready&&!this.ready&&this.onDataReady()}onDataReady(){this.G.L.entry("LoginPage.onDataReady"),this.ready=!0}ionViewDidLeave(){this.G.L.entry("LoginPage.ionViewDidLeave"),this.G.D.save_state(),this.G.L.exit("LoginPage.ionViewDidLeave")}onDataChange(){this.G.L.entry("LoginPage.onDataChange")}set_language(){let o=this.languageFormGroup.get("language");o.valid&&(this.G.S.language=o.value)}set_email(){let o=this.emailFormGroup.get("email");o.valid&&(this.G.S.email=o.value)}set_password(){let o=this.passwordFormGroup.get("pw");o.valid&&(this.G.S.password=o.get("password").value)}set_old_password(){let o=this.oldPasswordFormGroup.get("pw");o.valid&&(this.G.S.password=o.get("password").value)}submit_language(){this.G.go_fullscreen_on_mobile(),this.router.navigate(["/login/used_before/"+this.then_url])}ask_used_before_no(){this.G.go_fullscreen_on_mobile(),this.router.navigate(["/login/fresh_email/"+this.then_url])}ask_used_before_yes(){this.G.go_fullscreen_on_mobile(),this.router.navigate(["/login/old_email/"+this.then_url])}submit_email(){this.emailFormGroup.get("email").valid&&this.router.navigate("fresh_email"==this.step?["/login/fresh_password/"+this.then_url]:["/login/old_password/"+this.then_url])}blur_password(){setTimeout(()=>{this.input_retype_password.setFocus()},100)}submit_new_password(){this.passwordFormGroup.get("pw").valid&&this.G.D.login_submitted()}submit_old_password(){this.oldPasswordFormGroup.get("pw").valid&&this.G.D.login_submitted()}connected_dismissed(){this.G.D.init_notifications(!0);const o=decodeURIComponent(this.then_url&&!this.then_url.includes("logout")?this.then_url:"");this.G.L.trace("LoginPage redirecting to",this.then_url,o),"/"!=o?window.location.replace(o):this.router.navigate([o])}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.F0),n.Y36(l.gz),n.Y36(a.qu),n.Y36(g.sK),n.Y36(m.U))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],viewQuery:function(o,e){if(1&o&&(n.Gf(w,5),n.Gf(f,5),n.Gf(h,5),n.Gf(x,5)),2&o){let i;n.iGM(i=n.CRH())&&(e.input_email=i.first),n.iGM(i=n.CRH())&&(e.input_new_password=i.first),n.iGM(i=n.CRH())&&(e.input_retype_password=i.first),n.iGM(i=n.CRH())&&(e.input_old_password=i.first)}},decls:11,vars:7,consts:[[2,"padding-right","11px"],["slot","start"],[3,"innerHtml"],["slot","end"],[4,"ngIf"],["name","crescent","color","grey",4,"ngIf"],["name","cloud-offline-outline","color","grey",2,"position","relative","bottom","-1px"],["name","alert-outline","color","grey"],["name","crescent","color","grey"],["src","./assets/topright_icon.png"],["lines","none"],[1,"ion-text-center"],[2,"width","100%",3,"innerHtml"],[1,"ion-text-center",2,"width","100%"],["src","/assets/topleft_icon.png",2,"width","306px"],[1,"item-text-wrap"],[1,"ion-text-center",2,"width","100%",3,"innerHtml"],[3,"formGroup"],["position","floating","color","primary"],["name","language-outline"],["interface","popover","formControlName","language",3,"ionChange"],["ionSelects",""],[3,"value","innerHtml",4,"ngFor","ngForOf"],["size","larger","color","primary","slot","end","shape","round",3,"disabled","click"],["name","arrow-forward-outline"],[3,"value","innerHtml"],["lines","none",1,"item-text-wrap"],["slot","end","size","large","color","primary","shape","round",3,"innerHtml","click"],[1,"ion-no-padding"],["position","floating","color","primary",3,"innerHtml"],["formControlName","email","type","text","inputmode","email","required","","autofocus","true","debounce","100",3,"ionChange","keydown.enter"],["input_email",""],[1,"validation-errors"],[4,"ngFor","ngForOf"],["type","submit","size","larger","color","primary","slot","end","shape","round",3,"disabled","click"],["class","error-message",3,"innerHtml",4,"ngIf"],[1,"error-message",3,"innerHtml"],["formGroupName","pw"],[1,"ion-no-padding","ion-nowrap"],["formControlName","password","clearOnEdit","false","clearInput","true","required","","autofocus","true","autocomplete","off","autocorrect","off","debounce","100",3,"type","ionChange","ionBlur"],["input_new_password",""],["tabindex","-1","fill","clear","color","primary",2,"padding-top","15px",3,"click"],[3,"name"],["formControlName","confirm_password","clearOnEdit","false","clearInput","true","required","","autocomplete","off","autocorrect","off","debounce","100",3,"type","ionChange","keydown.enter"],["input_retype_password",""],["formControlName","password","clearOnEdit","false","clearInput","true","required","","autofocus","true","autocomplete","off","autocorrect","off","debounce","100",3,"type","ionChange","keydown.enter"],["input_old_password",""],["size","larger","color","primary","slot","end","shape","round","type","submit",3,"click"]],template:function(o,e){1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n._UZ(4,"ion-title",2),n.ALo(5,"translate"),n.TgZ(6,"ion-buttons",3),n.YNc(7,Z,3,0,"ng-container",4),n.YNc(8,J,1,0,"ion-spinner",5),n.YNc(9,L,2,0,"ion-thumbnail",4),n.qZA()()(),n.YNc(10,q,8,6,"ion-content",4)),2&o&&(n.xp6(4),n.Q6J("innerHtml",n.lcZ(5,5,"login.-page-title"),n.oJD),n.xp6(3),n.Q6J("ngIf",!e.window.navigator.onLine),n.xp6(1),n.Q6J("ngIf",e.G.show_spinner||!e.window.navigator.onLine),n.xp6(1),n.Q6J("ngIf",!(e.G.show_spinner||!e.window.navigator.onLine)),n.xp6(1),n.Q6J("ngIf",e.ready))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.wd,c.O5,s.gu,s.PQ,s.Bs,s.Xz,s.W2,s.jY,s.Ie,s.Q$,a._Y,a.JL,a.sg,s.t9,s.QI,a.JJ,a.u,c.sg,s.n0,s.YG,s.Nd,s.wI,s.pK,s.j9,a.Q7,a.x0],pipes:[g.X$],styles:[""]}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,a.u5,s.Pc,a.UX,Y,g.aw.forChild()]]}),t})()}}]);
//# sourceMappingURL=4987.48403fde40dac20b.js.map