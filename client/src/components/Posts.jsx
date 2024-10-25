import React, { useState } from "react";
import PostItem from "../components/PostItem";

import Thumbnail1 from "../assets/blog1.jpg";
import Thumbnail2 from "../assets/blog2.jpg";
import Thumbnail3 from "../assets/blog3.jpg";
import Thumbnail4 from "../assets/blog4.jpg";

const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is a test title for the first post",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quidem vitae consectetur. Impedit itaque placeat ipsam libero maxime repellendus cupiditate veniam deleniti, tenetur pariatur iste dolor accusamus fugit eligendi perferendis. Earum expedita facilis maiores doloribus commodi praesentium, placeat tempora dolores libero, eligendi, quibusdam odit officia unde quas explicabo sint nam ab cupiditate consectetur soluta sapiente eaque autem tenetur. Ab iusto optio cumque dicta exercitationem, alias fuga excepturi, dolore at temporibus blanditiis magnam magni fugiat dolorum minima deleniti tenetur quaerat ipsam amet! Minus ratione, quasi nisi praesentium iure eum perferendis quas consequatur modi id ex quo quia aliquam, asperiores numquam nobis odit reiciendis, architecto vero necessitatibus doloremque est esse harum nam? A impedit quo error eum consectetur facilis tenetur? Explicabo perspiciatis, labore, iure unde qui accusamus enim quia, debitis nihil laboriosam fugiat soluta ducimus voluptates temporibus? Laboriosam tempora, dolore, eum voluptatibus repellendus libero aliquam molestias neque nisi pariatur commodi quo consectetur nostrum laborum, saepe optio et atque molestiae ex sint? Quis ipsum perspiciatis minima, possimus reprehenderit sequi corporis qui harum eaque nihil labore sit incidunt ex quibusdam exercitationem veritatis modi, molestiae hic? Corrupti ratione magnam fugiat rem, temporibus molestias. Eaque sunt temporibus, tempore quam perferendis laboriosam recusandae! Autem eveniet eligendi, dolores nam recusandae, sit atque eaque maxime quidem illo expedita voluptates deserunt nemo error. Dolor libero maxime fuga voluptate necessitatibus placeat, veniam itaque debitis deserunt nisi repellat rerum, quo quasi ducimus ipsam. Rerum, omnis? Culpa ipsum accusantium delectus adipisci numquam quam, laborum excepturi facere. Voluptatem quos odit a molestias tenetur aliquam nemo ad impedit est et, repellendus architecto adipisci fugit nam laboriosam reprehenderit optio voluptate repudiandae officiis magni nulla sequi. Facere provident consequatur cumque est aspernatur? Illo rem ea incidunt laborum maxime dolore facilis amet iusto quisquam, a beatae, facere error numquam blanditiis inventore molestiae placeat alias eaque, quidem ut. Ipsa.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "Blog Post 2",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum distinctio maxime sit ex ad et cumque suscipit mollitia delectus deleniti! Esse at similique modi architecto labore magni maxime non fugiat.",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "Blog Post 3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum distinctio maxime sit ex ad et cumque suscipit mollitia delectus deleniti! Esse at similique modi architecto labore magni maxime non fugiat.",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "Blog Post 4",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum distinctio maxime sit ex ad et cumque suscipit mollitia delectus deleniti! Esse at similique modi architecto labore magni maxime non fugiat.",
    authorID: 11,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
