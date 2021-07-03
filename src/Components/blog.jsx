import React from "react";
import "./ComponentsStyles/blog.css";
const Blog = () => {
  const img = [
    {
      id: "blog-img-1",
      img:
        "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "blog-img-2",
      img:
        "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    {
      id: "blog-img-3",
      img:
        "https://images.unsplash.com/photo-1509821361533-422c91a204f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJ1cmppJTIwa2hhbGlmYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <div className=" blog">
      <div className="inner-blog">
        <h1 className="blogger"> Blog </h1>{" "}
        <div className="row feature-row">
          {" "}
          {img.map((item) => (
            <div key={item.id} className="col-md-4  col-sm-6 columns">
              <img
                key={item.id}
                className={item.id}
                src={item.img}
                alt={item.id}
              />
            </div>
          ))}{" "}
        </div>{" "}
        <div className="button-div">
          <button className="feature-button">Explore All</button>
        </div>
      </div>
    </div>
  );
};
export default Blog;
