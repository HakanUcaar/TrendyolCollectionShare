(this.webpackJsonpTrendyolCollectionShareApp=this.webpackJsonpTrendyolCollectionShareApp||[]).push([[0],{130:function(e,t,n){e.exports=n(157)},135:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),l=n.n(o),r=(n(135),n(22)),c=n.n(r),s=n(35),h=n(6),d=n(26),m=n(30),p=n(29),u=n(20),g=n(215),v=n(107),f=n(222),C=n(4),b=n(207),y=n(104),O=n.n(y),I=n(79),E=n(203),k=n(205),x=n(204),w=n(206),D=n(43),N=n.n(D),j=n(99),L=n.n(j),T=n(34);function A(e){return{type:"LOADING_COLLECTION_DATA",payload:e}}function S(e){return{type:"LOADED_COLLECTION_DATA",payload:e}}function _(e){return{type:"READ_TODO_DATA",payload:e}}function R(e){return{type:"SAVE_TODO_DATA",payload:e}}Object(v.a)();var M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleClose=function(){e.setState({GeneratedLink:!1})},e.handleShowLink=function(){N()(window.location.href),e.setState({GeneratedLink:!0})},e.handleGenerateLink=function(){console.log(e.props.MyCollection.collectionItem),0===e.props.MyCollection.collectionItem.length?e.props.enqueueSnackbar("Eklenecek hi\xe7 bir veri bulunamad\u0131. L\xfctfen ekledikten sonra tekrar deneyin.",{variant:"warning"}):""===e.props.Link?(e.setState({GeneratedLink:!0,CollectionLink:window.location.href+e.props.MyCollection.collectionId}),e.props.saveCollection(),e.props.loadedCollection()):""!==e.props.Link&&(N()(window.location.href),e.setState({GeneratedLink:!0,CollectionLink:window.location.href}))},e.getLocation=function(){return""===e.props.Link?window.location.href+e.state.NewLink:window.location.href},e.state={CollectionLink:"",GeneratedLink:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.root},i.a.createElement(E.a,{fullWidth:!0,maxWidth:"sm",open:this.state.GeneratedLink,onClose:this.handleClose,"aria-labelledby":"max-width-dialog-title"},i.a.createElement(x.a,{style:{cursor:"move"},id:"draggable-dialog-title"},"Koleksiyon Linkiniz"),i.a.createElement(k.a,null,i.a.createElement("div",{className:e.linkDialogContent},i.a.createElement(w.a,{gutterBottom:!0},this.state.CollectionLink),i.a.createElement(L.a,{className:e.linkDialogQR,value:this.state.CollectionLink})))),i.a.createElement("img",{className:e.trendyolLogo,src:"https://cdn.dsmcdn.com/web/logo/ty-logo.svg",alt:"https://cdn.dsmcdn.com/web/logo/ty-logo.svg"}),i.a.createElement("div",{className:e.logoAlt},i.a.createElement(I.a,{className:e.collection,variant:"h2",component:"h1"},"KOLEKS\u0130YONUN"),i.a.createElement(I.a,{className:e.collection,variant:"h8",component:"h6"},"Bu projedeki hi\xe7 bir veri ticari bir ama\xe7 i\xe7in kullan\u0131lmamaktad\u0131r. Tamamen a\xe7\u0131k kaynak olarak geli\u015ftirilmi\u015ftir.")),i.a.createElement(b.a,{className:e.fab,color:"primary","aria-label":"add"},i.a.createElement(O.a,{onClick:this.handleGenerateLink})))}}]),n}(a.Component);var W=Object(T.b)(M),F=Object(C.a)({root:{flexGrow:"1",maxHeight:"270px",minHeight:"270px"},date:{position:"absolute",top:"210px",color:"lightcyan",fontWeight:"bold"},Image:{maxWidth:"100%",width:"100%",objectFit:"cover",maxHeight:"250px"},fab:{position:"fixed",zIndex:1,left:0,right:0,margin:"0 auto",top:"10px"},imageIcon:{height:"50px",width:"50px",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},trendyolLogo:{height:"200px",width:"100%"},collection:{top:"210px",fontFamily:"source_sans_proregular"},logoAlt:{textAlign:"center",top:"210px"},linkDialogContent:{display:"flex",flexDirection:"column",textAlign:"center"},linkDialogQR:{margin:"auto"}})(W),G=Object(u.b)((function(e){return{MyCollection:e.MyCollection,Link:e.Link,IsFetching:e.IsFetching,IsReadCollectionData:e.IsReadCollectionData}}),(function(e){return{saveCollection:function(t){return e(R(t))},loadingCollection:function(t){return e(A(t))},loadedCollection:function(t){return e(S(t))}}}))(F),P=n(211),B=n(23),H=n(213),U=n(158),K=n(160),V=n(220),z=n(68),J=n.n(z),Y=n(69),q=n.n(Y),$=n(73),Q=n.n($),X=n(218),Z=n(210),ee=n(74),te=n.n(ee),ne=n(221),ae=n(214),ie=n(159),oe=n(212),le=n(208),re=n(209),ce=n(108),se=(n(148),Object(v.a)(),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={open:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",null,i.a.createElement(E.a,{fullWidth:!0,maxWidth:"lg",open:this.props.open,onClose:this.props.handleClose,"aria-labelledby":"responsive-dialog-title"},i.a.createElement(le.a,{className:e.gridList,cols:2.5},null!=this.props.currentItem?this.props.currentItem.itemImages.map((function(e){return i.a.createElement(re.a,{key:e.imageId,style:{height:"100% !important"}},i.a.createElement(ce.a,null,i.a.createElement("img",{style:{width:"100%",height:"100%"},alt:e.imageId,src:e.url})))})):"")))}}]),n}(a.Component));var he=Object(C.a)({root:{flexGrow:"1",maxHeight:"250px",minHeight:"250px"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"}})(se),de=Object(u.b)((function(e){return{MyCollection:e.MyCollection,IsFetching:e.IsFetching,IsReadCollectionData:e.IsReadCollectionData}}),{})(he),me=n(48),pe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(me.v4)(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(h.a)(this,e),this.imageId=t,this.itemId=n,this.url=a,this.htmlContent=i},ue=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(me.v4)(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:"",u=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",g=arguments.length>13&&void 0!==arguments[13]?arguments[13]:[];Object(h.a)(this,e),this.itemId=t,this.collectionId=n,this.itemName=a,this.itemDescription=i,this.price=o,this.url=l,this.favoriteCount=r,this.gender=c,this.totalRatingCount=s,this.averageRating=d,this.totalCommentCount=m,this.merchantName=p,this.merchantOfficialName=u,this.itemImages=g},ge=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]&&arguments[7];Object(h.a)(this,e),this.id=t,this.name=n,this.startDate=a,this.endDate=i,this.isMultipleSupplied=o,this.stockTypeId=l,this.url=r,this.showTimer=c},ve=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";Object(h.a)(this,e),this.id=t,this.name=n,this.hierarchy=a,this.refundable=i,this.beautifiedName=o},fe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(h.a)(this,e),this.id=t,this.name=n,this.isVirtual=a,this.beautifiedName=i},Ce=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(h.a)(this,e),this.id=t,this.name=n,this.isVirtual=a,this.beautifiedName=i},be=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object(h.a)(this,e),this.id=t,this.name=n},ye=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(h.a)(this,e),this.text=t,this.value=n},Oe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new ye,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new ye,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new ye,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";Object(h.a)(this,e),this.profitMargin=t,this.discountedPrice=n,this.sellingPrice=a,this.originalPrice=i,this.currency=o},Ie=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";Object(h.a)(this,e),this.id=t,this.name=n,this.officialName=a,this.cityName=i,this.taxNumber=o},Ee=function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;Object(h.a)(this,e),this.isRushDelivery=t,this.deliveryDate=n},ke=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(h.a)(this,e),this.averageRating=t,this.totalRatingCount=n,this.totalCommentCount=a},xe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(h.a)(this,e),this.name=t,this.path=n,this.type=a},we=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[xe];Object(h.a)(this,e),this.items=t},De=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new ge,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new ve,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:new fe,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",d=arguments.length>9&&void 0!==arguments[9]&&arguments[9],m=arguments.length>10&&void 0!==arguments[10]&&arguments[10],p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:new Ce,u=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",g=arguments.length>13&&void 0!==arguments[13]?arguments[13]:"",v=arguments.length>14&&void 0!==arguments[14]?arguments[14]:"",f=arguments.length>15&&void 0!==arguments[15]?arguments[15]:"",C=arguments.length>16&&void 0!==arguments[16]?arguments[16]:0,b=arguments.length>17&&void 0!==arguments[17]?arguments[17]:0,y=arguments.length>18&&void 0!==arguments[18]?arguments[18]:"",O=arguments.length>19&&void 0!==arguments[19]?arguments[19]:new be,I=arguments.length>20&&void 0!==arguments[20]?arguments[20]:"",E=arguments.length>21&&void 0!==arguments[21]?arguments[21]:[],k=arguments.length>22&&void 0!==arguments[22]&&arguments[22],x=arguments.length>23&&void 0!==arguments[23]&&arguments[23],w=arguments.length>24&&void 0!==arguments[24]&&arguments[24],D=arguments.length>25&&void 0!==arguments[25]?arguments[25]:new Oe,N=arguments.length>26&&void 0!==arguments[26]&&arguments[26],j=arguments.length>27&&void 0!==arguments[27]?arguments[27]:[],L=arguments.length>28&&void 0!==arguments[28]?arguments[28]:new Ie,T=arguments.length>29&&void 0!==arguments[29]?arguments[29]:new Ee,A=arguments.length>30&&void 0!==arguments[30]&&arguments[30],S=arguments.length>31&&void 0!==arguments[31]?arguments[31]:[],_=arguments.length>32&&void 0!==arguments[32]&&arguments[32],R=arguments.length>33&&void 0!==arguments[33]?arguments[33]:0,M=arguments.length>34&&void 0!==arguments[34]?arguments[34]:"",W=arguments.length>35&&void 0!==arguments[35]&&arguments[35],F=arguments.length>36&&void 0!==arguments[36]&&arguments[36],G=arguments.length>37&&void 0!==arguments[37]&&arguments[37],P=arguments.length>38&&void 0!==arguments[38]?arguments[38]:new ke,B=arguments.length>39&&void 0!==arguments[39]&&arguments[39],H=arguments.length>40&&void 0!==arguments[40]?arguments[40]:"",U=arguments.length>41&&void 0!==arguments[41]?arguments[41]:new we;Object(h.a)(this,e),this.id=t,this.attributes=n,this.alternativeVariants=a,this.variants=i,this.otherMerchants=o,this.campaign=l,this.category=r,this.brand=c,this.color=s,this.showVariants=d,this.showSexualContent=m,this.metaBrand=p,this.productCode=u,this.name=g,this.nameWithProductCode=v,this.description=f,this.productGroupId=C,this.tax=b,this.businessUnit=y,this.gender=O,this.url=I,this.images=E,this.isSellable=k,this.isBasketDiscount=x,this.hasStock=w,this.price=D,this.isFreeCargo=N,this.promotions=j,this.merchant=L,this.deliveryInformation=T,this.isMarketplace=A,this.productStamps=S,this.hasHtmlContent=_,this.favoriteCount=R,this.uxLayout=M,this.isDigitalGood=W,this.isRunningOut=F,this.scheduledDelivery=G,this.ratingScore=P,this.showStarredAttributes=B,this.reviewsUrl=H,this.breadcrumb=U},Ne=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new De,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(h.a)(this,e),this.product=t,this.htmlContent=n,this.user=a,this.configuration=i},je={root:{display:"flex"},backdrop:{zIndex:Object(v.a)().zIndex.drawer+1,color:"#fff"},lvl1:{position:"relative",overflow:"hidden !important",flexGrow:"1",display:"flex",flexDirection:"column"},lvl2:{position:"relative",flexGrow:"1"},lvl3:{margin:"30px"},scrolableContainer:{height:"100% !important",position:"relative",flexGrow:"1",display:"flex",flexDirection:"column",overflow:"hidden!important"},conteiner:{marginTop:"10px"},paper:{height:"100% !important",display:"flex",flexDirection:"column"},cardTop:{textAlign:"center",position:"relative","&:hover":{"& $cardOverlay":{opacity:1}}},cardBottom:{paddingTop:"0.5rem !important",paddingBottom:"0.5rem !important",textAlign:"center"},Img:{width:"100%",display:"block !important"},cardOverlay:{top:0,left:0,right:0,bottom:0,opacity:0,zIndex:2,position:"absolute",background:"rgba(0, 0, 0, 0.67)",transition:"all 250ms ease-in-out",display:"flex",flexDirection:"column"},overlayHead:{alignItems:"center",justifyContent:"space-between !important",display:"flex"},overlayContent:{alignItems:"center",justifyContent:"center",display:"flex"},cardTool:{display:"flex",alignItems:"center"},iconColor:{color:"rgba(255, 255, 255, 1) !important",cursor:"pointer"},textWhite:{color:"rgba(255, 255, 255, 1) !important"},detailButton:{color:"rgba(255, 255, 255, 1) !important",border:"1px solid rgba(0, 0, 0, 0.23)",borderColor:"#ffffff !important",padding:"5px 15px"}},Le=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleDetailClose=function(){e.setState({DetailOpen:!1})},e.handleDetailOpen=function(t,n){e.setState({CurrentItem:n,DetailOpen:!0})},e.handleChangeLinkText=function(t){e.setState({Link:t.target.value})},e.handleDeleteCollectionItem=function(t,n){t.preventDefault();var a=Object(B.a)({},e.props.MyCollection),i=a.collectionItem.map((function(e){return e.itemId})).indexOf(n);-1!==i&&(a.collectionItem.splice(i,1),e.props.updateCollection(a))},e.handleOpenLink=function(e,t){e.preventDefault(),window.open(t)},e.handleCopyUrl=function(e,t){e.preventDefault(),N()(t)},e.handleAddCollectionItem=function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.loadingCollection(),t.prev=1,"https://cors-anywhere.herokuapp.com/",t.next=5,fetch("https://cors-anywhere.herokuapp.com/"+e.state.Link).then((function(e){return e.text()})).then((function(t){var n=(new DOMParser).parseFromString(t,"text/html"),a=Array.from(n.getElementsByTagName("script")).find((function(e){return-1!==e.innerText.indexOf("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__")})).innerText.trim().substring("window.__PRODUCT_DETAIL_APP_INITIAL_STATE__ =".length);a=a.substring(0,a.length-1);var i=new Ne;console.log(Object.assign(i,JSON.parse(a)));var o=Object(B.a)({},e.props.MyCollection),l=new ue;l.itemName=i.product.productCode,l.itemDescription=i.product.name,l.url=e.state.Link,l.price=i.product.price.sellingPrice.value,l.gender=i.product.gender.name,l.favoriteCount=i.product.favoriteCount,l.totalRatingCount=i.product.ratingScore.totalRatingCount,l.totalCommentCount=i.product.ratingScore.totalCommentCount,l.averageRating=i.product.ratingScore.averageRating,l.merchantName=i.product.merchant.name,l.merchantOfficialName=i.product.merchant.officialName,i.product.images.map((function(e){var t=new pe;l.collectionId=o.CollectionId,t.itemId=l.ItemId,t.url="https://cdn.dsmcdn.com/"+e,t.htmlContent="",l.itemImages.push(t)})),o.collectionItem.push(l),e.props.updateCollection(o)}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.props.enqueueSnackbar("Ekleme i\u015fleminde hata. Linkin do\u011fru oldu\u011fundan emin olun.",{variant:"error"});case 10:return t.prev=10,e.props.loadedCollection(),e.setState({Link:""}),t.finish(10);case 14:case"end":return t.stop()}}),t,null,[[1,7,10,14]])})));return function(e){return t.apply(this,arguments)}}(),e.state={Link:"",DetailOpen:!1,CurrentItem:null},e}return Object(d.a)(n,[{key:"handleEnterKeyPress",value:function(e){13===e.keyCode&&this.handleAddCollectionItem(e)}},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement(P.a,null,i.a.createElement(ie.a,{className:t.backdrop,open:this.props.IsFetching},i.a.createElement(oe.a,{color:"inherit"})),i.a.createElement(de,{open:this.state.DetailOpen,handleClose:this.handleDetailClose,currentItem:this.state.CurrentItem}),i.a.createElement("div",{className:t.root},i.a.createElement("div",{className:t.lvl1},i.a.createElement("div",{className:t.lvl2},i.a.createElement("div",{className:t.lvl3},i.a.createElement("div",{className:t.scrolableContainer},function(){if(!e.props.IsFetching&&!e.props.IsReadCollectionData)return i.a.createElement(X.a,{id:"Assinged-Hotkey-2",placeholder:"Eklemek istedi\u011fin \xfcr\xfcn\xfcn linkini buraya yap\u0131\u015ft\u0131r ... ",fullWidth:!0,InputProps:{endAdornment:i.a.createElement(Z.a,{position:"end"},i.a.createElement(K.a,{onClick:e.handleAddCollectionItem},i.a.createElement(te.a,null)))},onKeyDown:e.handleEnterKeyPress.bind(e),onChange:function(t){return e.handleChangeLinkText(t)},value:e.state.Link})}(),i.a.createElement(H.a,{className:t.conteiner,container:!0,spacing:2},void 0!==this.props.MyCollection.collectionItem&&null!=this.props.MyCollection.collectionItem&&this.props.MyCollection.collectionItem.length>0?this.props.MyCollection.collectionItem.map((function(n){return i.a.createElement(H.a,{item:!0,sm:4,key:n.itemId},i.a.createElement(U.a,{className:t.paper},i.a.createElement("div",{className:t.cardTop},n.itemImages&&n.itemImages.length>0?i.a.createElement("img",{className:t.Img,src:n.itemImages[0].url,alt:n.itemImages[0].imageId}):"",i.a.createElement("div",{className:t.cardOverlay},i.a.createElement("div",{className:t.overlayHead},i.a.createElement(V.a,{className:t.iconColor}),i.a.createElement("div",{className:t.cardTool},i.a.createElement(J.a,{className:t.iconColor,onClick:function(t,a){return e.handleCopyUrl(t,n.url)}}),i.a.createElement(q.a,{className:t.iconColor,onClick:function(t,a){return e.handleOpenLink(t,n.url)}}),function(n){if(!e.props.IsFetching&&!e.props.IsReadCollectionData)return i.a.createElement(Q.a,{className:t.iconColor,onClick:function(t,a){return e.handleDeleteCollectionItem(t,n)}})}(n.itemId))),i.a.createElement("div",{className:t.overlayContent},i.a.createElement("div",null,i.a.createElement("div",{className:t.column},i.a.createElement(I.a,{className:t.textWhite},n.favoriteCount," Ki\u015finin favorisi"),i.a.createElement(I.a,{className:t.textWhite},"Sat\u0131c\u0131 Ad\u0131: ",n.merchantName),i.a.createElement(I.a,{className:t.textWhite},"Resmi Ad\u0131: ",n.merchantOfficialName),i.a.createElement(I.a,{className:t.textWhite},"Fiyat\u0131 : ",n.price),i.a.createElement(I.a,{className:t.textWhite},"Toplam De\u011ferlendirme : ",n.totalRatingCount),i.a.createElement(I.a,{className:t.textWhite},"Toplam Yorum : ",n.totalCommentCount),i.a.createElement(ne.a,{name:"read-only",value:n.averageRating,readOnly:!0})),i.a.createElement(ae.a,{className:t.detailButton,onClick:function(t,a){return e.handleDetailOpen(t,n)}},"DETAY"))))),i.a.createElement("div",{className:t.cardBottom},i.a.createElement("p",null,n.itemName),i.a.createElement("small",null,n.itemDescription))))})):"")))))))}}]),n}(a.Component);var Te=Object(T.b)(Le),Ae=Object(C.a)(je)(Te),Se=Object(u.b)((function(e){return{MyCollection:e.MyCollection,IsFetching:e.IsFetching,IsReadCollectionData:e.IsReadCollectionData}}),(function(e){return{updateCollection:function(t){return e({type:"UPDATE_TODO_DATA",payload:t})},saveCollection:function(t){return e(R(t))},loadingCollection:function(t){return e(A(t))},loadedCollection:function(t){return e(S(t))}}}))(Ae),_e=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.lvl1},i.a.createElement("div",{className:e.lvl2},i.a.createElement("div",{className:e.lvl3},i.a.createElement(P.a,{maxWidthXl:!0},i.a.createElement(G,{handleOpen:this.handleOpen}),i.a.createElement(Se,{handleOpen:this.handleDetailOpen})))))}}]),n}(a.Component),Re=Object(C.a)({lvl1:{display:"flex"},lvl2:{flexGrow:"1",maxWidth:"100%",overflowX:"hidden"},lvl3:{display:"flex",flexDirection:"column",overflow:"hidden",transition:"transform 195ms",minHeight:"95vh"}})(_e),Me=Object(u.b)((function(e){return{}}),{})(Re),We=n(216),Fe=n(217),Ge=n(72),Pe=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).toggleDarkTheme=function(){var t="light"===e.state.theme.palette.type?"dark":"light";e.setState({theme:{palette:{type:t}}})},e.handleSwitchChange=function(t){e.toggleDarkTheme(),e.setState({switchCheck:t.target.checked})},e.state={switchCheck:!1,theme:{palette:{type:"light"}}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(window.location),this.props.loadingCollection(),void 0===this.props.collectionId||""===this.props.collectionId){e.next=8;break}return e.next=6,Ge.getCollection(this.props.collectionId);case 6:(t=e.sent)&&(console.log(t),this.props.readCollection(t));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this.props.enqueueSnackbar("Veri bulunumad\u0131",{variant:"error"});case 13:return e.prev=13,this.props.loadedCollection(),e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(v.a)(this.state.theme),t=Object(f.a)(e);return this.props.IsFetching?this.props.loadingCollection():this.props.loadedCollection(),i.a.createElement(g.a,{theme:t},i.a.createElement(We.a,null),i.a.createElement(Fe.a,{checked:this.state.switchCheck,onChange:this.handleSwitchChange}),i.a.createElement(Me,null))}}]),n}(a.Component);var Be=Object(T.b)(Pe),He=Object(u.b)((function(e){return{MyCollection:e.MyCollection,Link:e.Link,IsFetching:e.IsFetching,IsReadCollectionData:e.IsReadCollectionData}}),(function(e){return{readCollection:function(t){return e(_(t))},loadingCollection:function(t){return e(A(t))},loadedCollection:function(t){return e(S(t))}}}))(Be),Ue=n(72),Ke={root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:Object(v.a)().palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},Tile:{minHeight:"400px"},paper:{height:"100% !important",display:"flex",flexDirection:"column"},cardTop:{textAlign:"center",position:"relative","&:hover":{"& $cardOverlay":{opacity:1}}},cardBottom:{paddingTop:"0.5rem !important",paddingBottom:"0.5rem !important",textAlign:"center"},Img:{width:"100%",height:"100%",display:"block !important"},cardOverlay:{top:0,left:0,right:0,bottom:0,opacity:0,zIndex:2,position:"absolute",background:"rgba(0, 0, 0, 0.67)",transition:"all 250ms ease-in-out",display:"flex",flexDirection:"column"},overlayHead:{alignItems:"center",justifyContent:"space-between !important",display:"flex"},overlayContent:{alignItems:"center",justifyContent:"center",display:"flex"},cardTool:{display:"flex",alignItems:"center"},iconColor:{color:"rgba(255, 255, 255, 1) !important",cursor:"pointer"},textWhite:{color:"rgba(255, 255, 255, 1) !important"},detailButton:{color:"rgba(255, 255, 255, 1) !important",border:"1px solid rgba(0, 0, 0, 0.23)",borderColor:"#ffffff !important",padding:"5px 15px"},scrolableContainer:{height:"100% !important",position:"relative",flexGrow:"1",display:"flex",flexDirection:"column",overflow:"hidden!important"}},Ve=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleDetailClose=function(){e.setState({DetailOpen:!1})},e.handleDetailOpen=function(t,n){e.setState({CurrentItem:n,DetailOpen:!0})},e.handleOpenLink=function(e,t){e.preventDefault(),window.open(t)},e.handleCopyUrl=function(e,t){e.preventDefault(),N()(t)},e.state={Link:"",DetailOpen:!1,CurrentItem:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.props.loadingCollection(),void 0===this.props.collectionId||""===this.props.collectionId){e.next=7;break}return e.next=5,Ue.getCollection(this.props.collectionId);case 5:(t=e.sent)&&(console.log(t),this.props.readCollection(t));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.props.enqueueSnackbar("Veri bulunumad\u0131",{variant:"error"});case 12:return e.prev=12,this.props.loadedCollection(),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(ie.a,{className:t.backdrop,open:this.props.IsFetching},i.a.createElement(oe.a,{color:"inherit"})),i.a.createElement(de,{open:this.state.DetailOpen,handleClose:this.handleDetailClose,currentItem:this.state.CurrentItem}),i.a.createElement(le.a,{className:t.gridList,cols:3.5},this.props.MyCollection.collectionItem.map((function(n){return i.a.createElement(re.a,{className:t.Tile},i.a.createElement(U.a,{className:t.paper},i.a.createElement("div",null,i.a.createElement("div",{className:t.cardTop},n.itemImages&&n.itemImages.length>0?i.a.createElement("img",{className:t.Img,src:n.itemImages[0].url,alt:n.itemImages[0].imageId}):"",i.a.createElement("div",{className:t.cardOverlay},i.a.createElement("div",{className:t.overlayHead},i.a.createElement(J.a,{className:t.iconColor,onClick:function(t,a){return e.handleCopyUrl(t,n.url)}}),i.a.createElement("div",{className:t.cardTool},i.a.createElement(q.a,{className:t.iconColor,onClick:function(t,a){return e.handleOpenLink(t,n.url)}}))),i.a.createElement("div",{className:t.overlayContent},i.a.createElement("div",null,i.a.createElement("div",{className:t.column},i.a.createElement(I.a,{className:t.textWhite},n.favoriteCount," Ki\u015finin favorisi"),i.a.createElement(I.a,{className:t.textWhite},"Sat\u0131c\u0131 Ad\u0131: ",n.merchantName),i.a.createElement(I.a,{className:t.textWhite},"Resmi Ad\u0131: ",n.merchantOfficialName),i.a.createElement(I.a,{className:t.textWhite},"Fiyat\u0131 : ",n.price),i.a.createElement(I.a,{className:t.textWhite},"Toplam De\u011ferlendirme : ",n.totalRatingCount),i.a.createElement(I.a,{className:t.textWhite},"Toplam Yorum : ",n.totalCommentCount),i.a.createElement(ne.a,{name:"read-only",value:n.averageRating,readOnly:!0})),i.a.createElement(ae.a,{className:t.detailButton,onClick:function(t,a){return e.handleDetailOpen(t,n)}},"DETAY")))),i.a.createElement("p",null,n.itemName),i.a.createElement("small",null,n.itemDescription)),i.a.createElement("div",{className:t.cardBottom}))))}))))}}]),n}(a.Component);var ze=Object(C.a)(Ke)(Ve),Je=Object(u.b)((function(e){return{MyCollection:e.MyCollection,Link:e.Link,IsFetching:e.IsFetching,IsReadCollectionData:e.IsReadCollectionData}}),(function(e){return{readCollection:function(t){return e(_(t))},loadingCollection:function(t){return e(A(t))},loadedCollection:function(t){return e(S(t))}}}))(ze);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=n(58),qe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(me.v4)(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(h.a)(this,e),this.collectionId=t,this.name=n,this.collectionItem=a},$e=n(72),Qe={MyCollection:new qe,Link:"",IsFetching:!1,IsReadCollectionData:!1};var Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TODO_DATA":return Object(B.a)(Object(B.a)({},e),{},{MyCollection:t.payload,IsFetching:!1});case"READ_TODO_DATA":return Object(B.a)(Object(B.a)({},e),{},{MyCollection:t.payload,IsReadCollectionData:!0,IsFetching:!1,Link:t.payload.collectionId});case"SAVE_TODO_DATA":var n=$e.saveCollection(e.MyCollection);return console.log(n),Object(B.a)(Object(B.a)({},e),{},{MyCollection:new qe,IsFetching:!1,Link:"",IsReadCollectionData:!1});case"LOADING_COLLECTION_DATA":return Object(B.a)(Object(B.a)({},e),{},{IsFetching:!0});case"LOADED_COLLECTION_DATA":return Object(B.a)(Object(B.a)({},e),{},{IsFetching:!1});default:return e}},Ze=Object(Ye.b)(Xe),et=n(106),tt=n(14);window.store=Ze,l.a.render(i.a.createElement(u.a,{store:Ze},i.a.createElement(T.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"}},i.a.createElement(et.a,{basename:"/TrendyolCollectionShare"},i.a.createElement(tt.d,null,i.a.createElement(tt.b,{exact:!0,path:"/",component:He}),i.a.createElement(tt.b,{exact:!0,path:"/:collectionId",component:function(e){var t=e.match;return i.a.createElement(He,{collectionId:t.params.collectionId})}}),i.a.createElement(tt.b,{exact:!0,path:"/embed/:collectionId",component:function(e){var t=e.match;return i.a.createElement(Je,{collectionId:t.params.collectionId})}}),i.a.createElement(tt.b,{path:"*",component:He}),i.a.createElement(tt.a,{to:"/"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,n){"use strict";n.r(t),n.d(t,"getCollection",(function(){return l})),n.d(t,"saveCollection",(function(){return c}));var a=n(22),i=n.n(a),o=n(35);function l(e){return r.apply(this,arguments)}function r(){return(r=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://trendyolcollectionshareapp.herokuapp.com/Collection/GetData",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://trendyolcollectionshareapp.herokuapp.com/Collection/Add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}},[[130,1,2]]]);
//# sourceMappingURL=main.b229250f.chunk.js.map