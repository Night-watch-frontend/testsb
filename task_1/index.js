import { encoded, translations } from "./data.js";

console.log("Let's rock");
console.log(encoded, translations);

function decodeData(encodedData, translations) {
  const excludedFields = ["groupId", "service", "formatSize", "ca"];
  const uniqueIds = new Set();

  const decodedData = encodedData.map((obj) => {
    const newObj = {};
    for (const key in obj) {
      if (excludedFields.includes(key)) {
        newObj[key] = obj[key];
      } else {
        const id = obj[key];
        if (id !== null) {
          uniqueIds.add(id);
          newObj[key] = translations[id] || id;
          newObj[key] = null;
        }
      }
    }
    return newObj;
  });

  return { decodedData, uniqueIds: [...uniqueIds] };
}

const decoded = decodeData(encoded, translations);

console.log(decoded);
