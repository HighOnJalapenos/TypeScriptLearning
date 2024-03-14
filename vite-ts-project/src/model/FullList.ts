import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList(); //Singleton
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    // const parsedList: { _id: string; _item: string; _checked: boolean }[] =
    //   JSON.parse(storedList);

    // parsedList.forEach((itemObj) => {
    //   const newListItem = new ListItem(
    //     itemObj._id,
    //     itemObj._item,
    //     itemObj._checked
    //   );
    //   FullList.instance.addItem(newListItem);
    // });

    const parsedList: ListItem[] = JSON.parse(storedList) as ListItem[];

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj.id,
        itemObj.description,
        itemObj.checked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => {
      return item.id !== id;
    });
    this.save();
  }
}
