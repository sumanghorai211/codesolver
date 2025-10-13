const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
function sanitizeMarkdown(markdownContent) {
  const convertedHtml = marked.parse(markdownContent);
  const sanitizedHtml = sanitizeHtml(convertedHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
  });
  return sanitizedHtml;
}
module.exports = sanitizeMarkdown;
