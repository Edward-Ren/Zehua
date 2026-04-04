const transmissionMap = {
  A: "|",
  B: "|\\",
  C: "||",
  D: "|/",
  E: "\\",
  F: "||\\",
  G: "|||",
  H: "||/",
  I: "|/",
  J: "|\\\\",
  K: "|\\|",
  L: "|\\/",
  M: "|/\\",
  N: "|/|",
  O: "//",
  P: "\\\\",
  Q: "\\|",
  R: "\\/",
  S: "/\\",
  T: "/|",
  U: "//",
  V: "\\\\\\",
  W: "|||/",
  X: "|||\\",
  Y: "||||/",
  Z: "||||"
};

const toggleTransmission = document.getElementById("toggleTransmission");
const transmissionBox = document.getElementById("transmissionBox");
const transmissionInput = document.getElementById("transmissionInput");
const transmissionOutput = document.getElementById("transmissionOutput");

function encodeTransmission(text) {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (char === " ") return "   ";
      if (char === "\n") return "\n";
      return transmissionMap[char] || char;
    })
    .join(" ");
}

if (
  toggleTransmission &&
  transmissionBox &&
  transmissionInput &&
  transmissionOutput
) {
  toggleTransmission.addEventListener("click", () => {
    transmissionBox.classList.toggle("is-open");

    if (transmissionBox.classList.contains("is-open")) {
      transmissionInput.focus();
    }
  });

  transmissionInput.addEventListener("input", () => {
    transmissionOutput.textContent = encodeTransmission(
      transmissionInput.value
    );
  });
}