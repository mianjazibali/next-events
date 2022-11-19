(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{3129:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return __webpack_require__(2766)}])},3481:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return event_list}});var jsx_runtime=__webpack_require__(5893),next_image=__webpack_require__(5675),image_default=__webpack_require__.n(next_image);__webpack_require__(1664);var ui_button=__webpack_require__(5368),date_icon=__webpack_require__(6447),address_icon=__webpack_require__(6860),arrow_right_icon=function(){return(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})},event_item_module=__webpack_require__(7348),event_item_module_default=__webpack_require__.n(event_item_module),helpers_image=__webpack_require__(4650);let EventItem=props=>{let{id,title,location,date,image}=props,formattedDate=new Date(date).toDateString(),formattedLocation=location.replace(", ","\n");return(0,jsx_runtime.jsxs)("li",{className:event_item_module_default().item,children:[(0,jsx_runtime.jsx)(image_default(),{loader:helpers_image.Z,src:image,alt:title,width:"200",height:"200"}),(0,jsx_runtime.jsxs)("div",{className:event_item_module_default().content,children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsxs)("div",{className:event_item_module_default().date,children:[(0,jsx_runtime.jsx)(date_icon.Z,{}),(0,jsx_runtime.jsx)("time",{children:formattedDate})]}),(0,jsx_runtime.jsxs)("div",{className:event_item_module_default().address,children:[(0,jsx_runtime.jsx)(address_icon.Z,{}),(0,jsx_runtime.jsx)("address",{children:formattedLocation})]})]}),(0,jsx_runtime.jsx)("div",{className:event_item_module_default().actions,children:(0,jsx_runtime.jsxs)(ui_button.Z,{href:"/events/".concat(id),children:[(0,jsx_runtime.jsx)("span",{children:"Explore Event"}),(0,jsx_runtime.jsx)("span",{className:event_item_module_default().icon,children:(0,jsx_runtime.jsx)(arrow_right_icon,{})})]})})]})]})};var event_list_module=__webpack_require__(5508),event_list_module_default=__webpack_require__.n(event_list_module);let EventList=param=>{let{events}=param;return events&&0!==events.length?(0,jsx_runtime.jsx)("ul",{className:event_list_module_default().list,children:events.map(event=>(0,jsx_runtime.jsx)(EventItem,{...event},event.id))}):(0,jsx_runtime.jsx)("p",{className:event_list_module_default().msg,children:"No Events Found"})};var event_list=EventList},4273:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294);__webpack_require__(1163);var _ui_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5368),_event_search_module_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5335),_event_search_module_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_event_search_module_css__WEBPACK_IMPORTED_MODULE_4__);let EventSearch=props=>{let yearInputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),monthInputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),submitHandler=event=>{event.preventDefault();let selectedYear=yearInputRef.current.value,selectedMonth=monthInputRef.current.value;props.onSearch(selectedYear,selectedMonth)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{className:_event_search_module_css__WEBPACK_IMPORTED_MODULE_4___default().form,onSubmit:submitHandler,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_event_search_module_css__WEBPACK_IMPORTED_MODULE_4___default().controls,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_event_search_module_css__WEBPACK_IMPORTED_MODULE_4___default().control,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"year",children:"Year"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{id:"year",ref:yearInputRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"2021",children:"2021"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"2022",children:"2022"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_event_search_module_css__WEBPACK_IMPORTED_MODULE_4___default().control,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{htmlFor:"month",children:"Month"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select",{id:"month",ref:monthInputRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"1",children:"January"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"2",children:"February"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"3",children:"March"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"4",children:"April"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"5",children:"May"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"6",children:"June"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"7",children:"July"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"8",children:"August"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"9",children:"September"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"10",children:"October"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"11",children:"November"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:"12",children:"December"})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Find Events"})]})};__webpack_exports__.Z=EventSearch},6860:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_exports__.Z=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}},6447:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_exports__.Z=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}},5368:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_button_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9932),_button_module_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);let Button=props=>{let{href,onClick,children}=props;return href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:href,className:_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn,children:children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:onClick,className:_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn,children:children})};__webpack_exports__.Z=Button},7397:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{IP:function(){return getAllEvents},N6:function(){return getFeaturedEvents},Y:function(){return getEventById},nk:function(){return getFilteredEvents}});let DUMMY_EVENTS=[{id:"e1",title:"Programming for everyone",description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",location:"Some street 25, 12345 San Some where",date:"2021-05-12",image:"images/coding-event.jpg",isFeatured:!1},{id:"e2",title:"Networking for introverts",description:"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",location:"New Wall Street 5, 98765 New Work",date:"2021-05-30",image:"images/introvert-event.jpg",isFeatured:!0},{id:"e3",title:"Networking for extroverts",description:"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",location:"My Street 12, 10115 Broke City",date:"2022-04-10",image:"images/extrovert-event.jpg",isFeatured:!0}];function getFeaturedEvents(){return DUMMY_EVENTS.filter(event=>event.isFeatured)}function getAllEvents(){return DUMMY_EVENTS}function getFilteredEvents(dateFilter){let{year,month}=dateFilter;return DUMMY_EVENTS.filter(event=>{let eventDate=new Date(event.date);return eventDate.getFullYear()===year&&eventDate.getMonth()===month-1})}function getEventById(id){return DUMMY_EVENTS.find(event=>event.id===id)}},4650:function(__unused_webpack_module,__webpack_exports__){"use strict";let ImageLoader=param=>{let{src,width,quality}=param;return"".concat("/next-events","/").concat(src,"?w=").concat(width,"&q=").concat(quality||75)};__webpack_exports__.Z=ImageLoader},2766:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_components_events_event_search__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4273),_components_events_event_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3481),_dummy_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7397),next_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1163);let EventsPage=()=>{let router=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),allEvents=(0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.IP)(),searchHandler=(year,month)=>{router.replace("/events/".concat(year,"/").concat(month))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_events_event_search__WEBPACK_IMPORTED_MODULE_1__.Z,{onSearch:searchHandler}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_2__.Z,{events:allEvents})]})};__webpack_exports__.default=EventsPage},7348:function(module){module.exports={item:"event-item_item__fVtqa",content:"event-item_content__SQSF9",date:"event-item_date__4WZ_m",address:"event-item_address__tF6LM",actions:"event-item_actions__FMKJ9",icon:"event-item_icon__Dun0S"}},5508:function(module){module.exports={list:"event-list_list__cHFCu",msg:"event-list_msg__48DuD"}},5335:function(module){module.exports={form:"event-search_form__wRkzF",controls:"event-search_controls__OX7Pl",control:"event-search_control__kMgu3"}},9932:function(module){module.exports={btn:"button_btn__O_wkr"}},1163:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(880)}},function(__webpack_require__){__webpack_require__.O(0,[675,774,888,179],function(){return __webpack_require__(__webpack_require__.s=3129)}),_N_E=__webpack_require__.O()}]);