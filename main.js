const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createElement(inputText);
};
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
const createElement = (text) => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerHTML = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerHTML;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerHTML = text;
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = deleteTarget.firstElementChild.innerText;
      createElement(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    const complete = document.getElementById("complete-list");
    complete.appendChild(addTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
