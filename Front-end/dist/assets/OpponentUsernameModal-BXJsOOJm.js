function m(d,i){let s=document.getElementById("username-modal");s&&s.remove();const o=document.createElement("div");o.id="username-modal",o.className="modal-overlay",o.style.cssText=`
    position: fixed; left: 0; top: 0; width: 100vw; height: 100vh; z-index: 1000;
    display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.5); backdrop-filter: blur(3px);`;const e=document.createElement("div");e.className="modal-content",e.style.cssText=`
    background: rgba(30, 35, 50, 0.95);
    border-radius: 12px; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 255, 247, 0.3); 
    padding: 1.5rem; 
    min-width: 320px; 
    max-width: 400px;
    color: #fff; 
    position: relative; 
    text-align: center;`,e.innerHTML=`
    <span class="close" id="close-username-modal" style="position:absolute;top:10px;right:15px;font-size:1.5rem;cursor:pointer;color:#ccc;">&times;</span>
    <h3 style="font-size:1.2rem;font-weight:600;margin-bottom:1rem;color:#fff;">Enter opponent username</h3>
    <input type="text" id="opponent-username-input" placeholder="Opponent username" style="width:100%;padding:0.75rem;margin-bottom:1rem;border-radius:6px;border:1px solid #555;background:rgba(40,45,60,0.9);color:#fff;font-size:1rem;outline:none;">
    <button id="submit-username-btn" style="width:100%;padding:0.75rem;border-radius:6px;background:#00fff7;color:#000;font-weight:600;font-size:1rem;cursor:pointer;border:none;">Start Match</button>
    <div id="username-error" style="display:none;color:#ff6b6b;font-size:0.9rem;margin-top:0.5rem;"></div>
  `,o.appendChild(e),document.body.appendChild(o);const n=e.querySelector("#opponent-username-input"),a=e.querySelector("#submit-username-btn"),r=e.querySelector("#username-error"),l=e.querySelector("#close-username-modal");a.onclick=()=>{const t=n.value.trim();if(!t){r.textContent="You must enter a valid username for your opponent!",r.style.display="block";return}r.style.display="none",document.body.removeChild(o),d(t)},l.onclick=()=>{document.body.removeChild(o),i&&i()},n.onkeydown=t=>{t.key==="Enter"&&a.click()},n.focus()}export{m as showOpponentUsernameModal};
