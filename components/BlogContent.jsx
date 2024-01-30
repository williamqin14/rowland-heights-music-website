import DOMPurify from "isomorphic-dompurify" 

export default function BlogContent({ htmlContent }) {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
}
