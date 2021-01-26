const colors = [];

const RandGandBToHex = function (R, G, B) {
  var r = colorToHex(R);
  var g = colorToHex(G);
  var b = colorToHex(B);
  return r + g + b;
};

const colorToHex = function (color) {
  var hex = Number(color).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

const colorCount = 5;
const colorMultiplier = 50;

for (var R = 0; R < colorCount + 1; R++) {
  for (var G = 0; G < colorCount + 1; G++) {
    for (var B = 0; B < colorCount + 1; B++) {
      var color = RandGandBToHex(
        R * colorMultiplier,
        G * colorMultiplier,
        B * colorMultiplier
      );
      colors.push(color);
    }
  }
}

const enumColors = {};
for (const i in colors) {
  enumColors[colors[i]] = colors[i];
}

/*
 * Lots of code here is copied 1:1 from actual game files
 *
 */

const maxLayer = 5;

/** @enum {string} */
const enumSubShape = {
  rect: "rect",
  circle: "circle",
  star: "star",
  windmill: "windmill",
};

/** @enum {string} */
const enumSubShapeToShortcode = {
  [enumSubShape.rect]: "R",
  [enumSubShape.circle]: "C",
  [enumSubShape.star]: "S",
  [enumSubShape.windmill]: "W",
};

/** @enum {enumSubShape} */
const enumShortcodeToSubShape = {};
for (const key in enumSubShapeToShortcode) {
  enumShortcodeToSubShape[enumSubShapeToShortcode[key]] = key;
}

const arrayQuadrantIndexToOffset = [
  { x: 1, y: -1 }, // tr
  { x: 1, y: 1 }, // br
  { x: -1, y: 1 }, // bl
  { x: -1, y: -1 }, // tl
];

CanvasRenderingContext2D.prototype.beginCircle = function (x, y, r) {
  if (r < 0.05) {
    this.beginPath();
    this.rect(x, y, 1, 1);
    return;
  }
  this.beginPath();
  this.arc(x, y, r, 0, 2.0 * Math.PI);
};

/////////////////////////////////////////////////////

function radians(degrees) {
  return (degrees * Math.PI) / 180.0;
}

/**
 * Generates the definition from the given short key
 */
function fromShortKey(key) {
  const sourceLayers = key.split(":");
  if (sourceLayers.length > maxLayer) {
    throw new Error("Only " + maxLayer + " layers allowed");
  }

  let layers = [];
  for (let i = 0; i < sourceLayers.length; ++i) {
    const text = sourceLayers[i];
    const sourceNumber = 9 * 4;
    if (text.length !== sourceNumber) {
      throw new Error("Invalid layer: '" + text + "' -> must be 28 characters");
    }

    if (text === "--".repeat(4)) {
      throw new Error("Empty layers are not allowed");
    }

    var itemText = "";

    for (let quad = 0; quad < 4; ++quad) {
      var colorText = "";
      const shapeText = text[(quad * text.length) / 4 + 0];
      for (let j = 1; j < text.length / 4; j++) {
        const letter = text[(quad * text.length) / 4 + j];
        colorText += letter;
      }
      if (colorText.length < 8) {
        colorText = "(" + colorText + ")";
      }
      itemText = itemText + shapeText + colorText;
    }

    /** @type {ShapeLayer} */
    const quads = [null, null, null, null];
    for (let quad = 0; quad < 4; quad++) {
      const shapeText = itemText[(quad * sourceNumber) / 4 + 0];
      const subShape = enumShortcodeToSubShape[shapeText];
      let colorText = "";
      for (var j = 1; j < sourceNumber / 4; j++) {
        const letter = itemText[(quad * sourceNumber) / 4 + j];
        colorText += letter;
      }
      if (colorText.length >= 6) {
        colorText = colorText.slice(1, 7);
      }
      var color = colorText;
      if (subShape) {
        if (!color) {
          throw new Error("Invalid shape short key:", key);
        }
        quads[quad] = {
          subShape,
          color,
        };
      } else if (shapeText !== "-") {
        throw new Error("Invalid shape key: " + shapeText);
      }
    }
    layers.push(quads);
  }

  return layers;
}

function renderShape(layers) {
  const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
    "result"
  ));
  const context = canvas.getContext("2d");

  context.save();
  context.clearRect(0, 0, 1000, 1000);

  const w = 512;
  const h = 512;
  const dpi = 1;

  context.translate((w * dpi) / 2, (h * dpi) / 2);
  context.scale((dpi * w) / 23, (dpi * h) / 23);

  context.fillStyle = "#e9ecf7";

  const quadrantSize = 10;
  const quadrantHalfSize = quadrantSize / 2;

  context.fillStyle = "rgba(40, 50, 65, 0.1)";
  context.beginCircle(0, 0, quadrantSize * 1.15);
  context.fill();

  for (let layerIndex = 0; layerIndex < layers.length; ++layerIndex) {
    const quadrants = layers[layerIndex];

    const layerScale = Math.max(0.1, 0.9 - layerIndex * 0.22);

    for (let quadrantIndex = 0; quadrantIndex < 4; ++quadrantIndex) {
      if (!quadrants[quadrantIndex]) {
        continue;
      }
      const { subShape, color } = quadrants[quadrantIndex];

      const quadrantPos = arrayQuadrantIndexToOffset[quadrantIndex];
      const centerQuadrantX = quadrantPos.x * quadrantHalfSize;
      const centerQuadrantY = quadrantPos.y * quadrantHalfSize;

      const rotation = radians(quadrantIndex * 90);

      context.translate(centerQuadrantX, centerQuadrantY);
      context.rotate(rotation);

      context.fillStyle = "#" + color;
      context.strokeStyle = "#555";
      context.lineWidth = 1;

      const insetPadding = 0.0;

      switch (subShape) {
        case enumSubShape.rect: {
          context.beginPath();
          const dims = quadrantSize * layerScale;
          context.rect(
            insetPadding + -quadrantHalfSize,
            -insetPadding + quadrantHalfSize - dims,
            dims,
            dims
          );

          break;
        }
        case enumSubShape.star: {
          context.beginPath();
          const dims = quadrantSize * layerScale;

          let originX = insetPadding - quadrantHalfSize;
          let originY = -insetPadding + quadrantHalfSize - dims;

          const moveInwards = dims * 0.4;
          context.moveTo(originX, originY + moveInwards);
          context.lineTo(originX + dims, originY);
          context.lineTo(originX + dims - moveInwards, originY + dims);
          context.lineTo(originX, originY + dims);
          context.closePath();
          break;
        }

        case enumSubShape.windmill: {
          context.beginPath();
          const dims = quadrantSize * layerScale;

          let originX = insetPadding - quadrantHalfSize;
          let originY = -insetPadding + quadrantHalfSize - dims;
          const moveInwards = dims * 0.4;
          context.moveTo(originX, originY + moveInwards);
          context.lineTo(originX + dims, originY);
          context.lineTo(originX + dims, originY + dims);
          context.lineTo(originX, originY + dims);
          context.closePath();
          break;
        }

        case enumSubShape.circle: {
          context.beginPath();
          context.moveTo(
            insetPadding + -quadrantHalfSize,
            -insetPadding + quadrantHalfSize
          );
          context.arc(
            insetPadding + -quadrantHalfSize,
            -insetPadding + quadrantHalfSize,
            quadrantSize * layerScale,
            -Math.PI * 0.5,
            0
          );
          context.closePath();
          break;
        }

        default: {
          assertAlways(false, "Unkown sub shape: " + subShape);
        }
      }

      context.fill();
      context.stroke();

      context.rotate(-rotation);
      context.translate(-centerQuadrantX, -centerQuadrantY);
    }
  }

  context.restore();
}

function watchColorPicker(event) {
  const hexColor = document.getElementById("hexcolor");
  const hexLabel = document.getElementById("hexlabel");
  hexLabel.innerHTML = hexColor.value;
}

/////////////////////////////////////////////////////

function showError(msg) {
  const errorDiv = document.getElementById("error");
  errorDiv.classList.toggle("hasError", !!msg);
  if (msg) {
    errorDiv.innerText = msg;
  } else {
    errorDiv.innerText = "Shape generated";
  }
}

// @ts-ignore
window.generate = () => {
  showError(null);
  // @ts-ignore
  const code = document.getElementById("code").value.trim();

  const hexColor = document.getElementById("hexcolor");
  hexColor.addEventListener("input", watchColorPicker, false);

  let parsed = null;
  try {
    parsed = fromShortKey(code);
  } catch (ex) {
    showError(ex);
    return;
  }

  renderShape(parsed);
};

// @ts-ignore
window.debounce = (fn) => {
  setTimeout(fn, 0);
};

// @ts-ignore
window.addEventListener("load", () => {
  if (window.location.search) {
    const key = window.location.search.substr(1);
    document.getElementById("code").value = key;
  }
  generate();
});

window.exportShape = () => {
  const canvas = document.getElementById("result");
  const imageURL = canvas.toDataURL("image/png");

  const dummyLink = document.createElement("a");
  dummyLink.download = "shape.png";
  dummyLink.href = imageURL;
  dummyLink.dataset.downloadurl = [
    "image/png",
    dummyLink.download,
    dummyLink.href,
  ].join(":");

  document.body.appendChild(dummyLink);
  dummyLink.click();
  document.body.removeChild(dummyLink);
};

window.viewShape = (key) => {
  document.getElementById("code").value = key;
  generate();
};

window.shareShape = () => {
  const code = document.getElementById("code").value.trim();
  const url = "https://viewer.shapez.io?" + code;
  alert("You can share this url: " + url);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomShape() {
  let shapes = Object.values(enumSubShapeToShortcode);
  shapes.push("-");
  return shapes[getRandomInt(shapes.length)];
}

function getRandomColor() {
  return Object.values(enumColors)[
    getRandomInt(Object.keys(enumColors).length)
  ];
}

window.randomShape = () => {
  let layers = getRandomInt(maxLayer);
  let code = "";
  for (var i = 0; i <= layers; i++) {
    let layertext = "";
    for (var y = 0; y <= 3; y++) {
      let randomShape = getRandomShape();
      let randomColor = "(" + getRandomColor() + ")";

      if (randomShape === "-") {
        randomColor = "--------";
      }
      layertext = layertext + randomShape + randomColor;
    }
    //empty layer not allowed
    if (layertext === "------------------------------------") {
      i--;
    } else {
      code = code + layertext + ":";
    }
  }
  code = code.replace(/:+$/, "");
  document.getElementById("code").value = code;
  generate();
};
