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
      <h1>{category.toUpperCase()}</h1>
      <ul>
        {resourcesByCategory.map((resource) => (            ///Denne koden er bygd på fra en kode gitt av ChatGpt 3.5. Link til chaten er her https://chat.openai.com/share/0fd5c77e-6183-493f-8d75-856a5d763cb2
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