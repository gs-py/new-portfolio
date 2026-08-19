const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    // Server-rendered from local data only; no user input reaches this string.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default JsonLd;
