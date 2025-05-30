try {
  const colors = ["red", "green", "blue"];
  const index = parseInt(prompt("Enter index to access:"));
  if (index >= colors.length || index < 0) throw "Index out of bounds";
  console.log("Color at index:", colors[index]);
} catch (err) {
  console.log("Error:", err);
}
