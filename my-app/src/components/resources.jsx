import React from "react";
import { useParams } from "react-router-dom";
import { resources } from "../assets/ressurser";

export default function Resources() {
  const { category } = useParams();
  const resourcesByCategory = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <div>
      <h1>Resources for {category.toUpperCase()}</h1>
      <ul>
        {resourcesByCategory.map((resource) => (
          <li key={resource.title}>
            <a href={resource.url} target="_blank" rel="noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}