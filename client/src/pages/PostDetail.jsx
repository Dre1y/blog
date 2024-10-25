import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../assets/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          excepturi quos inventore expedita? Fugiat totam at voluptatibus
          deserunt praesentium quidem saepe consequuntur blanditiis magnam
          quaerat id iste, ipsa temporibus nisi dolores aliquam excepturi sit.
          Ducimus unde tempore placeat earum modi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          minima id delectus quam aliquam quis dolorem voluptatem at
          consequuntur distinctio voluptatibus? Sed inventore blanditiis qui
          quam repudiandae voluptatum at nobis tempore, molestias deserunt ea
          harum ullam magnam quo? Repellat ab quas deserunt ipsa sed dolores.
          Reiciendis, exercitationem. Minus blanditiis ullam ipsam? Quam hic
          eveniet eligendi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          reprehenderit magni et. Nam nihil provident vel expedita
          necessitatibus dolore earum ad. Libero odit ipsum fugiat accusantium.
          Cupiditate minima, explicabo ullam quos aliquid fuga ea nisi non!
          Perspiciatis repellat accusamus ullam illum soluta aspernatur nisi cum
          libero ea nulla hic expedita nemo temporibus inventore, nihil porro
          tempore voluptatum! Doloribus repudiandae dicta libero quae voluptate
          iure omnis, reprehenderit architecto magni, incidunt impedit et beatae
          iusto provident. Distinctio sequi quisquam esse, nulla quas illum,
          dolorum neque illo dolorem quam, corporis dicta asperiores quos
          nesciunt numquam atque impedit magnam. Vitae harum doloribus aliquam
          commodi assumenda fuga, laudantium culpa ratione, excepturi, neque
          repellat architecto aperiam cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptates animi quaerat facere libero illo aliquid dolor
          voluptatibus. Quaerat, accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aperiam cupiditate molestiae debitis, libero asperiores corporis
          voluptatum in nam eaque ab eius facere neque, temporibus pariatur non!
          Optio odit quisquam at laboriosam ipsam voluptate asperiores eum
          adipisci, corrupti et dolorem iure aliquam itaque exercitationem atque
          ducimus natus necessitatibus totam commodi alias. Id maxime
          dignissimos doloremque quidem, porro eum laborum. Nesciunt optio modi,
          voluptates sequi perspiciatis, magni, inventore enim quisquam
          distinctio laboriosam incidunt similique eos quod quia voluptas
          possimus dolores! Illum temporibus iure quod quis, cupiditate dolore
          doloribus quam! Sed fugit distinctio illo tempora? Reiciendis soluta
          ipsum aut assumenda distinctio praesentium consectetur, eligendi culpa
          vel eum sapiente obcaecati, laborum magni porro explicabo modi,
          voluptatibus adipisci fugiat. Labore quaerat quam atque possimus
          mollitia sunt iste voluptate reprehenderit neque voluptas aperiam nam
          vel temporibus incidunt quos optio, dolorem, adipisci nostrum ab modi
          dolor eligendi omnis. Incidunt veritatis totam doloribus minus, ipsa
          laudantium similique voluptatem quas odio non unde temporibus,
          aspernatur culpa fugiat molestias vel possimus earum, est hic. Tempore
          est, voluptatem quasi error reprehenderit doloremque eaque nulla
          perferendis pariatur placeat voluptatum, ea, libero accusantium? Eaque
          minima dolor pariatur velit et nam reprehenderit! Ut qui ratione illo
          ex voluptas quia fuga molestias nisi magni.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
