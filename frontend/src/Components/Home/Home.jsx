import React from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeleft">
        <Post
          postImage={
            "https://media.istockphoto.com/photos/image-of-open-antique-book-on-wooden-table-with-glitter-overlay-picture-id1354441996?b=1&k=20&m=1354441996&s=170667a&w=0&h=O4JDagXhIh1N13PNN6G4_L5KB5QPZryin7FOrZnzYvc="
          }
          ownerName={"Pradeep Thapa"}
          caption={"This is a sample post"}
        />
      </div>
      <div className="homeright">
        <User
          userId={"user.id"}
          name={"Pradeep"}
          avatar={
            "https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif"
          }
        />
      </div>
    </div>
  );
};

export default Home;
