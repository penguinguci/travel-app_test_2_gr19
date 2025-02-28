import React from "react";

const Breadcrumb = ({ links }) => {
  return (
    <nav style={{ fontSize: "14px", marginBottom: "20px" }}>
      {links.map((link, index) => (
        <span key={index}>
          {link.url ? (
            <a href={link.url} className="me-2 text-decoration-none text-black">
              {link.label}
            </a>
          ) : (
            <span className="text-pink">{link.label}</span>
          )}
          {index < links.length - 1 && (
            <i className="bi bi-chevron-right me-2" style={{ WebkitTextStrokeWidth: "thin" }}></i>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
