Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function groupNear(data, field) {
    let index = 1;
    let group = [data[0]];
    let relateState = data[0][field];
    let valueOfTop
    while (index < data.length) {
  
      valueOfTop = group[group.length - 1].content;
      if (data[index][field] === relateState) {
        group[group.length - 1].content += " " + data[index].content;
      }
      if (data[index][field] !== relateState) {
        relateState = data[index][field];
        group.push(data[index]);
      }
      ++index;
    }
    
    return group
  }
  

export default function calculateDifferences(before_content, after_content) {
  let barriers = [];
  let index = 0;
  let before = before_content.split(" ");
  let after = after_content.split(" ");
  let length = after.length;
  for (let i = 0; i < length; i++) {
    let match = before.indexOf(after[i], index);
    if (match != -1) {
      barriers.push(after[i]);
      index = match + 1;
    }
  }

  index = 0;
  let result = [];
  for (const barrier of barriers) {
    let offsetBefore = before.indexOf(barrier, index) - index;
    let offsetAfter = after.indexOf(barrier, index) - index;
    if (offsetBefore > 0) {
      result.push(
        before
          .slice(index, offsetBefore + index)
          .map((x) => ({ content: x, state: "Remove" }))
      );
      before = before.slice(offsetBefore);
    }

    if (offsetAfter > 0) {
      let substring = after.slice(index, offsetAfter + index);
      result.push(substring.map((x) => ({ content: x, state: "Add" })));
      before.insert(index, substring);
      index = index + substring.length;
    }

    result.push({ content: barrier, state: "Equal" });
    index++;
  }

  if (index < before.length) {
    result.push(before.slice(index).map((x) => ({ content: x, state: "Remove" })));
  }
  if (index < after.length) {
    result.push(after.slice(index).map((x) => ({ content: x, state: "Add" })));
  }

  return groupNear(result.flat(), "state");
}
