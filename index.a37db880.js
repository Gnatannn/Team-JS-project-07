!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("3xVQP"),a("kvC6y"),a("dsadE"),a("hXsLy"),a("jcFG7");var s=a("bpxeT"),i=a("dDDEV"),c=a("2TvXO"),o=(s=a("bpxeT"),a("8MBJY")),u=a("a2hTj"),l=(c=a("2TvXO"),a("dIxxU")),p="d2c21f22a2d4ccc40e22a6b0b1329764",d=function(){"use strict";function t(){e(o)(this,t),this.inputValue="",this.page=1,this.genres=""}return e(u)(t,[{key:"fetchMovie",value:function(){var t=this;return e(s)(e(c).mark((function n(){var r;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"https://api.themoviedb.org/3/search/movie",n.next=4,e(l).get("https://api.themoviedb.org/3/search/movie",{params:{api_key:p,query:t.inputValue,page:t.page}});case 4:return r=n.sent,t.incrementPage(),n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},{key:"getGenre",value:function(){return e(s)(e(c).mark((function t(){var n;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://api.themoviedb.org/3/genre/movie/list?&language=en-US`",t.next=4,e(l).get("https://api.themoviedb.org/3/genre/movie/list?&language=en-US`",{params:{api_key:p}});case 4:return n=t.sent,t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"value",get:function(){return this.inputValue},set:function(e){this.inputValue=e}}]),t}(),g=a("3xVQP"),h=(g=a("3xVQP"),a("jcFG7")),f=document.querySelector(".back-to-top");function m(){document.body.scrollIntoView({behavior:"smooth"})}f.addEventListener("click",m),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?f.style.display="block":f.style.display="none"};var v,y=a("31aCh"),x={searchForm:document.querySelector(".header-search-form"),gallery:document.querySelector(".gallery"),searchMessage:document.querySelector(".header-message"),page:document.querySelector('a[data-page="home"]'),paginationCont:document.getElementById("tui-pagination-container")},b=!1,w="",k=new d;function _(){return(_=e(s)(e(c).mark((function t(n){var r,a,s;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.preventDefault(),n.stopPropagation(),x.paginationCont.classList.remove("is-hidden"),k.resetPage(),k.value=n.currentTarget.elements.searchQuery.value,""!==k.value){t.next=13;break}return x.searchMessage.classList.remove("is-hidden"),b=!1,g.requireData.page=1,(0,g.loadPage)(),x.searchMessage.innerHTML="I can`t find an empty request. Please input something.",t.abrupt("return");case 13:if(""===k.value){t.next=28;break}return t.next=16,k.fetchMovie(k.value);case 16:if(r=t.sent,v=r.total_results,!r.total_results){t.next=28;break}return w=k.value,k.value,x.gallery.innerHTML="",h.pagination.reset(r.total_results),a=r.results,s=(0,y.filmCheckImgUrl)(a),t.next=27,L(e(i)({},r,s));case 27:b=!0;case 28:if(0!==v){t.next=33;break}return k.value=w,x.searchMessage.classList.remove("is-hidden"),x.searchMessage.innerHTML="Search result not successful. Enter the correct movie name and try again.",t.abrupt("return");case 33:n.target.reset(),t.next=39;break;case 36:t.prev=36,t.t0=t.catch(0),console.log(t.t0);case 39:case"end":return t.stop()}}),t,null,[[0,36]])})))).apply(this,arguments)}function M(){return(M=e(s)(e(c).mark((function t(){var n,r,a;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===k.value){t.next=10;break}return t.next=3,k.fetchMovie(k.value);case 3:return n=t.sent,r=n.results,a=(0,y.filmCheckImgUrl)(r),t.next=8,L(e(i)({},n,a));case 8:t.next=11;break;case 10:return t.abrupt("return");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(e,t){var n=[];return e.forEach((function(e){var r=t.find((function(t){return e===t.id}));r&&n.push(r.name)})),n}function L(e){return E.apply(this,arguments)}function E(){return(E=e(s)(e(c).mark((function t(n){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.gallery.innerHTML="",x.searchMessage.classList.add("is-hidden"),r=n.results.map((function(e){var t,n=e.id,r=e.poster_path,a=e.title,s=e.release_date,i=e.genre_ids;t=void 0!==s&&s.length>4?s.slice(0,4):"There is no info";var c,o=T(i,g.GENRES_FULL_INFO);if(o.length)if(o.length>2){var u=o.slice(0,2);u.push("Other"),c=u.join(", ")}else c=o.join(", ");else c=["There is no info"];return'\n      <li class="card-set__item" id="'.concat(n,"\">\n      <a href='#' id='").concat(n,'\' class="card-link">\n      <picture>\n                    <source srcset="\n                    http://image.tmdb.org/t/p/w780/').concat(r," 1x,\n                   http://image.tmdb.org/t/p/original/").concat(r,' 2x" media="(min-width: 1280px)" type="image/jpeg" />\n                    <source srcset="\n                    http://image.tmdb.org/t/p/w342/').concat(r," 1x,\n                    http://image.tmdb.org/t/p/w500/").concat(r,' 2x" media="(min-width: 768px)" type="image/jpeg" />\n                    <source srcset="\n                    http://image.tmdb.org/t/p/w185/').concat(r," 1x,\n                    http://image.tmdb.org/t/p/w342/").concat(r,' 2x" media="(max-width: 480px)" type="image/jpeg" />\n         <img id="').concat(n,'\n          loading="lazy"\n          src="http://image.tmdb.org/t/p/w342/').concat(r,'"\n          alt="').concat(a,'"\n          class="card-set__img "/>\n      </picture>\n     \n      <h3 class="card-set__title">').concat(a,'</h3>\n      <div class="card-set__description" id="').concat(n,'">\n      <span class="card-set__genre" id="').concat(n,'"> ').concat(c," &nbsp| ").concat(t,"</span>\n        </div>\n      </a>\n      </li>\n      ")})).join(""),(0,g.addToHTML)(r);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}x.searchForm.addEventListener("submit",(function(e){return _.apply(this,arguments)})),h.pagination.on("afterMove",(function(e){var t=e.page;if(b){var n=e.page;k.page=n,function(){M.apply(this,arguments)}(),m()}else(0,g.onPaginLoadMore)(t),m()})),a("jkZPw"),a("f2EkH")}();
//# sourceMappingURL=index.a37db880.js.map
