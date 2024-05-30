import domGenerator from 'dom-generator'

domGenerator({
  tag: "section",
  attributes: { class: "card" },
  children: [
    {
      tag: "button",
      dataAttributes: { id: "123456789" },
      properties: { textContent: "DOM-Generator" },
      eventListeners: { click: () => console.log("Hi!") },
    },
  ],
});