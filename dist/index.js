var a=(o,t,r)=>`
    <div class="d-flex justify-content-between align-items-center" data-id="${o}">
        <input class="form-check-input checkbox" ${r&&"checked"} type="checkbox">
        <label class="text-secondary flex-grow-1 ${r&&"text-decoration-line-through"}">${t}</label>
        <button type="button" class="btn btn-link delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
            </svg>
        </button>
    </div>
`;var m=o=>{let t={id:Date.now().toString(),title:o,completed:!1},r=i=>{i.innerHTML=a(t.id,t.title,t.completed),i.querySelector("input").addEventListener("change",()=>n(i))},n=i=>{t.completed=!t.completed,r(i)};return{render:r,getId:()=>t.id,isCompleted:()=>t.completed}};var p=(o,t)=>{let r=()=>{o.addEventListener("keyup",n)},n=s=>{if(s.key==="Enter"){let d=m(s.target.value);t(d),s.target.value=""}};return{init:r}};var u=o=>{let t={todoItems:[],filter:"all"},r=e=>{t.todoItems.push(e),i()},n=e=>{let{id:l}=e.target.closest("div").dataset;t.todoItems=t.todoItems.filter(c=>c.getId()!==l),i()},s=e=>{t.filter=e,i()},d=()=>t.filter==="done"?t.todoItems.filter(e=>e.isCompleted()):t.filter==="active"?t.todoItems.filter(e=>!e.isCompleted()):t.todoItems,i=()=>{o.innerHTML="",d().forEach(l=>{let c=document.createElement("li");c.classList.add("list-group-item"),o.appendChild(c),l.render(c)}),Array.from(o.querySelectorAll(".delete")).forEach(l=>{l.addEventListener("click",n)})};return{createTodoItem:r,setFilter:s,render:i}};var f=(o,t)=>{let r=()=>{Array.from(o.querySelectorAll("a")).map(s=>s.addEventListener("click",n))},n=s=>{let{filter:d}=s.target.dataset;t(d)};return{init:r}};var T=o=>{let t,r,n,s=()=>{let e=o.querySelector("header input");t=p(e,d),t.init(d);let l=o.querySelector("ul");r=u(l);let c=o.querySelector("footer");n=f(c,i),n.init()},d=e=>{r.createTodoItem(e)},i=e=>{r.setFilter(e)};return{init:s}};var h=document.querySelector(".app");T(h).init();
//# sourceMappingURL=//dist//index.js.map
