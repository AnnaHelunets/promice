(()=>{const e={name:document.querySelector(".name"),expirience:document.querySelector(".expirience"),weight:document.querySelector(".weight")};(5,fetch("https://pokeapi.co/api/v2/pokemon/5").then((e=>e.json())).then((function(t){e.name.textContent=t.name,e.expirience.textContent=t.base_experience,e.weight.textContent=t.weight}))).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))})();