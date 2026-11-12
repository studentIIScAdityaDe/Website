const files = {
  "about.txt": "Hi, I'm Your Name. I build things.",
  "projects.txt": "1. Project One\n2. Project Two",
  "contact.txt": "Email: you@example.com"
};

const output = document.getElementById("output");
const input = document.getElementById("cmd");

function print(text) {
  const div = document.createElement("div");
  div.style.whiteSpace = "pre-wrap";
  div.textContent = text;
  output.appendChild(div);
}

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const text = input.value.trim();
  print("~ $ " + text);
  input.value = "";
  if (!text) return;

  const [cmd, arg] = text.split(" ");

  if (cmd === "help") print("Commands: help, ls, cat <file>, clear");
  else if (cmd === "ls") print(Object.keys(files).join("   "));
  else if (cmd === "cat") print(files[arg] || "cat: no such file");
  else if (cmd === "clear") output.innerHTML = "";
  else print(cmd + ": command not found");
});