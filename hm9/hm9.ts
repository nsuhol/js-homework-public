// Task1
type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
  const sortedArray = [...arr].sort();
  if (direction === "asc") {
    return sortedArray;
  } else {
    return sortedArray.reverse();
  }
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);

// Task 2
enum PackageStatus {
  Pending,
  InTransit,
  Delivered,
  Lost,
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface Parcel {
  readonly id: number;
  weight: number;
  dimensions: Dimensions;
  description?: string;
  sender: number | string;
  status: PackageStatus;
  deliver(isSuccess: boolean): void;
  readonly statusName: string;
}

const item: Parcel = {
  id: 224,
  weight: 22.5,
  dimensions: {
    length: 105,
    width: 44,
    height: 50.5,
  },
  sender: "Nick Scot",
  description: "Super power inside.",
  status: PackageStatus.Pending,
  deliver(isSuccess) {
    this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
  },
  get statusName() {
    return PackageStatus[this.status];
  },
};

item.deliver(true);
console.log(item.statusName);
