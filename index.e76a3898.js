document.querySelector(".tree").addEventListener("click",function(e){var t=e.target.closest(".list-item-toggle");if(t){var n=t.parentNode.querySelector("ul");n&&(n.hidden=!n.hidden)}}),document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.classList.add("list-item-toggle"),e.prepend(t),t.append(t.nextSibling)});//# sourceMappingURL=index.e76a3898.js.map

//# sourceMappingURL=index.e76a3898.js.map
