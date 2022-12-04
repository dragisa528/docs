import React, { type ReactNode } from "react";
import GitHubImageUrl from "@site/static/img/github.png";

export default function RepoLink({
  name,
  licence,
}: {
  name: ReactNode;
}): JSX.Element {
  const url = `https://github.com/eighteen73/${name}`;
  return (
    <a
      href={url}
      target="_blank"
      className="
        theme-admonition 
        theme-admonition-note 
        alert 
        alert--secondary
      "
      style={{
        display: "block",
        marginBottom: "2em",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div style={{ marginRight: "0.7em" }}>
          <img
            src={GitHubImageUrl}
            width="24"
            height="24"
            style={{
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            lineHeight: "1.2em",
          }}
        >
          <div
            style={{
              fontSize: "0.9em",
            }}
          >
            Download here:
          </div>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            github.com/eighteen73/{name}
          </div>
        </div>
        <div
          style={{
            color: "var(--ifm-color-secondary-darkest)",
            flexGrow: "1",
            fontSize: "0.9em",
            marginLeft: "1em",
            textAlign: "right",
          }}
        >
          Licence: {licence}
        </div>
      </div>
    </a>
  );
}
