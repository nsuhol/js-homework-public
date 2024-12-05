var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var superSort = function (arr, direction) {
    var sortedArray = __spreadArray([], arr, true).sort();
    if (direction === "asc") {
        return sortedArray;
    }
    else {
        return sortedArray.reverse();
    }
};
var names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
var func = superSort;
var result = func(["A", "C", "D", "B"], "desc");
console.log(result);
// Task 2
var PackageStatus;
(function (PackageStatus) {
    PackageStatus[PackageStatus["Pending"] = 0] = "Pending";
    PackageStatus[PackageStatus["InTransit"] = 1] = "InTransit";
    PackageStatus[PackageStatus["Delivered"] = 2] = "Delivered";
    PackageStatus[PackageStatus["Lost"] = 3] = "Lost";
})(PackageStatus || (PackageStatus = {}));
var item = {
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
    deliver: function (isSuccess) {
        this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
    },
    get statusName() {
        return PackageStatus[this.status];
    },
};
item.deliver(true);
console.log(item.statusName);
