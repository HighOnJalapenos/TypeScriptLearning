import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate();

  ul: HTMLUListElement;

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((item) => {
      const li = document.createElement("li");
      li.className = "item";

      const check = document.createElement("input");
      check.type = "checkbox";
      check.id = item.id;
      check.checked = item.checked;
      li.append(check);

      check.addEventListener("change", () => {
        console.log(item.checked);
        item.checked = !item.checked;
        console.log(item.checked);
        fullList.save();
      });

      const label = document.createElement("label");
      label.htmlFor = item.id;
      label.textContent = item.description;
      li.append(label);

      const button = document.createElement("button");
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      this.ul.append(li);
    });
  }
}
