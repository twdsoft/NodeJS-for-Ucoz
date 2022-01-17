System.register(["./chunk-filter-input.js","./chunk-vendor.js","./chunk-input-demux.js","./chunk-ref-selector.js","./chunk-frameworks.js"],
function(){"use strict";
           var l,o,g,f;
           return{setters:[function(s){l=s.B},
                           function(s){o=s.t,g=s.d,f=s.c},
                           function(){},function(){},
                           function(){}],
execute:function(){var s=Object.defineProperty,
    p=Object.getOwnPropertyDescriptor,
    d=(t,r)=>s(t,"name",{value:r,
    configurable:!0}),
    a=(t,r,e,u)=>{for(var n=u>1?void 0:u?p(r,e):r,c=t.length-1,h;c>=0;c--)(h=t[c])&&(n=(u?h(r,e,n):h(n))||n);
return u&&n&&s(r,e,n),n};
let i=class extends l{constructor(){
  super(...arguments);
this.showAllQualifiersIfNoneMatch=!1;
  this.fuzzyMatchQualifiers=!0,
    this.showSubmissionOptionIfInvalidSearchTerms=!0,
    this.suggestionsTitle="Narrow your search",
 this.spaceBetweenValueAndDescription=!1}fetchQualifierSuggestions()
{return[{value:"actor:",
         description:"octocat"},
        {value:"branch:",description:"my-branch-name"},
{value:"event:", description:"push, pull_request, schedule, check_run, check_suite, etc."},
{value:"is:",description:"success, failure, in_progress, neutral, etc."},
        {value:"workflow:",description:"workflow-name"}]}
async fetchSuggestionsForQualifier(t)
                      {switch(t)
{case"branch":return this.fetchBranchSuggestions();
  case"actor":return this.fetchActorSuggestions();
  case"event":return this.fetchEventSuggestions();
case"is":return this.fetchStatusSuggestions();
  case"workflow":return this.fetchWorkflowSuggestions();
default:return[]}}async fetchBranchSuggestions()
                      {const t=this.searchInput.getAttribute("data-suggested-branches-path");
return(await this.cachedJSON(t)).map(e=>({value:e}))}
                      async fetchActorSuggestions()
  {const t=this.searchInput.getAttribute("data-suggested-actors-path");
return(await this.cachedJSON(t)).map(e=>({value:e.login,description:e.displayName}))}
async fetchEventSuggestions()
                      {const t=this.searchInput.getAttribute("data-suggested-events-path");
return(await this.cachedJSON(t)).map(e=>({value:e}))}
                      async fetchStatusSuggestions()
                      {const t=this.searchInput.getAttribute("data-suggested-statuses-path");
return(await this.cachedJSON(t)).map(e=>({value:e}))}
                      async fetchWorkflowSuggestions()
                      {const t=this.searchInput.getAttribute("data-suggested-workflows-path");
return(await this.cachedJSON(t)).map(e=>({value:e}))}renderSearchWarningIfRequired()
                      {return""}postDropdownRender(){this.updateKeywordWarning()}invalidSearchTerms()
{return this.getFilterInputStringWithoutQualifiers()}
                      getFilterInputStringWithoutQualifiers()
{return this.searchInput.value.replace(/\S+:("[^"]+"?|\S)*/g,"").trim()}updateKeywordWarning()
{this.getFilterInputStringWithoutQualifiers().length===0?this.hideKeywordWarning():this.showKeywordWarning()}hideKeywordWarning()
{this.filterKeywordWarningContainer.hidden=!0}showKeywordWarning()
                      {this.getFilterInputStringWithoutQualifiers().length>0&&
(this.filterKeywordWarningMessage.textContent=this.getFilterInputStringWithoutQualifiers(),this.filterKeywordWarningContainer.hidden=!1)}};
d(i,"ActionsWorkflowFilter"),
  a([o],i.prototype, "filterKeywordWarningContainer",2), a([o],i.prototype,"filterKeywordWarningMessage",2), a([g(300)],i.prototype,"showKeywordWarning",1),i=a([f],i)}}});
//# sourceMappingURL=https://twdhub-a.usite.pro/assets/actions.js.map
