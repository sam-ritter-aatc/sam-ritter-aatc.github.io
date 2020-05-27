(this["webpackJsonpaatc-events-calendar"]=this["webpackJsonpaatc-events-calendar"]||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),i=n(19),s=n.n(i),o=(n(80),n(20)),c=n(21),l=n(22),u=n(23),d=(n(81),n(33)),h=n(10),v=n.n(h),p=n(24),E=n(74),g=n(31),f=n(162),m=n(158),C=n(159),w=n(160),b=n(161),j=n(54),k=n.n(j),O=n(67),y=n(32),D=n(68),S=n(69),x=n(70),N=(n(83),n(84),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{"data-testid":"switchable-text-input",className:this.props.className},r.a.createElement("label",null,this.props.label),this.props.inputFlag?r.a.createElement("input",{type:"text",className:"form-control",value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}):this.props.value)}}]),n}(a.Component)),M=(n(85),n(71)),T=n.n(M),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,this.props.label),this.props.editFlag?r.a.createElement(T.a,{className:"endDateEntry",selected:this.props.selected,onChange:this.props.handleChange,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"MMM d, yyyy h:mm aa",startDate:this.props.start,endDate:this.props.end,minDate:this.props.minDate}):this.props.selected.toLocaleString())}}]),n}(a.Component),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).calendarComponentRef=r.a.createRef(),a.state={isCreateEvent:!1,isEditing:!1,currentEvent:{id:"",title:"",description:"",location:"",organizer:"",start:new Date,end:new Date},events:[],showCreateModal:!1,calendarWeekends:!0},a.modalToggle=function(){a.setState({showCreateModal:!a.state.showCreateModal})},a.editToggle=function(){a.setState({isEditing:!a.state.isEditing})},a.userCanEdit=function(){return!0},a.saveEvent=function(e){if(a.modalToggle(),console.log("saving event",a.state.currentEvent),a.state.isCreateEvent)a.setState({events:a.state.events.concat(Object.assign({},a.state.currentEvent))});else{var t=a.state.events.findIndex((function(e){return e.id===a.state.currentEvent.id})),n=Object(E.a)(a.state.events);n[t]=a.state.currentEvent,a.setState({events:n})}a.clearCurrentEvent()},a.clearCurrentEvent=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentEvent:{}});case 2:console.log("state",a.state);case 3:case"end":return e.stop()}}),e)}))),a.handleEventClick=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isCreateEvent:!1,isEditing:!1}),console.log("eventClicked",t),e.next=4,a.setState({currentEvent:a.state.events.find((function(e){return e.id===t.event.id}))});case 4:a.showModal(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleDateClick=function(e){a.setState({isCreateEvent:!0,isEditing:!0,currentEvent:e});var t=new Date(e.date.getTime()),n=new Date(e.date.getTime());n.setDate(n.getDate()+1),a.setState({currentEvent:{id:k()(),start:t,end:n}}),a.showModal(e)},a.createEvent=function(){a.setState({isCreateEvent:!0,isEditing:!0});var e=new Date,t=new Date;t.setDate(t.getDate()+1),a.setState({currentEvent:{id:k()(),start:e,end:t}}),a.showModal()},a.showModal=function(e){console.log("showModal - incoming e",e),a.modalToggle()},a.onChangeEventName=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentEvent:Object(d.a)({},a.state.currentEvent,{title:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onChangeEventDescription=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentEvent:Object(d.a)({},a.state.currentEvent,{description:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onChangeLocation=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentEvent:Object(d.a)({},a.state.currentEvent,{location:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleStartChange=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentEvent:Object(d.a)({},a.state.currentEvent,{start:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleEndChange=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({currentEvent:Object(d.a)({},a.state.currentEvent,{end:t})});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onChangeEventName=a.onChangeEventName.bind(Object(g.a)(a)),a.onChangeEventDescription=a.onChangeEventDescription.bind(Object(g.a)(a)),a.onChangeLocation=a.onChangeLocation.bind(Object(g.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"EventCalendar"},r.a.createElement(O.a,{defaultView:"dayGridMonth",firstDay:1,fixedWeekCount:!1,header:{left:"prev today next",center:"title",right:"dayGridMonth,timeGridWeek, listMonth"},plugins:[y.d,D.a,S.a,x.a],themeSystem:"bootstrap",displayEventTime:!0,selectable:!0,ref:this.calendarComponentRef,weekends:this.state.calendarWeekends,events:this.state.events,dateClick:this.handleDateClick,eventClick:this.handleEventClick,contentHeight:"auto",height:"auto"}),r.a.createElement(f.a,{isOpen:this.state.showCreateModal,toggle:this.modalToggle,className:this.constructor.name},r.a.createElement(m.a,{toggle:this.modalToggle},this.state.isCreateEvent?"Create New Event":this.state.currentEvent.title),r.a.createElement(C.a,null,r.a.createElement("form",{onSubmit:this.onSubmit},!this.state.isCreateEvent&&r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Event ID: ",this.state.currentEvent.id)),r.a.createElement(N,{label:"Event Name: ",className:"form-group",value:this.state.currentEvent.title,onChange:this.onChangeEventName,inputFlag:this.state.isEditing}),r.a.createElement(N,{label:"Event Description: ",className:"form-group",value:this.state.currentEvent.description,onChange:this.onChangeEventDescription,inputFlag:this.state.isEditing}),r.a.createElement(N,{label:"Event Location: ",className:"form-group",value:this.state.currentEvent.location,onChange:this.onChangeLocation,inputFlag:this.state.isEditing}),r.a.createElement(F,{label:"Start Date: ",editFlag:this.state.isEditing,selected:this.state.currentEvent.start,handleChange:this.handleStartChange,start:this.state.currentEvent.start,end:this.state.currentEvent.end}),r.a.createElement(F,{label:"End Date: ",editFlag:this.state.isEditing,selected:this.state.currentEvent.end,handleChange:this.handleEndChange,start:this.state.currentEvent.start,end:this.state.currentEvent.end,minDate:this.state.currentEvent.start}))),r.a.createElement(w.a,null,!this.state.isEditing&&r.a.createElement(b.a,{color:"warning",onClick:this.editToggle},"Edit")," ",r.a.createElement(b.a,{color:"primary",onClick:this.saveEvent},"Save")," ",r.a.createElement(b.a,{color:"secondary",onClick:this.modalToggle},"Cancel"))),r.a.createElement("div",{className:"createEventButton"},r.a.createElement(b.a,{outline:!0,color:"secondary",onClick:this.createEvent},"Create Event")))}}]),n}(a.Component),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))}}]),n}(a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/aatc-events-calendar",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/aatc-events-calendar","/service-worker.js");I?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()},75:function(e,t,n){e.exports=n(153)},80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.a6860a0f.chunk.js.map