import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BionicReadingService {
  toBionicReading(paragraph: string): string {
    const regex = /<span[^>]*>(.*?)<\/span>.?/g;
    const matchedWords = paragraph.match(regex);
    if (!matchedWords) return paragraph;
    const hasMatchedWords = matchedWords ? true : false;
    const words = paragraph.split(" ");
    const bionicWords = words.map((word) => {
      if (hasMatchedWords) {
        for (const matchedWord of matchedWords)
          if (matchedWord.includes(word) && word.length > 3) return word;
      }
      const highlightLength = Math.ceil(word.length * 0.4);
      const highlightedPart = word.slice(0, highlightLength);
      const remainingPart = word.slice(highlightLength);
      return `<b>${highlightedPart}</b>${remainingPart}`;
    });
    return bionicWords.join(" ");
  }
}
