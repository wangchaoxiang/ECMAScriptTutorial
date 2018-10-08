var CONFIG = {
  document_title: "ECMAScript 6入门",
  index: "README.md",
  sidebar_file: "SideBar.md",
  base_url: "",
};

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}