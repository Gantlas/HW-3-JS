const init = () => {
  const a = +prompt(`[ax\u00B2 + bx + c] Enter a`, "");
  const b = +prompt(`[${a}x\u00B2 + bx + c] Enter b`, "");
  const c = +prompt(`[${a}x\u00B2 + ${b}x + c] Enter c`, "");

  showResult(quadraticEquation(a, b, c));
};

const quadraticEquation = (a, b, c) => {
  let discriminant = b ** 2 - 4 * a * c;

  if (a === 0 && b === 0 && c === 0) {
    return ["(-\u221E, +\u221E)"];
  } else if (a === 0 && b === 0) {
    return ["\u2205"];
  } else if ((a === 0 && c === 0) || (b === 0 && c === 0)) {
    return ["0"];
  } else if (a === 0) {
    return [-c / b];
  } else if (b === 0) {
    if (-c / a > 0) {
      const x = Math.sqrt(-c / a);

      return [x];
    } else {
      const x1 = -Math.sqrt(c / a) + "i";
      const x2 = Math.sqrt(c / a) + "i";

      return [x1, x2];
    }
  } else if (c === 0) {
    return [0, -b / a];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);

    return [x];
  } else if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return [x1, x2];
  }

  discriminant *= -1;
  const x1 = [-b / (2 * a), Math.sqrt(discriminant) / (2 * a) + "i"];
  const x2 = x1;

  return [x1.join(" + "), x2.join(" - ")];
};

const showResult = (arr) => {
  let result = `Result:\n`;
  if (arr.length === 1) {
    result += `x = ${arr[0]}\n`;

    alert(result);
  } else {
    arr.forEach((element, index) => {
      result += `x${++index} = ${element}\n`;
    });

    alert(result);
  }
};

init();
