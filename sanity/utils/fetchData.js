import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            url,
            content,
            
        }`
  );
}

export async function getExperiences() {
  return client.fetch(
    groq`*[_type == "experience"]{
                _id,
                _createdAt,
                company,
                position,
                date,
                url,
                content,
               "image": image.asset->url    
            }`
  );
}
