import ListItem from "./ListItem";
import "./App.css";
import Post from "./Post";
export const NavBar = (item, description, icon) => {
  return (
    <div className="container">
      <ul className="navbar">
        <ListItem
          icon="💻"
          item="Help Center"
          description="Get all of your questions answered in our forums or contact
  support."
        />
        <ListItem
          icon="🔖"
          item="Guides"
          description="Learn how to maximize our platform to get the most out of it."
        />
        <ListItem
          icon="📆"
          item="Events"
          description="See what meet-ups and other events we might be planning
  near you."
        />
        <ListItem
          icon="🛡"
          item="Security"
          description="Understand how we take your privacy seriously."
        />

        <div className="posts">
          <ul className="recent_posts">
            <p>RECENT POSTS</p>

            <Post post="Boost your conversion rate" />
            <Post post="How to use search engine optimization to drive traffic to ..." />
            <Post post="Improve your customer experience" />
            <Post post="View all posts →" />
          </ul>
        </div>
      </ul>
    </div>
  );
};
