import jsdom from "jsdom";
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");

export const globalDocumentWindowConfig = () => {
  global.document = doc;
  global.window = doc.defaultView;
};
