"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2765],{2765:(y,p,a)=>{a.r(p),a.d(p,{LoginPageModule:()=>L});var d=a(6814),s=a(95),l=a(3582),c=a(8015),f=a(5861);class m{}var h=a(6091),n=a(6689),u=a(4414);const v=function(e){return{opacity:e}};function P(e,r){if(1&e){const o=n.EpF();n.TgZ(0,"div",6)(1,"form",null,7)(3,"ion-item",8)(4,"ion-label",9),n._uU(5,"Username"),n.qZA(),n.TgZ(6,"ion-input",10),n.NdJ("ngModelChange",function(i){n.CHM(o);const g=n.oxw();return n.KtG(g.credentials.username=i)}),n.qZA()(),n._UZ(7,"br"),n.TgZ(8,"ion-item",8)(9,"ion-label",9),n._uU(10,"Password"),n.qZA(),n.TgZ(11,"ion-input",11),n.NdJ("ngModelChange",function(i){n.CHM(o);const g=n.oxw();return n.KtG(g.credentials.password=i)}),n.qZA()(),n._UZ(12,"br"),n.qZA(),n.TgZ(13,"ion-button",12),n.NdJ("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.SignIN())}),n._uU(14,"Login"),n.qZA(),n._UZ(15,"br"),n.qZA()}if(2&e){const o=n.MAs(2),t=n.oxw();n.xp6(6),n.Q6J("ngModel",t.credentials.username),n.xp6(5),n.Q6J("ngModel",t.credentials.password),n.xp6(2),n.Q6J("ngStyle",n.VKq(4,v,o.form.valid?"1":"0.5"))("disabled",!o.form.valid)}}function _(e,r){1&e&&(n.TgZ(0,"div",13)(1,"p"),n._uU(2,"Iam new Customer, "),n.TgZ(3,"a",14),n._uU(4,"Sign Up"),n.qZA()()())}const M=[{path:"",component:(()=>{var e;class r{constructor(t,i,g,Z){this.platform=t,this.navCtrl=i,this.alertController=g,this.router=Z,this.loginflag=!0,this.labels=h.q}ionViewDidEnter(){this.backButtonSubscription=this.platform.backButton.subscribeWithPriority(9999,()=>{})}ionViewWillLeave(){this.backButtonSubscription.unsubscribe()}ngOnInit(){this.credentials=new m}SignIN(){var t=this;return(0,f.Z)(function*(){"pk"==t.credentials.username&&"pk"==t.credentials.password?t.router.navigateByUrl("/foodmenuitemlist"):(yield(yield t.alertController.create({header:"Login Failed",message:"Wrong Credentials",buttons:["OK"]})).present(),console.log("Login Failed!"))})()}}return(e=r).\u0275fac=function(t){return new(t||e)(n.Y36(u.t4),n.Y36(u.SH),n.Y36(u.Br),n.Y36(c.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:8,vars:4,consts:[[3,"translucent"],[1,"center"],[3,"fullscreen"],["src","../../../assets/loginApp.png","alt","worng path","width","100%",1,"ion-padding",2,"background-size","contain"],["class","ion-padding ion-margin animate__animated animate__fadeIn",4,"ngIf"],["class","footer",4,"ngIf"],[1,"ion-padding","ion-margin","animate__animated","animate__fadeIn"],["loginForm","ngForm"],["fill","outline"],["position","floating"],["placeholder","Enter Username","name","username","id","username",3,"ngModel","ngModelChange"],["placeholder","Enter Password","type","password","name","userpassword","id","userpassword",3,"ngModel","ngModelChange"],["shape","round","fill","solid","expand","block","color","dark",3,"ngStyle","disabled","click"],[1,"footer"],["routerLink","/signup",2,"color","var(--primary-color)"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-header",0)(1,"h3")(2,"strong",1),n._uU(3,"Login To UniDineHub"),n.qZA()()(),n.TgZ(4,"ion-content",2),n._UZ(5,"img",3),n.YNc(6,P,16,6,"div",4),n.YNc(7,_,5,0,"div",5),n.qZA()),2&t&&(n.Q6J("translucent",!1),n.xp6(4),n.Q6J("fullscreen",!1),n.xp6(2),n.Q6J("ngIf",i.loginflag),n.xp6(1),n.Q6J("ngIf",i.loginflag))},dependencies:[d.O5,d.PC,s._Y,s.JJ,s.JL,s.On,s.F,l.YG,l.W2,l.Gu,l.pK,l.Ie,l.Q$,l.j9,l.Fo,c.rH],styles:["*[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif}.center[_ngcontent-%COMP%]{color:var(--primary-color);display:flex;justify-content:center;align-items:center}ion-card-title[_ngcontent-%COMP%]{color:#000;font-size:30px;font-weight:700;text-align:center}.footer[_ngcontent-%COMP%]{text-align:center;position:relative}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:medium}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#2dd36f}ion-content[_ngcontent-%COMP%]{position:relative}"]}),r})()}];let C=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.Bz.forChild(M),c.Bz]}),r})(),L=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,s.u5,l.Pc,C]}),r})()}}]);