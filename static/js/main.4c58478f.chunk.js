(this["webpackJsonpapen-data-test"]=this["webpackJsonpapen-data-test"]||[]).push([[0],{109:function(e,t,a){e.exports=a(140)},118:function(e,t,a){},119:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},120:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),c=a(37),l=a(43),s=a(92),u=a(91),p=a(54),d=a(15),m=(a(118),a(30)),_=a(23),E=a(40),f=a(41),g=a(42),O=a(70),S=a(203),b=a(210),h=(a(119),a(120),function(e){return{type:"CHANGE_TOOLBAR_TITLE",payload:e}}),v=function(e){return{type:"SET_TOOLBAR_BUTTONS",payload:e}},C=a(176),y=a(179),D=a(181),P=a(99),T=a(182),A=a(60),j=a.n(A),F=function(e){return function(t,a){t({type:"START_LOADER"});var r=a(),n=r.packages.selectedPack,o=r.doctors,i=o.rowsPerPage,c=o.startsWith,l=o.filterField;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Data_inizio_attivita",n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,i={$top:t,$skip:a,$orderby:r,$format:"json"};return n&&o&&(i.$filter="startswith(".concat(o,",'").concat(n,"')")),j.a.get("".concat("https://api.smartdatanet.it","/api/").concat(e,"/DataEntities/"),{params:i})}(n,i,i*e,null,c,l).then((function(a){var r=a.data;t({type:"STOP_LOADER"}),t(k({page:e,data:r}))})).catch((function(e){t({type:"STOP_LOADER"});var a=function(e){var t="Generic Error! Try again.";if(console.error(e),e.response){console.log("SERVER_RESPONSE",e.response);try{t=e.response.data.error.message.value}catch(a){t="Generic Error! Try again."}}return t}(e);t({type:"SHOW_SNACKBAR",payload:{severity:"error",message:a}})}))}},R=function(e,t){return{type:"SET_REQUEST_FILTER",payload:{startsWith:e,filterField:t}}},k=function(e){var t=e.page,a=e.data;return{type:"FETCH_PAGINATE_SUCCESS",payload:{doctors:a.d.results,totalRows:parseInt(a.d.__count,10),page:t}}},w=Object(C.a)((function(e){return{title:{flexGrow:2}}})),L=Object(d.c)((function(e){var t=e.app;return{titleBar:t.titleBar,buttons:t.buttonsBar}}),(function(e){return{onButtonClick:function(t){switch(t){case"SEARCH":e({type:"OPEN_DIALOG"});break;case"LIST":e(R("","")),e(F(0))}}}}))((function(e){var t=e.titleBar,a=e.buttons,r=e.onButtonClick,o=w();return n.a.createElement(y.a,{position:"static"},n.a.createElement(D.a,null,n.a.createElement(P.a,{variant:"h6",className:o.title},t),a.map((function(e){return n.a.createElement(T.a,{key:e.id,onClick:function(){return r(e.id)},color:"secondary"},e.title)}))))})),B=a(209),I=a(195),z=a(196),N=a(197),G=a(198),U=a(208),H=a(215),W=a(194),V=a(216),x=a(19),K=a(183),M=a(98),$=a(184),J=a(185),Q=a(186),X=a(187),q=a(211),Y=a(188),Z=a(189),ee=a(205),te=Object(C.a)({table:{minWidth:650}}),ae=function(e){var t=e.columns,a=e.rows,r=e.rowsPerPage,o=e.totalRows,i=e.page,c=e.onChangePage,l=e.orderDirection,s=(e.orderBy,e.onSortDoctors),u=e.onRowSelected,p=te();return a.length?n.a.createElement(K.a,{component:M.a},n.a.createElement($.a,{className:p.table,"aria-label":"simple table"},n.a.createElement(J.a,null,n.a.createElement(Q.a,null,t.map((function(e){return n.a.createElement(X.a,{align:"right",key:e},e.replace(/_/g," "),n.a.createElement(q.a,{onClick:function(){return s("asc"===l?"desc":"asc",e)},direction:"asc"===l?"desc":"asc"}))})))),n.a.createElement(Y.a,null,a.map((function(e){return n.a.createElement(Q.a,{key:e.internalId,selected:!0,hover:!0,onClick:function(){return u(e)}},t.map((function(t){return n.a.createElement(X.a,{key:t,align:"right"},e[t])})))}))),n.a.createElement(Z.a,null,n.a.createElement(Q.a,null,n.a.createElement(ee.a,{rowsPerPageOptions:[r],count:o,rowsPerPage:r,page:i,onChangePage:function(e,t){return c(t)}}))))):n.a.createElement("h3",null,"No data to display")},re=Object(d.c)((function(e){var t=e.doctors;return{columns:t.activeDoctorFields,rows:t.doctors,totalRows:t.totalRows,rowsPerPage:t.rowsPerPage,page:t.page,orderBy:t.orderBy,orderDirection:t.orderDirection}}),(function(e){return{onChangePage:function(t){e(F(t))},onSortDoctors:function(t,a){e(function(e,t){return{type:"SORT_DOCTORS",payload:{sortType:e,sortField:t}}}(t,a))},onRowSelected:function(t){e({type:"SELECT_DOCTOR",payload:t}),e({type:"RESET_TOOLBAR_BUTTONS"}),e(Object(x.d)("/doctor"))}}}))(ae),ne=a(77),oe=a(193),ie=a(207),ce=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:200}}}})),le=function(e){var t=e.itemFields,a=e.searchField,o=e.searchString,i=e.onFormChanges,c=ce(),l=t.map((function(e){return{label:e.replace(/_/g," "),value:e}})),s=Object(r.useState)(a),u=Object(ne.a)(s,2),p=u[0],d=u[1],m=Object(r.useState)(o),_=Object(ne.a)(m,2),E=_[0],f=_[1];return n.a.createElement("form",{className:c.root,onChange:function(e){return i(e)},noValidate:!0,autoComplete:"off"},n.a.createElement(oe.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},n.a.createElement(ie.a,{id:"searchField",name:"searchField",select:!0,label:"Campo",variant:"filled",value:p,onChange:function(e){return d(e.target.value)},SelectProps:{native:!0}},l.map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.label)}))),n.a.createElement(ie.a,{id:"searchString",name:"searchString",label:"Valore",variant:"filled",value:E,onChange:function(e){return f(e.target.value)}})))},se=a(213),ue=a(214),pe=Object(C.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:e.spacing(.5)},chip:{margin:e.spacing(.5)}}})),de=Object(d.c)((function(e){var t=e.doctors;return{activeColumns:t.activeDoctorFields,totalColumns:t.doctorFields}}),(function(e){return{activateColumn:function(t){e(function(e){return{type:"ACTIVATE_FIELD",payload:e}}(t))},deactivateColumn:function(t){e(function(e){return{type:"DEACTIVATE_FIELD",payload:e}}(t))}}}))((function(e){var t=e.activeColumns,a=e.totalColumns,r=e.activateColumn,o=e.deactivateColumn,i=pe(),c=function(e){return t.find((function(t){return t===e}))};return n.a.createElement(M.a,{className:i.root},a.map((function(e){return n.a.createElement(se.a,{key:e,className:i.chip,size:"small",color:c(e)?"primary":"default",avatar:n.a.createElement(ue.a,null,"C"),label:e.replace(/_/g," "),onClick:function(){return function(e){c(e)?o(e):r(e)}(e)}})})))})),me=function(e){function t(e){var a;Object(m.a)(this,t);return(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).props.setToolbar(e.title,[{id:"SEARCH",title:"Cerca"},{id:"LIST",title:"Lista"}]),a.state={filterForm:{searchString:e.startsWith,searchField:e.filterField}},a}return Object(g.a)(t,e),Object(_.a)(t,[{key:"submitForm",value:function(){this.props.onCloseDialog(),this.props.onSubmitFilter(this.state.filterForm)}},{key:"changeForm",value:function(e){var t=e.target,a=t.name,r=t.value,n=this.state.filterForm;n[a]=r,this.setState({filterForm:n})}},{key:"render",value:function(){var e=this,t="";if("LIST"===this.props.view)t=n.a.createElement(re,null);else if("MAP"===this.props.view){var a=[this.props.map.lat,this.props.map.lng];t=n.a.createElement(U.a,{center:a,zoom:this.props.map.zoom},n.a.createElement(H.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.a.createElement(W.a,{position:a},n.a.createElement(V.a,null,"A pretty CSS3 popup. ",n.a.createElement("br",null)," Easily customizable.")))}return n.a.createElement("div",null,n.a.createElement(B.a,{open:this.props.isDialogOpen,onClose:function(){return e.props.onCloseDialog()},"aria-labelledby":"form-dialog-title"},n.a.createElement(I.a,{id:"form-dialog-title"},"Filtri di ricerca"),n.a.createElement(z.a,null,n.a.createElement(N.a,null,"Filtra i dottori per i seguenti campi"),n.a.createElement(le,{itemFields:this.props.doctorFields,searchString:this.state.filterForm.searchString,searchField:this.state.filterForm.searchField,onFormChanges:function(t){return e.changeForm(t)}})),n.a.createElement(G.a,null,n.a.createElement(T.a,{onClick:function(){return e.props.onCloseDialog()},color:"primary"},"Chiudi"),n.a.createElement(T.a,{onClick:function(){return e.submitForm()},color:"primary"},"Cerca"))),n.a.createElement(de,null),t)}}]),t}(r.Component),_e=Object(d.c)((function(e){var t=e.app,a=e.doctors,r=e.packages;return{view:t.view,map:t.map,title:r.selectedPack,doctorFields:a.doctorFields,isDialogOpen:t.isDialogOpen,startsWith:a.startsWith,filterField:a.filterField}}),(function(e){return{setToolbar:function(t,a){e(h(t)),e(v(a))},onSubmitFilter:function(t){var a=t.searchString,r=t.searchField;e(R(a,r)),e(F(0))},onCloseDialog:function(){e({type:"CLOSE_DIALOG"})}}}))(me),Ee=a(199),fe=a(200),ge=a(201),Oe=a(202),Se=Object(C.a)((function(e){return{root:{margin:e.spacing(2)},card:{maxWidth:260}}})),be=function(e){var t=e.packages,a=(e.selectedPack,e.onSelectPack),r=Se();return n.a.createElement(oe.a,{container:!0,spacing:2,className:r.root},t.map((function(e){return n.a.createElement(oe.a,{item:!0,xs:3,key:e},n.a.createElement(Ee.a,{onClick:function(){return a(e)},className:r.card},n.a.createElement(fe.a,null,n.a.createElement(ge.a,null,n.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},e))),n.a.createElement(Oe.a,null,n.a.createElement(T.a,{size:"small",color:"primary"},"Lista dati"))))})))},he=function(e){function t(e){var a;return Object(m.a)(this,t),a=Object(E.a)(this,Object(f.a)(t).call(this,e)),e.setToolbar("Open Data Piemonte",[]),a}return Object(g.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.packages,a=e.selectedPack,r=e.onSelectPack;return n.a.createElement("div",{className:"package-container"},n.a.createElement(P.a,{variant:"subtitle1"},"Elenco di alcuni data set accessibili tramite API del portale:",n.a.createElement("a",{target:"_blank",href:"http://www.dati.piemonte.it/"},"www.dati.piemonte.it")),n.a.createElement(be,{packages:t,selectedPack:a,onSelectPack:function(e){return r(e)}}))}}]),t}(r.Component),ve=Object(d.c)((function(e){var t=e.packages;return{packages:t.packages,selectedPack:t.selectedPack}}),(function(e){return{setToolbar:function(t,a){e(h(t)),e(v(a))},onSelectPack:function(t){e(function(e){return{type:"FETCH_PACKAGES_SUCCESS",payload:e}}(t)),e(F(0)),e(Object(x.d)("/openData"))}}}))(he),Ce=Object(C.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:200}}}})),ye=function(e){var t=e.item,a=(Ce(),Object.keys(t).filter((function(e){return"object"!==typeof t[e]})));return n.a.createElement("div",{className:"detail-viewer"},a.map((function(e){return n.a.createElement("div",{key:e,className:"detail-viewer-item"},n.a.createElement("label",null,e.replace(/_/g," ")),n.a.createElement("p",null,t[e]))})))},De=function(e){function t(e){return Object(m.a)(this,t),Object(E.a)(this,Object(f.a)(t).call(this,e))}return Object(g.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props.selectedDoctor;return n.a.createElement("div",null,n.a.createElement(ye,{item:e}))}}]),t}(r.Component),Pe=Object(d.c)((function(e){return{selectedDoctor:e.doctors.selectedDoctor}}))(De),Te=function(e){function t(e){return Object(m.a)(this,t),Object(E.a)(this,Object(f.a)(t).call(this,e))}return Object(g.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=n.a.createElement(O.c,null,n.a.createElement(O.a,{component:ve,exact:!0,path:"/"}),n.a.createElement(O.a,{component:_e,exact:!0,path:"/openData"}),n.a.createElement(O.a,{component:Pe,path:"/doctor"}));return this.props.isAppLoading&&(t=n.a.createElement("div",{className:"center-progress"},n.a.createElement(S.a,null))),n.a.createElement("div",{className:"App"},n.a.createElement(L,null),t,n.a.createElement(b.a,{open:this.props.snackBar.isOpen,autoHideDuration:6e3,message:this.props.snackBar.message,onClose:function(){return e.props.onHideSnackbar()}}))}}]),t}(r.Component),Ae=Object(d.c)((function(e){var t=e.app;return{view:t.view,map:t.map,isAppLoading:t.isAppLoading,snackBar:t.snackBar}}),(function(e){return{onHideSnackbar:function(){e({type:"HIDE_SNACKBAR"})}}}))(Te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(34),Fe=a(14),Re={doctors:[],doctorFields:[],activeDoctorFields:[],selectedDoctor:null,totalRows:0,error:null,rowsPerPage:10,page:0,startsWith:"",filterField:"",orderBy:"",orderDirection:"asc"},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REQUEST_FILTER":var a=t.payload,r=a.startsWith,n=a.filterField;return Object(Fe.a)({},e,{startsWith:r,filterField:n});case"FETCH_PAGINATE_SUCCESS":var o=e.doctorFields,i=e.activeDoctorFields;if(t.payload.doctors.length>0){var c=t.payload.doctors[0];i=(o=Object.keys(c).filter((function(e){return"object"!==typeof c[e]||null===c[e]}))).slice(0,5)}else i=[];return Object(Fe.a)({},e,{doctors:t.payload.doctors,doctorFields:o,activeDoctorFields:i,totalRows:t.payload.totalRows,page:t.payload.page});case"FETCH_PAGINATE_ERROR":return Object(Fe.a)({},e,{error:t.payload.error});case"SORT_DOCTORS":return"asc"===t.payload.sortType?Object(Fe.a)({},e,{orderBy:t.payload.sortField,orderDirection:"asc",doctors:e.doctors.sort((function(e,a){return we(e,a,t.payload.sortField)})).slice()}):Object(Fe.a)({},e,{orderBy:t.payload.sortField,orderDirection:"desc",doctors:e.doctors.sort((function(e,a){return Le(e,a,t.payload.sortField)})).slice()});case"SELECT_DOCTOR":return Object(Fe.a)({},e,{selectedDoctor:t.payload});case"ACTIVATE_FIELD":return Object(Fe.a)({},e,{activeDoctorFields:[].concat(Object(je.a)(e.activeDoctorFields),[t.payload])});case"DEACTIVATE_FIELD":return Object(Fe.a)({},e,{activeDoctorFields:e.activeDoctorFields.filter((function(e){return e!==t.payload}))});default:return e}},we=function(e,t,a){return e[a]>t[a]?1:t[a]>e[a]?-1:0},Le=function(e,t,a){return e[a]>t[a]?-1:t[a]>e[a]?1:0},Be={view:"LIST",titleBar:"Open Data Piemonte",buttonsBar:[],isDialogOpen:!1,isAppLoading:!1,snackBar:{isOpen:!1,message:"",severity:""},map:{lat:45.07049,lng:7.68682,zoom:10}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_SNACKBAR":var a=t.payload,r=a.severity,n=a.message;return Object(Fe.a)({},e,{snackBar:{isOpen:!0,severity:r,message:n}});case"HIDE_SNACKBAR":return Object(Fe.a)({},e,{snackBar:{isOpen:!1,severity:"",message:""}});case"START_LOADER":return Object(Fe.a)({},e,{isAppLoading:!0});case"STOP_LOADER":return Object(Fe.a)({},e,{isAppLoading:!1});case"OPEN_DIALOG":return Object(Fe.a)({},e,{isDialogOpen:!0});case"CLOSE_DIALOG":return Object(Fe.a)({},e,{isDialogOpen:!1});case"CHANGE_VIEW":return Object(Fe.a)({},e,{view:t.payload});case"CHANGE_TOOLBAR_TITLE":return Object(Fe.a)({},e,{titleBar:t.payload});case"SET_TOOLBAR_BUTTONS":return Object(Fe.a)({},e,{buttonsBar:t.payload});case"RESET_TOOLBAR_BUTTONS":return Object(Fe.a)({},e,{buttonsBar:[]});default:return e}},ze={selectedPack:"",packages:[]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PACKAGES_SUCCESS":return Object(Fe.a)({},e,{selectedPack:t.payload});case"FETCH_PACKAGES":return Object(Fe.a)({},e,{packages:t.payload});default:return e}},Ge=function(e){return Object(l.c)({router:Object(p.b)(e),app:Ie,doctors:ke,packages:Ne})},Ue=["PrestazioneA_1190","RicoveriOspe_1189","StruttureRic_1191","Scuole_data__1197","Scuole_costr_1198","CopieLibriBi_1063","Titolo_autor_1196","Soggetti_lib_1200","RiepilogoGen_1209","EserciziInCe_1210","EserciziPubb_1211","FormeSpecial_1212","Stabilimenti_1245","StruttureSan_1525","ScuolePiemon_1282","Polis_urp_sc_1183","ElencoMedciE_1078","FlussiTurist_1644","Stabilimenti_1340","PrezziCarbur_1348","ImpiantiCarb_1347","NumeroAttiDi_1584","StruttureRic_1661","AnagraficaAz_1660","AlberghiRtaO_1665","AlberghiRtaO_1662","OstelliOpenD_1673","AlloggiVacan_1671","BedBreakfast_1669","CampeggiEVil_1672","CampeggiEVil_1656","AgriturismiO_1663","Affittacamer_1664","CaseVacanzeO_1694","ScuolePiemon_1282","PrezziCarbur_1348","ElencoMedici_1524","ElencoDeiCon_1778","SistemaSport_1823","ImpreseIct_1820","DotazioniIct_1821","ContattiUrpR_1827","ContattiUrpR_1829","DwanauDwAnag_2010","DwumaDwUtent_2007","AtlterAtlant_2013","AziendeSanit_2115","StruttureSan_2142","Finanziament_2060","Dwpsr0713DwM_2012","EserciziInCe_1210","CapitoliDiSp_2072","FormeSpecial_1212","ElencoDelleL_2061","ElencoDelleL_2066","ParcoCircola_2047","ParcoCircola_2053","ParcoCircola_2055","PrestazioniS_2119","Polis_urp_sc_1183","StruttureRic_1191","StruttureTer_2128","RendicontoDe_2068","RendicontoDe_2067","PresenzaOnLi_2104","PresenzaOnli_2105","NumeroAziend_2043","Strumentazio_2146","UpStruttureC_2134","UpStruttureA_2135","PuntiDiEroga_2120","UofStrutture_2140","StruttureTer_2124","Nomenclatore_2117","ElencoDegliI_2029","RicettivitaT_2039","StudentiStra_2090","StudentiStra_2089","TrattiStrada_1796","DotazioneIct_1768","UtilizzoIctP_1775","SistemaSport_1824","RiepilogoGen_1822","RiepilogoGen_1819","ContattiUrpR_1831","AmemodModell_2014","UfficiPubbli_2033","ImpiantiTerm_2040","StruttureSan_2143","RiepilogoGen_2170","ImpiantiCarb_1347","Scuole_data__1197","DwcapuDwCens_2008","AziendeFuori_1609","AziendeInPie_1608","ParcoCircola_2049","ParcoCircola_2051","ParcoCircola_2056","ParcoCircola_2100","ParcoCircola_2052","ParcoCircola_2098","RetePolisPie_2019","RetePolisPie_2027","ElencoDeiGes_2063","AriannaLeggi_2009","ElencoDelleU_2017","FarmaciePubb_2028","PrestazioniS_2118","ElencoMedciE_1078","RicoveriOspe_1189","ResidenzeSan_2130","RetePolisPie_2026","Strumentazio_2147","UofSanitarie_2144","PresenzaOnLi_2077","CapitoliDiSp_2070","CapitoliDiSp_2069","StruttureAmb_2141","UnitaOrganiz_2123","ResidenzeSan_2131","StruttureTer_2125","StudentiPiem_2096","PosizioneGiu_2088","AgriturismiO_2288","RifugiOpenDa_2296","CampeggiEVil_2295","Soggetti_lib_1200","CopieLibriBi_1063","Titolo_autor_1196","RiepilogoGen_1209","UtilizzoIctP_1771"],He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,We=Object(c.a)(),Ve=Object(l.e)(Ge(We),He(Object(l.a)(Object(u.a)(We),s.a)));Ve.dispatch({type:"FETCH_PACKAGES",payload:Ue}),i.a.render(n.a.createElement(d.a,{store:Ve},n.a.createElement(p.a,{history:We},n.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.4c58478f.chunk.js.map